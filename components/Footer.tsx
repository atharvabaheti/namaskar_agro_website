import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-brown text-cream pt-20 pb-10 rounded-t-[3rem] mt-[-2rem] relative z-40">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-6">
                        <h2 className="text-3xl font-bold text-saffron">Namaskar Agro</h2>
                        <p className="text-cream/80 max-w-sm leading-relaxed">
                            Bringing the purity of traditional Indian dairy to your modern table.
                            Honest ingredients, ethical farming, and the taste of home.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/namaskaragro?igsh=aHhreXJieXdpY3ln" />
                            <SocialIcon icon={<Facebook size={20} />} href="https://www.facebook.com/NamaskarAgroIndustries/" />
                            <SocialIcon icon={<Twitter size={20} />} href="#" />
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="font-semibold text-lg text-white">Shop</h3>
                        <FooterLink href="#">Mango Lassi</FooterLink>
                        <FooterLink href="#">Malai Lassi</FooterLink>
                        <FooterLink href="#">Masala Taak</FooterLink>
                        <FooterLink href="#">Bulk Orders</FooterLink>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="font-semibold text-lg text-white">Company</h3>
                        <FooterLink href="#">Our Story</FooterLink>
                        <FooterLink href="#">Farms</FooterLink>
                        <FooterLink href="#">Sustainability</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-3 space-y-4">
                        <h3 className="font-semibold text-lg text-white">Contact</h3>
                        <div className="flex items-start gap-3 text-cream/80">
                            <MapPin size={20} className="shrink-0 mt-1 text-saffron" />
                            <span>Umarkhed, Yavatmal-445206,<br />Maharashtra</span>
                        </div>
                        <div className="flex items-center gap-3 text-cream/80">
                            <Phone size={20} className="text-saffron" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3 text-cream/80">
                            <Mail size={20} className="text-saffron" />
                            <span>namaskar@namaskar.net.in</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
                    <p>© 2024 Namaskar Agro. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-saffron transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-saffron transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-saffron hover:text-white transition-all duration-300">
        {icon}
    </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="block text-cream/70 hover:text-saffron transition-colors">
        {children}
    </Link>
);

export default Footer;
