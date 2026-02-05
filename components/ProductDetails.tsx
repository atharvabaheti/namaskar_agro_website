"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { Droplets, Thermometer, Leaf } from 'lucide-react';

const ProductDetails = ({ product }: { product: Product }) => {
    return (
        <section className="relative z-20 py-24 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Story Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-2 px-4 rounded-full bg-saffron/10 text-saffron font-bold text-sm mb-6">
                            OUR CRAFT
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
                            {product.details.title}
                        </h2>
                        <p className="text-lg text-brand-brown/80 leading-relaxed mb-8">
                            {product.details.content}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {product.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-saffron" />
                                    <span className="font-medium text-brand-dark">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Nutrition / Process Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white max-w-lg mx-auto md:ml-auto"
                    >
                        <h3 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                            <Leaf className="text-leaf" />
                            Nutrition & Purity
                        </h3>

                        <div className="space-y-6">
                            {product.nutrition.map((item, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-brand-brown/10 pb-4 last:border-0">
                                    <span className="text-brand-brown/70">{item.label}</span>
                                    <span className="font-bold text-brand-dark text-lg">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-brand-brown/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                                    <Thermometer size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark mb-1">{product.processing.title}</h4>
                                    <p className="text-sm text-brand-brown/70 leading-relaxed">
                                        {product.processing.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
