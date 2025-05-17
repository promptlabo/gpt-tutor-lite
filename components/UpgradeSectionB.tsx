import React from "react";

export default function UpgradeSectionB() {
  const catchPhrases = [
    "もう一歩、先生の授業づくりが変わる。",
    "Lite版で満足できた方へ、次のステップをご提案。",
    "ICTに不安がある先生にも、安心して使える正式版。"
  ];

  const specialOffers = [
    "すぐに使える教材テンプレート10種",
    "画面つき操作マニュアルつきで安心",
    "現場で役立つプロンプト設計集を収録"
  ];
  
  // ✅ クリックイベントで GA に送信
  const handleClick = (label: string) => {
  console.log("✅ clicked!", label);

  const url = "https://gpt-lite.vercel.app";
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
      event_category: "engagement",
      event_label: label,
      variant: "B",
      event_callback: openWindow,
    });

    // フォールバック：1.5秒後に window.open を実行（保険）
    setTimeout(openWindow, 1500);
  } else {
    console.log("⚠️ gtag not found. fallback triggered.");
    openWindow();
  }
};

  return (
    <>
      {/* セクション1：キャッチコピー＋導入 */}
      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-xl font-bold mb-2">{catchPhrases[0]}</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Lite版を使って「もっとできたらいいのに」と感じた方へ</li>
          <li>正式版は、現場での使いやすさを第一に考えて作られました</li>
          <li>「難しそう…」という不安にも丁寧に寄り添います</li>
        </ul>
      </section>

      {/* セクション2：機能比較表 */}
      <section className="bg-white p-6 rounded-2xl shadow-md mb-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-3">Lite版と正式版の違い</h3>
        <table className="min-w-full text-sm border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">機能</th>
              <th className="px-4 py-2 border">Lite版</th>
              <th className="px-4 py-2 border">正式版</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">教材の自動生成</td>
              <td className="px-4 py-2 border">〇</td>
              <td className="px-4 py-2 border">〇</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border">PDFで保存</td>
              <td className="px-4 py-2 border">×</td>
              <td className="px-4 py-2 border">〇</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">応答型クイズ</td>
              <td className="px-4 py-2 border">×</td>
              <td className="px-4 py-2 border">〇</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border">テンプレ自由編集</td>
              <td className="px-4 py-2 border">×</td>
              <td className="px-4 py-2 border">〇</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* セクション3：特典紹介 */}
      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">正式版だけの特典</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {specialOffers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </section>

      {/* セクション4：CTA */}
      <section className="bg-white p-6 rounded-2xl shadow-md text-center">
        <p className="text-sm text-gray-700 mb-4">
          まずは内容をじっくりご確認ください
        </p>
        <div className="space-y-2">
          <button
            onClick={() => handleClick("正式版はこちら")}
            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
            aria-label="CTA: 正式版はこちら"
            >
            正式版はこちら
          </button>
        </div>
      </section>
    </>
  );
}
