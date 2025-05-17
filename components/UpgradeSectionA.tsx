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

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      console.log("📤 sending GA event...");
      window.gtag("event", "click_upgrade_cta", {
        send_to: "G-T4RPWCC8RB",
        event_category: "engagement",
        event_label: label,
        variant: "A",
        event_callback: openWindow,
      });
      setTimeout(openWindow, 2000);
    } else {
      console.log("⚠️ gtag not available, opening window");
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
