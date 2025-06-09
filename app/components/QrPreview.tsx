"use client";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

type Props = {
  url: string;
  image: File | null;
};

export default function QrPreview({ url, image }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function drawQRCode() {
      if (!canvasRef.current) return;
      // Draw QR code
      await QRCode.toCanvas(canvasRef.current, url, { width: 256 });
      // If image is uploaded, draw it at center
      if (image) {
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        const img = new window.Image();
        img.src = URL.createObjectURL(image);
        img.onload = () => {
          const size = 64; // logo size
          ctx.drawImage(img, (256 - size) / 2, (256 - size) / 2, size, size);
        };
      }
    }
    drawQRCode();
  }, [url, image]);

  return (
    <div className="mt-6 flex flex-col items-center">
      <canvas ref={canvasRef} width={256} height={256}></canvas>
      <a
        href={canvasRef.current?.toDataURL()}
        download="qr-code.png"
        className="mt-2 text-blue-600 underline"
      >
        Download QR Code
      </a>
    </div>
  );
}
