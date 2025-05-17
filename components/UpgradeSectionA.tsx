"use client";

import React from "react";

export default function UpgradeSectionA() {
  const handleClick = (label: string) => {
  console.log("✅ clicked!", label);

  const url = "https://www.google.com";

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    console.log("📤 sending GA event...");

    window.gtag("event", "click_upgrade_cta", {
      event_category: "engagement",
      event_label: label,
      variant: "A", // or B
    });

    // 300ms遅延でウィンドウを開く（確実にGAが送信されるように）
    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  } else {
    console.log("⚠️ gtag not available, fallback triggered.");
    window.open(url, "_blank");
  }
};

  return (
    <section className="p-8">
      <h2 className="text-xl font-bold mb-4">Lite版のご利用、ありがとうございました！</h2>
      <button
        onClick={() => handleClick("正式版はこちら")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        正式版はこちら
      </button>
    </section>
  );
}
