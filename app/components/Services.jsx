"use client";
import React from 'react';
import { Code, Globe, Bot, Layers, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
    { icon: <Globe className="mx-auto mb-4 w-10 h-10 text-amber-600"/>, title: "Web Development", description: "Responsive and interactive websites built with React, JSP, Servlets, and Java Spring Boot." },
    { icon: <Bot className="mx-auto mb-4 w-10 h-10 text-blue-600"/>, title: "Automation Bots", description: "UiPath-based bots to automate repetitive tasks, invoices, and workflows." },
    { icon: <Code className="mx-auto mb-4 w-10 h-10 text-green-600"/>, title: "Java Projects", description: "Problem-solving and building efficient software with Java & DSA skills." },
    { icon: <Database className="mx-auto mb-4 w-10 h-10 text-purple-600"/>, title: "Database Management", description: "MySQL database design, queries, and integration for scalable projects." },
    { icon: <Layers className="mx-auto mb-4 w-10 h-10 text-pink-600"/>, title: "Full-stack Solutions", description: "Complete end-to-end apps: frontend, backend, APIs, and deployment." },
    { icon: <Cpu className="mx-auto mb-4 w-10 h-10 text-red-600"/>, title: "AI & Smart Bots", description: "Mini AI assistants, recommendation systems, and smart utilities." }
];

const processSteps = ["💡 Ideation", "🎨 Design", "⚙️ Build", "🚀 Deploy"];

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-20 scroll-mt-20 font-ovo bg-gray-50'>
            {/* Tagline */}
            <motion.h4 className='text-center mb-2 text-lg text-gray-600'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                From Ideas → Reality
            </motion.h4>

            {/* Main heading */}
            <motion.h2 className='text-center text-5xl font-bold mb-14'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                Code. Create. Automate.
            </motion.h2>

            {/* Services cards */}
            <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
                {servicesList.map((service, idx) => (
                    <motion.div key={idx}
                        className='border-[0.5px] border-gray-400 rounded-3xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 duration-500 text-center bg-white'
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        {service.icon}
                        <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                        <p className='text-gray-700 leading-6'>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Process section */}
            <motion.h3 className='text-center text-2xl font-semibold mb-8 text-gray-800'
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                My Work Process
            </motion.h3>
            <motion.div className='flex flex-col sm:flex-row justify-center items-center gap-6 mb-16'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
                {processSteps.map((step, idx) => (
                    <motion.div key={idx} className='px-6 py-4 border rounded-xl shadow-sm bg-white'
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        {step}
                        {idx < processSteps.length - 1 && <span className="hidden sm:inline mx-2">→</span>}
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to action */}
            <motion.div className='text-center'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h4 className='text-lg text-gray-700 mb-4'>Want to work together?</h4>
                <a href="#contact" className='px-6 py-3 bg-amber-600 text-white rounded-xl shadow-md hover:bg-amber-700 duration-300'>
                    Let’s Build Something Amazing 🚀
                </a>
            </motion.div>
        </div>
    );
};

export default Services;
