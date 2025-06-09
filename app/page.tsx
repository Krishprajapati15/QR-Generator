import QrForm from "./components/QrForm";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-xl p-6 shadow-lg rounded-lg bg-white">
        <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
        <QrForm />
      </div>
    </main>
  );
}
