import React, { useEffect, useState } from "react";
import UpgradeSectionA from "./UpgradeSectionA";
import UpgradeSectionB from "./UpgradeSectionB";

// === gtag 型定義追加 ===
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// 定数：localStorageキー
const VARIANT_KEY = "upgrade_section_variant";

// バリアントの型
type Variant = "A" | "B";

/**
 * バリアント決定関数：
 * - 既にlocalStorageに保存されていればそれを使う
 * - なければランダムに決定して保存
 */
function getOrSetVariant(): Variant {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(VARIANT_KEY);
    if (saved === "A" || saved === "B") return saved;

    const variant: Variant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem(VARIANT_KEY, variant);
    return variant;
  }
  return "A"; // SSR用フォールバック
}

export default function UpgradeEntry() {
  const [variant, setVariant] = useState<Variant>("A");

  useEffect(() => {
    const selected = getOrSetVariant();
    setVariant(selected);

    // === イベントトラッキング（Google Analyticsの例）===
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "view_upgrade_section", {
        variant: selected,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return variant === "A" ? <UpgradeSectionA /> : <UpgradeSectionB />;
}
