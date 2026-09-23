import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80",
    title: "Build Your Dream",
    subtitle: "Live Beautifully",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",
    title: "A Better Place",
    subtitle: "For Your Future",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    title: "Premium Living",
    subtitle: "Designed Around You",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].image}
          alt="Jattari Homes"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 pt-20">

          <motion.div
            key={current}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl text-white"
          >

            <p className="text-[#e7c5d1] uppercase tracking-[0.35em] text-xs sm:text-sm font-bold mb-5">
              Jattari Homes
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold leading-[0.95]">
              {slides[current].title}
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
              {slides[current].subtitle}
            </h2>

            <p className="mt-6 max-w-xl text-white/80 text-sm sm:text-base leading-7">
              Discover thoughtfully planned spaces,
              modern amenities and a location designed
              around your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link
                to="/about-us"
                className="inline-flex justify-center items-center gap-2 bg-[#6B1735] px-7 py-4 rounded-full font-semibold hover:bg-[#481126] transition"
              >
                Explore Project
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex justify-center items-center gap-2 border border-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Book Site Visit
              </Link>

            </div>
          </motion.div>

          {/* Floating card */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="hidden md:block absolute right-10 lg:right-20 bottom-32 bg-white text-black rounded-2xl p-5 shadow-2xl max-w-xs"
          >
            <p className="text-[#6B1735] text-xs uppercase tracking-widest font-bold">
              Premium Living
            </p>

            <h3 className="font-serif text-xl font-bold mt-2">
              Your Future Starts Here
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              A thoughtfully planned destination
              for modern living.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Slider dots */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-10 bg-[#6B1735]"
                : "w-2 bg-white/60"
            }`}
          />
        ))}

      </div>

    </section>
  );
};

export default HeroSlider;