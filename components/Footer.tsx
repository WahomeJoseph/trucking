'use client';
import Link from "next/link";
import Image from "next/image";
import {
    Truck,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Send,
    SquareChevronUp,
    Users,
    HomeIcon,
    BookOpen,
    TextQuote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/", Icon: HomeIcon },
        { name: "About Us", href: "/about-us", Icon: BookOpen },
        { name: "Our Services", href: "/our-services", Icon: Truck },
        { name: "Our Clients", href: "/clients", Icon: Users },
        { name: "Contact Us", href: "/contact-us", Icon: Phone },
        { name: "Get Quote", href: "/get-quote", Icon: TextQuote },
    ];

    const services = [
        { name: "Freight Transportation", href: "/ourservices/freight-transportation" },
        { name: "Logistics Management", href: "/services/logistics" },
        { name: "Warehousing", href: "/services/warehousing" },
        { name: "Supply Chain Solutions", href: "/services/supply-chain" },
        { name: "Cross-Border Transport", href: "/services/cross-border" },
        { name: "Last-Mile Delivery", href: "/services/last-mile" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", name: "Facebook", color: "hover:text-blue-600" },
        { icon: Twitter, href: "#", name: "Twitter", color: "hover:text-blue-400" },
        { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:text-blue-500" },
        { icon: Instagram, href: "#", name: "Instagram", color: "hover:text-pink-500" },
    ];


    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
                            <Image
                                src={'/logo.png'}
                                alt="TruckCorp Logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    𝚃𝚛𝚞𝚌𝚔𝙲𝚘𝚛𝚙
                                </span>
                                <span className="text-xs text-gray-400 -mt-1 tracking-wider">
                                    𝙻𝚘𝚐𝚒𝚜𝚝𝚒𝚌𝚜 & 𝚃𝚛𝚊𝚗𝚜𝚙𝚘𝚛𝚝
                                </span>
                            </div>
                        </Link>

                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                            Professional trucking and logistics services across East Africa.
                            We deliver reliability, efficiency, and excellence in every shipment.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                    <Phone className="w-4 h-4 text-accent" />
                                </div>
                                <Link href="tel:+254795969757" className="text-gray-300 hover:text-white transition-colors font-medium">
                                    +254 797 596 9757
                                </Link>
                            </div>

                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                                    <Mail className="w-4 h-4 text-accent" />
                                </div>
                                <Link href="mailto:josephwachira589@gmail.com" className="text-gray-300 hover:text-white transition-colors font-medium break-all">
                                    josephwachira589@gmail.com
                                </Link>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-accent" />
                                </div>
                                <span className="text-gray-300 font-medium">Nairobi, Kenya</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">
                            <span className="pb-2 border-b-2 border-accent/30 inline-block">Quick</span> Links
                        </h3>

                        <ul className="space-y-2">
                            {quickLinks.map(({ name, href, Icon }) => (
                                <li key={name}>
                                    <Link
                                        href={href}
                                        className="text-gray-300 hover:text-accent transition-all duration-200 ease-in-out flex items-center group py-1">
                                        <span className="w-4 h-4 mr-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                                            <Icon className="w-4 h-4" />
                                        </span>
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            {name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">
                            <span className="pb-2 border-b border-accent/30 inline-block">Our</span> Services
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-300 hover:text-accent transition-all duration-200 flex items-center group py-1"
                                    >
                                        <Truck className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & About */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">
                            <span className="pb-2 border-b border-accent/30 inline-block">Stay</span>Updated
                        </h3>

                        {/* Newsletter Signup */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-white mb-2 flex items-center">
                                <Send className="w-4 h-4 mr-2 text-accent" />
                                Newsletter
                            </h4>
                            <p className="text-sm text-gray-300 mb-4">
                                Get logistics insights and industry updates
                            </p>
                            <div className="space-y-3">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-accent focus:ring-accent/20"
                                />
                                <Button className="w-full bg-accent hover:from-accent-dark hover:to-accent/90 text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-200">
                                    Subscribe Now
                                </Button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-bold text-white mb-3">Follow Us</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className={`w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 flex items-center justify-center transition-all duration-200 hover:scale-110 ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5 text-gray-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800/50">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        {/* Copyright */}
                        <div className="text-sm text-gray-400 text-center lg:text-left">
                            © {currentYear} TruckCorp Logistics. All rights reserved.
                        </div>

                        {/* Additional Links */}
                        <div className="flex flex-wrap justify-center items-center space-x-6">
                            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-accent transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-accent transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-accent transition-colors">
                                Cookie Policy
                            </Link>
                            <Link href="/sitemap" className="text-sm text-gray-400 hover:text-accent transition-colors">
                                Sitemap
                            </Link>
                        </div>

                        {/* Back to Top */}
                        <Button
                            size="lg"
                            className="text-gray-400 h-14 hover:text-accent hover:bg-accent/10 transition-colors"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <SquareChevronUp size={24} />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
