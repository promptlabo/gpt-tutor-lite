# GPT Tutor Lite

Next.js + Tailwind CSS による GUI教材生成アプリの簡易バージョン。

---

## 📌 概要

本アプリは、教科・学年・単元を入力すると、GPTを活用して教材の要点とクイズを自動生成します。

* 教材作成の時間を大幅に短縮
* 簡単操作の教育者向けツール
* LP（gpt-lite-landing）と連携して公開可能

---

## 🚀 セットアップ

```bash
# クローン
git clone https://github.com/promptlabo/gpt-tutor-lite.git
cd gpt-tutor-lite

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

開発環境 → `http://localhost:3000`

---

## 🗂 ディレクトリ構成（App Router）

```
gpt-tutor-lite/
├ app/
│ ├ layout.tsx     # アプリ共通レイアウト
│ ├ page.tsx       # トップページ（GUI）
│ └ globals.css    # グローバルスタイル
├ components/
│ ├ ui/            # UIパーツ（Button, Card など）
│ ├ UpgradeEntry.tsx       # A/B分岐ロジック（localStorageで固定）
│ ├ UpgradeSectionA.tsx    # バリエーションA：共感導入型
│ └ UpgradeSectionB.tsx    # バリエーションB：機能訴求型
├ public/          # OGP画像・ファビコン
├ tailwind.config.js
├ postcss.config.js
├ tsconfig.json
└ README.md
```

---

## 🔀 アップグレード導線（A/Bテスト対応）

Lite版から正式版への誘導率向上を目的に、2種類の導線をランダムに表示・固定する仕組みを導入。

### 特徴

* 初回のみ "A" または "B" をランダム選択し、`localStorage` に保存
* 再訪問でも同じ導線が表示されるためA/Bテストの整合性を確保
* Google Analytics / Mixpanel 等の計測イベント送信も可能

### 使用コンポーネント

* `UpgradeEntry.tsx`: 分岐・保持・イベント処理を担うエントリ
* `UpgradeSectionA.tsx`: 共感導入型レイアウト（自由編集可）
* `UpgradeSectionB.tsx`: 機能訴求型レイアウト（自由編集可）

### トラッキング例（任意）

```ts
window.gtag?.("event", "view_upgrade_section", {
  variant: "A" or "B",
  page_path: window.location.pathname,
});

// Mixpanel使用例
window.mixpanel?.track("View Upgrade Section", { variant: "A" or "B" });
```

---

## 🖼 使用イメージ（SNSシェア用）

![GPT教材生成Lite - OGP](./public/ogp_common.png)

---

## 📸 OGP画像の推奨配置

```
public/
├ ogp_common.png       # Facebook / LINE / Discord 用
├ ogp_twitter.png      # Twitter用（URL削除版）
├ favicon.ico
```

metaタグ例：

```tsx
<meta property="og:image" content="/ogp_common.png" />
<meta name="twitter:image" content="/ogp_twitter.png" />
<link rel="icon" href="/favicon.ico" />
```

---

## 🌐 公開・連携

* GUIアプリ：`https://gpt-tutor-lite.vercel.app`
* LPページ：`https://gpt-lite.vercel.app`

---

## 📄 ライセンス

MIT License / 商用利用OK

---

## 📊 実装後レポート（2025年5月16日 時点）

### GA上の自動計測イベント確認

| イベント名             | イベント数 | 総ユーザー数 | アクティブユーザーあたりのイベント数 |
| ----------------- | ----- | ------ | ------------------ |
| `page_view`       | 9     | 3      | 3.00               |
| `scroll`          | 8     | 3      | 2.67               |
| `user_engagement` | 6     | 1      | 6.00               |
| `first_visit`     | 3     | 3      | 1.00               |
| `session_start`   | 3     | 3      | 1.00               |

> ※ 上記はいずれも GA4 における「拡張計測機能」による自動イベントとして発火していることを確認済み。

また、A/B導線のトラッキングイベント（`view_upgrade_section`）も `window.gtag()` 経由で正常に送信されていることを DevTools > Network > `collect?...` より確認。

確認方法：

* DevTools → Network → `collect` を検索
* `gtag/js?id=...` のリクエストが存在
* 該当イベントの送信と一致するタイミングで `fetch` リクエストが発生

---

今後：本レポートを `/docs/abtest-ga-report.md` に記録・更新し、READMEやWikiからもリンク可能とすることで、再利用性・共有性を高める。
