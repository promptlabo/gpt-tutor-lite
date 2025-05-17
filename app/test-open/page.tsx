"use client";

import { useEffect } from "react";

// ✅ 型定義（gtag/dataLayer を使うため）
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function TestOpenPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // gtag 初期化
      window.dataLayer = window.dataLayer || [];
      window.gtag = gtag;
      console.log("🧪 gtag manually injected");

      // ✅ テストイベントを5回送信（1秒おき）
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          console.log(`📤 Sending click_test_button #${i}`);
          window.gtag?.("event", "click_test_button", {
            event_category: "test",
            event_label: `test-click-${i}`,
          });
        }, i * 1000);
      }
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">自動送信テスト中</h1>
      <p>このページを開くと GA4 に <code>click_test_button</code> イベントが 5 回送信されます。</p>
    </div>
  );
}
