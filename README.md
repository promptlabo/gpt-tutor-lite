# GPT Tutor Lite

GPTを活用して教材を自動生成できるGUIアプリ（Lite版）です。

## 🧪 デモURL
👉 https://gpt-tutor-lite.vercel.app

---

## 📌 概要

- 教科・学年・単元を入力するだけで、要点＋クイズを自動生成
- 使いやすいGUIで教育現場の教材準備を効率化
- LPテンプレート（gpt-lite-landing）と連携可能

---

## 🚀 セットアップ手順

```bash
# クローン
git clone https://github.com/promptlabo/gpt-tutor-lite.git
cd gpt-tutor-lite

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発環境：`http://localhost:3000`

> ※ `.env` などでAPIキーなどが必要な場合は別途記述してください（現在は不要）

---

## 🖥️ カスタマイズ方法

| カスタマイズ項目   | 編集ファイル                             | 備考                     |
|------------------|----------------------------------------|--------------------------|
| タイトル文言      | `components/HeroSection.tsx`           | 最初に表示される見出し     |
| LINE登録リンク   | `HeroSection.tsx` 内の `href` 属性     | LP誘導などに使用          |
| 出力サンプル内容  | `components/SampleSection.tsx`         | 単元・クイズを変更可能      |

> 各ファイルに `// ここを変更` コメントを追加済み（読みやすさ重視）

---

## 🗂 ディレクトリ構成

```
gpt-tutor-lite/
├ app/                  # App Routerベース
│ ├ layout.tsx          # 共通レイアウト・metaタグ
│ ├ page.tsx            # GUI教材生成ページ
├ components/
│ └ ui/                 # ボタン・入力など再利用UI部品
├ public/               # OGP画像やファビコン配置用（追加推奨）
│ ├ ogp.png
│ └ favicon.ico
├ styles/
│ └ globals.css         # Tailwind共通スタイル
├ tailwind.config.js
├ tsconfig.json
├ postcss.config.js
└ README.md（このファイル）
```

---

## 🌐 Vercelで公開する

1. GitHubと連携して `Import Project`
2. Framework: `Next.js` を選択
3. `npm run build` が通ればそのまま公開されます

---

## 📄 ライセンス
MIT License / 商用利用OK

---

## 🛠 関連LPテンプレート
- [gpt-lite-landing (LP用テンプレ)](https://github.com/promptlabo/gpt-lite-landing)
- LPとGUIを分離運用することでメンテナンス性と拡張性を高めています
