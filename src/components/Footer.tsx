
import React from "react";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-darkbg-light dark:bg-darkbg-lighter">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current text-teal"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
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
