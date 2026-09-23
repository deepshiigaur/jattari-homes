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

      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-5">

          <p className="text-[#c9859e] uppercase tracking-[0.3em] text-xs font-bold">
            Lifestyle
          </p>

          <h1 className="text-5xl sm:text-6xl font-serif font-bold mt-4">
            Amenities for
            <br />
            everyday living.
          </h1>

        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <SectionHeading
            eyebrow="Amenities"
            title="Comfort meets convenience"
            text="Explore facilities designed to support a comfortable community lifestyle."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {amenities.map(([title, Icon], index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="border border-gray-200 rounded-3xl p-6 sm:p-8 text-center hover:border-[#6B1735] hover:shadow-lg transition"
              >

                <div className="w-14 h-14 bg-[#F3E8EC] text-[#6B1735] rounded-2xl mx-auto flex items-center justify-center">

                  <Icon size={28} />

                </div>

                <h3 className="font-semibold mt-5">
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