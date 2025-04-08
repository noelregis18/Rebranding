
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-blue-500/10 mix-blend-overlay" />
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-darkbg/50 to-transparent" />
      </div>
      <div className="container-custom relative z-10 mt-16 md:mt-0">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Think Different.
              <span className="text-purple block mt-2">Reimagined.</span>
            </h1>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the future of technology with our next-generation products designed to inspire creativity and enhance your digital life.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary">
              Explore Products
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
