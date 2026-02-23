"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, MapPin, Search, ChevronDown } from "lucide-react";
import { Buttons } from "./ui/moving-border";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavLink = {
  type: "link";
  name: string;
  href: string;
};

type NavDropdown = {
  type: "dropdown";
  name: string;
  items: { name: string; href: string; description?: string }[];
};

type NavItem = NavLink | NavDropdown;

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const navigationConfig: NavItem[] = [
    {
      type: "dropdown",
      name: "About Us",
      items: [
        { name: "Company Overview", href: "/about-us#overview" },
        { name: "TruckCorp Team", href: "/about-us#leadership" },
        { name: "Coverage Areas", href: "/about-us#coverage" },
        { name: "Fleet & Equipment", href: "/about-us#fleet" },
        { name: "Certifications & Awards", href: "/about-us#certifications-and-awards" },
      ],
    },
    {
      type: "dropdown",
      name: "Our Services",
      items: [
        { name: "Freight Transportation", href: "/our-services/freight-transportation" },
        { name: "Logistics Management", href: "/our-services/logistics" },
        { name: "Warehousing", href: "/our-services/warehousing" },
        { name: "Supply Chain Solutions", href: "/our-services/supply-chain" },
        { name: "Cross-Border Transport", href: "/our-services/cross-border" },
      ],
    },
    {
      type: "dropdown",
      name: "Industries",
      items: [
        { name: "Agriculture", href: "/industries/agriculture" },
        { name: "Automotive", href: "/industries/automotive" },
        { name: "Construction", href: "/industries/construction" },
        { name: "Retail", href: "/industries/retail" },
        { name: "Pharmaceutical", href: "/industries/pharmaceutical" },
        { name: "Food & Beverage", href: "/industries/food-beverage" },
      ],
    },
    {
      type: "dropdown",
      name: "Resources",
      items: [
        { name: "Blog", href: "/blogs" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQs", href: "/faqs" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Industry Reports", href: "/industry-reports" },
      ],
    },
    { type: "link", name: "Our Clients", href: "/clients" },
    { type: "link", name: "Contact Us", href: "/contact-us" },
  ];

  const navItems = [
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/our-services" },
    { name: "Industries", href: "/industries" },
    { name: "Resources", href: "/blogs" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  const searchLinks = [
    {
      heading: "Quick Links",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Services", href: "/our-services/freight-transportation" },
        { name: "Industries", href: "/industries/agriculture" },
        { name: "Our Clients", href: "/clients" },
        { name: "Get A Quote", href: "/get-quote" },
      ],
    },
    {
      heading: "Services",
      links: [
        { name: "Freight Transportation", href: "/our-services/freight-transportation" },
        { name: "Logistics Management", href: "/our-services/logistics" },
        { name: "Warehousing", href: "/our-services/warehousing" },
        { name: "Supply Chain", href: "/our-services/supply-chain" },
        { name: "Cross-Border Transport", href: "/our-services/cross-border" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { name: "Blog", href: "/blogs" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQs", href: "/faqs" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Industry Reports", href: "/industry-reports" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { name: "+254 797 596 9757", href: "tel:+254795969757" },
        { name: "josephwachira589@gmail.com", href: "mailto:josephwachira589@gmail.com" },
        { name: "Nairobi, Kenya", href: "https://www.google.com/maps/place/Nairobi,+Kenya" },
        { name: "Contact Us", href: "/contact-us" },
      ],
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  const textColor = isScrolled ? "text-foreground" : "text-white";
  const hoverColor = isScrolled ? "hover:text-primary" : "hover:text-white/70";
  const borderColor = isScrolled ? "border-border" : "border-white/25";
  const dividerBg = isScrolled ? "bg-border" : "bg-white/25";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-professional"
        : "bg-transparent"
        }`}
    >
      {/* Contact info bar */}
      {isScrolled && (
        <div className="hidden lg:flex items-center justify-end py-1 text-sm text-muted-foreground border-b border-border/30 transition-all duration-300 ease-in-out">
          <div className="flex items-center space-x-6 mr-6 my-2">
            <div className="flex flex-row items-center space-x-2">
              <Link href="tel:+254795969757" className="flex flex-row items-center space-x-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                <span>+254 797 596 9757</span>
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <Link href="mailto:josephwachira589@gmail.com" className="flex flex-row items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                <span>josephwachira589@gmail.com</span>
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <Link
                href="https://www.google.com/maps/place/Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent" />
                <span>Nairobi, Kenya</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-stretch w-full">
        <Link
          href="/"
          className="shrink-0 flex items-center justify-center px-5"
          style={{ minHeight: "80px" }}
        >
          <Image
            src="/logo.png"
            alt="TruckCorp Logo"
            width={110}
            height={80}
            className="object-contain"
            style={{ height: "72px", width: "auto" }}
          />
        </Link>

        <div className={`w-px self-stretch shrink-0 ${dividerBg}`} />
        <div className="flex flex-col flex-1 min-w-0">
          <div className={`flex items-center justify-between pl-4 pr-4 pt-2 pb-1.5 border-b ${borderColor}`}>

            {/* Hamburger */}
            <button
              className={`p-1.5 rounded transition-colors ${isScrolled ? "hover:bg-accent/10 text-foreground" : "hover:bg-white/20 text-white"
                }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* CTA + divider + Search */}
            <div className="flex items-center gap-2">
              <Link href="/get-quote" className="hidden sm:block">
                <Buttons
                  borderRadius="1.75rem"
                  className={`transition-all duration-300 cursor-pointer text-sm ${isScrolled
                    ? "bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    : "bg-white text-black border-white hover:bg-white/90"
                    }`}
                >
                  Get A Quote
                </Buttons>
              </Link>

              <div className={`hidden sm:block h-6.5 w-px ${dividerBg}`} />

              <button
                className={`p-2.5 rounded-full transition-colors cursor-pointer ${isScrolled ? "text-foreground hover:bg-white-10 hover:text-foreground/70" : "text-white hover:bg-white/5"
                  }`}
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Bottom nav items*/}
          <div className="hidden lg:flex items-center justify-center space-x-6 py-3 px-2 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap 
        ${textColor} ${hoverColor}
        ${isActive(item.href)
                    ? isScrolled
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-['']"
                      : "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:content-['']"
                    : ""
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger menu..drawer */}
          {isOpen && (
            <div
              className={`fixed inset-0 top-[80px] z-40 overflow-y-auto backdrop-blur-md ${isScrolled ? "bg-background/97" : "bg-black/95"
                }`}
            >
              <div className="px-5 py-6 space-y-1">
                <Link
                  href="/"
                  className={`block py-3 font-medium border-b border-border/20 ${isActive("/") ? "text-primary" : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {navigationConfig.map((item) => (
                  <div key={item.name}>
                    {item.type === "link" ? (
                      <Link
                        href={item.href}
                        className={`block py-3 font-medium border-b border-border/20 ${isActive(item.href) ? "text-primary" : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div className="border-b border-border/20">
                        <button
                          className={`w-full flex items-center justify-between py-3 font-medium ${isScrolled ? "text-foreground" : "text-white"
                            }`}
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.name ? null : item.name)
                          }
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 pb-2 space-y-1">
                            {item.items.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`block py-2 text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/75 hover:text-white"
                                  }`}
                                onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4">
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
                  <Link href="tel:+254795969757" className="flex items-center space-x-3 text-sm" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4 text-accent" />
                    <span className={isScrolled ? "text-foreground" : "text-white"}>+254 797 596 9757</span>
                  </Link>
                  <Link href="mailto:josephwachira589@gmail.com" className="flex items-center space-x-3 text-sm" onClick={() => setIsOpen(false)}>
                    <Mail className="w-4 h-4 text-accent" />
                    <span className={isScrolled ? "text-foreground" : "text-white"}>josephwachira589@gmail.com</span>
                  </Link>
                  <Link
                    href="https://www.google.com/maps/place/Nairobi,+Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className={isScrolled ? "text-foreground" : "text-white"}>Nairobi, Kenya</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Mobile spacer to keep logo height balanced */}
          <div className="lg:hidden flex-1 min-h-[28px]" />
        </div>
      </div>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
            onClick={() => setSearchOpen(false)}
          />

          <div className="relative z-10 w-full bg-background shadow-2xl max-h-screen overflow-y-auto">

            <div className="container mx-auto px-6 pt-28 pb-10">
              <div className="flex max-w-2xl justify-center items-center gap-4 border border-border rounded-lg px-4 mx-auto py-3 bg-muted/40 focus-within:ring-2 focus-within:ring-primary transition-all">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="w-px h-5 bg-border shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search TruckCorp - routes, services, resources..."
                  className="flex-1 bg-transparent outline-none text-base text-foreground placeholder:text-muted-foreground"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="border-t border-border/40" />

            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {searchLinks.map((col) => (
                  <div key={col.heading}>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                      {col.heading}
                    </h3>
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            onClick={() => setSearchOpen(false)}
                            className="text-sm text-foreground hover:text-primary transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="absolute top-14 right-10 z-20 p-2 cursor-pointer rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* ══ Mobile drawer ══ */}
      {isOpen && (
        <div
          className={`lg:hidden fixed inset-0 top-[80px] z-40 overflow-y-auto backdrop-blur-md ${isScrolled ? "bg-background/97" : "bg-black/95"
            }`}
        >
          <div className="px-5 py-6 space-y-1">
            <Link
              href="/"
              className={`block py-3 font-medium border-b border-border/20 ${isActive("/") ? "text-primary" : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {navigationConfig.map((item) => (
              <div key={item.name}>
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    className={`block py-3 font-medium border-b border-border/20 ${isActive(item.href) ? "text-primary" : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="border-b border-border/20">
                    <button
                      className={`w-full flex items-center justify-between py-3 font-medium ${isScrolled ? "text-foreground" : "text-white"
                        }`}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block py-2 text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/75 hover:text-white"
                              }`}
                            onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4">
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
              <Link href="tel:+254795969757" className="flex items-center space-x-3 text-sm" onClick={() => setIsOpen(false)}>
                <Phone className="w-4 h-4 text-accent" />
                <span className={isScrolled ? "text-foreground" : "text-white"}>+254 797 596 9757</span>
              </Link>
              <Link href="mailto:josephwachira589@gmail.com" className="flex items-center space-x-3 text-sm" onClick={() => setIsOpen(false)}>
                <Mail className="w-4 h-4 text-accent" />
                <span className={isScrolled ? "text-foreground" : "text-white"}>josephwachira589@gmail.com</span>
              </Link>
              <Link
                href="https://www.google.com/maps/place/Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <MapPin className="w-4 h-4 text-accent" />
                <span className={isScrolled ? "text-foreground" : "text-white"}>Nairobi, Kenya</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};