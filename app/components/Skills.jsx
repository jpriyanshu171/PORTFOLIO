"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Code, LayoutDashboard, Server, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        category: "Languages",
        skills: [
            { name: "Java", icon: <Image src={assets.java} alt="" className="w-5 h-5" /> },
            { name: "Python", icon: <Image src={assets.python} alt="" className="w-5 h-5" /> },
            { name: "JavaScript", icon: <Image src={assets.javascript} alt="" className="w-5 h-5" /> },
            { name: "HTML", icon: <Image src={assets.html} alt="" className="w-5 h-5" /> },
            { name: "CSS", icon: <Image src={assets.css} alt="" className="w-5 h-5" /> },
            { name: "Kotlin", icon: <Image src={assets.kotlin} alt="" className="w-5 h-5" /> },
        ],
    },
    {
        category: "Frameworks & Libraries",
        skills: [
            { name: "React", icon: <Image src={assets.react} alt="React" className="w-5 h-5" /> },
            { name: "Next.js", icon: <Image src={assets.nextjs} alt="Next.js" className="w-5 h-5" /> },
            { name: "Node.js", icon: <Image src={assets.nodejs} alt="Node.js" className="w-5 h-5" /> },
            { name: "Spring Boot", icon: <Image src={assets.spring_boot} alt="Spring_Boot" className="w-5 h-5" /> },
            { name: "Hibernate", icon: <Image src={assets.hibernate} alt="hibernate" className="w-5 h-5" /> },
            { name: "Spring Security", icon: <Image src={assets.spring_security} alt="Spring_security" className="w-5 h-5" /> },
        ],
    },
    {
        category: "Tools & Platforms",
        skills: [
            { name: "VSCode", icon: <Image src={assets.vscode} alt="VSCode" className="w-5 h-5" /> },
            { name: "IntelliJ IDEA", icon: <Image src={assets.intellij_idea} alt="IntelliJ" className="w-5 h-5" /> },
            { name: "Postman", icon: <Image src={assets.postman} alt="Postman" className="w-5 h-5" /> },
            { name: "MySQL", icon: <Image src={assets.mysql} alt="MySQL" className="w-5 h-5" /> },
            { name: "Github", icon: <Image src={assets.github} alt="Git" className="w-5 h-5" /> },
            { name: "Git", icon: <Image src={assets.git} alt="Git" className="w-5 h-5" /> },
            { name: "Canva", icon: <Image src={assets.canva} alt="Canva" className="w-5 h-5" /> },
            { name: "Eclipse", icon: <Image src={assets.eclipse} alt="Eclipse" className="w-5 h-5" /> },
        ],
    },
    {
        category: "Specialties",
        skills: [
            { name: "DSA & Algorithms", icon: <Cpu className="w-5 h-5 text-yellow-500" /> },
            { name: "Automation / RPA", icon: <Rocket className="w-5 h-5 text-amber-500" /> },
            { name: "AI Tools", icon: <LayoutDashboard className="w-5 h-5 text-purple-500" /> },
            { name: "Prompt Engineering", icon: <Code className="w-5 h-5 text-rose-500" /> },
        ],
    },
];

const Skills = () => {
    return (
        <div id="skills" className="w-full px-[12%] py-16 scroll-mt-20 font-ovo bg-gray-50 relative">
            {/* Small subtitle */}
            <motion.h4 className="text-center mb-2 text-lg text-gray-600"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Abilities & Tools
            </motion.h4>

            {/* Main heading */}
            <motion.h2 className="text-center text-5xl font-bold mb-14"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Skills
            </motion.h2>

            {/* Skills Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {skillCategories.map(({ category, skills }, index) => (
                    <motion.div key={index} className="flex flex-col gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {skills.map(({ name, icon }, idx) => (
                                <motion.li key={idx} className="flex items-center gap-2 border border-gray-300 rounded-2xl p-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    {icon}
                                    <span className="text-gray-700 text-sm">{name}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
