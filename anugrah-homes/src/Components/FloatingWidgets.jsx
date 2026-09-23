import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
} from "lucide-react";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const FloatingWidgets = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <div className="fixed right-3 sm:right-5 bottom-24 z-40 flex flex-col gap-3">

        <motion.a
          href="tel:+919999999999"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white flex items-center justify-center shadow-xl animate-floating hover:bg-[#6B1735] transition"
        >
          <Phone size={20} />
        </motion.a>

        <motion.a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6B1735] text-white flex items-center justify-center shadow-xl animate-floating-slow"
        >
          <MessageCircle size={21} />
        </motion.a>

        <motion.a
          href="/contact-us"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#6B1735] border-2 border-[#6B1735] flex items-center justify-center shadow-xl animate-floating"
        >
          <MapPin size={20} />
        </motion.a>

      </div>

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-5 right-3 sm:right-5 z-40 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:bg-[#6B1735] transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingWidgets;