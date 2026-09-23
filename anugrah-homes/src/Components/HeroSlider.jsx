import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/images/site-1.jpg",
    title: "Your Space. Your Future.",
    text: "Discover thoughtfully planned residential spaces in Jattari, close to Jewar Airport.",
  },
  {
    image: "/images/site-2.jpg",
    title: "Experience Better Living",
    text: "A peaceful environment surrounded by greenery and thoughtfully planned facilities.",
  },
  {
    image: "/images/site-3.jpg",
    title: "A Place To Call Home",
    text: "Explore residential opportunities designed for comfortable and connected living.",
  },
  {
    image: "/images/site-4.jpg",
    title: "Connected To Opportunity",
    text: "Located in Jattari with access to important roads and developing infrastructure.",
  },
  {
    image: "/images/site-5.jpg",
    title: "Designed Around You",
    text: "Explore a community environment created with space, comfort and convenience in mind.",
  },
  {
    image: "/images/site-6.jpg",
    title: "Discover Jattari",
    text: "Explore the location and discover your next property opportunity.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Preload all slider images
  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  // Automatic slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Previous slide
  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-125 w-full overflow-hidden bg-black sm:h-130 lg:h-135">

      {/* ================= BACKGROUND IMAGE ================= */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-white"
        >

          {/* Location */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm backdrop-blur-md">
            <MapPin size={16} />

            <span>Jattari, Uttar Pradesh</span>
          </div>

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8AFC1] sm:text-sm">
            Jattari Real Estate
          </p>

          {/* Main Heading */}
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {slides[current].title}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
            {slides[current].text}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">

            {/* Enquire Now */}
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#6B1735] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#6B1735]"
            >
              Enquire Now
              <ArrowRight size={16} />
            </Link>

            {/* Explore */}
            <Link
              to="/about-us"
              className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
            >
              Explore Jattari
            </Link>

          </div>
        </motion.div>
      </div>

      {/* ================= PREVIOUS BUTTON ================= */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-md transition duration-300 hover:bg-[#6B1735] sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>

      {/* ================= NEXT BUTTON ================= */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-md transition duration-300 hover:bg-[#6B1735] sm:right-6"
      >
        <ChevronRight size={22} />
      </button>

      {/* ================= SLIDE DOTS ================= */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;