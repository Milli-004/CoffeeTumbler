import React from "react";
import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee2 from "../../assets/coffee/coffee2.png";
import coffee3 from "../../assets/coffee/coffee3.png";
import banner from "../../assets/website/banner.jpg";

const Products = () => {
  return (
    <section
      id="products"
      className="relative min-h-screen text-white py-20 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${banner})`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Floating particles for ambiance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-lightOrange rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3 + Math.random() * 0.5,
              scale: 0.8 + Math.random() * 0.6,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -50],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-lightOrange mb-16 text-center drop-shadow-lg"
        >
          Our Signature Brews
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
          {[coffee1, coffee2, coffee3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center bg-neutral-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_25px_rgba(255,140,0,0.3)] hover:shadow-[0_0_40px_rgba(255,140,0,0.6)] transition-all duration-500"
            >
              {/* Glow effect */}
              <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-lightOrange/20 to-transparent blur-xl opacity-0 hover:opacity-100 transition duration-500" />

              <motion.img
                src={img}
                alt={`Coffee ${index + 1}`}
                className="h-60 w-auto object-contain mb-6 drop-shadow-2xl"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 150 }}
              />

              <h3 className="text-2xl font-semibold mb-2 text-lightOrange tracking-wide">
                Blvck Coffee {index + 1}
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Rich aroma. Deep flavor. Crafted for perfectionists who prefer
                their mornings bold.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
