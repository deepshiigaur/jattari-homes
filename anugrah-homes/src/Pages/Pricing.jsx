import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../Components/SectionHeading";

const Pricing = () => {
  const plots = [
    {
      size: "100",
      title: "Essential Plot",
    },
    {
      size: "150",
      title: "Premium Plot",
    },
    {
      size: "200",
      title: "Luxury Plot",
    },
  ];

  return (
    <div className="pt-20">

      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-5">

          <p className="text-[#c9859e] uppercase tracking-[0.3em] text-xs font-bold">
            Pricing
          </p>

          <h1 className="text-5xl sm:text-6xl font-serif font-bold mt-4">
            Find a space
            <br />
            that fits you.
          </h1>

        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#F8F5F5]">

        <div className="max-w-7xl mx-auto px-5">

          <SectionHeading
            eyebrow="Plot Options"
            title="Choose your space"
            text="Explore available plot sizes and contact our team for current pricing and availability."
          />

          <div className="grid md:grid-cols-3 gap-6">

            {plots.map((plot, index) => (
              <div
                key={plot.size}
                className={`bg-white rounded-3xl p-8 shadow-lg ${
                  index === 1
                    ? "border-2 border-[#6B1735]"
                    : ""
                }`}
              >

                {index === 1 && (
                  <span className="inline-block bg-[#6B1735] text-white text-xs px-3 py-2 rounded-full mb-5">
                    Popular
                  </span>
                )}

                <p className="text-[#6B1735] uppercase tracking-widest text-xs font-bold">
                  Residential
                </p>

                <h3 className="text-2xl font-serif font-bold mt-3">
                  {plot.title}
                </h3>

                <div className="mt-6">
                  <span className="text-5xl font-bold">
                    {plot.size}
                  </span>

                  <span className="text-gray-500 ml-2">
                    Sq. Yards
                  </span>
                </div>

                <div className="space-y-3 mt-7">

                  {[
                    "Residential use",
                    "Planned development",
                    "Location advantage",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-sm text-gray-600"
                    >
                      <Check
                        size={18}
                        className="text-[#6B1735]"
                      />
                      {item}
                    </div>
                  ))}

                </div>

                <Link
                  to="/contact-us"
                  className="flex justify-center items-center gap-2 bg-black text-white rounded-full py-3 mt-8 hover:bg-[#6B1735] transition"
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Pricing;