import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PropertyCard = ({
  image,
  size,
  title,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover image-zoom"
        />

        <div className="absolute top-4 left-4 bg-[#6B1735] text-white px-4 py-2 rounded-full text-xs font-bold">
          {size}
        </div>
      </div>

      <div className="p-6">

        <h3 className="font-serif text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-6 mt-3">
          {description}
        </p>

        <button className="mt-5 flex items-center gap-2 text-[#6B1735] font-semibold">
          View Details
          <ArrowUpRight size={17} />
        </button>

      </div>
    </motion.div>
  );
};

export default PropertyCard;