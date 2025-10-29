import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-gradient-to-b from-neutral-950 to-black border-t border-neutral-800 text-gray-400 text-center py-10 overflow-hidden">
      {/* Soft Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-lightOrange/10 via-transparent to-transparent blur-3xl"
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Brand Name */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-2xl font-bold text-lightOrange drop-shadow-[0_0_10px_rgba(255,140,0,0.4)] mb-4"
      >
        Blvck Tumbler
      </motion.h3>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center gap-6 mb-6 text-xl"
      >
        <a
          href="#"
          className="hover:text-lightOrange transition-transform transform hover:scale-110"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          className="hover:text-lightOrange transition-transform transform hover:scale-110"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="hover:text-lightOrange transition-transform transform hover:scale-110"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </motion.div>

      {/* Divider Line */}
      <div className="relative w-2/3 mx-auto h-[1px] bg-gradient-to-r from-transparent via-lightOrange to-transparent opacity-40 mb-6" />

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-xs text-gray-500"
      >
        © {new Date().getFullYear()} Blvck Tumbler. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
