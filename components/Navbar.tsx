"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-white/20 py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="group">
                    <img
                        src={getAssetPath("NAIlogo.png")}
                        alt="Namaskar Agro Logo"
                        className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-brand-dark/80 font-medium">
                    <Link href="#products" className="hover:text-saffron transition-colors">Products</Link>
                    <Link href="#story" className="hover:text-saffron transition-colors">Our Story</Link>
                    <Link href="#process" className="hover:text-saffron transition-colors">Process</Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-brand-dark text-white rounded-full hover:bg-saffron transition-colors shadow-lg shadow-saffron/20 hover:shadow-saffron/40 duration-300">
                        <span>Order Fresh</span>
                        <ShoppingBag size={18} />
                    </button>

                    <button className="md:hidden text-brand-dark">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
