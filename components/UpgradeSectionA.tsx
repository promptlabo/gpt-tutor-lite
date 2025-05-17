"use client";

import React from "react";

export default function UpgradeSectionA() {
  const handleClick = (label: string) => {
  console.log("✅ clicked!", label);

  const url = "https://www.google.com";
  let callbackFired = false;

  const openWindow = () => {
    if (!callbackFired) {
      callbackFired = true;
      console.log("🏁 callback fired! opening window...");
      window.open(url, "_blank");
    }
  };

  // GAが使えるならイベント送信
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    console.log("📤 sending GA event...");
    
    // 1 tick 遅らせて呼び出す（初期化レース回避）
    setTimeout(() => {
      window.gtag!("event", "click_upgrade_cta", {
        event_category: "engagement",
        event_label: label,
        variant: "A",
        event_callback: openWindow,
      });
    }, 0);

    // 保険：2秒以内に callback が呼ばれなければ open
    setTimeout(openWindow, 2000);
  } else {
    console.log("⚠️ gtag not available, fallback triggered.");
    openWindow();
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
