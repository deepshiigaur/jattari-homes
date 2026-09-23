import { useState } from "react";
import { X, User, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LoginPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login:", {
      email,
      password,
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-[#6B1735] hover:text-white"
            >
              <X size={18} />
            </button>

            {/* LOGO */}
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6B1735] text-xl font-bold text-white">
                J
              </div>
            </div>

            {/* TITLE */}
            <div className="mt-5 text-center">
              <h2 className="font-serif text-2xl font-bold text-black">
                Welcome to Jattari
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Login to continue
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#6B1735]"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#6B1735]"
                  />
                </div>
              </div>

              {/* LOGIN */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#6B1735] py-3 font-semibold text-white transition hover:bg-black"
              >
                Login
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-gray-400">
              By continuing, you agree to our terms and privacy policy.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;