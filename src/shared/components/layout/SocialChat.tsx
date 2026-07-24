"use client";

import { FaArrowUp, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const MESSENGER_PAGE = "bct.com.bd";
const WHATSAPP = `https://wa.me/+8801972721388?text=${encodeURIComponent("Hi there! I am interested in your services.")}`;

export default function SocialChat() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-2 right-2 z-50 flex flex-col items-center gap-2">
      <button
        onClick={scrollToTop}
        className="bg-brand-secondary cursor-pointer p-2 rounded-full transition-colors group focus:outline-none"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} className="text-white" />
      </button>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-green text-white p-3 rounded-full shadow-lg hover:bg-brand-green-hover hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href={`https://m.me/${MESSENGER_PAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0084ff] text-white p-3 rounded-full shadow-lg hover:bg-[#0073e6] hover:scale-110 transition-all"
        aria-label="Chat on Messenger"
      >
        <FaFacebookMessenger size={28} />
      </a>
    </div>
  );
}
