import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import PageHero from "../Components/PageHero";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Why should I consider Jattari?",
      answer:
        "Jattari can be evaluated based on its location, connectivity, infrastructure and surrounding development.",
    },
    {
      question: "What should I check before buying property?",
      answer:
        "Buyers should review the location, property documentation, connectivity, nearby infrastructure and applicable property information before making a decision.",
    },
    {
      question: "Is Jattari suitable for residential property?",
      answer:
        "Residential suitability depends on the specific property, location, connectivity and individual buyer requirements.",
    },
    {
      question: "How can I learn more about available properties?",
      answer:
        "You can contact the Jattari team to discuss available property opportunities and receive further information.",
    },
    {
      question: "What factors are important when choosing a property?",
      answer:
        "Important factors include location, accessibility, infrastructure, surrounding development, documentation and your intended use of the property.",
    },
    {
      question: "How can I contact Jattari?",
      answer:
        "You can use the Contact Us page to submit your enquiry and connect with the Jattari team.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* PAGE HERO */}
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about Jattari, property opportunities and our services."
      />

      {/* FAQ SECTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B1735]">
              Need Help?
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-black sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              Find quick answers to some of the most common questions about
              Jattari and property opportunities.
            </p>
          </div>

          {/* FAQ ITEMS */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-[#6B1735]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                >
                  <span className="font-semibold text-black sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3E8EC] text-[#6B1735]">
                    {open === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {open === index && (
                  <div className="border-t border-gray-100 px-5 pb-6 pt-4 text-sm leading-7 text-gray-600 sm:px-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#F8F5F5] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-3xl font-bold text-black sm:text-4xl">
            Still have questions?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Get in touch with our team to learn more about property
            opportunities and your requirements.
          </p>

          <a
            href="/contact-us"
            className="mt-7 inline-flex rounded-full bg-[#6B1735] px-7 py-3 font-semibold text-white transition hover:bg-black"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;