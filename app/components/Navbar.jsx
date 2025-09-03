"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#top" },
        { label: "About me", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "My work", href: "#work" },
        { label: "Skills", href: "#skills" },
        { label: "Contact me", href: "#contact" },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
                
                {/* Logo */}
                <a href="#top" className="cursor-pointer font-bold tracking-wide text-[34px] font-ovo">
                    <span className="text-black">Dev</span>
                    <span className="text-rose-500">X</span>
                </a>

                {/* Desktop Menu with motion */}
                <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 bg-white/50 backdrop-blur-lg shadow-sm"
                >
                    {navLinks.map((link, idx) => (
                        <motion.li
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href={link.href} className="font-ovo text-gray-800 hover:text-rose-500 transition-colors">
                                {link.label}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-2 px-8 py-2 border border-gray-500 rounded-full hover:bg-rose-50 transition-all"
                    >
                        Contact
                        <Image src={assets.arrow_icon} alt="" className="w-3" />
                    </a>

                    {/* Mobile menu button */}
                    <button className="block md:hidden" onClick={() => setMenuOpen(true)}>
                        <Image src={assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu with motion */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="flex md:hidden flex-col py-20 px-10 fixed top-0 right-0 w-64 h-screen bg-rose-50 z-50 space-y-4"
                        >
                            <div className="absolute top-6 right-6" onClick={() => setMenuOpen(false)}>
                                <Image src={assets.close_black} alt="Close" className="w-5 cursor-pointer" />
                            </div>

                            {navLinks.map((link, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <a
                                        href={link.href}
                                        className="font-ovo py-4 block leading-2 text-gray-800 hover:text-rose-500 transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
