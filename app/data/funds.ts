export interface Fund {
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

export const FUNDS: Fund[] = [
  {
    "id": "406-ventures",
    "name": ".406 Ventures",
    "firm": ".406 Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "SaaS",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "01-advisors",
    "name": "01 Advisors",
    "firm": "01 Advisors",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "10d",
    "name": "10D",
    "firm": "10D",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "112-capital",
    "name": "11.2 Capital",
    "firm": "11.2 Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "1121vc",
    "name": "1121.VC",
    "firm": "1121.VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "1212-ventures",
    "name": "12/12 Ventures",
    "firm": "12/12 Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Denver, CO"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "14w",
    "name": "14W",
    "firm": "14W",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Media",
      "Marketplace"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "1517-fund",
    "name": "1517 Fund",
    "firm": "1517 Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $400K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "1843-capital",
    "name": "1843 Capital",
    "firm": "1843 Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Fintech",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "1955-capital",
    "name": "1955 Capital",
    "firm": "1955 Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "1984-ventures",
    "name": "1984 Ventures",
    "firm": "1984 Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "1kx",
    "name": "1kx",
    "firm": "1kx",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "Europe",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "London, UK"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "1up-ventures",
    "name": "1Up Ventures",
    "firm": "1Up Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "2048-ventures",
    "name": "2048 Ventures",
    "firm": "2048 Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Health",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "20vc-fund",
    "name": "20VC Fund",
    "firm": "20VC Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Europe",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "London, UK"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "25m-health",
    "name": "25M Health",
    "firm": "25M Health",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "32-ventures",
    "name": "32 Ventures",
    "firm": "32 Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "37-angels",
    "name": "37 Angels",
    "firm": "37 Angels",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "3cc-third-culture",
    "name": "3CC (Third Culture)",
    "firm": "3CC (Third Culture)",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "3l-capital",
    "name": "3L Capital",
    "firm": "3L Capital",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "3lines-venture-capital",
    "name": "3Lines Venture Capital",
    "firm": "3Lines Venture Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "4dx-ventures",
    "name": "4DX Ventures",
    "firm": "4DX Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "500-global",
    "name": "500 Global",
    "firm": "500 Global",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$100K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "5am-ventures",
    "name": "5AM Ventures",
    "firm": "5AM Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "645-ventures",
    "name": "645 Ventures",
    "firm": "645 Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $6M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "6mv-6th-man",
    "name": "6MV (6th Man)",
    "firm": "6MV (6th Man)",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Crypto and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "7percent-ventures",
    "name": "7percent Ventures",
    "firm": "7percent Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "7wire-ventures",
    "name": "7wire Ventures",
    "firm": "7wire Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Health and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "81-collection",
    "name": "81 Collection",
    "firm": "81 Collection",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Chicago, IL"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "83north",
    "name": "83North",
    "firm": "83North",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "8vc",
    "name": "8VC",
    "firm": "8VC",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Austin, TX"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "9yards-capital",
    "name": "9Yards Capital",
    "firm": "9Yards Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "a16z-crypto",
    "name": "a16z Crypto",
    "firm": "a16z Crypto",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "aza-ventures",
    "name": "a]za Ventures",
    "firm": "a]za Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Chicago, IL"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "able-partners",
    "name": "Able Partners",
    "firm": "Able Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "abstract-ventures",
    "name": "Abstract Ventures",
    "firm": "Abstract Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "accel",
    "name": "Accel",
    "firm": "Accel",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Consumer",
      "Fintech",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "accel-foods",
    "name": "Accel Foods",
    "firm": "Accel Foods",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "accomplice",
    "name": "Accomplice",
    "firm": "Accomplice",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "acquired-wisdom-fund",
    "name": "Acquired Wisdom Fund",
    "firm": "Acquired Wisdom Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "acrew-capital",
    "name": "Acrew Capital",
    "firm": "Acrew Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "act-one-ventures",
    "name": "Act One Ventures",
    "firm": "Act One Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$300K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "activant-capital",
    "name": "Activant Capital",
    "firm": "Activant Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "activate-venture-partners-fka-miletone-venture-par",
    "name": "Activate Venture Partners (FKA Miletone Venture Partners)",
    "firm": "Activate Venture Partners (FKA Miletone Venture Partners)",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "active-capital",
    "name": "Active Capital",
    "firm": "Active Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "acumen",
    "name": "Acumen",
    "firm": "Acumen",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ada-yeos-angel-fund",
    "name": "Ada Yeo's Angel Fund",
    "firm": "Ada Yeo's Angel Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Crypto",
      "SaaS",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Crypto and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "addition",
    "name": "Addition",
    "firm": "Addition",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "adjacent",
    "name": "Adjacent",
    "firm": "Adjacent",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Marketplace"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Marketplace companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "advance-venture-partners",
    "name": "Advance Venture Partners",
    "firm": "Advance Venture Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "advancit-capital",
    "name": "Advancit Capital",
    "firm": "Advancit Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "afore-capital",
    "name": "Afore Capital",
    "firm": "Afore Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "ai-fund",
    "name": "AI Fund",
    "firm": "AI Fund",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "air-street-capital",
    "name": "Air Street Capital",
    "firm": "Air Street Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "airbus-ventures",
    "name": "Airbus Ventures",
    "firm": "Airbus Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "aleph",
    "name": "Aleph",
    "firm": "Aleph",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$500K-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "alleycorp",
    "name": "AlleyCorp",
    "firm": "AlleyCorp",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "alliance-ventures-renaultnissanmitsubishi",
    "name": "Alliance Ventures (Renault-Nissan-Mitsubishi)",
    "firm": "Alliance Ventures (Renault-Nissan-Mitsubishi)",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "alon-medtech-ventures",
    "name": "Alon Medtech Ventures",
    "firm": "Alon Medtech Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "alpaca-vc",
    "name": "Alpaca VC",
    "firm": "Alpaca VC",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "alpha-venture-partners",
    "name": "Alpha Venture Partners",
    "firm": "Alpha Venture Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "alphaprime-ventures",
    "name": "Alphaprime Ventures",
    "firm": "Alphaprime Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "alpine-meridian-ventures",
    "name": "Alpine Meridian Ventures",
    "firm": "Alpine Meridian Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Enterprise",
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "alrai-capital",
    "name": "Alrai Capital",
    "firm": "Alrai Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "alt-capital",
    "name": "Alt Capital",
    "firm": "Alt Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "altair-capital",
    "name": "AltaIR Capital",
    "firm": "AltaIR Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "american-express-ventures",
    "name": "American Express Ventures",
    "firm": "American Express Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "amiti-ventures",
    "name": "Amiti Ventures",
    "firm": "Amiti Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Generalist",
      "Health",
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "amoon",
    "name": "aMoon",
    "firm": "aMoon",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Ra'anana, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "amplify-partners",
    "name": "Amplify Partners",
    "firm": "Amplify Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Developer Tools",
      "Enterprise",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Developer Tools companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "andreessen-horowitz",
    "name": "Andreessen Horowitz",
    "firm": "Andreessen Horowitz",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Fintech",
      "Crypto",
      "Enterprise",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "animal-capital",
    "name": "Animal Capital",
    "firm": "Animal Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "anthemis-group",
    "name": "Anthemis Group",
    "firm": "Anthemis Group",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "antler",
    "name": "Antler",
    "firm": "Antler",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "Asia",
    "fundSize": "> $1B",
    "checkSize": "$100K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Singapore"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "arc-angels",
    "name": "ARC Angels",
    "firm": "ARC Angels",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "arch-venture-partners",
    "name": "ARCH Venture Partners",
    "firm": "ARCH Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Chicago, IL"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "archangel-ventures",
    "name": "Archangel Ventures",
    "firm": "Archangel Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "Asia",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Australia"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "archer-gray",
    "name": "Archer Gray",
    "firm": "Archer Gray",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "archetype",
    "name": "Archetype",
    "firm": "Archetype",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "argentum-group",
    "name": "Argentum Group",
    "firm": "Argentum Group",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "armory-square-ventures",
    "name": "Armory Square Ventures",
    "firm": "Armory Square Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "array-ventures",
    "name": "Array Ventures",
    "firm": "Array Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$1.2M-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "artis-ventures",
    "name": "Artis Ventures",
    "firm": "Artis Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "atman-capital",
    "name": "Atman Capital",
    "firm": "Atman Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "atomico",
    "name": "Atomico",
    "firm": "Atomico",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Europe",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "London, UK"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "autonomy-ventures",
    "name": "Autonomy Ventures",
    "firm": "Autonomy Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "awesome-people-ventures",
    "name": "Awesome People Ventures",
    "firm": "Awesome People Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "awz-ventures",
    "name": "Awz Ventures",
    "firm": "Awz Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Cyber",
      "SaaS",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A, Growth stage Cyber and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "b-capital-group",
    "name": "B Capital Group",
    "firm": "B Capital Group",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $60M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "backstage-capital",
    "name": "Backstage Capital",
    "firm": "Backstage Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$50K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "bain-capital-ventures",
    "name": "Bain Capital Ventures",
    "firm": "Bain Capital Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "SaaS",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "balderton-capital",
    "name": "Balderton Capital",
    "firm": "Balderton Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Europe",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "London, UK"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "banana-capital",
    "name": "Banana Capital",
    "firm": "Banana Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Ann Arbor, MI"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "base-case-capital",
    "name": "Base Case Capital",
    "firm": "Base Case Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Developer Tools"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Developer Tools companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "base10-partners",
    "name": "Base10 Partners",
    "firm": "Base10 Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "baseline-ventures",
    "name": "Baseline Ventures",
    "firm": "Baseline Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "battery-ventures",
    "name": "Battery Ventures",
    "firm": "Battery Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "bbg-ventures",
    "name": "BBG Ventures",
    "firm": "BBG Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "bdmi",
    "name": "BDMI",
    "firm": "BDMI",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "behind-genius-ventures",
    "name": "Behind Genius Ventures",
    "firm": "Behind Genius Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Consumer",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$400K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Diego, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "belle-capital",
    "name": "Belle Capital",
    "firm": "Belle Capital",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "Climate",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "benchmark",
    "name": "Benchmark",
    "firm": "Benchmark",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "SaaS",
      "Marketplace",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "benhamou-global-ventures",
    "name": "Benhamou Global Ventures",
    "firm": "Benhamou Global Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "bessemer-venture-partners",
    "name": "Bessemer Venture Partners",
    "firm": "Bessemer Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Generalist",
      "Cyber",
      "Health",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "beta-bridge-capital",
    "name": "Beta Bridge Capital",
    "firm": "Beta Bridge Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "betaspring",
    "name": "BetaSpring",
    "firm": "BetaSpring",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "betaworks",
    "name": "Betaworks",
    "firm": "Betaworks",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "better-capital",
    "name": "Better Capital",
    "firm": "Better Capital",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Fintech",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "big-sky-partners",
    "name": "Big Sky Partners",
    "firm": "Big Sky Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "bionic-solution",
    "name": "Bionic Solution",
    "firm": "Bionic Solution",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "bitkraft",
    "name": "BITKRAFT",
    "firm": "BITKRAFT",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Crypto",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Crypto and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "bitkraft-ventures",
    "name": "BITKRAFT Ventures",
    "firm": "BITKRAFT Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Generalist",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "blank-ventures",
    "name": "Blank Ventures",
    "firm": "Blank Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "bleu-capital",
    "name": "Bleu Capital",
    "firm": "Bleu Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Consumer and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "blockchain-capital",
    "name": "Blockchain Capital",
    "firm": "Blockchain Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "bloomberg-beta",
    "name": "Bloomberg Beta",
    "firm": "Bloomberg Beta",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "blue-angel-partners",
    "name": "Blue Angel Partners",
    "firm": "Blue Angel Partners",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Cyber",
      "Climate",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Cyber and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "blue-cloud-ventures",
    "name": "Blue Cloud Ventures",
    "firm": "Blue Cloud Ventures",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "blue-seed-collective",
    "name": "Blue {Seed} Collective",
    "firm": "Blue {Seed} Collective",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "blueprint-health",
    "name": "Blueprint Health",
    "firm": "Blueprint Health",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "blumberg-capital",
    "name": "Blumberg Capital",
    "firm": "Blumberg Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "bmw-iventures",
    "name": "BMW iVentures",
    "firm": "BMW iVentures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "boldstart-ventures",
    "name": "Boldstart Ventures",
    "firm": "Boldstart Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Developer Tools",
      "SaaS",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Developer Tools companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "bonfire-ventures",
    "name": "Bonfire Ventures",
    "firm": "Bonfire Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M -$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "boost-vc",
    "name": "Boost VC",
    "firm": "Boost VC",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "bowery-capital",
    "name": "Bowery Capital",
    "firm": "Bowery Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "boxgroup",
    "name": "BoxGroup",
    "firm": "BoxGroup",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "brainchild-holdings",
    "name": "Brainchild Holdings",
    "firm": "Brainchild Holdings",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "brand-foundry",
    "name": "Brand Foundry",
    "firm": "Brand Foundry",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "breakthrough-energy",
    "name": "Breakthrough Energy",
    "firm": "Breakthrough Energy",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "breakthrough-energy-ventures",
    "name": "Breakthrough Energy Ventures",
    "firm": "Breakthrough Energy Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Climate",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Kirkland, WA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Climate and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "brickyard",
    "name": "Brickyard",
    "firm": "Brickyard",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Chattanooga, TN"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "brooklyn-bridge-ventures",
    "name": "Brooklyn Bridge Ventures",
    "firm": "Brooklyn Bridge Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "buckley-ventures",
    "name": "Buckley Ventures",
    "firm": "Buckley Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cake-ventures",
    "name": "Cake Ventures",
    "firm": "Cake Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K-$750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "camber-creek",
    "name": "Camber Creek",
    "firm": "Camber Creek",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Washington, DC"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "canaan-partners",
    "name": "Canaan Partners",
    "firm": "Canaan Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "canary-ventures",
    "name": "Canary Ventures",
    "firm": "Canary Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cantos-vc",
    "name": "Cantos VC",
    "firm": "Cantos VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Climate",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "capital-a-partners",
    "name": "Capital A Partners",
    "firm": "Capital A Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "capital-one-growth-ventures",
    "name": "Capital One Growth Ventures",
    "firm": "Capital One Growth Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "capitalize-vc",
    "name": "Capitalize VC",
    "firm": "Capitalize VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "capitalx",
    "name": "CapitalX",
    "firm": "CapitalX",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "capri-ventures",
    "name": "Capri Ventures",
    "firm": "Capri Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "carbon-silicon-ventures",
    "name": "Carbon Silicon Ventures",
    "firm": "Carbon Silicon Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cardumen-capital",
    "name": "Cardumen Capital",
    "firm": "Cardumen Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Generalist",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "caruso-ventures",
    "name": "Caruso Ventures",
    "firm": "Caruso Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "castle-is",
    "name": "Castle Is",
    "firm": "Castle Is",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "catalyst-investors",
    "name": "Catalyst Investors",
    "firm": "Catalyst Investors",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cathay-innovation",
    "name": "Cathay Innovation",
    "firm": "Cathay Innovation",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $40M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cathexis-ventures",
    "name": "Cathexis Ventures",
    "firm": "Cathexis Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cavu-venture-partners",
    "name": "CAVU Venture Partners",
    "firm": "CAVU Venture Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "cedar-fund",
    "name": "Cedar Fund",
    "firm": "Cedar Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "celest",
    "name": "Celest",
    "firm": "Celest",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "centre-street",
    "name": "Centre Street",
    "firm": "Centre Street",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cervin-ventures",
    "name": "Cervin Ventures",
    "firm": "Cervin Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$6M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "chainforest",
    "name": "Chainforest",
    "firm": "Chainforest",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "champel-capital",
    "name": "Champel Capital",
    "firm": "Champel Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Fintech"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "chapter-one",
    "name": "Chapter One",
    "firm": "Chapter One",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$100K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "chapter-one-ventures",
    "name": "Chapter One Ventures",
    "firm": "Chapter One Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5K - $200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "charge-ventures",
    "name": "Charge Ventures",
    "firm": "Charge Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "chartline",
    "name": "Chartline",
    "firm": "Chartline",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "chingon",
    "name": "Chingon",
    "firm": "Chingon",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "chingona-ventures",
    "name": "Chingona Ventures",
    "firm": "Chingona Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$250K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Chicago, IL"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "circleup",
    "name": "CircleUp",
    "firm": "CircleUp",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "citi-ventures",
    "name": "Citi Ventures",
    "firm": "Citi Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "city-light-capital",
    "name": "City Light Capital",
    "firm": "City Light Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "civilization-ventures",
    "name": "Civilization Ventures",
    "firm": "Civilization Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "claltech",
    "name": "Claltech",
    "firm": "Claltech",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Growth stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "clean-energy-ventures",
    "name": "Clean Energy Ventures",
    "firm": "Clean Energy Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Climate",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Climate and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "cleo-capital",
    "name": "Cleo Capital",
    "firm": "Cleo Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "climactic",
    "name": "Climactic",
    "firm": "Climactic",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1.5M - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "climate-capital",
    "name": "Climate Capital",
    "firm": "Climate Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "climentum-capital",
    "name": "Climentum Capital",
    "firm": "Climentum Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Climate"
    ],
    "geography": "Europe",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Europe"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "clocktower",
    "name": "Clocktower",
    "firm": "Clocktower",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "closed-loop",
    "name": "Closed Loop",
    "firm": "Closed Loop",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "closed-loop-capital",
    "name": "Closed Loop Capital",
    "firm": "Closed Loop Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coalition",
    "name": "Coalition",
    "firm": "Coalition",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coalition-operators",
    "name": "Coalition Operators",
    "firm": "Coalition Operators",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coatue-management",
    "name": "Coatue Management",
    "firm": "Coatue Management",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage SaaS and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "cocoa-ventures",
    "name": "Cocoa Ventures",
    "firm": "Cocoa Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Enterprise"
    ],
    "geography": "Europe",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Europe"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coefficient-capital",
    "name": "Coefficient Capital",
    "firm": "Coefficient Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coelius-capital",
    "name": "Coelius Capital",
    "firm": "Coelius Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coinbase-ventures",
    "name": "Coinbase Ventures",
    "firm": "Coinbase Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coinfund",
    "name": "CoinFund",
    "firm": "CoinFund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$6M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "collab-capital",
    "name": "Collab Capital",
    "firm": "Collab Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$100K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Atlanta, GA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "collaborative-fund",
    "name": "Collaborative Fund",
    "firm": "Collaborative Fund",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "colle-capital",
    "name": "Colle Capital",
    "firm": "Colle Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "colle-capital-partners",
    "name": "Colle Capital Partners",
    "firm": "Colle Capital Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "collide-capital",
    "name": "Collide Capital",
    "firm": "Collide Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "columbia-technology-ventures",
    "name": "Columbia Technology Ventures",
    "firm": "Columbia Technology Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "comcast-ventures",
    "name": "Comcast Ventures",
    "firm": "Comcast Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "commerce-ventures",
    "name": "Commerce Ventures",
    "firm": "Commerce Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "commonweal-ventures",
    "name": "Commonweal Ventures",
    "firm": "Commonweal Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "company-ventures",
    "name": "Company Ventures",
    "firm": "Company Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "compound",
    "name": "Compound",
    "firm": "Compound",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "compound-ventures-fka-metamorphic-ventures",
    "name": "Compound Ventures (FKA Metamorphic Ventures)",
    "firm": "Compound Ventures (FKA Metamorphic Ventures)",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "concrete-rose-capital",
    "name": "Concrete Rose Capital",
    "firm": "Concrete Rose Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "congruent-ventures",
    "name": "Congruent Ventures",
    "firm": "Congruent Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Climate",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Climate and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "connectivity-capital-partners",
    "name": "Connectivity Capital Partners",
    "firm": "Connectivity Capital Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "conscience",
    "name": "Conscience",
    "firm": "Conscience",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "conscience-vc",
    "name": "Conscience VC",
    "firm": "Conscience VC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "construct-capital",
    "name": "Construct Capital",
    "firm": "Construct Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M - $6M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "consumer-ventures",
    "name": "Consumer Ventures",
    "firm": "Consumer Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "contour-venture",
    "name": "Contour Venture",
    "firm": "Contour Venture",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "contour-venture-partners",
    "name": "Contour Venture Partners",
    "firm": "Contour Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Enterprise",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "contrarian-thinking",
    "name": "Contrarian Thinking",
    "firm": "Contrarian Thinking",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K-$200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Austin, TX"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "contrary-capital",
    "name": "Contrary Capital",
    "firm": "Contrary Capital",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "conversion-capital",
    "name": "Conversion Capital",
    "firm": "Conversion Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "conviction",
    "name": "Conviction",
    "firm": "Conviction",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "corigin-ventures",
    "name": "Corigin Ventures",
    "firm": "Corigin Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Consumer",
      "SaaS",
      "Marketplace"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cornerstone-venture-partners",
    "name": "Cornerstone Venture Partners",
    "firm": "Cornerstone Venture Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Enterprise",
      "Generalist",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "correlation-ventures",
    "name": "Correlation Ventures",
    "firm": "Correlation Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$100K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Diego, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "cortical-ventures",
    "name": "Cortical Ventures",
    "firm": "Cortical Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "corundum-neuroscience",
    "name": "Corundum Neuroscience",
    "firm": "Corundum Neuroscience",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cosmic-venture",
    "name": "Cosmic Venture",
    "firm": "Cosmic Venture",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "costano",
    "name": "Costano",
    "firm": "Costano",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "costanoa-ventures",
    "name": "Costanoa Ventures",
    "firm": "Costanoa Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "countdown-capital",
    "name": "Countdown Capital",
    "firm": "Countdown Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K-$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Miami, FL"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "courtside-ventures",
    "name": "Courtside Ventures",
    "firm": "Courtside Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Media",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Media and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "coventure",
    "name": "CoVenture",
    "firm": "CoVenture",
    "stage": [
      "Pre-seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cowboy-ventures",
    "name": "Cowboy Ventures",
    "firm": "Cowboy Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "craft-ventures",
    "name": "Craft Ventures",
    "firm": "Craft Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "creandum",
    "name": "Creandum",
    "firm": "Creandum",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "Europe",
    "fundSize": "> $1B",
    "checkSize": "$500K-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Stockholm, Sweden"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "creative-destruction",
    "name": "Creative Destruction",
    "firm": "Creative Destruction",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "creative-ventures",
    "name": "Creative Ventures",
    "firm": "Creative Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "crescendo-venture-partners",
    "name": "Crescendo Venture Partners",
    "firm": "Crescendo Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "crew-capital",
    "name": "Crew Capital",
    "firm": "Crew Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "crossbeam-venture",
    "name": "Crossbeam Venture",
    "firm": "Crossbeam Venture",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "crosscut-ventures",
    "name": "Crosscut Ventures",
    "firm": "Crosscut Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "crosslink-capital",
    "name": "CrossLink Capital",
    "firm": "CrossLink Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "crossover-vc",
    "name": "Crossover VC",
    "firm": "Crossover VC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "crush-ventures",
    "name": "Crush Ventures",
    "firm": "Crush Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "crv",
    "name": "CRV",
    "firm": "CRV",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "cryptooracle",
    "name": "CryptoOracle",
    "firm": "CryptoOracle",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cue-ball-capital",
    "name": "Cue Ball Capital",
    "firm": "Cue Ball Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cultivi",
    "name": "Cultivi",
    "firm": "Cultivi",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cybernetix-ventures",
    "name": "Cybernetix Ventures",
    "firm": "Cybernetix Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$60K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "cyberstarts",
    "name": "Cyberstarts",
    "firm": "Cyberstarts",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "d1-capital",
    "name": "D1 Capital",
    "firm": "D1 Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "d1-capital-partners",
    "name": "D1 Capital Partners",
    "firm": "D1 Capital Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$25M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "dash-fund",
    "name": "Dash Fund",
    "firm": "Dash Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "data-collective-dcvc",
    "name": "Data Collective DCVC",
    "firm": "Data Collective DCVC",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Climate",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "day-one-ventures",
    "name": "Day One Ventures",
    "firm": "Day One Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dcg-expeditionsbacked",
    "name": "DCG ExpeditionsBacked",
    "firm": "DCG ExpeditionsBacked",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dcvc",
    "name": "DCVC",
    "firm": "DCVC",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Climate",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "debut-capital",
    "name": "Debut Capital",
    "firm": "Debut Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "decent-capital",
    "name": "Decent Capital",
    "firm": "Decent Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "decibel",
    "name": "Decibel",
    "firm": "Decibel",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "deciens-capital",
    "name": "Deciens Capital",
    "firm": "Deciens Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "decisive-point",
    "name": "Decisive Point",
    "firm": "Decisive Point",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "deep-insight",
    "name": "Deep Insight",
    "firm": "Deep Insight",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist",
      "Health",
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "define-ventures",
    "name": "Define Ventures",
    "firm": "Define Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $6M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "defyvc",
    "name": "Defy.vc",
    "firm": "Defy.vc",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dfj",
    "name": "DFJ",
    "firm": "DFJ",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "differential-ventures",
    "name": "Differential Ventures",
    "firm": "Differential Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "digital-currency-group",
    "name": "Digital Currency Group",
    "firm": "Digital Currency Group",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "digitx",
    "name": "DigiTx",
    "firm": "DigiTx",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dimension",
    "name": "Dimension",
    "firm": "Dimension",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "divergent-capital",
    "name": "Divergent Capital",
    "firm": "Divergent Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "diversecity-ventures",
    "name": "DiverseCity Ventures",
    "firm": "DiverseCity Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "do-venture-partners",
    "name": "DO Venture Partners",
    "firm": "DO Venture Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto",
      "Fintech",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K-$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dorm-room-fund-nyc",
    "name": "Dorm Room Fund NYC",
    "firm": "Dorm Room Fund NYC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dragoneer-investment-group",
    "name": "Dragoneer Investment Group",
    "firm": "Dragoneer Investment Group",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$25M-$200M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "dragonfly-capital",
    "name": "Dragonfly Capital",
    "firm": "Dragonfly Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "draper-associates",
    "name": "Draper Associates",
    "firm": "Draper Associates",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dreamers-vc",
    "name": "Dreamers VC",
    "firm": "Dreamers VC",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K -$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dreamit-ventures",
    "name": "Dreamit Ventures",
    "firm": "Dreamit Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "drive-capital",
    "name": "Drive Capital",
    "firm": "Drive Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dropbox-ventures",
    "name": "Dropbox Ventures",
    "firm": "Dropbox Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "drw-venture-capital",
    "name": "DRW Venture Capital",
    "firm": "DRW Venture Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M-$30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "dst-global",
    "name": "DST Global",
    "firm": "DST Global",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Fintech",
      "Enterprise"
    ],
    "geography": "Asia",
    "fundSize": "> $1B",
    "checkSize": "$50M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Hong Kong"
      }
    ],
    "thesis": "Investing in Growth stage Consumer and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "dunbar-capital",
    "name": "Dunbar Capital",
    "firm": "Dunbar Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "e2jdj",
    "name": "E2JDJ",
    "firm": "E2JDJ",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "e2mc-ventures",
    "name": "E2MC Ventures",
    "firm": "E2MC Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "eastlink-capital",
    "name": "Eastlink Capital",
    "firm": "Eastlink Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "echo-vc",
    "name": "Echo VC",
    "firm": "Echo VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "eclipse-ventures",
    "name": "Eclipse Ventures",
    "firm": "Eclipse Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$200K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "ecliptic-capital",
    "name": "Ecliptic Capital",
    "firm": "Ecliptic Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ecmc-education-impact-fund",
    "name": "ECMC Education Impact Fund",
    "firm": "ECMC Education Impact Fund",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "edison-partners",
    "name": "Edison Partners",
    "firm": "Edison Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "edovate-capital",
    "name": "Edovate Capital",
    "firm": "Edovate Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "educapital",
    "name": "Educapital",
    "firm": "Educapital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M - $8M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elad-gil",
    "name": "Elad Gil",
    "firm": "Elad Gil",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "electric-capital",
    "name": "Electric Capital",
    "firm": "Electric Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "elementum-ventures",
    "name": "Elementum Ventures",
    "firm": "Elementum Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elevar-equityoften",
    "name": "Elevar EquityOften",
    "firm": "Elevar EquityOften",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elevate-capital",
    "name": "Elevate Capital",
    "firm": "Elevate Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25M - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elevate-ventures",
    "name": "Elevate Ventures",
    "firm": "Elevate Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elevator-fund",
    "name": "Elevator Fund",
    "firm": "Elevator Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elizabeth-street-ventures",
    "name": "Elizabeth Street Ventures",
    "firm": "Elizabeth Street Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elmwood",
    "name": "Elmwood",
    "firm": "Elmwood",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "elron-ventures",
    "name": "Elron Ventures",
    "firm": "Elron Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "embeddedcapital",
    "name": "embedded/capital",
    "firm": "embedded/capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "emerge-education",
    "name": "Emerge Education",
    "firm": "Emerge Education",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "emergence-capital",
    "name": "Emergence Capital",
    "firm": "Emergence Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$10M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Mateo, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "emerging-ventures",
    "name": "Emerging Ventures",
    "firm": "Emerging Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "emerson-collectivelowvisibility",
    "name": "Emerson CollectiveLow-visibility",
    "firm": "Emerson CollectiveLow-visibility",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "empath-ventures",
    "name": "Empath Ventures",
    "firm": "Empath Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "empire-angels",
    "name": "Empire Angels",
    "firm": "Empire Angels",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "empire-state-development",
    "name": "Empire State Development",
    "firm": "Empire State Development",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "energy-foundrynonprofit",
    "name": "Energy FoundryNonprofit",
    "firm": "Energy FoundryNonprofit",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "energy-impact",
    "name": "Energy Impact",
    "firm": "Energy Impact",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "energy-impact-partners",
    "name": "Energy Impact Partners",
    "firm": "Energy Impact Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Climate",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Climate and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "eniac-ventures",
    "name": "Eniac Ventures",
    "firm": "Eniac Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "eniac-venturespurep",
    "name": "Eniac VenturesPure-p",
    "firm": "Eniac VenturesPure-p",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $1.2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "entre-capital",
    "name": "Entrée Capital",
    "firm": "Entrée Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "eqt-ventures",
    "name": "EQT Ventures",
    "firm": "EQT Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Europe",
    "fundSize": "> $1B",
    "checkSize": "$2M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Stockholm, Sweden"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "equal-ventures",
    "name": "Equal Ventures",
    "firm": "Equal Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "essence-vc",
    "name": "Essence VC",
    "firm": "Essence VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "evening-fund",
    "name": "Evening Fund",
    "firm": "Evening Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Marketplace",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K-$200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "exceptional-capital",
    "name": "Exceptional Capital",
    "firm": "Exceptional Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "expaacts",
    "name": "ExpaActs",
    "firm": "ExpaActs",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "expansion-venture-capital",
    "name": "Expansion Venture Capital",
    "firm": "Expansion Venture Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "exponent",
    "name": "Exponent",
    "firm": "Exponent",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "f2-venture-capital",
    "name": "F2 Venture Capital",
    "firm": "F2 Venture Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "SaaS",
      "Cyber",
      "Fintech",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage SaaS and Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "f7-ventures",
    "name": "f7 Ventures",
    "firm": "f7 Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fast-",
    "name": "FAST —",
    "firm": "FAST —",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fearless-fundbuilt",
    "name": "Fearless FundBuilt",
    "firm": "Fearless FundBuilt",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "felicis-ventures",
    "name": "Felicis Ventures",
    "firm": "Felicis Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech",
      "SaaS",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "female-founders-fund",
    "name": "Female Founders Fund",
    "firm": "Female Founders Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fernbrook-capital-management",
    "name": "Fernbrook Capital Management",
    "firm": "Fernbrook Capital Management",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ff-venture-capital",
    "name": "ff Venture Capital",
    "firm": "ff Venture Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "fifth-wall",
    "name": "Fifth Wall",
    "firm": "Fifth Wall",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "figure-8-investmentsmarried",
    "name": "Figure 8 InvestmentsMarried",
    "firm": "Figure 8 InvestmentsMarried",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fin-capital",
    "name": "Fin Capital",
    "firm": "Fin Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M (Preseed); $2M -$15M (Seed to Series B); $25M - $50M (Series C+); $100M+ (Pre-IPO)",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fintech-collective",
    "name": "Fintech Collective",
    "firm": "Fintech Collective",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "fintlv",
    "name": "FinTLV",
    "firm": "FinTLV",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "finvc",
    "name": "FinVC",
    "firm": "FinVC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "firebrand",
    "name": "Firebrand",
    "firm": "Firebrand",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "firework-venturestools",
    "name": "Firework VenturesTools",
    "firm": "Firework VenturesTools",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "first-growth",
    "name": "First Growth",
    "firm": "First Growth",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "first-round-capital",
    "name": "First Round Capital",
    "firm": "First Round Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Fintech",
      "Health",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "firstime-ventures",
    "name": "Firstime Ventures",
    "firm": "Firstime Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "firstmark-capital",
    "name": "FirstMark Capital",
    "firm": "FirstMark Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "firstrock-capital",
    "name": "Firstrock Capital",
    "firm": "Firstrock Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "five-four-ventures",
    "name": "Five Four Ventures",
    "firm": "Five Four Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fj-labs",
    "name": "FJ Labs",
    "firm": "FJ Labs",
    "stage": [
      "Pre-seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Marketplace"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "flagship-pioneering",
    "name": "Flagship Pioneering",
    "firm": "Flagship Pioneering",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Cambridge, MA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "flashpoint",
    "name": "Flashpoint",
    "firm": "Flashpoint",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "flexport-fund",
    "name": "Flexport Fund",
    "firm": "Flexport Fund",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2.5M - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "flint-capitaldistributed",
    "name": "Flint CapitalDistributed",
    "firm": "Flint CapitalDistributed",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "floodgate",
    "name": "Floodgate",
    "firm": "Floodgate",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "flourish-ventures",
    "name": "Flourish Ventures",
    "firm": "Flourish Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "flybridge",
    "name": "Flybridge",
    "firm": "Flybridge",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "flybridge-capital-partners",
    "name": "Flybridge Capital Partners",
    "firm": "Flybridge Capital Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "foothill-ventures",
    "name": "Foothill Ventures",
    "firm": "Foothill Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "footprint-coalition",
    "name": "Footprint Coalition",
    "firm": "Footprint Coalition",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "footwork",
    "name": "Footwork",
    "firm": "Footwork",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "ford-street-ventures",
    "name": "Ford Street Ventures",
    "firm": "Ford Street Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "forerunner-ventures",
    "name": "Forerunner Ventures",
    "firm": "Forerunner Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Generalist",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "foreword-vc",
    "name": "Foreword VC",
    "firm": "Foreword VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "Europe",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Europe"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "form-capital",
    "name": "Form Capital",
    "firm": "Form Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Enterprise",
      "Developer Tools"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K-$300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Miami, FL"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fortified-ventures",
    "name": "Fortified Ventures",
    "firm": "Fortified Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Crypto and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "forward-deployed-vc",
    "name": "Forward Deployed VC",
    "firm": "Forward Deployed VC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "foundation-capital",
    "name": "Foundation Capital",
    "firm": "Foundation Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "foundation-ventures",
    "name": "Foundation Ventures",
    "firm": "Foundation Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "founder-collective",
    "name": "Founder Collective",
    "firm": "Founder Collective",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "founder-institute",
    "name": "Founder Institute",
    "firm": "Founder Institute",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "founders-fund",
    "name": "Founders Fund",
    "firm": "Founders Fund",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist",
      "Enterprise",
      "Fintech",
      "SaaS",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$150M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Generalist and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "foundry-groupdirect",
    "name": "Foundry GroupDirect",
    "firm": "Foundry GroupDirect",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "four-acres-capital",
    "name": "Four Acres Capital",
    "firm": "Four Acres Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fpv-ventures",
    "name": "FPV Ventures",
    "firm": "FPV Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "framework-ventures",
    "name": "Framework Ventures",
    "firm": "Framework Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "freestyle-capital",
    "name": "Freestyle Capital",
    "firm": "Freestyle Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1.5M - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "friale",
    "name": "Friale",
    "firm": "Friale",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $600K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "frist-cressey-venturesgp",
    "name": "Frist Cressey VenturesGP",
    "firm": "Frist Cressey VenturesGP",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "frontline-ventures",
    "name": "Frontline Ventures",
    "firm": "Frontline Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ftv-capital",
    "name": "FTV Capital",
    "firm": "FTV Capital",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "fuel-capitalsupportive",
    "name": "Fuel CapitalSupportive",
    "firm": "Fuel CapitalSupportive",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "fusion-fund",
    "name": "Fusion Fund",
    "firm": "Fusion Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "future-africa",
    "name": "Future Africa",
    "firm": "Future Africa",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$40K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "future-perfect-ventures",
    "name": "Future Perfect Ventures",
    "firm": "Future Perfect Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Crypto",
      "Marketplace"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "future-ventures",
    "name": "Future Ventures",
    "firm": "Future Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "futureperfect-ventures",
    "name": "FuturePerfect Ventures",
    "firm": "FuturePerfect Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gaingels",
    "name": "Gaingels",
    "firm": "Gaingels",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gaingelscommunity",
    "name": "GaingelsCommunity",
    "firm": "GaingelsCommunity",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ganas-ventures",
    "name": "Ganas Ventures",
    "firm": "Ganas Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Diego, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "garuda-ventures",
    "name": "Garuda Ventures",
    "firm": "Garuda Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Cyber",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gateway-capital",
    "name": "Gateway Capital",
    "firm": "Gateway Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $400K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "geek-venturesaccepts",
    "name": "Geek VenturesAccepts",
    "firm": "Geek VenturesAccepts",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gemini-israel-ventures",
    "name": "Gemini Israel Ventures",
    "firm": "Gemini Israel Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Media",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "genacast-ventures",
    "name": "Genacast Ventures",
    "firm": "Genacast Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "general-atlantic",
    "name": "General Atlantic",
    "firm": "General Atlantic",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Generalist",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$50M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Generalist and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "general-catalyst",
    "name": "General Catalyst",
    "firm": "General Catalyst",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Health",
      "Fintech",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Cambridge, MA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "generalist-capital",
    "name": "Generalist Capital",
    "firm": "Generalist Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "genesis-partners",
    "name": "Genesis Partners",
    "firm": "Genesis Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "gfr-fund",
    "name": "GFR Fund",
    "firm": "GFR Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ggv-capital",
    "name": "GGV Capital",
    "firm": "GGV Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "giant-ventures",
    "name": "Giant Ventures",
    "firm": "Giant Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gigafundextremely",
    "name": "GigafundExtremely",
    "firm": "GigafundExtremely",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gil-capital",
    "name": "Gil Capital",
    "firm": "Gil Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "gilgamesh-ventures",
    "name": "Gilgamesh Ventures",
    "firm": "Gilgamesh Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "S200K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gingerbread-capitalfund",
    "name": "GingerBread CapitalFund",
    "firm": "GingerBread CapitalFund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "giza-venture-capital",
    "name": "Giza Venture Capital",
    "firm": "Giza Venture Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "glilot-capital",
    "name": "Glilot Capital",
    "firm": "Glilot Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Cyber",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Cyber and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "gold-house-ventures",
    "name": "Gold House Ventures",
    "firm": "Gold House Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "gold-house-venturestied",
    "name": "Gold House VenturesTied",
    "firm": "Gold House VenturesTied",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "golden",
    "name": "Golden",
    "firm": "Golden",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "golden-gate",
    "name": "Golden Gate",
    "firm": "Golden Gate",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "golden-palm-investments",
    "name": "Golden Palm Investments",
    "firm": "Golden Palm Investments",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "golden-seeds",
    "name": "Golden Seeds",
    "firm": "Golden Seeds",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "golden-ventures",
    "name": "Golden Ventures",
    "firm": "Golden Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Toronto, Canada"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "goodwater-capital",
    "name": "Goodwater Capital",
    "firm": "Goodwater Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "goodwell-investments",
    "name": "Goodwell Investments",
    "firm": "Goodwell Investments",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "google-ventures",
    "name": "Google Ventures",
    "firm": "Google Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Health",
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Mountain View, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "google-ventures-gv",
    "name": "Google Ventures (GV)",
    "firm": "Google Ventures (GV)",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "goren-holm-ventures-ghv",
    "name": "Goren Holm Ventures (GHV)",
    "firm": "Goren Holm Ventures (GHV)",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gotham-gal-ventures",
    "name": "Gotham Gal Ventures",
    "firm": "Gotham Gal Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gotham-ventures",
    "name": "Gotham Ventures",
    "firm": "Gotham Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "grace-beauty-capital",
    "name": "Grace Beauty Capital",
    "firm": "Grace Beauty Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gradient-ventures",
    "name": "Gradient Ventures",
    "firm": "Gradient Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "graham-walkerborn",
    "name": "Graham & WalkerBorn",
    "firm": "Graham & WalkerBorn",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $400K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "grand-central-tech",
    "name": "Grand Central Tech",
    "firm": "Grand Central Tech",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "grape-arbor-vc",
    "name": "Grape Arbor VC",
    "firm": "Grape Arbor VC",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "graph-ventures",
    "name": "Graph Ventures",
    "firm": "Graph Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "great-oaks-venture-capital",
    "name": "Great Oaks Venture Capital",
    "firm": "Great Oaks Venture Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "greater-colorado-venture-fund",
    "name": "Greater Colorado Venture Fund",
    "firm": "Greater Colorado Venture Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "greatpoint-ventures",
    "name": "GreatPoint Ventures",
    "firm": "GreatPoint Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "green-egg-ventures",
    "name": "Green Egg Ventures",
    "firm": "Green Egg Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "green-meadow-ventures",
    "name": "Green Meadow Ventures",
    "firm": "Green Meadow Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "greenoaks",
    "name": "Greenoaks",
    "firm": "Greenoaks",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "greycroft",
    "name": "Greycroft",
    "firm": "Greycroft",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "greylock-partners",
    "name": "Greylock Partners",
    "firm": "Greylock Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Cyber",
      "Fintech",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "griffin-gaming-partners",
    "name": "Griffin Gaming Partners",
    "firm": "Griffin Gaming Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "ground-up-ventures",
    "name": "Ground Up Ventures",
    "firm": "Ground Up Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "group-11",
    "name": "Group 11",
    "firm": "Group 11",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "grove-ventures",
    "name": "Grove Ventures",
    "firm": "Grove Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "growth-warrior-capital",
    "name": "Growth Warrior Capital",
    "firm": "Growth Warrior Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gsv-ventures",
    "name": "GSV Ventures",
    "firm": "GSV Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $12M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gtm-fund",
    "name": "GTM Fund",
    "firm": "GTM Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Phoenix, AZ"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gtmfund",
    "name": "GTMFund",
    "firm": "GTMFund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "guild-capital",
    "name": "Guild Capital",
    "firm": "Guild Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gutter-capita",
    "name": "Gutter Capita",
    "firm": "Gutter Capita",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "gv",
    "name": "GV",
    "firm": "GV",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Health",
      "Enterprise",
      "Consumer",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$250K-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Mountain View, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "gv-google-ventures",
    "name": "GV (Google Ventures)",
    "firm": "GV (Google Ventures)",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "h20-capital",
    "name": "H20 Capital",
    "firm": "H20 Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hack-vc",
    "name": "Hack VC",
    "firm": "Hack VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "halogen-ventures",
    "name": "Halogen Ventures",
    "firm": "Halogen Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hamilton-venturesconnects",
    "name": "Hamilton VenturesConnects",
    "firm": "Hamilton VenturesConnects",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hanaco-venture-capital",
    "name": "Hanaco Venture Capital",
    "firm": "Hanaco Venture Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$2M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "hannah-grey",
    "name": "Hannah Grey",
    "firm": "Hannah Grey",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$400K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "harbinger-ventures",
    "name": "Harbinger Ventures",
    "firm": "Harbinger Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M - $4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "harlem-capital",
    "name": "Harlem Capital",
    "firm": "Harlem Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "harmony-partners",
    "name": "Harmony Partners",
    "firm": "Harmony Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "harrison-metal",
    "name": "Harrison Metal",
    "firm": "Harrison Metal",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "harvard-business-school-alumni-angels-of-greater-n",
    "name": "Harvard Business School Alumni Angels of Greater New York",
    "firm": "Harvard Business School Alumni Angels of Greater New York",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "haun-ventures",
    "name": "Haun Ventures",
    "firm": "Haun Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "haystack",
    "name": "Haystack",
    "firm": "Haystack",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hcvchard",
    "name": "HCVCHard",
    "firm": "HCVCHard",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hds-capital",
    "name": "HDS Capital",
    "firm": "HDS Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "headline",
    "name": "Headline",
    "firm": "Headline",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "health",
    "name": "Health",
    "firm": "Health",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "health-equity-ventures",
    "name": "Health Equity Ventures",
    "firm": "Health Equity Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "healthy-ventureswomen",
    "name": "Healthy VenturesWomen",
    "firm": "Healthy VenturesWomen",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hearst",
    "name": "Hearst",
    "firm": "Hearst",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hearst-ventures",
    "name": "Hearst Ventures",
    "firm": "Hearst Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hearst-ventures-israel",
    "name": "Hearst Ventures Israel",
    "firm": "Hearst Ventures Israel",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media",
      "Fintech",
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Media and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "heavybit",
    "name": "Heavybit",
    "firm": "Heavybit",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "helios-capital",
    "name": "Helios Capital",
    "firm": "Helios Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "helium3-ventures",
    "name": "Helium-3 Ventures",
    "firm": "Helium-3 Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "heracles-capital",
    "name": "Heracles Capital",
    "firm": "Heracles Capital",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Consumer",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "heroic-ventures",
    "name": "Heroic Ventures",
    "firm": "Heroic Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hetz-ventures",
    "name": "Hetz Ventures",
    "firm": "Hetz Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "high-alpha",
    "name": "High Alpha",
    "firm": "High Alpha",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Indianapolis, IN"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "high-street-equity",
    "name": "High Street Equity",
    "firm": "High Street Equity",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "highbury-group",
    "name": "Highbury Group",
    "firm": "Highbury Group",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hof-capital",
    "name": "HOF Capital",
    "firm": "HOF Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "homebrew",
    "name": "Homebrew",
    "firm": "Homebrew",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "hometeam-ventures",
    "name": "Hometeam Ventures",
    "firm": "Hometeam Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "horizons-ventures",
    "name": "Horizons Ventures",
    "firm": "Horizons Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "house-of-ventures",
    "name": "House Of Ventures",
    "firm": "House Of Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "how-women-invest",
    "name": "How Women Invest",
    "firm": "How Women Invest",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "human-ventures",
    "name": "Human Ventures",
    "firm": "Human Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "humboldt-fund",
    "name": "Humboldt Fund",
    "firm": "Humboldt Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hummingbird-vc",
    "name": "Hummingbird VC",
    "firm": "Hummingbird VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hustle-fund",
    "name": "Hustle Fund",
    "firm": "Hustle Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hustle-fundhi",
    "name": "Hustle FundHi",
    "firm": "Hustle FundHi",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "hv-capital",
    "name": "HV Capital",
    "firm": "HV Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Europe",
    "fundSize": "> $1B",
    "checkSize": "$1M-$30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Munich, Germany"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "hyde-park-venture-partners",
    "name": "Hyde Park Venture Partners",
    "firm": "Hyde Park Venture Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$7M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Chicago, IL"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "hyperplane-venture-capital",
    "name": "Hyperplane Venture Capital",
    "firm": "Hyperplane Venture Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ia-capital-group",
    "name": "IA Capital Group",
    "firm": "IA Capital Group",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ia-ventures",
    "name": "IA Ventures",
    "firm": "IA Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "iangels",
    "name": "iAngels",
    "firm": "iAngels",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$100K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "iconiq-capital",
    "name": "Iconiq Capital",
    "firm": "Iconiq Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "iconyc-labs",
    "name": "ICONYC Labs",
    "firm": "ICONYC Labs",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "idea-farm-ventures",
    "name": "Idea Farm Ventures",
    "firm": "Idea Farm Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "SaaS",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ideo-co",
    "name": "IDEO Co",
    "firm": "IDEO Co",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "illuminate-financial",
    "name": "Illuminate Financial",
    "firm": "Illuminate Financial",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$8M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "imaginary-ventures",
    "name": "Imaginary Ventures",
    "firm": "Imaginary Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "impact-americ",
    "name": "Impact Americ",
    "firm": "Impact Americ",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "impact-venture-capital",
    "name": "Impact Venture Capital",
    "firm": "Impact Venture Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "inqtel",
    "name": "In-Q-Tel",
    "firm": "In-Q-Tel",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Arlington, VA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "inqtel-iqt",
    "name": "In-Q-Tel (IQT",
    "firm": "In-Q-Tel (IQT",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "incapital-ventures",
    "name": "INcapital Ventures",
    "firm": "INcapital Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Generalist",
      "Cyber",
      "Fintech"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage SaaS and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "incisive-ventures",
    "name": "Incisive Ventures",
    "firm": "Incisive Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "index-ventures",
    "name": "Index Ventures",
    "firm": "Index Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "indicator-ventures",
    "name": "Indicator Ventures",
    "firm": "Indicator Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "indiebio",
    "name": "IndieBio",
    "firm": "IndieBio",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "up to $525K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "inflect-health",
    "name": "Inflect Health",
    "firm": "Inflect Health",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$150K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "initialized-capital",
    "name": "Initialized Capital",
    "firm": "Initialized Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "inmotion-ventures",
    "name": "InMotion Ventures",
    "firm": "InMotion Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Climate",
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Climate and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "innospark-venturesaionly",
    "name": "Innospark VenturesAI-only",
    "firm": "Innospark VenturesAI-only",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "innovating-capital",
    "name": "Innovating Capital",
    "firm": "Innovating Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "innovation-endeavors",
    "name": "Innovation Endeavors",
    "firm": "Innovation Endeavors",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "Up to $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "inovia-capital",
    "name": "iNovia Capital",
    "firm": "iNovia Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "insight-partners",
    "name": "Insight Partners",
    "firm": "Insight Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$10M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "insight-venture-partners",
    "name": "Insight Venture Partners",
    "firm": "Insight Venture Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "inspired-capital",
    "name": "Inspired Capital",
    "firm": "Inspired Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "intel-capital",
    "name": "Intel Capital",
    "firm": "Intel Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Santa Clara, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "interplay-ventures",
    "name": "Interplay Ventures",
    "firm": "Interplay Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "inuka-capital",
    "name": "Inuka Capital",
    "firm": "Inuka Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "Asia",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "India"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ironspring-ventures",
    "name": "Ironspring Ventures",
    "firm": "Ironspring Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "irrvrntvc",
    "name": "irrvrntVC",
    "firm": "irrvrntVC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$300K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ivp",
    "name": "IVP",
    "firm": "IVP",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$10M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "ivp-institutional-venture-partners",
    "name": "IVP (Institutional Venture Partners)",
    "firm": "IVP (Institutional Venture Partners)",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "jam-fund",
    "name": "JAM Fund",
    "firm": "JAM Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "january-venturesrep",
    "name": "January VenturesRep",
    "firm": "January VenturesRep",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "janvest-capital-partners",
    "name": "JANVEST Capital Partners",
    "firm": "JANVEST Capital Partners",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "javelin-venture",
    "name": "Javelin Venture",
    "firm": "Javelin Venture",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $6M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "jaws-ventures",
    "name": "JAWS Ventures",
    "firm": "JAWS Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "jazz-venture",
    "name": "Jazz Venture",
    "firm": "Jazz Venture",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "jerusalem-venture-partners",
    "name": "Jerusalem Venture Partners",
    "firm": "Jerusalem Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Cyber",
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$1M-$30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Jerusalem, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "jetstream",
    "name": "Jetstream",
    "firm": "Jetstream",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Climate"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed stage Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "jll-spark",
    "name": "JLL Spark",
    "firm": "JLL Spark",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "joule-ventures",
    "name": "Joule Ventures",
    "firm": "Joule Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "jovono",
    "name": "Jovono",
    "firm": "Jovono",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "jumpstart-nova",
    "name": "Jumpstart Nova",
    "firm": "Jumpstart Nova",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "juvo-venturessubsidiary",
    "name": "Juvo VenturesSubsidiary",
    "firm": "Juvo VenturesSubsidiary",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "k50-ventures",
    "name": "K50 Ventures",
    "firm": "K50 Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "k9-ventures",
    "name": "K9 Ventures",
    "firm": "K9 Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kairos-hq",
    "name": "Kairos HQ",
    "firm": "Kairos HQ",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kapor-capital",
    "name": "Kapor Capital",
    "firm": "Kapor Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Oakland, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "kdt-ventures",
    "name": "KdT Ventures",
    "firm": "KdT Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kearny-jackson",
    "name": "Kearny Jackson",
    "firm": "Kearny Jackson",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $400K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kec-ventures",
    "name": "KEC Ventures",
    "firm": "KEC Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "keiretsu-forum",
    "name": "Keiretsu Forum",
    "firm": "Keiretsu Forum",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "key1-capital",
    "name": "Key1 Capital",
    "firm": "Key1 Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M-$30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "khosla-ventures",
    "name": "Khosla Ventures",
    "firm": "Khosla Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Climate",
      "Health",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "kickstart",
    "name": "Kickstart",
    "firm": "Kickstart",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kindred-ventures",
    "name": "Kindred Ventures",
    "firm": "Kindred Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$250K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "kitchen-fund",
    "name": "Kitchen Fund",
    "firm": "Kitchen Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kittyhawk-ventures",
    "name": "KittyHawk Ventures",
    "firm": "KittyHawk Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kiwi-tech",
    "name": "Kiwi Tech",
    "firm": "Kiwi Tech",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kiwiventure-partners",
    "name": "KiwiVenture Partners",
    "firm": "KiwiVenture Partners",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "kleiner-perkins",
    "name": "Kleiner Perkins",
    "firm": "Kleiner Perkins",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech",
      "Generalist",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "klingenstein-fields-wealth-advisors",
    "name": "Klingenstein Fields Wealth Advisors",
    "firm": "Klingenstein Fields Wealth Advisors",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "konvoy-ventures",
    "name": "Konvoy Ventures",
    "firm": "Konvoy Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Denver, CO"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lattitude-ventures",
    "name": "L'ATTITUDE Ventures",
    "firm": "L'ATTITUDE Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "laconia-capital-group",
    "name": "Laconia Capital Group",
    "firm": "Laconia Capital Group",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "las-olas-venture-capital-aka-lovc",
    "name": "Las Olas Venture Capital (a.k.a. LOVC)",
    "firm": "Las Olas Venture Capital (a.k.a. LOVC)",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lattice-ventures",
    "name": "Lattice Ventures",
    "firm": "Lattice Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lazerow-ventures",
    "name": "Lazerow Ventures",
    "firm": "Lazerow Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ldv-capital",
    "name": "LDV Capital",
    "firm": "LDV Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1.2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lead-edge-capital",
    "name": "Lead Edge Capital",
    "firm": "Lead Edge Capital",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$10M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "leadout-capital",
    "name": "Leadout Capital",
    "firm": "Leadout Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "learnstart",
    "name": "LearnStart",
    "firm": "LearnStart",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lerer-hippeau",
    "name": "Lerer Hippeau",
    "firm": "Lerer Hippeau",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Media",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "lerer-hippeau-ventures",
    "name": "Lerer Hippeau Ventures",
    "firm": "Lerer Hippeau Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "lgf3",
    "name": "LGF3",
    "firm": "LGF3",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "liberty-city-ventures",
    "name": "Liberty City Ventures",
    "firm": "Liberty City Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lifeforce-capital",
    "name": "Lifeforce Capital",
    "firm": "Lifeforce Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lightbank",
    "name": "Lightbank",
    "firm": "Lightbank",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lightship-capital",
    "name": "Lightship Capital",
    "firm": "Lightship Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lightspeed-venture-partners",
    "name": "Lightspeed Venture Partners",
    "firm": "Lightspeed Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Fintech",
      "Consumer",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "link-venturesembedded",
    "name": "Link VenturesEmbedded",
    "firm": "Link VenturesEmbedded",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $8M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lionbird",
    "name": "LionBird",
    "firm": "LionBird",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Health and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "localglobe",
    "name": "LocalGlobe",
    "firm": "LocalGlobe",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Europe",
    "fundSize": "> $1B",
    "checkSize": "$500K-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "London, UK"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "lockstep-venturessub50m",
    "name": "Lockstep VenturesSub-$50M",
    "firm": "Lockstep VenturesSub-$50M",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K-$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "loebnyc",
    "name": "Loeb.nyc",
    "firm": "Loeb.nyc",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "loi-venture",
    "name": "LOI Venture",
    "firm": "LOI Venture",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "longliv-ventures",
    "name": "Longliv Ventures",
    "firm": "Longliv Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "looking-glass-capital",
    "name": "Looking Glass Capital",
    "firm": "Looking Glass Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Climate",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A, Growth stage Health and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lool-ventures",
    "name": "Lool Ventures",
    "firm": "Lool Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Health",
      "Fintech"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lorimer-ventures",
    "name": "Lorimer Ventures",
    "firm": "Lorimer Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lowercarbon-capital",
    "name": "Lowercarbon Capital",
    "firm": "Lowercarbon Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "lowercase-capital",
    "name": "Lowercase Capital",
    "firm": "Lowercase Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$25K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "lucidcloud",
    "name": "LucidCloud",
    "firm": "LucidCloud",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "lux-capital",
    "name": "Lux Capital",
    "firm": "Lux Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "SaaS",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$2M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "lytical-ventures",
    "name": "Lytical Ventures",
    "firm": "Lytical Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "m12-fka-microsoft-ventures",
    "name": "M12 (FKA Microsoft Ventures)",
    "firm": "M12 (FKA Microsoft Ventures)",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "m12-microsoft-ventures",
    "name": "M12 (Microsoft Ventures)",
    "firm": "M12 (Microsoft Ventures)",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "m12-microsofts-venture-fund",
    "name": "M12 - Microsoft's Venture Fund",
    "firm": "M12 - Microsoft's Venture Fund",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "m13",
    "name": "M13",
    "firm": "M13",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "mxv-capital",
    "name": "M]x[v Capital",
    "firm": "M]x[v Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$500K-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mac-venture-capital",
    "name": "MaC Venture Capital",
    "firm": "MaC Venture Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "madrona-ventures",
    "name": "Madrona Ventures",
    "firm": "Madrona Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Seattle, WA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "maersk-growth",
    "name": "Maersk Growth",
    "firm": "Maersk Growth",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "magenta-venture-partners",
    "name": "Magenta Venture Partners",
    "firm": "Magenta Venture Partners",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist",
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Series A stage Generalist and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "magic-fund",
    "name": "MAGIC Fund",
    "firm": "MAGIC Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "magma-venture-partner",
    "name": "Magma Venture Partner",
    "firm": "Magma Venture Partner",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Media and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "magma-venture-partners",
    "name": "Magma Venture Partners",
    "firm": "Magma Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Generalist",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "makers-fund",
    "name": "Makers Fund",
    "firm": "Makers Fund",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$40M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "mango-capital",
    "name": "Mango Capital",
    "firm": "Mango Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1-1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "maniv-mobility",
    "name": "Maniv Mobility",
    "firm": "Maniv Mobility",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist",
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mantis-venture-capital",
    "name": "MANTIS Venture Capital",
    "firm": "MANTIS Venture Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "maor-investments",
    "name": "Maor Investments",
    "firm": "Maor Investments",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Cyber",
      "Health",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Growth stage SaaS and Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "maple-vc",
    "name": "Maple VC",
    "firm": "Maple VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "maple-ventures",
    "name": "Maple Ventures",
    "firm": "Maple Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "massive",
    "name": "Massive",
    "firm": "Massive",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500k - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "massmutual-ventures",
    "name": "MassMutual Ventures",
    "firm": "MassMutual Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1.5M - $100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mastercard-start-path-fund",
    "name": "Mastercard Start Path Fund",
    "firm": "Mastercard Start Path Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "matchstick-ventures",
    "name": "Matchstick Ventures",
    "firm": "Matchstick Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$300K - $750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "material-impact-fund",
    "name": "Material Impact Fund",
    "firm": "Material Impact Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "matrix-partners",
    "name": "Matrix Partners",
    "firm": "Matrix Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "matter",
    "name": "Matter.",
    "firm": "Matter.",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "maverick-ventures",
    "name": "Maverick Ventures",
    "firm": "Maverick Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "maveronconsumeronly",
    "name": "MaveronConsumer-only",
    "firm": "MaveronConsumer-only",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "max-ventures",
    "name": "Max Ventures",
    "firm": "Max Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "max-ventures-former-basset",
    "name": "Max Ventures (former Basset)",
    "firm": "Max Ventures (former Basset)",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mayfield-fund",
    "name": "Mayfield Fund",
    "firm": "Mayfield Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "mbx-capital",
    "name": "MBX Capital",
    "firm": "MBX Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mccune-capital",
    "name": "McCune Capital",
    "firm": "McCune Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Climate",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Climate and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mdc-ventures",
    "name": "MDC Ventures",
    "firm": "MDC Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "medmountain-ventures",
    "name": "MedMountain Ventures",
    "firm": "MedMountain Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "melo7-tech-partners",
    "name": "Melo7 Tech Partners",
    "firm": "Melo7 Tech Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "menlo-ventures",
    "name": "Menlo Ventures",
    "firm": "Menlo Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Cyber",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "menlo-ventures500m-inflection-fund",
    "name": "Menlo Ventures$500M Inflection Fund",
    "firm": "Menlo Ventures$500M Inflection Fund",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "merus-capital",
    "name": "Merus Capital",
    "firm": "Merus Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mesa-ventures",
    "name": "Mesa Ventures",
    "firm": "Mesa Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "metaprop",
    "name": "MetaProp",
    "firm": "MetaProp",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "metis-capital",
    "name": "Metis Capital",
    "firm": "Metis Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - 5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mhs-capital",
    "name": "MHS Capital",
    "firm": "MHS Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mi-ventures",
    "name": "MI Ventures",
    "firm": "MI Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "millennium-technology-value-partners",
    "name": "Millennium Technology Value Partners",
    "firm": "Millennium Technology Value Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "mischief",
    "name": "Mischief",
    "firm": "Mischief",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mitsui-co",
    "name": "Mitsui & Co",
    "firm": "Mitsui & Co",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Climate",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Consumer and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mizmaa-ventures",
    "name": "MizMaa Ventures",
    "firm": "MizMaa Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mkt1-capital",
    "name": "MKT1 Capital",
    "firm": "MKT1 Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$100K-$300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Oakland, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "moderne-ventures",
    "name": "Moderne Ventures",
    "firm": "Moderne Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $7M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "monashees",
    "name": "Monashees",
    "firm": "Monashees",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "moonshots-capital",
    "name": "Moonshots Capital",
    "firm": "Moonshots Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "morevc",
    "name": "MoreVC",
    "firm": "MoreVC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Ra'anana, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "morpheus-ventures",
    "name": "Morpheus Ventures",
    "firm": "Morpheus Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mosaicat",
    "name": "MosaicAt",
    "firm": "MosaicAt",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mousse-partners",
    "name": "Mousse Partners",
    "firm": "Mousse Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "moxxie-ventures",
    "name": "Moxxie Ventures",
    "firm": "Moxxie Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "mucker-capital",
    "name": "Mucker Capital",
    "firm": "Mucker Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "multicoin-capital",
    "name": "Multicoin Capital",
    "firm": "Multicoin Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Austin, TX"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "munich-re-ventures",
    "name": "Munich Re Ventures",
    "firm": "Munich Re Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "muse-capital",
    "name": "Muse Capital",
    "firm": "Muse Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "my-climate-journey-collective",
    "name": "My Climate Journey Collective",
    "firm": "My Climate Journey Collective",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nea",
    "name": "NEA",
    "firm": "NEA",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Health",
      "Fintech",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "necessary-ventures",
    "name": "Necessary Ventures",
    "firm": "Necessary Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "neu-venture-capital",
    "name": "Neu Venture Capital",
    "firm": "Neu Venture Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "neuebond",
    "name": "NeueBond",
    "firm": "NeueBond",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "new-age-capital",
    "name": "New Age Capital",
    "firm": "New Age Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1.5 - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "new-enterprise-associates-nea",
    "name": "New Enterprise Associates (NEA)",
    "firm": "New Enterprise Associates (NEA)",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "new-leaf-venture-partners",
    "name": "New Leaf Venture Partners",
    "firm": "New Leaf Venture Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "new-markets-venture",
    "name": "New Markets Venture",
    "firm": "New Markets Venture",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "new-stack-ventures",
    "name": "New Stack Ventures",
    "firm": "New Stack Ventures",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "new-york-angels",
    "name": "New York Angels",
    "firm": "New York Angels",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "new-york-life-ventures",
    "name": "New York Life Ventures",
    "firm": "New York Life Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "new-york-venture-partners",
    "name": "New York Venture Partners",
    "firm": "New York Venture Partners",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "newark-venture-partners",
    "name": "Newark Venture Partners",
    "firm": "Newark Venture Partners",
    "stage": [
      "Pre-seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nexstar-partners",
    "name": "NexStar Partners",
    "firm": "NexStar Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Cyber",
      "Generalist",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Cyber and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "next-frontier-capital",
    "name": "Next Frontier Capital",
    "firm": "Next Frontier Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Bozeman, MT"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nextleap-ventures",
    "name": "NextLeap Ventures",
    "firm": "NextLeap Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$50M - $100M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nextview-ventures",
    "name": "NextView Ventures",
    "firm": "NextView Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "nexus-venture",
    "name": "Nexus Venture",
    "firm": "Nexus Venture",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nfx",
    "name": "NFX",
    "firm": "NFX",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Marketplace",
      "Fintech",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Marketplace and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "night-ventures",
    "name": "Night Ventures",
    "firm": "Night Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "noemis-ventures",
    "name": "NOEMIS Ventures",
    "firm": "NOEMIS Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nomad-capital",
    "name": "Nomad Capital",
    "firm": "Nomad Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Marketplace",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K-$300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Marketplace and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nomad-ventures",
    "name": "Nomad Ventures",
    "firm": "Nomad Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Marketplace",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Marketplace and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nomadic-venture",
    "name": "Nomadic Venture",
    "firm": "Nomadic Venture",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "noon-ventures",
    "name": "Noon Ventures",
    "firm": "Noon Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "northpond-ventures",
    "name": "Northpond Ventures",
    "firm": "Northpond Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "northzone",
    "name": "Northzone",
    "firm": "Northzone",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Europe",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "London, UK"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "norwest-venture",
    "name": "Norwest Venture",
    "firm": "Norwest Venture",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10M - $30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "norwest-venture-partners",
    "name": "Norwest Venture Partners",
    "firm": "Norwest Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "not-boring-capital",
    "name": "Not Boring Capital",
    "firm": "Not Boring Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$100K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "notation-capital",
    "name": "Notation Capital",
    "firm": "Notation Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Developer Tools",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Developer Tools and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "novel-tmt-ventures",
    "name": "Novel TMT Ventures",
    "firm": "Novel TMT Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nphard-ventures",
    "name": "NP-Hard Ventures",
    "firm": "NP-Hard Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nucleus-adventure-capital",
    "name": "Nucleus Adventure Capital",
    "firm": "Nucleus Adventure Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nvidia-nventures",
    "name": "NVIDIA NVentures",
    "firm": "NVIDIA NVentures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Santa Clara, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "nxtp-ventures",
    "name": "NXTP Ventures",
    "firm": "NXTP Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nyc-seed",
    "name": "NYC Seed",
    "firm": "NYC Seed",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "nyca-partners",
    "name": "Nyca Partners",
    "firm": "Nyca Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "nyu-innovation-venture-fund",
    "name": "NYU Innovation Venture Fund",
    "firm": "NYU Innovation Venture Fund",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "obvious-ventures",
    "name": "Obvious Ventures",
    "firm": "Obvious Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Climate",
      "Health",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Climate and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "octopus-ventures",
    "name": "Octopus Ventures",
    "firm": "Octopus Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "offline-ventures",
    "name": "Offline Ventures",
    "firm": "Offline Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "okapi-venture-capital",
    "name": "Okapi Venture Capital",
    "firm": "Okapi Venture Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "omers-ventures",
    "name": "OMERS Ventures",
    "firm": "OMERS Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "on-grid-ventures",
    "name": "On Grid Ventures",
    "firm": "On Grid Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Media",
      "Marketplace"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Media and Marketplace companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "one-way-ventures",
    "name": "One Way Ventures",
    "firm": "One Way Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "openai-startup-fund",
    "name": "OpenAI Startup Fund",
    "firm": "OpenAI Startup Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "opense",
    "name": "OpenSe",
    "firm": "OpenSe",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "orbimed",
    "name": "OrbiMed",
    "firm": "OrbiMed",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "orbimed-advisors",
    "name": "OrbiMed Advisors",
    "firm": "OrbiMed Advisors",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "ore",
    "name": "Ore",
    "firm": "Ore",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "origin-venturesvc",
    "name": "Origin VenturesVC",
    "firm": "Origin VenturesVC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "origins",
    "name": "Origins",
    "firm": "Origins",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "origins-fund",
    "name": "Origins Fund",
    "firm": "Origins Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "os-fund",
    "name": "OS Fund",
    "firm": "OS Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "osage-venture",
    "name": "Osage Venture",
    "firm": "Osage Venture",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "oss-capital-lp",
    "name": "OSS Capital L.P",
    "firm": "OSS Capital L.P",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "other-ventures",
    "name": "Other Ventures",
    "firm": "Other Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K-$50K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ourcrowd",
    "name": "OurCrowd",
    "firm": "OurCrowd",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$500K-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Jerusalem, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "outbound-ventures",
    "name": "Outbound Ventures",
    "firm": "Outbound Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "outpost-capital",
    "name": "Outpost Capital",
    "firm": "Outpost Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "outsiders-fund",
    "name": "Outsiders Fund",
    "firm": "Outsiders Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $7M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "overlooked-ventures",
    "name": "Overlooked Ventures",
    "firm": "Overlooked Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$150K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "overture-vc",
    "name": "Overture VC",
    "firm": "Overture VC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "owl-ventures",
    "name": "Owl Ventures",
    "firm": "Owl Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "oyster-ventures",
    "name": "Oyster Ventures",
    "firm": "Oyster Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "p1-ventures",
    "name": "P1 Ventures",
    "firm": "P1 Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "pack-ventures",
    "name": "Pack Ventures",
    "firm": "Pack Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Seattle, WA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "paladin-capital-group",
    "name": "Paladin Capital Group",
    "firm": "Paladin Capital Group",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "pale-blue-dot",
    "name": "Pale Blue Dot",
    "firm": "Pale Blue Dot",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $2.2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "palm-drive-capital",
    "name": "Palm Drive Capital",
    "firm": "Palm Drive Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "panache-ventures",
    "name": "Panache Ventures",
    "firm": "Panache Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "panoramic-ventures",
    "name": "Panoramic Ventures",
    "firm": "Panoramic Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "paradigm",
    "name": "Paradigm",
    "firm": "Paradigm",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "pareto-holdings",
    "name": "Pareto Holdings",
    "firm": "Pareto Holdings",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "partnership-for-nyc-fund",
    "name": "Partnership for NYC Fund",
    "firm": "Partnership for NYC Fund",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "paypal-ventures",
    "name": "PayPal Ventures",
    "firm": "PayPal Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "peak-xv-partners",
    "name": "Peak XV Partners",
    "firm": "Peak XV Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "Asia",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Mumbai, India"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "peakbridge-vc",
    "name": "PeakBridge VC",
    "firm": "PeakBridge VC",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Generalist",
      "Climate"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "pear-vc",
    "name": "Pear VC",
    "firm": "Pear VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$250K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "pear-ventures",
    "name": "Pear Ventures",
    "firm": "Pear Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "pebblebed",
    "name": "Pebblebed",
    "firm": "Pebblebed",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "pereg-ventures",
    "name": "Pereg Ventures",
    "firm": "Pereg Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "peregrine-ventures",
    "name": "Peregrine Ventures",
    "firm": "Peregrine Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Or Yehuda, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "peterson-ventures",
    "name": "Peterson Ventures",
    "firm": "Peterson Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "picks-shovels",
    "name": "Picks & Shovels",
    "firm": "Picks & Shovels",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "picks-and-shovels",
    "name": "Picks and Shovels",
    "firm": "Picks and Shovels",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Crypto",
      "Fintech",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Crypto and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "pico-partners",
    "name": "Pico Partners",
    "firm": "Pico Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "picus-capital",
    "name": "Picus Capital",
    "firm": "Picus Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "pitango-vc",
    "name": "Pitango VC",
    "firm": "Pitango VC",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "SaaS",
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "pivot-investment-partners",
    "name": "Pivot Investment Partners",
    "firm": "Pivot Investment Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "planven-entrepreneur-ventures",
    "name": "Planven Entrepreneur Ventures",
    "firm": "Planven Entrepreneur Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$5M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "play-ventures",
    "name": "Play Ventures",
    "firm": "Play Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "plg-ventures",
    "name": "PLG Ventures",
    "firm": "PLG Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "plough-penny-patners",
    "name": "Plough Penny Patners",
    "firm": "Plough Penny Patners",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "plug-n-p",
    "name": "Plug N P",
    "firm": "Plug N P",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "plum-alley",
    "name": "Plum Alley",
    "firm": "Plum Alley",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "plum-alley-investments",
    "name": "Plum Alley Investments",
    "firm": "Plum Alley Investments",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "plus-eight-equity-partners",
    "name": "Plus Eight Equity Partners",
    "firm": "Plus Eight Equity Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "plymouth-growth",
    "name": "Plymouth Growth",
    "firm": "Plymouth Growth",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "point-nine",
    "name": "Point Nine",
    "firm": "Point Nine",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "Europe",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$3.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Berlin, Germany"
      }
    ],
    "thesis": "Investing in Seed stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "point-nine-capital",
    "name": "Point Nine Capital",
    "firm": "Point Nine Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "SaaS",
      "Marketplace"
    ],
    "geography": "Europe",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$3.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Berlin, Germany"
      }
    ],
    "thesis": "Investing in Seed stage SaaS and Marketplace companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "point72-ventures",
    "name": "Point72 Ventures",
    "firm": "Point72 Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "polaris-partners",
    "name": "Polaris Partners",
    "firm": "Polaris Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "polychain",
    "name": "Polychain",
    "firm": "Polychain",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "polychain-capital",
    "name": "Polychain Capital",
    "firm": "Polychain Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "pontifax",
    "name": "Pontifax",
    "firm": "Pontifax",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "portage-partners",
    "name": "Portage Partners",
    "firm": "Portage Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "powerhouse-venturesdual",
    "name": "Powerhouse VenturesDual",
    "firm": "Powerhouse VenturesDual",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$150K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "precursor-ventures",
    "name": "Precursor Ventures",
    "firm": "Precursor Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$100K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "prelude-ventures",
    "name": "Prelude Ventures",
    "firm": "Prelude Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "presence-capital",
    "name": "Presence Capital",
    "firm": "Presence Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "presight-capital",
    "name": "Presight Capital",
    "firm": "Presight Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "primary-venture",
    "name": "Primary Venture",
    "firm": "Primary Venture",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "primary-venture-partners",
    "name": "Primary Venture Partners",
    "firm": "Primary Venture Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "prime-impact-fundnonprofitgoverned-100",
    "name": "Prime Impact FundNonprofit‑governed, 100%",
    "firm": "Prime Impact FundNonprofit‑governed, 100%",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "prime-movers",
    "name": "Prime Movers",
    "firm": "Prime Movers",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M - $30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "primetime",
    "name": "Primetime",
    "firm": "Primetime",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "pritzker-group-venture-capital",
    "name": "Pritzker Group Venture Capital",
    "firm": "Pritzker Group Venture Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "privilge-ventures",
    "name": "Privilège Ventures",
    "firm": "Privilège Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "progress-ventures",
    "name": "Progress Ventures",
    "firm": "Progress Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "progression-fund",
    "name": "Progression Fund",
    "firm": "Progression Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "prologis-ventures",
    "name": "Prologis Ventures",
    "firm": "Prologis Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "propel-vc",
    "name": "Propel VC",
    "firm": "Propel VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "propeller-vc",
    "name": "Propeller VC",
    "firm": "Propeller VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "protagonist",
    "name": "Protagonist",
    "firm": "Protagonist",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "punch-capital",
    "name": "Punch Capital",
    "firm": "Punch Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "puzzle-ventures",
    "name": "Puzzle Ventures",
    "firm": "Puzzle Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "qb1-ventures",
    "name": "QB1 Ventures",
    "firm": "QB1 Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "qed-investors",
    "name": "QED Investors",
    "firm": "QED Investors",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Alexandria, VA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "quake-capital-partners",
    "name": "Quake Capital Partners",
    "firm": "Quake Capital Partners",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "qualcomm-ventures",
    "name": "Qualcomm Ventures",
    "firm": "Qualcomm Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Diego, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage SaaS and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "quest-venture",
    "name": "Quest Venture",
    "firm": "Quest Venture",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "quiet-capital",
    "name": "Quiet Capital",
    "firm": "Quiet Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "quotidian-ventures",
    "name": "Quotidian Ventures",
    "firm": "Quotidian Ventures",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ra-capital",
    "name": "RA Capital",
    "firm": "RA Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "race-capital",
    "name": "Race Capital",
    "firm": "Race Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "radian-capital",
    "name": "Radian Capital",
    "firm": "Radian Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "radical-ventures",
    "name": "Radical Ventures",
    "firm": "Radical Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Toronto, Canada"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "radius-capital",
    "name": "Radius Capital",
    "firm": "Radius Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "raine-ventures",
    "name": "Raine Ventures",
    "firm": "Raine Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rainfall-ventures",
    "name": "Rainfall Ventures",
    "firm": "Rainfall Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rainfall-ventures-fka-vaizra-investments",
    "name": "Rainfall Ventures (FKA Vaizra Investments)",
    "firm": "Rainfall Ventures (FKA Vaizra Investments)",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ralicapemergingmarkets",
    "name": "Rali_capEmerging-markets",
    "firm": "Rali_capEmerging-markets",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rally-ventures100",
    "name": "Rally Ventures100+",
    "firm": "Rally Ventures100+",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "raptor-group",
    "name": "Raptor Group",
    "firm": "Raptor Group",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Consumer",
      "Media",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rapyd-ventures",
    "name": "Rapyd Ventures",
    "firm": "Rapyd Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rarebreed-ventures",
    "name": "RareBreed Ventures",
    "firm": "RareBreed Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "reach-capital",
    "name": "Reach Capital",
    "firm": "Reach Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "realist-ventures",
    "name": "Realist Ventures",
    "firm": "Realist Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "reciprocal-ventures",
    "name": "Reciprocal Ventures",
    "firm": "Reciprocal Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "recursive-ventures",
    "name": "Recursive Ventures",
    "firm": "Recursive Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "red-blue-ventures",
    "name": "Red & Blue Ventures",
    "firm": "Red & Blue Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "red-bear-angels",
    "name": "Red Bear Angels",
    "firm": "Red Bear Angels",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "red-bike-capital",
    "name": "Red Bike Capital",
    "firm": "Red Bike Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "red-sea-ventures",
    "name": "Red Sea Ventures",
    "firm": "Red Sea Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "red-swan-ventures",
    "name": "Red Swan Ventures",
    "firm": "Red Swan Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "redpoint",
    "name": "Redpoint",
    "firm": "Redpoint",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "redpoint-ventures",
    "name": "Redpoint Ventures",
    "firm": "Redpoint Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "redstick-ventures",
    "name": "Redstick Ventures",
    "firm": "Redstick Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$350K - $700K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "redwood-technology-ventures-rtv",
    "name": "Redwood Technology Ventures (RTV)",
    "firm": "Redwood Technology Ventures (RTV)",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Media",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Media and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "refactor-capital",
    "name": "Refactor Capital",
    "firm": "Refactor Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "refashiond-ventures",
    "name": "REFASHIOND Ventures",
    "firm": "REFASHIOND Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "reign-venturesinclusive",
    "name": "Reign VenturesInclusive",
    "firm": "Reign VenturesInclusive",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "reinforced-ventures",
    "name": "Reinforced Ventures",
    "firm": "Reinforced Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "reinventure-capitalgrowth",
    "name": "Reinventure CapitalGrowth",
    "firm": "Reinventure CapitalGrowth",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "remagine-ventures",
    "name": "Remagine Ventures",
    "firm": "Remagine Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "remote-first-capital",
    "name": "Remote First Capital",
    "firm": "Remote First Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Developer Tools"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Developer Tools companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "remus-capital",
    "name": "REMUS Capital",
    "firm": "REMUS Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "renegade",
    "name": "Renegade",
    "firm": "Renegade",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "resolute-ventures",
    "name": "Resolute Ventures",
    "firm": "Resolute Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "resolute-ventureslead",
    "name": "Resolute VenturesLead",
    "firm": "Resolute VenturesLead",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "restive-ventures",
    "name": "Restive Ventures",
    "firm": "Restive Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rethink-education",
    "name": "Rethink Education",
    "firm": "Rethink Education",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M-$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "revel-partners",
    "name": "Revel Partners",
    "firm": "Revel Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "revent",
    "name": "Revent",
    "firm": "Revent",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Climate",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Climate and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "revolution-rise-of-the-rest",
    "name": "Revolution Rise of the Rest",
    "firm": "Revolution Rise of the Rest",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Washington, DC"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "revolution-ventures",
    "name": "Revolution Ventures",
    "firm": "Revolution Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Washington, DC"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "rho-ventures",
    "name": "Rho Ventures",
    "firm": "Rho Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Media",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rhodium",
    "name": "Rhodium",
    "firm": "Rhodium",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Media and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ribbit-capital",
    "name": "Ribbit Capital",
    "firm": "Ribbit Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "ride-home-fund",
    "name": "Ride Home Fund",
    "firm": "Ride Home Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ride-ventures",
    "name": "Ride Ventures",
    "firm": "Ride Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ridge-ventures",
    "name": "Ridge Ventures",
    "firm": "Ridge Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "riot-ventures",
    "name": "Riot Ventures",
    "firm": "Riot Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "riverpark-ventures",
    "name": "Riverpark Ventures",
    "firm": "Riverpark Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$350K - $12M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "riverside-ventures",
    "name": "Riverside Ventures",
    "firm": "Riverside Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "roble-ventures",
    "name": "Roble Ventures",
    "firm": "Roble Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "robot-ventures",
    "name": "Robot Ventures",
    "firm": "Robot Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rock-health-capital",
    "name": "Rock Health Capital",
    "firm": "Rock Health Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rockies-venture-fund",
    "name": "Rockies Venture Fund",
    "firm": "Rockies Venture Fund",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "root-ventures",
    "name": "Root Ventures",
    "firm": "Root Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rose-tech-ventures",
    "name": "Rose Tech Ventures",
    "firm": "Rose Tech Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Cyber",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rosecliff-ventures",
    "name": "Rosecliff Ventures",
    "firm": "Rosecliff Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rough-draft-ventures",
    "name": "Rough Draft Ventures",
    "firm": "Rough Draft Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rre-ventures",
    "name": "RRE Ventures",
    "firm": "RRE Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "rse-ventures",
    "name": "RSE Ventures",
    "firm": "RSE Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Media",
      "Consumer",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage SaaS and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rtp-ventures",
    "name": "RTP Ventures",
    "firm": "RTP Ventures",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "rubicon-venture-capital",
    "name": "Rubicon Venture Capital",
    "firm": "Rubicon Venture Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "SaaS",
      "Cyber",
      "Consumer",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "runway-venture-partners",
    "name": "Runway Venture Partners",
    "firm": "Runway Venture Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "s-capital",
    "name": "S Capital",
    "firm": "S Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Cyber",
      "Fintech"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "s2g-ventures",
    "name": "S2G Ventures",
    "firm": "S2G Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "salesforce-ventures",
    "name": "Salesforce Ventures",
    "firm": "Salesforce Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "samsung-next",
    "name": "Samsung Next",
    "firm": "Samsung Next",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "santander-innoventures",
    "name": "Santander InnoVentures",
    "firm": "Santander InnoVentures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sapphire-ventures",
    "name": "Sapphire Ventures",
    "firm": "Sapphire Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "sawari-ventures",
    "name": "Sawari Ventures",
    "firm": "Sawari Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sb-opportunity-fund",
    "name": "SB Opportunity Fund",
    "firm": "SB Opportunity Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sbny",
    "name": "SBNY",
    "firm": "SBNY",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "scale-venture-partners",
    "name": "Scale Venture Partners",
    "firm": "Scale Venture Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Foster City, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "schematic-ventures",
    "name": "Schematic Ventures",
    "firm": "Schematic Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "scifi-vc",
    "name": "SciFi VC",
    "firm": "SciFi VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "scifoundersfellowship",
    "name": "SciFoundersFellowship",
    "firm": "SciFoundersFellowship",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$400K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "scout-ventures",
    "name": "Scout Ventures",
    "firm": "Scout Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "scribble-ventures",
    "name": "Scribble Ventures",
    "firm": "Scribble Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$300K - $750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "script-capital",
    "name": "Script Capital",
    "firm": "Script Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "seed-club-ventures",
    "name": "Seed Club Ventures",
    "firm": "Seed Club Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "seedcamp",
    "name": "Seedcamp",
    "firm": "Seedcamp",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Europe",
    "fundSize": "$500M - $1B",
    "checkSize": "$100K-$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "London, UK"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "seedinvest",
    "name": "SeedInvest",
    "firm": "SeedInvest",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "semillero",
    "name": "Semillero",
    "firm": "Semillero",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "senahill",
    "name": "Senahill",
    "firm": "Senahill",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sentiero-ventures",
    "name": "Sentiero Ventures",
    "firm": "Sentiero Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sequoia-capital",
    "name": "Sequoia Capital",
    "firm": "Sequoia Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Consumer",
      "Fintech",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$200M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "sequoia-capital-india",
    "name": "Sequoia Capital India",
    "firm": "Sequoia Capital India",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "Asia",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Bangalore, India"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "seraphim-capital",
    "name": "Seraphim Capital",
    "firm": "Seraphim Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "seven-seven-six",
    "name": "Seven Seven Six",
    "firm": "Seven Seven Six",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "sevenx-ventures",
    "name": "SevenX Ventures",
    "firm": "SevenX Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sheva-vc",
    "name": "Sheva VC",
    "firm": "Sheva VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sheworx",
    "name": "SheWorx",
    "firm": "SheWorx",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "shine-capital",
    "name": "Shine Capital",
    "firm": "Shine Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "shl-capital",
    "name": "SHL Capital",
    "firm": "SHL Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K-$250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Beaverton, OR"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "shrug-capital",
    "name": "Shrug Capital",
    "firm": "Shrug Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sidewalk-labs",
    "name": "Sidewalk Labs",
    "firm": "Sidewalk Labs",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "signalfire",
    "name": "SignalFire",
    "firm": "SignalFire",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "silas-capital",
    "name": "Silas Capital",
    "firm": "Silas Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "silvertech-ventures",
    "name": "SilverTech Ventures",
    "firm": "SilverTech Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "simon-ventures",
    "name": "Simon Ventures",
    "firm": "Simon Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sixthirty",
    "name": "SixThirty",
    "firm": "SixThirty",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sixty8-capital",
    "name": "Sixty8 Capital",
    "firm": "Sixty8 Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "skyview-capital",
    "name": "Skyview Capital",
    "firm": "Skyview Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $75M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "slack-fund",
    "name": "Slack Fund",
    "firm": "Slack Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "slow-ventures",
    "name": "Slow Ventures",
    "firm": "Slow Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$100K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "social-capital",
    "name": "Social Capital",
    "firm": "Social Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "social-impact-capital",
    "name": "Social Impact Capital",
    "firm": "Social Impact Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "social-leverage",
    "name": "Social Leverage",
    "firm": "Social Leverage",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "social-starts",
    "name": "Social Starts",
    "firm": "Social Starts",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "socially-financed",
    "name": "Socially Financed",
    "firm": "Socially Financed",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "softbank-capital",
    "name": "SoftBank Capital",
    "firm": "SoftBank Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "softbank-vision-fund",
    "name": "SoftBank Vision Fund",
    "firm": "SoftBank Vision Fund",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Asia",
    "fundSize": "> $1B",
    "checkSize": "$50M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tokyo, Japan"
      }
    ],
    "thesis": "Investing in Growth stage SaaS and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "sogal-ventures",
    "name": "SoGal Ventures",
    "firm": "SoGal Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sogal-venturesmillennial",
    "name": "SoGal VenturesMillennial",
    "firm": "SoGal VenturesMillennial",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "solon-mack-capital",
    "name": "Solon Mack Capital",
    "firm": "Solon Mack Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sopris-capital",
    "name": "Sopris Capital",
    "firm": "Sopris Capital",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sosa",
    "name": "SOSA",
    "firm": "SOSA",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "soundboard-angel-fund",
    "name": "Soundboard Angel Fund",
    "firm": "Soundboard Angel Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "south-park-commons",
    "name": "South Park Commons",
    "firm": "South Park Commons",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$400K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "spacevc",
    "name": "Space.VC",
    "firm": "Space.VC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Climate",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Austin, TX"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "spacecadet",
    "name": "Spacecadet",
    "firm": "Spacecadet",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Health"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "spark-capital",
    "name": "Spark Capital",
    "firm": "Spark Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "spark-growth-ventures",
    "name": "Spark Growth Ventures",
    "firm": "Spark Growth Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sparkmindvctypically",
    "name": "Sparkmind.vcTypically",
    "firm": "Sparkmind.vcTypically",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "spice-capital",
    "name": "Spice Capital",
    "firm": "Spice Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "spire-capital-partners",
    "name": "Spire Capital Partners",
    "firm": "Spire Capital Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "springbank-collective",
    "name": "Springbank Collective",
    "firm": "Springbank Collective",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "springtide-ventures",
    "name": "SpringTide Ventures",
    "firm": "SpringTide Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "springtime-venturestiny",
    "name": "SpringTime VenturesTiny",
    "firm": "SpringTime VenturesTiny",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$400K - $600K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sprout-group",
    "name": "Sprout Group",
    "firm": "Sprout Group",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "srb-ventures10m",
    "name": "SRB Ventures$10M",
    "firm": "SRB Ventures$10M",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "stageone-ventures",
    "name": "StageOne Ventures",
    "firm": "StageOne Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS",
      "Health"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "starlight-ventures",
    "name": "Starlight Ventures",
    "firm": "Starlight Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "starting-line",
    "name": "Starting Line",
    "firm": "Starting Line",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1.75M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "startup-health",
    "name": "StartUp Health",
    "firm": "StartUp Health",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "startx",
    "name": "StartX",
    "firm": "StartX",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K -$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "starvest-partners",
    "name": "StarVest Partners",
    "firm": "StarVest Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Cyber"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "state-of-mind-ventures",
    "name": "State of Mind Ventures",
    "firm": "State of Mind Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "$50M - $100M",
    "checkSize": "$250K-$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "steadfast-venture-capital",
    "name": "Steadfast Venture Capital",
    "firm": "Steadfast Venture Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "steelsky-ventures",
    "name": "SteelSky Ventures",
    "firm": "SteelSky Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "stellation-capital",
    "name": "Stellation Capital",
    "firm": "Stellation Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "sterlingvc",
    "name": "Sterling.VC",
    "firm": "Sterling.VC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Media",
      "Fintech",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Media and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "storm-ventures",
    "name": "Storm Ventures",
    "firm": "Storm Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "story-ventures",
    "name": "Story Ventures",
    "firm": "Story Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "stout-street-capital",
    "name": "Stout Street Capital",
    "firm": "Stout Street Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "stray-dog-capital",
    "name": "Stray Dog Capital",
    "firm": "Stray Dog Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "streamlined-ventures",
    "name": "Streamlined Ventures",
    "firm": "Streamlined Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "stripes-group",
    "name": "Stripes Group",
    "firm": "Stripes Group",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "struck-capitalfounder",
    "name": "Struck CapitalFounder",
    "firm": "Struck CapitalFounder",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "structure-capital",
    "name": "Structure Capital",
    "firm": "Structure Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "SaaS",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$100K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "studio-vc",
    "name": "Studio VC",
    "firm": "Studio VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sugar-capital",
    "name": "Sugar Capital",
    "firm": "Sugar Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "summit-partners",
    "name": "Summit Partners",
    "firm": "Summit Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$50M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "superangelfund",
    "name": "SuperAngel.Fund",
    "firm": "SuperAngel.Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "supermoon-capital",
    "name": "Supermoon Capital",
    "firm": "Supermoon Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$150K - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "supernode-ventures",
    "name": "Supernode Ventures",
    "firm": "Supernode Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "supernode-ventures-fka-flatiron-investors",
    "name": "Supernode Ventures (FKA Flatiron Investors)",
    "firm": "Supernode Ventures (FKA Flatiron Investors)",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "supply-change-capital",
    "name": "Supply Change Capital",
    "firm": "Supply Change Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "surface-ventures",
    "name": "Surface Ventures",
    "firm": "Surface Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "surround-ventures",
    "name": "Surround Ventures",
    "firm": "Surround Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Media",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K-$5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Media and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "sv-angel",
    "name": "SV Angel",
    "firm": "SV Angel",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$100K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "svg-ventures",
    "name": "SVG Ventures",
    "firm": "SVG Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "swat-equity-partners",
    "name": "SWAT Equity Partners",
    "firm": "SWAT Equity Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "swell-partners",
    "name": "Swell Partners",
    "firm": "Swell Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "symmetrical-ventures",
    "name": "Symmetrical Ventures",
    "firm": "Symmetrical Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "t5-capital",
    "name": "T5 Capital",
    "firm": "T5 Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ta-associates",
    "name": "TA Associates",
    "firm": "TA Associates",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$50M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boston, MA"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "table-management",
    "name": "Table Management",
    "firm": "Table Management",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tangovc",
    "name": "Tango.vc",
    "firm": "Tango.vc",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "target-global",
    "name": "Target Global",
    "firm": "Target Global",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "tau-ventures",
    "name": "Tau Ventures",
    "firm": "Tau Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tcv",
    "name": "TCV",
    "firm": "TCV",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$50M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "team8",
    "name": "Team8",
    "firm": "Team8",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Cyber",
      "SaaS",
      "Fintech"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$5M-$30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Cyber and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "teamworthy-ventures-fka-haystack-partners",
    "name": "Teamworthy Ventures (FKA Haystack Partners)",
    "firm": "Teamworthy Ventures (FKA Haystack Partners)",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "technology-crossover-ventures-tcv",
    "name": "Technology Crossover Ventures (TCV)",
    "firm": "Technology Crossover Ventures (TCV)",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "techstars",
    "name": "Techstars",
    "firm": "Techstars",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$120K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Boulder, CO"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "tectonic-capital",
    "name": "Tectonic Capital",
    "firm": "Tectonic Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tekfen-ventures",
    "name": "Tekfen Ventures",
    "firm": "Tekfen Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "telluride-venture-fund",
    "name": "Telluride Venture Fund",
    "firm": "Telluride Venture Fund",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "telus-pollinator-fund",
    "name": "TELUS Pollinator Fund",
    "firm": "TELUS Pollinator Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "temasek",
    "name": "Temasek",
    "firm": "Temasek",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Generalist",
      "Health"
    ],
    "geography": "Asia",
    "fundSize": "> $1B",
    "checkSize": "$50M-$1B",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Singapore"
      }
    ],
    "thesis": "Investing in Growth stage Generalist and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "ten-eleven-ventures",
    "name": "Ten Eleven Ventures",
    "firm": "Ten Eleven Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ten-vc",
    "name": "Ten VC",
    "firm": "Ten VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tenaya-capital",
    "name": "Tenaya Capital",
    "firm": "Tenaya Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "tenfore-holdings",
    "name": "Tenfore Holdings",
    "firm": "Tenfore Holdings",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tenoneten-venturesbacked",
    "name": "TenOneTen VenturesBacked",
    "firm": "TenOneTen VenturesBacked",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "thayer-street-partners",
    "name": "Thayer Street Partners",
    "firm": "Thayer Street Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "the-council",
    "name": "The Council",
    "firm": "The Council",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "the-fintech-fund",
    "name": "The Fintech Fund",
    "firm": "The Fintech Fund",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Fintech and Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "the-fund",
    "name": "The Fund",
    "firm": "The Fund",
    "stage": [
      "Pre-seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "the-riverside-company",
    "name": "The Riverside Company",
    "firm": "The Riverside Company",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "theventurecity",
    "name": "TheVentureCity",
    "firm": "TheVentureCity",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "third-kind-venture-capital",
    "name": "Third Kind Venture Capital",
    "firm": "Third Kind Venture Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "third-nature",
    "name": "Third Nature",
    "firm": "Third Nature",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "third-prime",
    "name": "Third Prime",
    "firm": "Third Prime",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "third-rock-ventures",
    "name": "Third Rock Ventures",
    "firm": "Third Rock Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "third-sphere",
    "name": "Third Sphere",
    "firm": "Third Sphere",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "thomson-reuters",
    "name": "Thomson Reuters",
    "firm": "Thomson Reuters",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "thrive-capital",
    "name": "Thrive Capital",
    "firm": "Thrive Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "tia-ventures",
    "name": "TIA Ventures",
    "firm": "TIA Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tiger-global",
    "name": "Tiger Global",
    "firm": "Tiger Global",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer",
      "Fintech",
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Consumer and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "tiger-global-management",
    "name": "Tiger Global Management",
    "firm": "Tiger Global Management",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$500M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "tigerlabs",
    "name": "Tigerlabs",
    "firm": "Tigerlabs",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Enterprise",
      "Media",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "time-warner-investments",
    "name": "Time Warner Investments",
    "firm": "Time Warner Investments",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "timon-capitalrespects",
    "name": "Timon CapitalRespects",
    "firm": "Timon CapitalRespects",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tjns-capital",
    "name": "TJNS Capital",
    "firm": "TJNS Capital",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tlv-partners",
    "name": "TLV Partners",
    "firm": "TLV Partners",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Fintech"
    ],
    "geography": "Israel",
    "fundSize": "$200M - $500M",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "todd-rahuls-angel-fund",
    "name": "Todd & Rahul's Angel Fund",
    "firm": "Todd & Rahul's Angel Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A, Growth stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "torch-capital",
    "name": "Torch Capital",
    "firm": "Torch Capital",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Media",
      "Marketplace"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A stage Consumer and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "touchdown-ventures",
    "name": "Touchdown Ventures",
    "firm": "Touchdown Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "Consumer",
      "SaaS",
      "Media"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "town-hall-ventures",
    "name": "Town Hall Ventures",
    "firm": "Town Hall Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "trailhead-capitalinvestor",
    "name": "Trailhead CapitalInvestor",
    "firm": "Trailhead CapitalInvestor",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "trailyn-vc",
    "name": "Trailyn VC",
    "firm": "Trailyn VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "transcendent-holdings",
    "name": "Transcendent Holdings",
    "firm": "Transcendent Holdings",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "transition",
    "name": "Transition",
    "firm": "Transition",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "trgc",
    "name": "TRGC",
    "firm": "TRGC",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Crypto",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Crypto and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "triatomic-capital",
    "name": "Triatomic Capital",
    "firm": "Triatomic Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tribe-capital",
    "name": "Tribe Capital",
    "firm": "Tribe Capital",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $40M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tribec",
    "name": "Tribec",
    "firm": "Tribec",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M-$8M at Series A, $5M-$15M growth stage",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tribeca-venture-partners",
    "name": "Tribeca Venture Partners",
    "firm": "Tribeca Venture Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Enterprise",
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "trousdale-ventures",
    "name": "Trousdale Ventures",
    "firm": "Trousdale Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "true-ventures",
    "name": "True Ventures",
    "firm": "True Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "trust-fund",
    "name": "Trust Fund",
    "firm": "Trust Fund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tuhaye-venture-partners-fka-kiwiventure-partners-i",
    "name": "Tuhaye Venture Partners (FKA KiwiVenture Partners II)",
    "firm": "Tuhaye Venture Partners (FKA KiwiVenture Partners II)",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "turbo-ventures",
    "name": "Turbo Ventures",
    "firm": "Turbo Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer",
      "Marketplace",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K-$100K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer and Marketplace companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tusk-venture",
    "name": "Tusk Venture",
    "firm": "Tusk Venture",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "tusk-ventures",
    "name": "Tusk Ventures",
    "firm": "Tusk Ventures",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Health",
      "Climate",
      "Consumer",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Health and Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "twelve-below",
    "name": "Twelve Below",
    "firm": "Twelve Below",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "twenty",
    "name": "Twenty",
    "firm": "Twenty",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "twine-ventures",
    "name": "Twine Ventures",
    "firm": "Twine Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "two-sigma-ventures",
    "name": "Two Sigma Ventures",
    "firm": "Two Sigma Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "type-one-ventures",
    "name": "Type One Ventures",
    "firm": "Type One Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "ulu-ventures",
    "name": "Ulu Ventures",
    "firm": "Ulu Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "uncommon-capital",
    "name": "Uncommon Capital",
    "firm": "Uncommon Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Marketplace",
      "Consumer",
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise and Marketplace companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "uncork-capital",
    "name": "Uncork Capital",
    "firm": "Uncork Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$500K-$10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "underdog",
    "name": "Underdog",
    "firm": "Underdog",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "underline-ventures",
    "name": "Underline Ventures",
    "firm": "Underline Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "union-square-ventures",
    "name": "Union Square Ventures",
    "firm": "Union Square Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Climate",
      "Crypto",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "university-ventures",
    "name": "University Ventures",
    "firm": "University Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "unpopu",
    "name": "Unpopu",
    "firm": "Unpopu",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "unseen-capital",
    "name": "Unseen Capital",
    "firm": "Unseen Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "unshack",
    "name": "Unshack",
    "firm": "Unshack",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "untapped-capital",
    "name": "Untapped Capital",
    "firm": "Untapped Capital",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "unusual-ventures",
    "name": "Unusual Ventures",
    "firm": "Unusual Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Menlo Park, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "unusual-venturescombining",
    "name": "Unusual VenturesCombining",
    "firm": "Unusual VenturesCombining",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "unwritten-ventures",
    "name": "Unwritten Ventures",
    "firm": "Unwritten Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "upfront-ventures",
    "name": "Upfront Ventures",
    "firm": "Upfront Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $7M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "uphonest-capital",
    "name": "UpHonest Capital",
    "firm": "UpHonest Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "upper90preseries",
    "name": "Upper90Pre-Series",
    "firm": "Upper90Pre-Series",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "upsloap-ventures-fka-galvanize-ventures",
    "name": "Upsloap Ventures (FKA Galvanize Ventures)",
    "firm": "Upsloap Ventures (FKA Galvanize Ventures)",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "upslope-ventures",
    "name": "Upslope Ventures",
    "firm": "Upslope Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $250K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "upstage-ventures",
    "name": "Upstage Ventures",
    "firm": "Upstage Ventures",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "uta-ventures",
    "name": "UTA Ventures",
    "firm": "UTA Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Media",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "v1vc",
    "name": "v1.vc",
    "firm": "v1.vc",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "valar-ventures",
    "name": "Valar Ventures",
    "firm": "Valar Ventures",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "valor-capital-group",
    "name": "Valor Capital Group",
    "firm": "Valor Capital Group",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "valor-ventureslead",
    "name": "Valor VenturesLead",
    "firm": "Valor VenturesLead",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "valuestream-ventures",
    "name": "ValueStream Ventures",
    "firm": "ValueStream Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Fintech",
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vamos-ventures",
    "name": "Vamos Ventures",
    "firm": "Vamos Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vanedge-capitalventure",
    "name": "Vanedge CapitalVenture",
    "firm": "Vanedge CapitalVenture",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "variant",
    "name": "Variant",
    "firm": "Variant",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $750K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vast-ventures",
    "name": "Vast Ventures",
    "firm": "Vast Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "vast-venturesinvestor",
    "name": "Vast VenturesInvestor",
    "firm": "Vast VenturesInvestor",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vaynerrse",
    "name": "Vayner/RSE",
    "firm": "Vayner/RSE",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vc23",
    "name": "VC23",
    "firm": "VC23",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "< $50M",
    "checkSize": "$100K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "venrock",
    "name": "Venrock",
    "firm": "Venrock",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$30M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "venture-university",
    "name": "Venture University",
    "firm": "Venture University",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "ventures",
    "name": "Ventures",
    "firm": "Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "venturesouq",
    "name": "VentureSouq",
    "firm": "VentureSouq",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "verity-venture",
    "name": "Verity Venture",
    "firm": "Verity Venture",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "verizon-5g-labs",
    "name": "Verizon 5G Labs",
    "firm": "Verizon 5G Labs",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "verizon-ventures",
    "name": "Verizon Ventures",
    "firm": "Verizon Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "SaaS",
      "Media",
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage SaaS and Media companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "versant-ventures",
    "name": "Versant Ventures",
    "firm": "Versant Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vertex-ventures",
    "name": "Vertex Ventures",
    "firm": "Vertex Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vertex-ventures-hc",
    "name": "Vertex Ventures HC",
    "firm": "Vertex Ventures HC",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health",
      "Generalist"
    ],
    "geography": "Israel",
    "fundSize": "$500M - $1B",
    "checkSize": "$1M-$20M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Health and Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "vertex-ventures-israel",
    "name": "Vertex Ventures Israel",
    "firm": "Vertex Ventures Israel",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Generalist",
      "Cyber"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$500K-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Generalist and Cyber companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "vestigo-ventures",
    "name": "Vestigo Ventures",
    "firm": "Vestigo Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vibe-capital",
    "name": "Vibe Capital",
    "firm": "Vibe Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "village-global",
    "name": "Village Global",
    "firm": "Village Global",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$200K-$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "vine-venturespositions",
    "name": "Vine VenturesPositions",
    "firm": "Vine VenturesPositions",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vintage-investment-partners",
    "name": "Vintage Investment Partners",
    "firm": "Vintage Investment Partners",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "viola-growth",
    "name": "Viola Growth",
    "firm": "Viola Growth",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$10M-$100M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Herzliya, Israel"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "viola-ventures",
    "name": "Viola Ventures",
    "firm": "Viola Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise",
      "Fintech",
      "Health"
    ],
    "geography": "Israel",
    "fundSize": "> $1B",
    "checkSize": "$5M-$50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Tel Aviv, Israel"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise and Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "virtue-vc",
    "name": "Virtue VC",
    "firm": "Virtue VC",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "visible-hands",
    "name": "Visible Hands",
    "firm": "Visible Hands",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $175K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "visible-ventures",
    "name": "Visible Ventures",
    "firm": "Visible Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vol1-ventures",
    "name": "Vol.1 Ventures",
    "firm": "Vol.1 Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "volo-earth-ventures",
    "name": "Volo Earth Ventures",
    "firm": "Volo Earth Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "volt-capital",
    "name": "Volt Capital",
    "firm": "Volt Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "voyager",
    "name": "Voyager",
    "firm": "Voyager",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "vu-venture",
    "name": "VU Venture",
    "firm": "VU Venture",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$200K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wachter-capital-partners",
    "name": "Wachter Capital Partners",
    "firm": "Wachter Capital Partners",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "walkabout-venturesusfocused",
    "name": "Walkabout VenturesU.S.-focused",
    "firm": "Walkabout VenturesU.S.-focused",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wamventures",
    "name": "WAMVentures",
    "firm": "WAMVentures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "warburg-pincus",
    "name": "Warburg Pincus",
    "firm": "Warburg Pincus",
    "stage": [
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Health",
      "Consumer",
      "Media",
      "Climate"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Growth stage Fintech and Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "watertower-ventures",
    "name": "Watertower Ventures",
    "firm": "Watertower Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wave-capital",
    "name": "Wave Capital",
    "firm": "Wave Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$25K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wavemaker",
    "name": "Wavemaker",
    "firm": "Wavemaker",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $2.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wavemaker-360-health",
    "name": "Wavemaker 360 Health",
    "firm": "Wavemaker 360 Health",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wavemaker-genesis",
    "name": "Wavemaker Genesis",
    "firm": "Wavemaker Genesis",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "SaaS",
      "Crypto"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage SaaS and Crypto companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "waverley-capital",
    "name": "Waverley Capital",
    "firm": "Waverley Capital",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$500K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wayfinder-ventures",
    "name": "Wayfinder Ventures",
    "firm": "Wayfinder Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K-$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "San Francisco, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "weekend-fund",
    "name": "Weekend Fund",
    "firm": "Weekend Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $300K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wellington-access-ventures",
    "name": "Wellington Access Ventures",
    "firm": "Wellington Access Ventures",
    "stage": [
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$5M - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "white-owl-ventures",
    "name": "White Owl Ventures",
    "firm": "White Owl Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Climate"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Climate companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "white-star-capital",
    "name": "White Star Capital",
    "firm": "White Star Capital",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech"
    ],
    "geography": "US",
    "fundSize": "$200M - $500M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "top-tier"
  },
  {
    "id": "willow-growth",
    "name": "Willow Growth",
    "firm": "Willow Growth",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $1.25M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "windforce-ventures",
    "name": "Windforce Ventures",
    "firm": "Windforce Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Media",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Media and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "windham-venture",
    "name": "Windham Venture",
    "firm": "Windham Venture",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "windham-venture-partners",
    "name": "Windham Venture Partners",
    "firm": "Windham Venture Partners",
    "stage": [
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Health"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Series A, Growth stage Health companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wing-venture-capital",
    "name": "Wing Venture Capital",
    "firm": "Wing Venture Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$1M-$15M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Palo Alto, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "winklevoss-capital",
    "name": "Winklevoss Capital",
    "firm": "Winklevoss Capital",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wireframe-ventures",
    "name": "Wireframe Ventures",
    "firm": "Wireframe Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wischoff-ventures",
    "name": "Wischoff Ventures",
    "firm": "Wischoff Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$750K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wndrco",
    "name": "WndrCo",
    "firm": "WndrCo",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wocstar-fund",
    "name": "WOCstar Fund",
    "firm": "WOCstar Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wonder-ventures",
    "name": "Wonder Ventures",
    "firm": "Wonder Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "workbench",
    "name": "Work-Bench",
    "firm": "Work-Bench",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$3M-$6M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "workbench",
    "name": "Workbench",
    "firm": "Workbench",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Enterprise"
    ],
    "geography": "US",
    "fundSize": "$50M - $100M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "worklife-ventures",
    "name": "Worklife Ventures",
    "firm": "Worklife Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "Developer Tools"
    ],
    "geography": "US",
    "fundSize": "< $50M",
    "checkSize": "$2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Los Angeles, CA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "emerging"
  },
  {
    "id": "world-fundeuropean",
    "name": "World FundEuropean",
    "firm": "World FundEuropean",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $10M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "worldquant-ventures",
    "name": "WorldQuant Ventures",
    "firm": "WorldQuant Ventures",
    "stage": [
      "Seed",
      "Series A",
      "Growth"
    ],
    "sectors": [
      "Fintech",
      "Enterprise",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A, Growth stage Fintech and Enterprise companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "wxr-fund",
    "name": "WXR Fund",
    "firm": "WXR Fund",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "xfactor-ventures",
    "name": "XFactor Ventures",
    "firm": "XFactor Ventures",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $200K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "xrc-labs",
    "name": "XRC Labs",
    "firm": "XRC Labs",
    "stage": [
      "Seed"
    ],
    "sectors": [
      "Consumer",
      "SaaS"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed stage Consumer and SaaS companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "xyz-venture-capital",
    "name": "XYZ Venture Capital",
    "firm": "XYZ Venture Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$10K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "y-combinator",
    "name": "Y Combinator",
    "firm": "Y Combinator",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Enterprise",
      "Consumer",
      "SaaS",
      "Fintech",
      "Health"
    ],
    "geography": "US",
    "fundSize": "> $1B",
    "checkSize": "$500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "Mountain View, CA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "elite"
  },
  {
    "id": "yes-vc",
    "name": "Yes VC",
    "firm": "Yes VC",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$30K - $1.5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "yl-ventures",
    "name": "YL Ventures",
    "firm": "YL Ventures",
    "stage": [
      "Seed",
      "Growth"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$100K - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Growth stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zane-ventures",
    "name": "Zane Ventures",
    "firm": "Zane Ventures",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$50K - $500K",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zeal-capital",
    "name": "Zeal Capital",
    "firm": "Zeal Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $2M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zeev-ventures",
    "name": "Zeev Ventures",
    "firm": "Zeev Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$20M - $50M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zelkova-ventures",
    "name": "Zelkova Ventures",
    "firm": "Zelkova Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Enterprise",
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Enterprise and Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zendaconcentrated-24",
    "name": "ZendaConcentrated 2–4",
    "firm": "ZendaConcentrated 2–4",
    "stage": [
      "Pre-seed",
      "Seed"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $1M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zhenfund",
    "name": "ZhenFund",
    "firm": "ZhenFund",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$250K - $3M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zigg-capital",
    "name": "Zigg Capital",
    "firm": "Zigg Capital",
    "stage": [
      "Pre-seed",
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Generalist"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$4M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "USA"
      }
    ],
    "thesis": "Investing in Pre-seed, Seed, Series A stage Generalist companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  },
  {
    "id": "zx-ventures",
    "name": "ZX Ventures",
    "firm": "ZX Ventures",
    "stage": [
      "Seed",
      "Series A"
    ],
    "sectors": [
      "Consumer"
    ],
    "geography": "US",
    "fundSize": "$100M - $200M",
    "checkSize": "$1M - $5M",
    "fundNumber": "Fund",
    "gps": [
      {
        "name": "Managing Partner",
        "background": "New York, NY"
      }
    ],
    "thesis": "Investing in Seed, Series A stage Consumer companies",
    "notablePortfolio": [],
    "lpFit": [
      "Family Office",
      "Fund of Funds"
    ],
    "tier": "established"
  }
];

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
