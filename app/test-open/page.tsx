// app/test-open/page.tsx

export default function TestOpenPage() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">テスト：Googleに遷移するか？</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => {
          console.log("✅ clicked!");
          window.open("https://www.google.com", "_blank");
        }}
      >
        Googleへ（テスト）
      </button>
    </div>
  );
}
