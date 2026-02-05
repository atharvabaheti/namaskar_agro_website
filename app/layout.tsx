import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    title: 'Namaskar Agro | Pure Dairy. Honest Taste.',
    description: 'Premium scrollytelling dairy brand blending traditional wisdom with modern purity.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} font-sans`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
