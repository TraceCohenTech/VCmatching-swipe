"use client";

import { useApp } from "./context/AppContext";
import LPForm from "./components/LPForm";
import SwipeInterface from "./components/SwipeInterface";
import DeckView from "./components/DeckView";

export default function Home() {
  const { currentStep } = useApp();

  return (
    <main>
      {currentStep === "form" && <LPForm />}
      {currentStep === "swipe" && <SwipeInterface />}
      {currentStep === "deck" && <DeckView />}
    </main>
  );
}
