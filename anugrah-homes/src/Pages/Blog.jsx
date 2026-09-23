import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "../Components/PageHero";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Property Opportunities in Jattari",
      text: "Important factors to consider when researching property in and around Jattari.",
    },
    {
      title: "Why Location Matters in Real Estate",
      text: "Learn how connectivity, infrastructure and surroundings can influence property decisions.",
    },
    {
      title: "Things to Check Before Buying Property",
      text: "A simple guide to the key factors buyers should review before making a property decision.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Our Blog"
        title="Property Insights"
        description="Explore useful information, market insights and updates related to real estate and Jattari."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-semibold text-[#6B1735]">
                  Property Guide
                </p>

                <h2 className="mt-4 font-serif text-2xl font-bold">
                  {post.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-500">
                  {post.text}
                </p>

                <button
                  type="button"
                  className="mt-6 flex items-center gap-2 font-semibold text-[#6B1735]"
                >
                  Read More
                  <ArrowRight size={17} />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;