import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoginPopup from "./Components/LoginPopup";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import WhyJattari from "./Pages/WhyJattari";
import FAQ from "./Pages/FAQ";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <BrowserRouter>
      <Navbar />

      {/* Login Popup */}
      <LoginPopup
        isOpen={showLogin}
        onClose={closeLogin}
      />

      {/* Website Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-jattari" element={<WhyJattari />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;