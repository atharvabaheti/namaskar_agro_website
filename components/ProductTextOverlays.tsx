"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductTextOverlaysProps {
    product: Product;
    scrollProgress: number;
}

const ProductTextOverlays: React.FC<ProductTextOverlaysProps> = ({ product, scrollProgress }) => {
    // We divide the scroll into sections. 
    // 0-0.2: Intro
    // 0.2-0.4: Text 1
    // 0.4-0.6: Text 2
    // 0.6-0.8: Text 3
    // 0.8-1.0: Outro

    return (
        <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center items-center">
            {/* Dynamic Texts based on scroll segments */}

            {/* Section 1 */}
            <ScrollSection active={scrollProgress > 0.1 && scrollProgress < 0.25} align="left">
                <h2 className="text-6xl md:text-8xl font-bold text-brand-dark/90 leading-tight">
                    {product.heroTexts[0]}
                </h2>
            </ScrollSection>

            {/* Section 2 */}
            <ScrollSection active={scrollProgress > 0.35 && scrollProgress < 0.5} align="right">
                <h2 className="text-6xl md:text-8xl font-bold text-saffron leading-tight text-right">
                    {product.heroTexts[1]}
                </h2>
            </ScrollSection>

            {/* Section 3 */}
            <ScrollSection active={scrollProgress > 0.6 && scrollProgress < 0.75} align="center">
                <h2 className="text-5xl md:text-7xl font-bold text-brand-dark/90 text-center">
                    {product.heroTexts[2]}
                </h2>
                <p className="mt-4 text-xl md:text-2xl text-brand-brown/80 font-medium bg-white/50 backdrop-blur-sm p-4 rounded-xl inline-block">
                    {product.subName}
                </p>
            </ScrollSection>

            {/* Final Call */}
            <ScrollSection active={scrollProgress > 0.85} align="center">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/40 transform translate-y-20">
                    <h3 className="text-4xl font-bold text-brand-dark mb-2">{product.heroTexts[3]}</h3>
                    <div className="text-saffron font-bold text-2xl">{product.price}</div>
                </div>
            </ScrollSection>

        </div>
    );
};

const ScrollSection = ({ active, children, align }: { active: boolean; children: React.ReactNode; align: 'left' | 'right' | 'center' }) => {
    return (
        <motion.div
            className={`absolute w-full px-8 md:px-20 flex ${align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center'
                }`}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{
                opacity: active ? 1 : 0,
                y: active ? 0 : 50,
                scale: active ? 1 : 0.95
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export default ProductTextOverlays;
