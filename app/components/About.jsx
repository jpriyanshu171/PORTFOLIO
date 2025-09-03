"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { BookOpen, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const infoList = [
    { icon: <BookOpen className="w-7 h-7 text-amber-600" />, title: "Education", description: "B.Tech in Computer Science at Galgotias University, focused on problem-solving & full-stack development." },
    { icon: <Code className="w-7 h-7 text-amber-600" />, title: "Skills", description: "Java, React, Next.js, DSA, UiPath, and building automation workflows & full-stack apps." },
    { icon: <Rocket className="w-7 h-7 text-amber-600" />, title: "Goals", description: "To build innovative products, explore AI-driven automation, and contribute to impactful projects." }
];

const journey = [
    { year: "2019", title: "High School", description: "Kendriya Vidyalaya", logo: assets.school },
    { year: "2021", title: "12th Grade", description: "Kendriya Vidyalaya", logo: assets.school },
    { year: "2022", title: "B.Tech - CSE", description: "Galgotias University", logo: assets.college },
    { year: "2024", title: "Virtual Internship", description: "Eduskills Foundation", logo: assets.company },
];

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-16 scroll-mt-20 font-ovo bg-gray-50 relative'>
            
            {/* Subtitle */}
            <motion.h4 className='text-center mb-2 text-lg text-gray-600' 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}>
              Introduction
            </motion.h4>

            {/* Main heading */}
            <motion.h2 className='text-center text-5xl font-bold mb-14' 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}>
              Where curiosity meets code.
            </motion.h2>

            <div className='flex flex-col lg:flex-row items-center gap-20 relative mb-20'>
                {/* Profile Image */}
                <motion.div className='relative w-64 sm:w-80'
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.8 }}>
                    <div className='absolute -inset-4 rounded-3xl bg-amber-100/40 blur-3xl -z-10'></div>
                    <div className='rounded-3xl border border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-2 hover:scale-105 hover:ring-2 hover:ring-amber-400 transition-all duration-300 overflow-hidden'>
                        <Image src={assets.user_image} alt='Profile' className='w-full h-full object-cover object-center' />
                    </div>
                </motion.div>

                {/* Info Cards */}
                <motion.div className='flex-1' initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                  }}>
                    <p className='mb-10 max-w-2xl leading-7 text-gray-700'>
                        I’m a passionate Computer Science student with a keen interest in building interactive web applications
                        and solving real-world problems with clean and efficient code. I love experimenting with new technologies
                        and turning ideas into practical solutions.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, title, description }, index) => (
                            <motion.li key={index}
                                className='border border-gray-300 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 duration-500 bg-white/70 backdrop-blur-sm'
                                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                                <div className="flex justify-center">{icon}</div>
                                <h3 className='my-4 font-semibold text-gray-800'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Journey Timeline */}
            <motion.div className='relative w-full overflow-x-auto mt-16' initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
                <div className='flex items-center gap-20 py-8'>
                    {journey.map((item, idx) => (
                        <motion.div key={idx} className='flex flex-col items-center relative min-w-[200px]' 
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        
                        {/* Year Circle */}
                        <div className='w-16 h-16 rounded-full border border-black flex items-center justify-center text-black font-semibold text-lg'>
                            {item.year}
                        </div>

                        {/* Connecting Line */}
                        {idx < journey.length - 1 && (
                            <div className='absolute top-8 left-[100%] w-32 h-1 bg-black'></div>
                        )}

                        {/* Milestone Info */}
                        <div className='mt-4 flex flex-col items-center text-center'>
                            <div className='w-12 h-12 mb-2'>
                                {item.logo && <Image src={item.logo} alt={item.title} width={48} height={48} className='w-full h-full object-contain' />}
                            </div>

                            <h3 className='font-semibold text-gray-800'>{item.title}</h3>
                            <p className='text-gray-600 text-sm'>{item.description}</p>
                        </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
