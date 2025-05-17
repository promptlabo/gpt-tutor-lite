// ✅ UpgradeEntry.tsx
import React, { useEffect, useState } from "react";
import UpgradeSectionA from "./UpgradeSectionA";
import UpgradeSectionB from "./UpgradeSectionB";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type Variant = "A" | "B";
const VARIANT_KEY = "upgrade_section_variant";

function getOrSetVariant(): Variant {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(VARIANT_KEY);
    if (saved === "A" || saved === "B") return saved;

    const variant: Variant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem(VARIANT_KEY, variant);
    return variant;
  }
  return "A"; // SSR fallback
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

  return (
    <>
      <p style={{
        position: 'fixed', top: 0, right: 0, background: '#eee',
        fontSize: '12px', padding: '4px', zIndex: 9999
      }}>
        現在のバリアント: {variant}
      </p>
      {variant === "A" ? <UpgradeSectionA /> : <UpgradeSectionB />}
    </>
  );
}
