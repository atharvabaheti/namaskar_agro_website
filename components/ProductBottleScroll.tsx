"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Product } from "@/data/products";
import { getAssetPath } from "@/lib/utils";

interface ProductBottleScrollProps {
    product: Product;
    onScrollProgress: (progress: number) => void;
}

const ProductBottleScroll: React.FC<ProductBottleScrollProps> = ({
    product,
    onScrollProgress,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Load images when product changes
    useEffect(() => {
        setIsLoading(true);
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        const frameCount = product.frameCount;

        const loadPromises = Array.from({ length: frameCount }).map((_, i) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                const frameIndex = i + 1; // 1-based index
                const frameStr = String(frameIndex).padStart(3, '0');
                img.src = getAssetPath(`images/${product.folderPath}/ezgif-frame-${frameStr}.jpg`);

                img.onload = () => {
                    loadedImages[i] = img;
                    loadedCount++;
                    if (loadedCount === frameCount) {
                        setImages(loadedImages);
                        setIsLoading(false);
                    }
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load frame ${frameIndex} for ${product.name}`);
                    resolve();
                }
            });
        });

        Promise.all(loadPromises);
    }, [product.folderPath, product.name, product.frameCount]);

    // Render to canvas based on scroll progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        onScrollProgress(latest); // Notify parent for text sync

        if (!canvasRef.current || images.length === 0 || isLoading) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const frameCount = product.frameCount;
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        const img = images[frameIndex];
        if (!img) return;

        // Clear and draw
        // Calculate aspect ratio to contain image within canvas
        const scale = Math.min(
            canvas.width / img.width,
            canvas.height / img.height
        ) * 1.0; // 100% fill for maximum impact

        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Trigger a redraw if needed, or wait for next scroll frame
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Init
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="h-[500vh] relative w-full">
            <div className="sticky top-0 inset-0 h-screen w-screen flex items-center justify-center">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-16 h-16 border-4 border-saffron border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="w-screen h-screen object-contain pointer-events-none"
                />
            </div>
        </div>
    );
};

export default ProductBottleScroll;
