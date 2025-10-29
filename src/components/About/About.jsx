import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white px-6"
    >
      {/* Dark gradient background with smooth motion */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-gray-900"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Subtle moving light overlay for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-lightOrange/10 via-transparent to-transparent mix-blend-screen"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          x: ["-10%", "10%", "-10%"],
          y: ["-5%", "5%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Faint vertical light beam effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-lightOrange/20 to-transparent blur-[2px]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl text-center bg-black/60 backdrop-blur-md p-10 rounded-3xl shadow-[0_0_25px_rgba(255,140,0,0.25)] hover:shadow-[0_0_45px_rgba(255,140,0,0.5)] transition-all duration-700"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-lightOrange mb-6 drop-shadow-[0_0_20px_rgba(255,140,0,0.4)]"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          At{" "}
          <span className="text-lightOrange font-semibold">Blvck Tumbler</span>,
          we blend <span className="text-lightOrange">minimalism</span> and{" "}
          <span className="text-lightOrange">luxury</span> to create timeless
          experiences. Every product is designed for those who appreciate
          simplicity wrapped in sophistication.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-md text-gray-400 mt-4 leading-relaxed"
        >
          Each creation embodies strength, mystery, and elegance — crafted for
          those who stand out not by being loud, but by their quiet confidence
          and impeccable taste.
        </motion.p>

        {/* Glowing Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 h-[2px] mx-auto bg-gradient-to-r from-transparent via-lightOrange to-transparent"
        />
      </motion.div>

      {/* Soft animated bottom gradient glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-lightOrange/10 to-transparent blur-3xl"
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
    </section>
  );
};

export default About;
