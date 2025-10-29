import React from "react";
import { motion } from "framer-motion";
import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";

const bgImage = {
  backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(20,20,20,0.85)), url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-screen w-full flex items-center overflow-hidden relative">
        {/* Soft Glow Layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* ---------- TEXT SECTION ---------- */}
            <motion.div
              className="text-lightOrange space-y-8 lg:space-y-14 text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Responsive Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(255,140,0,0.25)]">
                Black Tumbler
              </h1>

              <div className="relative">
                <div className="relative z-10 space-y-4 max-w-lg mx-auto lg:mx-0">
                  <motion.h1
                    className="text-base sm:text-lg md:text-2xl font-semibold text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Black Lifestyle Lovers,
                  </motion.h1>

                  <motion.p
                    className="text-sm md:text-base text-gray-400 leading-relaxed tracking-wide px-2 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, dolores distinctio, cupiditate hic sint aperiam,
                    mollitia eveniet excepturi totam nihil consequatur quo
                    incidunt molestias in nemo neque optio. Eligendi,
                    cupiditate!
                  </motion.p>
                </div>

                {/* Subtle Gradient Box */}
                <motion.div
                  className="absolute -top-4 -left-6 md:-top-6 md:-left-10 w-[100px] h-[80px] sm:w-[150px] sm:h-[130px] md:w-[200px] md:h-[160px] lg:w-[260px] lg:h-[190px] 
                  bg-gradient-to-br from-lightOrange/10 to-gray-800/30 rounded-md blur-[2px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* ---------- IMAGE SECTION ---------- */}
            <motion.div
              className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Floating Coffee Image */}
              <motion.img
                src={CoffeeMain}
                alt="Black Tumbler"
                className="relative z-40 h-[220px] sm:h-[380px] md:h-[500px] lg:h-[650px] xl:h-[700px] drop-shadow-[0_0_40px_rgba(255,140,0,0.15)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Orange Circle Ring */}
              <motion.div
                className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] 
                absolute top-10 md:top-20 -right-8 md:-right-14 
                border-[5px] sm:border-[8px] md:border-[10px] lg:border-[14px] border-lightOrange/70 
                rounded-full shadow-[0_0_40px_rgba(255,140,0,0.3)] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              ></motion.div>

              {/* Background Large Text */}
              <motion.h1
                className="absolute text-[40px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[180px] font-bold 
                text-gray-800/40 uppercase leading-none z-0 right-0 top-[40%] translate-y-[-50%] hidden sm:block select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Blvck Tumbler
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
