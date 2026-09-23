import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogDetails = () => {
  const { slug } = useParams();

  const articles = {
    "jewar-land-price-2026": {
      title: "Jewar Land Price 2026",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
      text: "Land prices can vary significantly depending on location, connectivity, development, plot characteristics and local market conditions. Buyers should verify current rates before making a decision.",
    },

    "government-plots-near-jewar-airport": {
      title: "Government Plots Near Jewar Airport",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
      text: "When researching government plots, buyers should verify the authority, scheme, eligibility, documentation, location and current availability through official sources.",
    },

    "why-location-matters-in-real-estate": {
      title: "Why Location Matters In Real Estate",
      image:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1600&q=80",
      text: "Location is one of the most important factors in property research. Buyers should consider connectivity, infrastructure, nearby facilities and future development.",
    },

    "residential-plot-buying-guide": {
      title: "Residential Plot Buying Guide",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
      text: "Before purchasing a residential plot, verify ownership, title documents, land use, approvals, access roads and applicable local regulations.",
    },

    "real-estate-investment-basics": {
      title: "Real Estate Investment Basics",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      text: "Property decisions should be based on research, financial planning, documentation and an understanding of the local market.",
    },

    "how-to-choose-the-right-plot": {
      title: "How To Choose The Right Plot",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      text: "Compare location, plot dimensions, road access, surroundings, documentation, development status and your intended use before choosing a plot.",
    },
  };

  const article =
    articles[slug] || articles["jewar-land-price-2026"];

  return (
    <div className="pt-20">

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-5">

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back To Blog
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mt-8">
            {article.title}
          </h1>

        </div>
      </section>

      <article className="max-w-4xl mx-auto px-5 py-16 sm:py-24">

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-75 sm:h- 125object-cover rounded-3xl"
        />

        <p className="text-gray-700 text-lg leading-9 mt-10">
          {article.text}
        </p>

        <h2 className="text-3xl font-serif font-bold mt-12">
          Important Things To Consider
        </h2>

        <p className="text-gray-600 leading-8 mt-5">
          Always verify property information,
          documentation, applicable approvals and
          current market information before making
          a property purchase.
        </p>

        <h2 className="text-3xl font-serif font-bold mt-12">
          Research Before You Decide
        </h2>

        <p className="text-gray-600 leading-8 mt-5">
          Compare multiple properties, understand
          the location and speak with qualified
          professionals when necessary.
        </p>

      </article>

    </div>
  );
};

export default BlogDetails;