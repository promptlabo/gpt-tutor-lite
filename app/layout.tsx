import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "GPT Tutor Lite",
  description: "3分で教材生成 - Lite版GPT体験",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
