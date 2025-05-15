// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  metadataBase: new URL("https://gpt-tutor-lite.vercel.app"),
  title: "GPT Tutor Lite",
  description: "教科・学年・単元を入れるだけ。GPTが教材とクイズを3分で自動生成！",
  openGraph: {
    title: "GPT教材生成Lite版｜たった3分で教材作成完了",
    description: "教科・学年・単元を入力するだけ。GPTが教材とクイズを3分で自動生成！",
    url: "https://gpt-tutor-lite.vercel.app/",
    siteName: "GPT Tutor Lite",
    images: [
      {
        url: "/ogp_common.png",
        width: 1200,
        height: 630,
        alt: "GPT教材生成Lite版 OGP画像",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT教材生成Lite版｜たった3分で教材作成完了",
    description: "教科・学年・単元を入力するだけ。GPTが教材とクイズを3分で自動生成！",
    images: [
      {
        url: "/ogp_twitter.png",
        width: 1200,
        height: 630,
        alt: "GPT教材生成Lite版 Twitter用 OGP",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
