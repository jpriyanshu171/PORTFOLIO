"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! (Just simulating 😎)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="w-full px-[12%] py-16 scroll-mt-20 font-ovo bg-gray-50">
      <motion.h4
        className="text-center text-lg text-gray-600 mb-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-bold mb-14"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          {[
            { icon: <Mail className="w-6 h-6 text-amber-500" />, text: "jpriyanshu171@gmail.com" },
            { icon: <Phone className="w-6 h-6 text-amber-500" />, text: "+91 8368267807" },
            { icon: <MapPin className="w-6 h-6 text-amber-500" />, text: "New Delhi, India" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-300 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.03 }}
            >
              {item.icon}
              <span className="text-gray-700">{item.text}</span>
            </motion.div>
          ))}

          {/* Socials */}
          <div className="flex items-center gap-4 mt-6">
            {[
              { icon: <Github className="w-6 h-6 text-gray-800" />, link: "https://github.com/jpriyanshu171" },
              { icon: <Linkedin className="w-6 h-6 text-blue-700" />, link: "https://linkedin.com/in/priyanshujaiswal171" },
              { icon: <Instagram className="w-6 h-6 text-pink-500" />, link: "https://instagram.com/jpriyanshu171" },
              { icon: <Twitter className="w-6 h-6 text-sky-500" />, link: "https://twitter.com/jpriyanshu171" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/70 backdrop-blur-sm rounded-lg"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="flex-1 flex flex-col gap-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { name: "name", type: "text", placeholder: "Your Name", value: formData.name },
            { name: "email", type: "email", placeholder: "Your Email", value: formData.email },
          ].map((input, idx) => (
            <input
              key={idx}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          ))}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none h-32"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
