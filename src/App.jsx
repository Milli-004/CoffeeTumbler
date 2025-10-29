import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="contact">
        {" "}
        <Footer />
      </section>
    </div>
  );
};

export default App;
