
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Palette, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redefining Technology <span className="text-purple">For Everyone</span>
          </h2>
          <p className="text-foreground/80">
            For over four decades, we've been at the forefront of innovation, crafting products that seamlessly blend technology with humanity. Our mission is to create tools that empower creativity, enhance productivity, and connect people in meaningful ways.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "Pushing boundaries with breakthrough technologies that define new product categories and experiences.",
              icon: <Lightbulb className="w-10 h-10 text-purple" />,
            },
            {
              title: "Design",
              description: "Creating beautiful, intuitive products where form and function exist in perfect harmony.",
              icon: <Palette className="w-10 h-10 text-purple" />,
            },
            {
              title: "Experience",
              description: "Delivering seamless ecosystems where hardware, software, and services work together flawlessly.",
              icon: <Star className="w-10 h-10 text-purple" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
