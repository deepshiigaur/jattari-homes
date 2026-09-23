import {
  Home,
  Map,
  FileText,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "../Components/PageHero";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Guidance",
      text: "Understand available property opportunities and important factors before making a decision.",
    },
    {
      icon: Map,
      title: "Location Insights",
      text: "Explore connectivity, surroundings and important location considerations.",
    },
    {
      icon: FileText,
      title: "Property Information",
      text: "Get useful information to help you understand property-related opportunities.",
    },
    {
      icon: Users,
      title: "Buyer Assistance",
      text: "Get support while researching and understanding your property requirements.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Our Services"
        title="What We Offer"
        description="Explore our real estate services designed to make property decisions simpler and more informed."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B1735]">
              Our Services
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold">
              Support for your property journey
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:border-[#6B1735] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E8EC] text-[#6B1735]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;