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
  const services = [
    {
      icon: Building2,
      title: "Residential Plots",
      text: "Thoughtfully planned spaces for building your dream home.",
    },
    {
      icon: MapPin,
      title: "Site Visit",
      text: "Get assistance in exploring the project and location.",
    },
    {
      icon: ShieldCheck,
      title: "Property Support",
      text: "Guidance throughout your property journey.",
    },
  ];

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
    <>
      {/* HERO */}
      <HeroSlider />

      {/* INTRODUCTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B1735]">
                Welcome To Jattari Homes
              </p>

              <h2 className="mt-4 text-4xl font-serif font-bold leading-tight sm:text-5xl">
                A place where
                <span className="text-[#6B1735]">
                  {" "}dreams become homes.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Jattari Homes is envisioned as a thoughtfully planned
                residential destination where comfort, connectivity and
                modern living come together.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Explore a property experience designed for families
                looking to create a meaningful future in a growing
                destination.
              </p>

              <Link
                to="/about-us"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#6B1735]"
              >
                Discover More
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Jattari Homes"
                className="h-122.5 w-full rounded-3xl object-cover"
              />

              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#6B1735] p-5 text-white shadow-xl sm:-left-8 sm:p-7">
                <p className="text-3xl font-bold">
                  360°
                </p>

                <p className="text-sm text-white/70">
                  Future-focused living
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8F5F5] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <SectionHeading
            eyebrow="What We Offer"
            title="Designed Around Your Future"
            text="Explore services created to make your property journey simple and comfortable."
          />

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E8EC] text-[#6B1735]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 text-lg font-serif font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {service.text}
                  </p>

                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#6B1735]"
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

      {/* AMENITIES */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <SectionHeading
            eyebrow="Lifestyle"
            title="Amenities For Better Living"
            text="Thoughtfully planned facilities designed around everyday comfort."
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
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
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-gray-200 p-5 text-center transition hover:border-[#6B1735] hover:shadow-lg sm:p-7"
                >
                  <Icon
                    className="mx-auto text-[#6B1735]"
                    size={30}
                  />

                  <h3 className="mt-4 text-sm font-semibold sm:text-base">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* CTA */}
      {/* <section className="bg-[#6B1735] py-20 text-center text-white sm:py-28">

        <div className="mx-auto max-w-4xl px-5">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Start Your Journey
          </p>

          <h2 className="mt-4 text-4xl font-serif font-bold sm:text-5xl lg:text-6xl">
            Your dream home starts with the right place.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
            Get in touch with our team to learn more and schedule your visit.
          </p>

          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#6B1735] transition hover:bg-gray-100"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>

      </section> */}
    </>
  );
};

export default Home;