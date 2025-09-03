"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Code, LayoutDashboard, Server, Cpu, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { text: "Full Stack Developer", icon: <Code className="w-6 h-6 text-rose-500" /> },
  { text: "Frontend Developer", icon: <LayoutDashboard className="w-6 h-6 text-rose-500" /> },
  { text: "Backend Developer", icon: <Server className="w-6 h-6 text-rose-500" /> },
  { text: "Tech Enthusiast", icon: <Cpu className="w-6 h-6 text-rose-500" /> },
  { text: "Problem Solver", icon: <Zap className="w-6 h-6 text-rose-500" /> },
];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % skills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full px-[12%] py-20 h-screen flex flex-col items-center justify-center gap-6 font-ovo bg-gray-50 scroll-mt-20 relative'>

      {/* Profile Image with blob */}
      <motion.div 
        className='relative w-40 sm:w-48 mb-6'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='absolute -inset-4 rounded-full bg-gray-900/20 blur-3xl -z-10'></div>
        <div className='rounded-full border border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-2 hover:scale-105 hover:ring-2 hover:ring-black transition-all duration-300 overflow-hidden'>
          <Image 
            src={assets.profile_img} 
            alt='Profile' 
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </motion.div>

      {/* Small Subtitle */}
      <motion.h4 
        className='text-lg text-gray-600 mb-2'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I'm Priyanshu Jaiswal
      </motion.h4>

      {/* Animated Skills */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={skills[index].text} 
          className='flex items-center gap-3 justify-center mb-4'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {skills[index].icon}
          <span className='text-3xl sm:text-5xl lg:text-6xl font-bold'>
            {skills[index].text}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Tagline */}
      <motion.p
        className="text-center text-gray-700 max-w-2xl mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        I build interactive web applications and solve complex problems with clean code and smart algorithms.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        className='flex flex-col sm:flex-row items-center gap-4'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-rose-500 hover:border-rose-500 transition-all duration-300'>
          Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </a>
        <a href="/sample-resume.pdf"
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition-all duration-300'>
          My Resume <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </motion.div>
    </div>
  );
}

export default Header;
