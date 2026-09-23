import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const BlogCard = ({
  image,
  title,
  excerpt,
  slug,
}) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover image-zoom"
        />
      </div>

      <div className="p-6">

        <p className="text-[#6B1735] text-xs uppercase tracking-widest font-bold">
          Real Estate
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold mt-3">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-6 mt-3">
          {excerpt}
        </p>

        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 mt-5 text-[#6B1735] font-bold"
        >
          Read Article
          <ArrowUpRight size={17} />
        </Link>

      </div>
    </motion.article>
  );
};

export default BlogCard;