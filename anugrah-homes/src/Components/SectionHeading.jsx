import { motion } from "framer-motion";

const SectionHeading = ({
  eyebrow,
  title,
  text,
}) => {
  return (
    <motion.div
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
        duration: 0.7,
      }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <p className="text-[#6B1735] uppercase tracking-[0.25em] text-xs sm:text-sm font-bold mb-3">
        {eyebrow}
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black">
        {title}
      </h2>

      <p className="mt-5 text-gray-600 leading-7">
        {text}
      </p>
    </motion.div>
  );
};

export default SectionHeading;