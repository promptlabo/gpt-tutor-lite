// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  ...
  openGraph: {
    images: [
      {
        url: "/ogp_common.png", // ← Facebook・LINE等用
        width: 1200,
        height: 630,
        alt: "GPT教材生成Lite版 OGP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT教材生成Lite版｜たった3分で教材作成完了",
    description: "教科・学年・単元を入れるだけ。GPTが教材とクイズを3分で自動生成！",
    images: ["/ogp_twitter.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* ✅ Googleタグマネージャー（gtag.js）本番IDで設定済み */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-933468720" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-933468720');
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
