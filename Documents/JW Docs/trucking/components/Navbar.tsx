"use client";

import { useState } from "react";
import { Menu, X, Truck, Phone, Mail, MapPin, Users, Briefcase, GitBranch, BookOpen } from "lucide-react";
import { Buttons } from "./ui/moving-border";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Blog", href: "/blogs" },
  ];

  const services = [
    { name: "Freight Transportation", href: "/our-services/freight-transportation" },
    { name: "Logistics Management", href: "/our-services/logistics" },
    { name: "Warehousing", href: "/our-services/warehousing" },
    { name: "Supply Chain Solutions", href: "/our-services/supply-chain" },
    { name: "Cross-Border Transport", href: "/our-services/cross-border" },
  ];

  const aboutMenu = [
    { name: "Coverage Areas", href: "/about-us#coverage" },
    { name: "Industries We Serve", href: "/about-us#industries" },
    { name: "Fleet & Equipment", href: "/about-us#fleet" },
    { name: "Certifications & Awards", href: "/about-us#certifications-and-awards" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-professional'
      : 'bg-transparent'
      }`}>

      {isScrolled && (
        <div className="hidden lg:flex items-center justify-end py-1 text-sm text-muted-foreground border-b border-border/30 transition-all duration-300 ease-in-out">
          <div className="flex items-center space-x-6 mr-6 my-2">
            <div className="flex flex-row items-center space-x-2">
              <Link href="tel:+254795969757" className="flex flex-row items-center space-x-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                <span>+254 797 596 9757</span>
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <Link href="mailto:josephwachira589@gmail.com" className="flex flex-row items-center space-x-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                <span>josephwachira589@gmail.com</span>
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <Link
                href="https://www.google.com/maps/place/Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-2 hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent" />
                <span>Nairobi, Kenya</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-50">
            <Image
              src={'/logo.png'}
              alt="TruckCorp Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className={`text-3xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'
                }`}>
                𝚃𝚛𝚞𝚌𝚔𝙲𝚘𝚛𝚙
              </span>
              <span className={`text-xs transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-white/80'
                } -mt-1`}>
                𝙻𝚘𝚐𝚒𝚜𝚝𝚒𝚌𝚜 & 𝚃𝚛𝚊𝚗𝚜𝚙𝚘𝚛𝚝
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-8">

                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={`transition-colors font-medium p-3 rounded-full ${isScrolled
                      ? `hover:bg-accent hover:text-accent-foreground ${isActive("/") ? "text-primary bg-primary/10" : "text-foreground"
                      }`
                      : `hover:bg-white/20 hover:text-white ${isActive("/") ? "text-white bg-white/20" : "text-white/90"
                      }`
                      }`}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about-us"
                    className={`transition-colors font-medium p-3 rounded-full ${isScrolled
                      ? `hover:bg-accent hover:text-accent-foreground ${isActive("/clients") ? "text-primary bg-primary/10" : "text-foreground"
                      }`
                      : `hover:bg-white/20 hover:text-white ${isActive("/clients") ? "text-white bg-white/20" : "text-white/90"
                      }`
                      }`}
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`transition-colors rounded-full p-4 bg-transparent text-md font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                    }`}>
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2 service-card">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                        >
                          <NavigationMenuLink
                            className="block select-none space-y-1 rounded-full p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground animate-fade-up"
                          >
                            <div className="text-sm font-medium leading-none text-card-foreground">
                              {service.name}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Our Clients */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/clients"
                    className={`transition-colors font-medium p-3 rounded-full ${isScrolled
                      ? `hover:bg-accent hover:text-accent-foreground ${isActive("/clients") ? "text-primary bg-primary/10" : "text-foreground"
                      }`
                      : `hover:bg-white/20 hover:text-white ${isActive("/clients") ? "text-white bg-white/20" : "text-white/90"
                      }`
                      }`}
                  >
                    Our Clients
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact Us */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contact-us"
                    className={`transition-colors font-medium p-3 rounded-full ${isScrolled
                      ? `hover:bg-accent hover:text-accent-foreground ${isActive("/contact-us") ? "text-primary bg-primary/10" : "text-foreground"
                      }`
                      : `hover:bg-white/20 hover:text-white ${isActive("/contact-us") ? "text-white bg-white/20" : "text-white/90"
                      }`
                      }`}
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

            <div className="ml-8">
              <Link href="/get-quote">
                <Buttons
                  borderRadius="1.75rem"
                  className={`transition-all duration-300 ${isScrolled
                    ? "bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    : "bg-white text-black border-white hover:bg-white/90"
                    }`}
                >
                  Get A Quote
                </Buttons>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors z-50 ${isScrolled
              ? "hover:bg-accent hover:text-accent-foreground"
              : "hover:bg-white/20 hover:text-white"
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden fixed inset-0 top-20 service-gradient ${isScrolled ? 'bg-background/95' : 'bg-black/95'
            } backdrop-blur-md`}>
            <div className="px-4 py-6 space-y-4 h-full overflow-y-auto">
              <div className="space-y-4">
                {/* Home */}
                <Link
                  href="/"
                  className={`block transition-colors font-medium py-2 ${isActive("/")
                    ? "text-primary"
                    : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Services */}
                <div className="space-y-2">
                  <span className={`block font-medium py-2 ${isScrolled ? "text-foreground" : "text-white"
                    }`}>
                    Our Services
                  </span>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`block text-sm transition-colors py-1 animate-slide-right ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Our Clients */}
                <Link
                  href="/clients"
                  className={`block transition-colors font-medium py-2 ${isActive("/clients")
                    ? "text-primary"
                    : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Our Clients
                </Link>

                {/* Contact Us */}
                <Link
                  href="/contact-us"
                  className={`block transition-colors font-medium py-2 ${isActive("/contact-us")
                    ? "text-primary"
                    : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-4 border-t border-border/30">
                <Link href="/get-quote" onClick={() => setIsOpen(false)}>
                  <Buttons
                    borderRadius="1.75rem"
                    variant="default"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-md shadow-accent-glow"
                  >
                    Get Quote
                  </Buttons>
                </Link>
              </div>

              <div className="pt-4 border-t border-border/30 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Link href="tel:+254795969757" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4 text-accent" />
                    <span>+254 797 596 9757</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Link href="mailto:josephwachira589@gmail.com" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <Mail className="w-4 h-4 text-accent" />
                    <span>josephwachira589@gmail.com</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
