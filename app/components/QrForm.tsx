"use client";
import { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import QrPreview from "./QrPreview";

export default function QrForm() {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [qrData, setQrData] = useState<{
    url: string;
    image: File | null;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setQrData({ url, image });
  }

  function handleClear() {
    setUrl("");
    setImage(null);
    setQrData(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-5 items-center"
      autoComplete="off"
    >
      <div className="w-full flex flex-col gap-2">
        <label
          className="block text-sm font-medium text-neutral-700 mb-1"
          htmlFor="qr-link"
        >
          Link / URL <span className="text-red-500">*</span>
        </label>
        <Input
          id="qr-link"
          type="url"
          required
          placeholder="Paste your link (e.g. https://yourwebsite.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="bg-white/80 backdrop-blur border-neutral-200 focus:border-black focus:ring-2 focus:ring-neutral-800 transition"
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="qr-image"
        >
          Optional: Overlay Image{" "}
          <span className="text-neutral-400">(logo, etc.)</span>
        </label>

        {/* Hidden actual input */}
        <input
          ref={fileInputRef}
          id="qr-image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="hidden"
        />

        {/* Custom file button */}
        <label
          htmlFor="qr-image"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-700 text-neutral-100 text-sm font-semibold cursor-pointer shadow-sm hover:bg-gray-800 transition"
        >
          {image ? "Change Image" : "Choose Image"}
        </label>

        {/* Filename and remove button */}
        {image && (
          <div className="flex items-center gap-2 text-xs text-neutral-300 mt-1">
            <span className="truncate max-w-[160px]">{image.name}</span>
            <button
              type="button"
              className="ml-2 p-1 rounded-full hover:bg-red-200/30 focus-visible:ring-2 focus-visible:ring-red-400 transition"
              onClick={() => {
                setImage(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              aria-label="Remove image"
              title="Remove image"
            >
              <svg
                className="w-4 h-4 text-red-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 20 20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l8 8m0-8l-8 8"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="w-full flex gap-3 mt-2">
        <Button type="submit" className="w-full" disabled={!url}>
          Generate QR Code
        </Button>
        {qrData && (
          <Button
            type="button"
            className="w-28 bg-gray-200 text-gray-900 hover:bg-gray-300"
            onClick={handleClear}
          >
            Clear
          </Button>
        )}
      </div>

      {qrData && (
        <div className="w-full mt-8 flex flex-col items-center">
          <QrPreview url={qrData.url} image={qrData.image} />
        </div>
      )}
    </form>
  );
}
