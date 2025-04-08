
import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "iPhone Pro",
    description: "Our most advanced smartphone with a pro camera system and incredible display.",
    image: "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 2,
    title: "MacBook Air",
    description: "Impossibly thin design with extraordinary battery life and performance.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
  },
  {
    id: 3,
    title: "Apple Watch",
    description: "Advanced health features, fitness tracking, and seamless connectivity.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    id: 4,
    title: "iPad Pro",
    description: "The ultimate iPad experience with incredible display and powerful performance.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-teal">Products</span>
          </h2>
          <p className="text-foreground/80">
            Explore our lineup of innovative products designed to work seamlessly together, enhancing your digital life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="project-card"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="project-overlay rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-white/80 mb-4">{product.description}</p>
                <button className="btn-primary self-start">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
