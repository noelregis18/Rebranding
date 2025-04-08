
import React from "react";
import { motion } from "framer-motion";

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
            Redefining Technology <span className="text-teal">For Everyone</span>
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
              icon: (
                <svg className="w-10 h-10 text-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0014.5 10 3.5 3.5 0 0011 6.5a3.5 3.5 0 00-3.5 3.5h2a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-.5 1.121 2.913 2.913 0 01-.5.5c-.667.508-1 1.072-1 1.697V13h2v-.645z" />
                </svg>
              ),
            },
            {
              title: "Design",
              description: "Creating beautiful, intuitive products where form and function exist in perfect harmony.",
              icon: (
                <svg className="w-10 h-10 text-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM13.82 8L12 9.824 10.18 8 8 10.18l1.824 1.82L8 13.82 10.18 16l1.82-1.824L13.82 16 16 13.82l-1.824-1.82L16 10.18 13.82 8z" />
                </svg>
              ),
            },
            {
              title: "Experience",
              description: "Delivering seamless ecosystems where hardware, software, and services work together flawlessly.",
              icon: (
                <svg className="w-10 h-10 text-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z" />
                  <path d="M9.293 7.707l1.414-1.414 7.071 7.071-7.071 7.071-1.414-1.414L14.536 14H6v-2h8.536L9.293 7.707z" />
                </svg>
              ),
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
