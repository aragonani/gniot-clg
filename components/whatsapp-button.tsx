"use client";

import Image from "next/image";

interface WhatsAppStickyProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppSticky({
  phoneNumber,
  message = "Hello, I want admission details for GIMS.",
}: WhatsAppStickyProps) {

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-6 z-9999 group"
    >
      <div className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg rounded-full px-3 py-2">

        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={28}
          height={28}
          className="rounded-full"
        />

        <span className="hidden md:block text-white text-sm font-semibold pr-1">
          Chat With Us
        </span>
      </div>
    </a>
  );
}