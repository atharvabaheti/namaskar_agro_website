"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import ProductTextOverlays from '@/components/ProductTextOverlays';
import ProductDetails from '@/components/ProductDetails';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const product = products[currentIndex];

    const nextProduct = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        window.scrollTo({ top: 0, behavior: "instant" }); // Reset scroll
    };

    const prevProduct = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    return (
        <main className="min-h-screen relative">

            {/* Background Transition Wrapper */}
            <motion.div
                className="fixed inset-0 z-0 transition-colors duration-1000"
                animate={{
                    background: `linear-gradient(to bottom, ${product.gradientColors[0]}, ${product.gradientColors[1]})`
                }}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Scrollytelling Section */}
                    <div className="relative z-10" id="product-hero">
                        <ProductTextOverlays product={product} scrollProgress={scrollProgress} />
                        <ProductBottleScroll product={product} onScrollProgress={setScrollProgress} />

                        {/* Scroll Indicator */}
                        <motion.div
                            style={{ opacity: 1 - scrollProgress * 3 }}
                            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-brand-dark/50"
                        >
                            <span className="text-sm font-medium tracking-widest uppercase">Scroll to Explore</span>
                            <ChevronDown className="animate-bounce" />
                        </motion.div>
                    </div>

                    {/* Content Section (Details & Commerce) */}
                    <div className="relative z-20 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-3xl mt-[-50vh] pt-[20vh]">
                        <ProductDetails product={product} />

                        {/* Buy Now / Final CTA */}
                        <section className="py-20 px-6 text-center">
                            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-8">
                                Ready to taste the purity?
                            </h2>
                            <button className="px-10 py-5 bg-saffron text-white text-xl font-bold rounded-full shadow-xl shadow-saffron/30 hover:shadow-saffron/50 hover:scale-105 transition-all duration-300">
                                Order {product.name} Now
                            </button>
                            <p className="mt-6 text-brand-brown/60">Delivered within 24 hours in Pune & Mumbai.</p>
                        </section>

                        {/* Next Product Teaser */}
                        <div
                            onClick={nextProduct}
                            className="cursor-pointer bg-brand-dark text-white py-16 flex items-center justify-center gap-4 hover:bg-black transition-colors group"
                        >
                            <span className="text-2xl md:text-3xl font-light opacity-70">Next Experience</span>
                            <span className="text-3xl md:text-4xl font-bold text-saffron group-hover:translate-x-2 transition-transform">
                                {products[(currentIndex + 1) % products.length].name} <span className="inline-block">→</span>
                            </span>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>

            {/* Fixed Navigation Controls */}
            <div className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none flex justify-between px-8 md:px-12 items-end">

                {/* Product Switcher Pills */}
                <div className="pointer-events-auto bg-white/80 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/40 flex items-center gap-1 mx-auto">
                    {products.map((p, idx) => (
                        <button
                            key={p.id}
                            onClick={() => {
                                setCurrentIndex(idx);
                                window.scrollTo({ top: 0, behavior: "instant" });
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${idx === currentIndex
                                ? 'bg-brand-dark text-white shadow-md'
                                : 'text-brand-dark/60 hover:bg-white'
                                }`}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Side Arrows */}
            <button
                onClick={prevProduct}
                className="fixed top-1/2 left-4 z-40 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center text-brand-dark hover:bg-white hover:scale-110 transition-all hidden md:flex"
            >
                <ArrowLeft size={24} />
            </button>

            <button
                onClick={nextProduct}
                className="fixed top-1/2 right-4 z-40 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center text-brand-dark hover:bg-white hover:scale-110 transition-all hidden md:flex"
            >
                <ArrowRight size={24} />
            </button>

        </main>
    );
}
