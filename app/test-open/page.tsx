"use client";

import { useEffect } from "react";

export default function TestOpenPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ 型の追加：dataLayer を window に明示的に定義
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      console.log("🧪 injected gtag manually");
    }
  }, []);

  const handleClick = () => {
    console.log("✅ clicked!");
    if (typeof window.gtag === "function") {
      console.log("📤 sending GA event...");
      window.gtag("event", "click_test_button", {
        event_category: "test",
        event_label: "test-click",
      });
    }
    window.open("https://www.google.com", "_blank");
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">テスト：Googleに遷移するか？</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleClick}
      >
        Googleへ（テスト）
      </button>
    </div>
  );
}
