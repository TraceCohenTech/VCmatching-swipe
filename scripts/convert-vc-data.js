// Convert Big-VC-Database to our Fund format
const fs = require('fs');

// Read the raw data
const rawData = fs.readFileSync('./temp_vc_data.js', 'utf8');

// Extract the array from "const vcData = [...]"
const arrayMatch = rawData.match(/const vcData = (\[[\s\S]*\]);?/);
if (!arrayMatch) {
  console.error('Could not parse vcData');
  process.exit(1);
}

// Eval the array (safe since it's just data)
const vcData = eval(arrayMatch[1]);

console.log(`Found ${vcData.length} VCs in database`);

// Map regions
const regionMap = {
  'USA': 'US',
  'Europe': 'Europe',
  'Israel': 'Israel',
  'Asia': 'Asia',
  'Global': 'Global',
};

// Map stages to our format
const stageMap = {
  'Pre-Seed': 'Pre-seed',
  'Seed': 'Seed',
  'Series A': 'Series A',
  'Series B': 'Growth',
  'Series C': 'Growth',
  'Growth': 'Growth',
  'Angel': 'Pre-seed',
};

// Map sectors to our format
const sectorMap = {
  'AI': 'SaaS',
  'Enterprise': 'Enterprise',
  'SaaS': 'SaaS',
  'Fintech': 'Fintech',
  'Consumer': 'Consumer',
  'Healthcare': 'Health',
  'Biotech': 'Health',
  'Climate': 'Climate',
  'Cleantech': 'Climate',
  'Crypto': 'Crypto',
  'Web3': 'Crypto',
  'Cybersecurity': 'Cyber',
  'Security': 'Security',
  'Developer': 'Developer Tools',
  'DevTools': 'Developer Tools',
  'Marketplaces': 'Marketplace',
  'Media': 'Media',
  'Deeptech': 'Enterprise',
  'Defense': 'Enterprise',
  'Industrial': 'Enterprise',
  'Logistics': 'Enterprise',
  'Foodtech': 'Consumer',
  'Gaming': 'Consumer',
  'Robotics': 'Enterprise',
  'Technology': 'Generalist',
  'Real Estate': 'Fintech',
  'Proptech': 'Fintech',
  'Edtech': 'Consumer',
  'Space': 'Enterprise',
};

// Parse AUM to determine fund size bucket
function parseAUM(aum) {
  if (!aum || aum === '') return null;

  // Remove $ and parse
  const clean = aum.replace(/[$,]/g, '').trim();

  // Handle billions
  if (clean.includes('B')) {
    const num = parseFloat(clean.replace('B', ''));
    return num * 1000; // Convert to millions
  }

  // Handle millions
  if (clean.includes('M')) {
    const num = parseFloat(clean.replace('M', ''));
    return num;
  }

  // Try parsing as number
  const num = parseFloat(clean);
  if (!isNaN(num)) {
    return num;
  }

  return null;
}

// Determine fund size bucket
function getFundSize(aumMil) {
  if (aumMil === null) return '$100M - $200M'; // Default
  if (aumMil < 50) return '< $50M';
  if (aumMil < 100) return '$50M - $100M';
  if (aumMil < 200) return '$100M - $200M';
  if (aumMil < 500) return '$200M - $500M';
  if (aumMil < 1000) return '$500M - $1B';
  return '> $1B';
}

// Determine tier based on AUM
function getTier(aumMil) {
  if (aumMil === null) return 'established';
  if (aumMil < 50) return 'emerging';
  if (aumMil < 200) return 'established';
  if (aumMil < 1000) return 'top-tier';
  return 'elite';
}

// Generate slug ID from name
function generateId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

// Convert VC to our Fund format
function convertVC(vc) {
  const aumMil = parseAUM(vc.aum);

  // Map stages
  const stages = [...new Set(
    (vc.stages || [])
      .map(s => stageMap[s])
      .filter(Boolean)
  )];
  if (stages.length === 0) stages.push('Seed');

  // Map sectors
  const sectors = [...new Set(
    (vc.sectors || [])
      .map(s => {
        // Try direct match first
        if (sectorMap[s]) return sectorMap[s];
        // Try partial match
        for (const [key, val] of Object.entries(sectorMap)) {
          if (s.includes(key)) return val;
        }
        return 'Generalist';
      })
      .filter(Boolean)
  )];
  if (sectors.length === 0) sectors.push('Generalist');

  // Map geography
  let geography = regionMap[vc.region] || 'US';

  return {
    id: generateId(vc.name),
    name: vc.name,
    firm: vc.name,
    stage: stages,
    sectors: sectors.slice(0, 5), // Limit to 5 sectors
    geography: geography,
    fundSize: getFundSize(aumMil),
    checkSize: vc.check_size || '$1M - $5M',
    fundNumber: 'Fund',
    gps: [{ name: 'Managing Partner', background: vc.location || 'Venture Capital' }],
    thesis: `Investing in ${stages.join(', ')} stage ${sectors.slice(0, 2).join(' and ')} companies`,
    notablePortfolio: [],
    lpFit: ['Family Office', 'Fund of Funds'],
    tier: getTier(aumMil),
  };
}

// Convert all VCs
const funds = vcData.map(convertVC);

// Generate TypeScript output
const output = `export interface Fund {
  id: string;
  name: string;
  firm: string;
  logo?: string;
  stage: string[];
  sectors: string[];
  geography: string;
  fundSize: string;
  checkSize: string;
  fundNumber: string;
  gps: { name: string; background: string }[];
  thesis: string;
  notablePortfolio: string[];
  lpFit: string[];
  tier: "emerging" | "established" | "top-tier" | "elite";
}

export const FUNDS: Fund[] = ${JSON.stringify(funds, null, 2)};

export const STAGES = ["Pre-seed", "Seed", "Series A", "Growth"];
export const SECTORS = [
  "SaaS",
  "Enterprise",
  "Fintech",
  "Consumer",
  "Health",
  "Climate",
  "Developer Tools",
  "Marketplace",
  "Media",
  "Security",
  "Crypto",
  "Cyber",
  "Generalist",
];
export const GEOGRAPHIES = ["US", "Europe", "Israel", "Asia", "Global"];
export const LP_TYPES = [
  "Family Office",
  "Fund of Funds",
  "Endowment",
  "Pension",
  "Foundation",
  "HNW Individual",
];
export const FUND_SIZES = [
  "< $50M",
  "$50M - $100M",
  "$100M - $200M",
  "$200M - $500M",
  "$500M - $1B",
  "> $1B",
];
`;

// Write to funds.ts
fs.writeFileSync('./app/data/funds.ts', output);

console.log(`Converted ${funds.length} VCs to funds.ts`);

// Stats
const bySize = {};
const byTier = {};
const byGeo = {};
funds.forEach(f => {
  bySize[f.fundSize] = (bySize[f.fundSize] || 0) + 1;
  byTier[f.tier] = (byTier[f.tier] || 0) + 1;
  byGeo[f.geography] = (byGeo[f.geography] || 0) + 1;
});

console.log('\nBy Fund Size:', bySize);
console.log('By Tier:', byTier);
console.log('By Geography:', byGeo);
