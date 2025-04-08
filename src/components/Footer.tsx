
import React from "react";
import { Linkedin, Github, Twitter, Mail, Apple } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-darkbg-light dark:bg-darkbg-lighter">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Apple className="h-6 w-6 text-purple" />
              <span className="ml-2 text-lg font-bold font-montserrat tracking-tight">
                Apple
              </span>
            </a>
          </div>

          <div className="flex space-x-5 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/noel-regis-aa07081b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/noelregis18"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/NoelRegis8"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:noel.regis04@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-foreground/60">
            <p>© {new Date().getFullYear()} Apple AI Rebrand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
