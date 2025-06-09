"use client";
import { useState } from "react";
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setQrData({ url, image });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="url"
        required
        placeholder="Enter your link/URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <Button type="submit" disabled={!url}>
        Generate QR Code
      </Button>
      {qrData && <QrPreview url={qrData.url} image={qrData.image} />}
    </form>
  );
}
