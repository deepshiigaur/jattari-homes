import {
  MapPin,
  ShieldCheck,
  Trees,
  Building2,
  Dumbbell,
  Droplets,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeroSlider from "../Components/HeroSlider";
import SectionHeading from "../Components/SectionHeading";

const Home = () => {
  // ================= SERVICES =================
  const services = [
    {
      icon: Building2,
      title: "Residential Plots",
      text: "Thoughtfully planned spaces for building your dream home.",
    },
    {
      icon: MapPin,
      title: "Site Visit",
      text: "Get assistance in exploring the project and understanding the location.",
    },
    {
      icon: ShieldCheck,
      title: "Property Support",
      text: "Guidance and support throughout your property journey.",
    },
  ];

  // ================= AMENITIES =================
  const amenities = [
    {
      icon: ShieldCheck,
      title: "Security",
    },
    {
      icon: Trees,
      title: "Green Spaces",
    },
    {
      icon: Dumbbell,
      title: "Fitness",
    },
    {
      icon: Droplets,
      title: "Water Facilities",
    },
    {
      icon: Building2,
      title: "Commercial Area",
    },
    {
      icon: MapPin,
      title: "Strategic Location",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SLIDER
      ===================================================== */}
      <HeroSlider />

      {/* =====================================================
          INTRODUCTION SECTION
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B1735] sm:text-sm">
                Welcome To Jattari Homes
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
                A place where
                <span className="text-[#6B1735]">
                  {" "}
                  dreams become homes.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                Jattari Homes is envisioned as a thoughtfully planned
                residential destination where comfort, connectivity and
                modern living come together.
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-gray-600">
                Explore a property experience designed for families
                looking to create a meaningful future in a growing
                destination.
              </p>

              <Link
                to="/about-us"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#6B1735]"
              >
                Discover More
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Jattari Homes"
                  className="h-105 w-full object-cover transition duration-700 hover:scale-105 sm:h-122.5"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 left-4 rounded-2xl bg-[#6B1735] p-5 text-white shadow-2xl sm:-left-8 sm:p-7"
              >
                <p className="text-3xl font-bold sm:text-4xl">
                  360°
                </p>

                <p className="mt-1 text-sm text-white/80">
                  Future-focused living
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE OFFER
      ===================================================== */}
      <section className="bg-[#F8F5F5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionHeading
            eyebrow="What We Offer"
            title="Designed Around Your Future"
            text="Explore services created to make your property journey simple and comfortable."
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -7 }}
                  className="rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:shadow-xl sm:p-6"
                >

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3E8EC] text-[#6B1735]">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-serif text-lg font-bold text-black">
                    {service.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {service.text}
                  </p>

                  {/* Link */}
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#6B1735] transition hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </Link>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          AMENITIES
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionHeading
            eyebrow="Lifestyle"
            title="Amenities For Better Living"
            text="Thoughtfully planned facilities designed around everyday comfort."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">

            {amenities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-gray-200 bg-white p-5 text-center transition duration-300 hover:border-[#6B1735] hover:shadow-lg sm:p-7"
                >

                  {/* Icon */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3E8EC] text-[#6B1735]">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm font-semibold text-black sm:text-base">
                    {item.title}
                  </h3>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;