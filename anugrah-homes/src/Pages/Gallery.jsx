import { motion } from "framer-motion";
import SectionHeading from "../Components/SectionHeading";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <div className="pt-20">

      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-5">

          <p className="text-[#c9859e] uppercase tracking-[0.3em] text-xs font-bold">
            Gallery
          </p>

          <h1 className="text-5xl sm:text-6xl font-serif font-bold mt-4">
            See the vision.
          </h1>

        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <SectionHeading
            eyebrow="Visual Journey"
            title="Explore Jattari Homes"
            text="Take a look at spaces inspired by modern living."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {images.map((image, index) => (
              <motion.div
                key={image + index}
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
                whileHover={{
                  scale: 1.02,
                }}
                className="overflow-hidden rounded-3xl h-72"
              >
                <img
                  src={image}
                  alt={`Jattari Homes ${index + 1}`}
                  className="w-full h-full object-cover image-zoom"
                />
              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Gallery;