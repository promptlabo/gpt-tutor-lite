import React from "react";

export default function UpgradeSectionA() {
  const catchPhrases = [
    "Lite版、使ってみてどうでしたか？",
    "忙しい先生こそ、もっとラクに。"
  ];

  const benefits = [
    "10種類の教材テンプレートで準備時間を短縮",
    "すぐ使える操作マニュアル付きで安心",
    "プロのノウハウが詰まったプロンプト設計集を同封"
  ];

  const ctaTexts = [
    "正式版を見る",
    "今すぐアップグレード",
    "LINEで相談する"
  ];

  return (
    <>
      {/* セクション1：キャッチコピー＋共感導入 */}
      <section className="px-4 py-6 bg-white text-gray-800">
        <h2 className="text-xl font-semibold mb-2">{catchPhrases[0]}</h2>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>「もっと自由に教材をつくれたら…」</li>
          <li>「授業準備に時間がかかって大変…」</li>
          <li>Lite版で感じた“あと一歩”を、正式版がサポートします。</li>
        </ul>
      </section>

      {/* セクション2：機能比較表 */}
      <section className="px-4 py-6 bg-gray-50 text-gray-800">
        <h2 className="text-lg font-semibold mb-3">Lite版と正式版の違い</h2>
        <p className="text-xs text-gray-600 mb-2">※スマホでは表を横にスクロールしてご覧ください</p>
        <div className="overflow-auto">
          <table className="table-auto border-collapse w-full text-sm">
            <thead>
              <tr>
                <th className="border px-2 py-1 bg-gray-200 text-left">機能</th>
                <th className="border px-2 py-1 bg-gray-100 text-center">Lite版</th>
                <th className="border px-2 py-1 bg-gray-100 text-center">正式版</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">教材テンプレート数</td>
                <td className="border px-2 py-1 text-center">1種</td>
                <td className="border px-2 py-1 text-center">10種</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">PDF出力機能</td>
                <td className="border px-2 py-1 text-center">なし</td>
                <td className="border px-2 py-1 text-center">あり</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">対話型クイズ</td>
                <td className="border px-2 py-1 text-center">なし</td>
                <td className="border px-2 py-1 text-center">あり</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">テンプレ自由編集</td>
                <td className="border px-2 py-1 text-center">一部対応</td>
                <td className="border px-2 py-1 text-center">自由自在</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* セクション3：特典紹介 */}
      <section className="px-4 py-6 bg-white text-gray-800">
        <h2 className="text-lg font-semibold mb-2">正式版だけの安心サポート</h2>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* セクション4：CTAボタン */}
      <section className="px-4 py-6 bg-blue-50 text-center">
        <p className="text-sm mb-3">迷ったらまずは特典内容をチェック！</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          {ctaTexts.map((text, index) => (
            <button
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              aria-label={text}
            >
              {text}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}