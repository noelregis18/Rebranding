
import React from "react";
import { motion } from "framer-motion";
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/noel-regis-aa07081b1/",
    },
    {
      title: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/noelregis18",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/NoelRegis8",
    },
    {
      title: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:noel.regis04@gmail.com",
    },
    {
      title: "Phone",
      icon: <Phone className="h-5 w-5" />,
      url: "tel:+917319546900",
    },
    {
      title: "Location",
      icon: <MapPin className="h-5 w-5" />,
      url: "https://www.google.com/maps/place/Asansol,+West+Bengal,+India",
    },
  ];

  return (
    <section id="contact" className="section bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-teal">Touch</span>
          </h2>
          <p className="text-foreground/80">
            Have questions about our products or services? We're here to help. Reach out to our team through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-teal transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                    {link.icon}
                  </div>
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
