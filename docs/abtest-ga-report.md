# 📊 A/Bテスト導線の実装・計測報告（GPT Tutor Lite）

## 🎯 概要

- **対象アプリ**：[`https://gpt-tutor-lite.vercel.app`](https://gpt-tutor-lite.vercel.app)
- **目的**：正式版アップグレード導線のA/Bテストによる効果検証
- **実施内容**：
  - UIバリアント（A/B）のランダム表示
  - 表示バリアントを `localStorage` に保存
  - 表示完了時に Google Analytics 4 にイベント送信

---

## 🛠 実装概要

### 1. バリアント選定・保存（`UpgradeEntry.tsx`）

```ts
const variant: Variant = Math.random() < 0.5 ? "A" : "B";
localStorage.setItem("upgrade_section_variant", variant);
```

### 2. イベント送信（GA4）

```ts
window.gtag("event", "view_upgrade_section", {
  variant: selected,                    // A or B
  page_path: window.location.pathname, // ページパス
});
```

### 3. GAスニペット（`app/layout.tsx`）

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-T4RPWCC8RB"
  strategy="afterInteractive"
/>
<Script id="ga-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-T4RPWCC8RB');
  `}
</Script>
```

---

## ✅ 計測ステータス（確認済）

| チェック項目        | 状況                                         |
|---------------------|----------------------------------------------|
| GAタグ読み込み       | ✅ `gtag/js?id=G-T4RPWCC8RB` 読み込み済み     |
| イベント発火         | ✅ `view_upgrade_section` が2回以上発火       |
| ステータスコード     | ✅ `204`（成功）                             |
| パラメータ送信       | ✅ `variant`, `page_path` が正しく送信        |
| Initiator確認        | ✅ `js?id=G-T4RPWCC8RB:198`（GAスクリプト発火）|

---

## 🔁 次のステップ提案

- CTAボタンにイベント追加：例）`click_upgrade_cta`
- GAイベント構造の標準化：イベント名やパラメータ命名ルールの整理
- MixpanelやFirebaseとの併用トラッキングの検討

---

## 📝 備考

- 本機能は `gpt-lite-landing` に統合可能です。
- GA側のイベント反映には最大24時間かかる可能性があります。

---

## 📦 推奨保存＆展開方法

| 方法                                      | 理由                               |
| --------------------------------------- | -------------------------------- |
| `/docs/abtest-ga-report.md`としてGitHubに保存 | 長期アーカイブ／再利用／外注共有に最適              |
| READMEやWikiにリンク追加                       | チームメンバーや共同開発者の可視性向上              |
| 他テンプレ（例：教育GPT販売）への転用素材に                 | 「GPTアプリにA/B＋GAを導入したい人」への価値提供に使える |

