import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "GPT Tutor Lite",
  description: "3分で教材生成 - Lite版GPT体験",
  openGraph: {
    title: "GPT教材生成Lite版｜たった3分で教材作成完了",
    description: "教科・学年・単元を入力するだけ。GPTが教材とクイズを自動生成！無料で体験できます。",
    url: "https://gpt-tutor-lite.vercel.app",
    siteName: "GPT Tutor Lite",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "GPT教材生成Lite版 OGP画像",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
