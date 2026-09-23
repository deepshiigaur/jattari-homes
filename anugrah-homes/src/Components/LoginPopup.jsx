import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, X, Mail } from "lucide-react";

const LoginPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    if (value.trim() === "") {
      return "Email is required";
    }

    if (value.length > 100) {
      return "Email cannot exceed 100 characters";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value.trim())) {
      return "Enter a valid email address";
    }

    return "";
  };

  const validatePassword = (value) => {
    if (value === "") {
      return "Password is required";
    }

    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (value.length > 32) {
      return "Password cannot exceed 32 characters";
    }

    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (value === "") {
      setEmailError("");
    } else {
      setEmailError(validateEmail(value));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);

    if (value === "") {
      setPasswordError("");
    } else {
      setPasswordError(validatePassword(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (emailValidation || passwordValidation) {
      return;
    }

    console.log("Login successful");
    console.log("Email:", email);

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close login"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Login Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6B1735] text-white">
              <User size={26} />
            </div>

            {/* Heading */}
            <div className="mt-5 text-center">
              <h2 className="font-serif text-2xl font-bold text-black">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Login to continue to Jattari Homes
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    maxLength={100}
                    autoComplete="email"
                    placeholder="Enter your email"
                    className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none ${
                      emailError
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#6B1735]"
                    }`}
                  />
                </div>

                {emailError && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {emailError}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="login-password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength={8}
                    maxLength={32}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none ${
                      passwordError
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#6B1735]"
                    }`}
                  />
                </div>

                {passwordError && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {passwordError}
                  </p>
                )}

                <p className="mt-2 text-right text-xs text-gray-400">
                  {password.length}/32
                </p>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#6B1735] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
              >
                Login
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;