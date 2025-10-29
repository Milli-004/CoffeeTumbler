import React from "react";
import { motion } from "framer-motion";
import worldMap from "../../assets/world-map.png";
import appStore from "../../assets/website/app_store.png";
import playStore from "../../assets/website/play_store.png";
import creditCards from "../../assets/website/credit-cards.webp";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* Faint World Map Background */}
      <img
        src={worldMap}
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.05] select-none pointer-events-none"
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-lightOrange/20 via-transparent to-black/80"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Subtle Top Glow */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-lightOrange/10 to-transparent blur-3xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Contact Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-8 max-w-3xl bg-black/60 backdrop-blur-lg py-12 rounded-3xl shadow-[0_0_30px_rgba(255,140,0,0.25)] hover:shadow-[0_0_50px_rgba(255,140,0,0.5)] transition-all duration-700"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-lightOrange mb-6 drop-shadow-[0_0_20px_rgba(255,140,0,0.4)]"
        >
          Stay Connected
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mb-10 leading-relaxed"
        >
          Let’s redefine minimal luxury together. Connect with us or experience
          the{" "}
          <span className="text-lightOrange font-semibold">Blvck Tumbler</span>{" "}
          lifestyle through our exclusive app.
        </motion.p>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <motion.img
            src={appStore}
            alt="App Store"
            className="h-14 cursor-pointer rounded-xl hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,140,0,0.3)]"
            whileHover={{ scale: 1.1, rotate: 1 }}
          />
          <motion.img
            src={playStore}
            alt="Play Store"
            className="h-14 cursor-pointer rounded-xl hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,140,0,0.3)]"
            whileHover={{ scale: 1.1, rotate: -1 }}
          />
        </div>

        {/* Glowing Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1 }}
          className="mx-auto h-[2px] bg-gradient-to-r from-transparent via-lightOrange to-transparent mb-10"
        />

        {/* Payment Icons */}
        <motion.img
          src={creditCards}
          alt="Payment Methods"
          className="h-10 mx-auto opacity-80 hover:opacity-100 transition-opacity duration-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      {/* Bottom Glow Pulse */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-lightOrange/15 to-transparent blur-3xl"
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Subtle Floating Particles for texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-lightOrange/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [Math.random() * 800, -50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
