import {
  ShieldCheck,
  Trees,
  Dumbbell,
  Droplets,
  Car,
  Building2,
  Lightbulb,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

import SectionHeading from "../Components/SectionHeading";

const Amenities = () => {
  const amenities = [
    ["Security", ShieldCheck],
    ["Green Spaces", Trees],
    ["Fitness Area", Dumbbell],
    ["Water Facilities", Droplets],
    ["Parking", Car],
    ["Commercial Area", Building2],
    ["Street Lighting", Lightbulb],
    ["Community Spaces", Users],
  ];

  return (
    <div className="pt-20">

      {/* ================= HERO ================= */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9859e]">
            Lifestyle
          </p>

          <h1 className="mt-4 font-serif text-5xl font-bold leading-tight sm:text-6xl">
            Amenities for
            <br />
            everyday living.
          </h1>

        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section className="relative overflow-hidden py-20 sm:py-28">

        {/* ================= BACKGROUND IMAGE ================= */}
        <img
          src="/images/Amenities.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* ================= WHITE OVERLAY ================= */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

          {/* Section Heading */}
          <SectionHeading
            eyebrow="Amenities"
            title="Comfort meets convenience"
            text="Explore facilities designed to support a comfortable community lifestyle."
          />

          {/* ================= AMENITY CARDS ================= */}
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">

            {amenities.map(([title, Icon], index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="rounded-3xl border border-white/70 bg-white/80 p-6 text-center shadow-lg backdrop-blur-md transition duration-300 hover:border-[#6B1735] hover:shadow-xl sm:p-8"
              >

                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E8EC] text-[#6B1735]">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mt-5 font-semibold text-gray-900">
                  {title}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Amenities;