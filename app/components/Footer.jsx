"use client";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 100); // show button after scrolling 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-[12%] py-10 mt-20 relative">
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 mb-6"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">Dev</span>
          <span className="text-2xl font-bold text-rose-500">X</span>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap gap-6">
          {["Home","About","Services","Work","Skills","Contact"].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-rose-500 transition-colors">{link}</a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex gap-4">
          {[
            { icon: <Github />, link: "https://github.com/jpriyanshu171", color: "hover:text-white" },
            { icon: <Linkedin />, link: "https://linkedin.com/in/priyanshujaiswal171", color: "hover:text-blue-500" },
            { icon: <Twitter />, link: "https://twitter.com/jpriyanshu171", color: "hover:text-sky-400" },
            { icon: <Mail />, link: "mailto:jpriyanshu171@gmail.com", color: "hover:text-rose-500" },
          ].map(({ icon, link, color }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              className={`transition-transform ${color}`}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {React.cloneElement(icon, { className: "w-6 h-6" })}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center gap-1">
        Built with <Heart className="w-4 h-4 text-rose-500 animate-pulse" /> by Priyanshu Jaiswal | {new Date().getFullYear()}
      </p>

      {/* Scroll-to-top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500 p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
