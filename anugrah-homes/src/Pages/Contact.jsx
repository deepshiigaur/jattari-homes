import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "../Components/PageHero";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <PageHero
        eyebrow="Contact Us"
        title="Let's Connect"
        description="Have questions about property opportunities? Get in touch with our team."
      />

      {/* CONTACT SECTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B1735]">
                Get In Touch
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-black sm:text-5xl">
                We would love to hear from you
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                Have a question about Jattari or want to know more about
                property opportunities? Send us a message and our team will
                get in touch with you.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3E8EC] text-[#6B1735]">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <p className="mt-1 text-gray-500">
                      info@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3E8EC] text-[#6B1735]">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-black">Phone</h3>
                    <p className="mt-1 text-gray-500">
                      +91 00000 00000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3E8EC] text-[#6B1735]">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-black">Location</h3>
                    <p className="mt-1 text-gray-500">
                      Jattari, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-black">
                Send us a message
              </h3>

              <form className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B1735]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B1735]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B1735]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B1735]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#6B1735] px-6 py-3 font-semibold text-white transition hover:bg-black"
                >
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;