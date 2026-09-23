import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          <div className="bg-[#6B1735] rounded-3xl p-7 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <p className="text-white/70 uppercase tracking-[0.2em] text-xs mb-3">
                Find Your Future
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Ready to find your dream plot?
              </h2>

              <p className="text-white/70 mt-3 max-w-xl">
                Schedule a visit and explore
                jattari homes.
              </p>
            </div>

            <Link
              to="/contact-us"
              className="bg-white text-[#6B1735] px-7 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition"
            >
              Book A Site Visit
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-full bg-[#6B1735] flex items-center justify-center font-bold">
                AH
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold">
                  jattari homes
                </h3>

                <p className="text-xs text-white/50">
                  Premium Living
                </p>
              </div>

            </div>

            <p className="text-white/60 text-sm leading-7">
              Thoughtfully planned spaces
              designed for comfortable and
              modern living.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Quick Links
            </h4>

            <div className="space-y-3 text-sm text-white/60">
              <Link
                to="/about-us"
                className="block hover:text-[#6B1735]"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="block hover:text-[#6B1735]"
              >
                Services
              </Link>

              <Link
                to="/why-jattari"
                className="block hover:text-[#6B1735]"
              >
                Why Jattari
              </Link>

              <Link
                to="/amenities"
                className="block hover:text-[#6B1735]"
              >
                Amenities
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Explore
            </h4>

            <div className="space-y-3 text-sm text-white/60">

              <Link
                to="/pricing"
                className="block hover:text-[#6B1735]"
              >
                Pricing
              </Link>

              <Link
                to="/gallery"
                className="block hover:text-[#6B1735]"
              >
                Gallery
              </Link>

              <Link
                to="/blog"
                className="block hover:text-[#6B1735]"
              >
                Blog
              </Link>

              <Link
                to="/faq"
                className="block hover:text-[#6B1735]"
              >
                FAQ
              </Link>

            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/60">

              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="text-[#6B1735] shrink-0"
                />
                <span>
                  Jattari, Uttar Pradesh, India
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={19}
                  className="text-[#6B1735] shrink-0"
                />
                <span>
                  +91 99999 99999
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={19}
                  className="text-[#6B1735] shrink-0"
                />
                <span>
                  info@jattarihomes.com
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Jattari Homes.
          All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;