"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <div
        className="
        flex h-14 w-14 items-center justify-center
        rounded-full
        border border-[#D4AF37]/30
        bg-black/70
        backdrop-blur-xl
        text-[#D4AF37]
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#D4AF37]
        hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]
      "
      >
        <ChevronUp size={24} />
      </div>
    </button>
  );
}