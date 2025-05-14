# GPT Tutor Lite

Next.js + Tailwind CSS による GUI教材生成アプリの簡易バージョン。

---

## 📌 概要

本アプリは、教科・学年・単元を入力すると、GPTを活用して教材の要点とクイズを自動生成します。

- 教材作成の時間を大幅に短縮
- 簡単操作の教育者向けツール
- LP（gpt-lite-landing）と連携して公開可能

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
│ └ ui/            # UIパーツ（Button, Card など）
├ public/          # OGP画像・ファビコン（追加推奨）
├ tailwind.config.js
├ postcss.config.js
├ tsconfig.json
└ README.md
```

---

## 📸 OGP画像の推奨配置

以下のような画像を `public/` に配置してください：

```
public/
├ ogp.png
└ favicon.ico
```

対応metaタグ例（`app/layout.tsx` または `<Head>` 内）：

```tsx
<meta property="og:image" content="/ogp.png" />
<link rel="icon" href="/favicon.ico" />
```

---

## 🌐 公開・連携

このGUIアプリは LP（gpt-lite-landing）と連携し、以下のように展開できます：

- GUIアプリ：`https://gpt-tutor-lite.vercel.app`
- LPページ：`https://gpt-lite.vercel.app`

---

## 📄 ライセンス
MIT License / 商用利用OK
