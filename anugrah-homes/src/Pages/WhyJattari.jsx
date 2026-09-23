import {
  MapPin,
  Route,
  Building,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

import SectionHeading from "../Components/SectionHeading";
import PageHero from "../Components/PageHero";

const WhyJattari = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "Strategic Location",
      text: "Jattari provides connectivity to important areas and routes in the region.",
    },
    {
      icon: Route,
      title: "Connectivity",
      text: "Road connectivity makes the area relevant for residential development.",
    },
    {
      icon: Building,
      title: "Infrastructure",
      text: "Growing infrastructure can contribute to the development of surrounding areas.",
    },
    {
      icon: TrendingUp,
      title: "Future Potential",
      text: "Development activity makes it important to study the location before investing.",
    },
  ];

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        eyebrow="Location"
        title="Why Jattari?"
        description="Explore the location advantages and development factors that make Jattari an area worth researching."
      />

      {/* Location Advantages */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionHeading
            eyebrow="Location Advantage"
            title="Connected to opportunity"
            text="A property's location plays an important role in its long-term use and value."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-gray-200 p-7 transition hover:border-[#6B1735] hover:shadow-xl"
                >
                  <Icon
                    className="text-[#6B1735]"
                    size={32}
                  />

                  <h3 className="mt-6 font-serif text-xl font-bold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500">
                    {reason.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Surroundings */}
      <section className="bg-[#F8F5F5] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <img
              src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
              alt="Jattari location"
              className="h-100w-full rounded-3xl object-cover"
            />

            <div>
              <h2 className="font-serif text-4xl font-bold">
                Explore the surroundings
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                When evaluating property, consider road connectivity,
                nearby infrastructure, employment opportunities, education,
                healthcare and future development.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJattari;