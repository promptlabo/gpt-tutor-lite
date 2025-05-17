"use client";

import React, { useEffect, useState } from "react";
import UpgradeSectionA from "./UpgradeSectionA";
import UpgradeSectionB from "./UpgradeSectionB";

// === gtag 型定義 ===
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const VARIANT_KEY = "upgrade_section_variant";
type Variant = "A" | "B";

function getOrSetVariant(): Variant {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(VARIANT_KEY);
    if (saved === "A" || saved === "B") return saved;

    const variant: Variant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem(VARIANT_KEY, variant);
    return variant;
  }
  return "A";
}

export default function UpgradeEntry() {
  const [variant, setVariant] = useState<Variant>("A");

  useEffect(() => {
    const selected = getOrSetVariant();
    setVariant(selected);

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "view_upgrade_section", {
        variant: selected,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return variant === "A" ? <UpgradeSectionA /> : <UpgradeSectionB />;
}
