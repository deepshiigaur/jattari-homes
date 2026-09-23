import { motion } from "framer-motion";
import PageHero from "../Components/PageHero";

const About = () => {
  return (
    <div className="bg-white">

      {/* Same-size hero on every page */}
      <PageHero
        eyebrow="About Us"
        title="About Jattari"
        description="Discover our vision, approach and commitment to creating meaningful real estate opportunities."
      />

      {/* About Content */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B1735]">
                About Jattari
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-black sm:text-5xl">
                Your Reliable Partner in Real Estate
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Jattari focuses on providing property opportunities with
                attention to location, connectivity and future development.
                Our approach is centered around helping buyers understand
                the area and make informed property decisions.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We believe that a good property decision starts with
                understanding the location, infrastructure and long-term
                possibilities of the surrounding area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Jattari property"
                className="h-100 w-full rounded-3xl object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8F5F5] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#6B1735]">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To provide clear and useful property information while
                helping buyers understand opportunities around Jattari.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#6B1735]">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To build a trusted real estate presence focused on
                transparency, location awareness and long-term value.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;