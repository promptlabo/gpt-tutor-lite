"use client";

import React from "react";

export default function UpgradeSectionB() {
  const handleClick = () => {
  console.log("✅ clicked!");
  console.log("typeof gtag:", typeof window.gtag);

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_upgrade_cta");
    console.log("📤 GA event sent!");
  } else {
    console.warn("⚠️ gtag not available");
  }

  window.open("https://www.google.com", "_blank");
      }
    };

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      console.log("📤 sending GA event...");
      window.gtag("event", "click_upgrade_cta");
      setTimeout(openWindow, 2000);
    } else {
      console.log("⚠️ gtag not found. fallback triggered.");
      openWindow();
    }
  };

  return (
    <section className="p-8">
      <h2 className="text-xl font-bold mb-4">正式版でできることを体験してください</h2>
      <button
        onClick={() => handleClick("正式版はこちら")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        正式版はこちら
      </button>
    </section>
  );
}
