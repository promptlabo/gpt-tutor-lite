"use client";

import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function LiteTeachingApp() {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState<string | null>(null);

  const generateMaterial = () => {
    const sample = `【${subject}】${grade} - 「${topic}」の教材サンプル

---
■ 教材内容（要点まとめ）
1. ポイント1
2. ポイント2

■ 理解チェッククイズ
Q1: この単元のキーワードは？
Q2: ○○の理由を答えよ
Q3: 応用問題: △△を使って説明せよ`;
    setOutput(sample);
  };

  return (
    <div className="bg-[#f0f4f8] min-h-screen p-4">
      <div className="max-w-xl mx-auto space-y-4">
        <h1 className="text-xl font-bold text-center">3分で教材生成 - Lite版GPT体験</h1>
        <Input placeholder="教科 (例: 数学)" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <Input placeholder="学年 (例: 小5・中2・高校1年生)" value={grade} onChange={(e) => setGrade(e.target.value)} />
        <Input placeholder="単元・テーマ (例: 一次関数)" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <Button onClick={generateMaterial}>教材を生成する</Button>

        {output && (
          <>
            <Card className="mt-4">
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm">{output}</pre>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-500 mt-2">
              入力項目をすべて埋めると、より精度の高い教材が作れます。
            </p>

            <div className="space-y-2 text-center mt-6">
              <p className="text-sm">もっと多機能な教材作成をしたい方は...</p>
              <Button
                variant="outline"
                onClick={() => {
                  if (typeof window !== "undefined" && typeof window.gtag === "function") {
                    window.gtag("event", "click_upgrade_cta", {
                      event_category: "engagement",
                      event_label: "LitePage_Button",
                      variant: "Lite",
                    });
                  }
                  setTimeout(() => {
                    window.open("https://gpt-tutor-edu.vercel.app", "_blank");
                  }, 300);
                }}
              >
                正式版はこちら
              </Button>
              <p className="text-xs mt-2">
                他の教材も見たい方は{" "}
                <a href="https://lin.ee/KGoZbJ9b" className="underline text-blue-600" target="_blank">
                  LINE登録
                </a>{" "}
                で限定配布！
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
