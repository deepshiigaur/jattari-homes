import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="h-96 bg-black">
      <div className="mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8AFC1] sm:text-sm">
            {eyebrow}
          </p>

          <h1 className="mt-4 font-serif text-5xl font-bold leading-tight text-white sm:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}