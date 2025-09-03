"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Code, LayoutDashboard, Server, Cpu, Rocket, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MailPilot",
    description: "AI-powered email assistant and smart inbox manager.",
    image: assets.project_mailpilot,
    tech: [<Code className="w-5 h-5 text-rose-500" />, <LayoutDashboard className="w-5 h-5 text-blue-500" />],
    demo: "#",
    github: "#"
  },
  {
    title: "Smart Finance Manager",
    description: "Web app to track income, expenses, and visualize insights.",
    image: assets.project_finance,
    tech: [<Cpu className="w-5 h-5 text-yellow-500" />, <Server className="w-5 h-5 text-green-500" />],
    demo: "#",
    github: "#"
  },
  {
    title: "Could be Something",
    description: "A placeholder for your next cool project — AI, automation, or web app!",
    image: assets.project_placeholder,
    tech: [<Rocket className="w-5 h-5 text-amber-500" />, <Code className="w-5 h-5 text-purple-500" />],
    demo: "#",
    github: "#"
  },
];

const MyWork = () => {
  return (
    <div id="work" className="w-full px-[12%] py-16 scroll-mt-20 font-ovo bg-gray-50 relative">
      {/* Small subtitle */}
      <motion.h4 className="text-center mb-2 text-lg text-gray-600"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What I’ve built
      </motion.h4>

      {/* Main heading */}
      <motion.h2 className="text-center text-5xl font-bold mb-14"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Work
      </motion.h2>

      {/* Project Grid */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {projects.map(({ title, description, image, tech, demo, github }, index) => (
          <motion.div key={index}
            className="relative rounded-3xl border border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 hover:ring-2 hover:ring-black transition-all duration-300 overflow-hidden bg-white/70 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {/* Project Image */}
            <div className="w-full h-52 relative overflow-hidden">
              <Image src={image} alt={title} className="w-full h-full object-cover object-center" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm mb-4">{description}</p>

              {/* Tech Stack Icons */}
              <div className="flex items-center gap-2 mb-4">
                {tech.map((icon, idx) => <span key={idx}>{icon}</span>)}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={demo}
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-rose-500 transition-all duration-300 flex items-center gap-1"
                >
                  Demo <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  className="px-4 py-2 border border-gray-500 rounded-full text-sm hover:bg-gray-100 transition-all duration-300 flex items-center gap-1"
                >
                  Code <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyWork;
