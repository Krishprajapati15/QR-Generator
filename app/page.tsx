import QrForm from "./components/QrForm";

export default function Home() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-gray-700 overflow-hidden">
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white/90 border border-neutral-200 backdrop-blur-lg flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3 text-center tracking-tight">
          QR Code Generator
        </h1>
        <p className="text-neutral-600 text-center mb-7 max-w-md">
          Generate beautiful QR codes instantly. Enter your link below and get a
          downloadable QR code!
        </p>
        <QrForm />
      </div>
    </main>
  );
}
