'use client'

import React, { useEffect, useState } from "react";
import { Users, Award, Star, Mail, Globe, Phone } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Buttons } from "@/components/ui/moving-border";
import Link from "next/link";
import Image from "next/image";


export default function HomePage() {

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [counters, setCounters] = useState({ clients: 1000, experience: 10, trucks: 300, delivery: 99 })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 500, experience: 15, trucks: 50, delivery: 99 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        setCounters({
          clients: Math.floor(targets.clients * progress),
          experience: Math.floor(targets.experience * progress),
          trucks: Math.floor(targets.trucks * progress),
          delivery: Math.floor(targets.delivery * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    const aboutSection = document.getElementById("about-section")
    if (aboutSection) observer.observe(aboutSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // Images for the slider
  const sliderImages = [
    {
      src: "/hero-truck.jpg",
      alt: "Professional trucking services",
      description: "Reliable freight solutions across East Africa"
    },
    {
      src: "/logistics-operations.jpg",
      alt: "Efficient logistics operations",
      description: "Streamlined supply chain management"
    },
    {
      src: "/cargo-containers.jpg",
      alt: "Freight and cargo services",
      caption: "Reliable Freight Solutions",
    },
  ]

  // Team Members
  const teamMembers = [
    {
      name: "James Mwangi",
      position: "CEO & Founder",
      image: "/ceo-founder.jpg",
      linkedin: "http://www.linkedin.com/in/joseph-wachira-202a70237",
      twitter: "https://x.com/WachiraJoseph17",
      email: "josephwachira589@gmail.com",
    },
    {
      name: "Sarah Kimani",
      position: "Operations Director",
      image: "/ops-director.jpg",
      linkedin: "http://www.linkedin.com/in/joseph-wachira-202a70237",
      twitter: "https://x.com/WachiraJoseph17",
      email: "josephwachira589@gmail.com",
    },
    {
      name: "David Yu",
      position: "Fleet Manager",
      image: "/fleet-manager.jpg",
      linkedin: "http://www.linkedin.com/in/joseph-wachira-202a70237",
      twitter: "https://x.com/WachiraJoseph17",
      email: "josephwachira589@gmail.com",
    },
  ]

  // FAQs
  const faqs = [
    {
      question: "What areas do you cover for logistics services?",
      answer:
        "We provide comprehensive logistics services across East and Central Africa, including Kenya, Uganda, Tanzania, Rwanda, and Burundi. Our extensive network covers major cities like Nairobi, Kampala, Dar es Salaam, Kigali, and Bujumbura, as well as remote areas through our partner network. We also facilitate cross-border transportation with proper documentation and customs clearance services.",
    },
    {
      question: "How do you ensure the safety and security of cargo?",
      answer:
        "We implement multiple security layers including GPS tracking on all vehicles, secure loading procedures with tamper-proof seals, experienced and vetted drivers, comprehensive insurance coverage for all shipments, and 24/7 monitoring from our control center. Our trucks are equipped with modern safety features and we maintain strict protocols for handling different types of cargo including hazardous materials.",
    },
    {
      question: "What types of cargo and freight do you transport?",
      answer:
        "We handle a wide variety of cargo including general freight, perishables (with refrigerated trucks), hazardous materials (with proper permits and trained personnel), oversized and heavy loads, containerized cargo, and specialized equipment. Our fleet is equipped to handle different cargo requirements with appropriate vehicles and handling equipment.",
    },
    {
      question: "How can I track my shipment in real-time?",
      answer:
        "We provide multiple tracking options including our online portal accessible 24/7, mobile app with push notifications, regular SMS updates at key milestones, email notifications with detailed status reports, and direct communication with our customer service team. You'll receive a tracking number upon shipment confirmation and can monitor your cargo's progress in real-time.",
    },
    {
      question: "What are your payment terms and pricing structure?",
      answer:
        "We offer flexible payment terms including cash on delivery, bank transfers, mobile money payments, and credit facilities for established clients with good payment history. Our pricing is competitive and transparent, based on factors like distance, cargo type, urgency, and special handling requirements. We provide detailed quotes with no hidden charges.",
    },
    {
      question: "Do you provide warehousing and storage services?",
      answer:
        "Yes, we offer comprehensive warehousing solutions including short-term and long-term storage, inventory management, pick and pack services, and distribution from our strategically located warehouses across East Africa. Our facilities are secure, climate-controlled where necessary, and equipped with modern handling equipment.",
    },
    {
      question: "What documentation is required for cross-border shipments?",
      answer:
        "For cross-border shipments, we handle all necessary documentation including commercial invoices, packing lists, certificates of origin, import/export permits, customs declarations, and any special permits required for specific cargo types. Our experienced team ensures all paperwork is properly completed to avoid delays at border crossings.",
    },
    {
      question: "How quickly can you deliver urgent shipments?",
      answer:
        "We offer express delivery services for urgent shipments with dedicated vehicles and priority handling. Depending on the destination and cargo type, we can provide same-day delivery within major cities, next-day delivery for regional shipments, and expedited cross-border services. Contact us for specific timeline requirements.",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      name: "John Mwangi",
      role: "Logistics Manager, Kenfreight",
      company: "Kenfreight Ltd",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "TruckCorp has completely transformed our regional cargo operations. Their reliability and professional approach have significantly improved our supply chain efficiency across East Africa.",
      rating: 5
    },
    {
      name: "Sarah Kilonzo",
      role: "Supply Chain Director, Twiga Foods",
      company: "Twiga Foods",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "The dedication and timely delivery from TruckCorp enabled us to expand rapidly into new markets. Their cross-border expertise is unmatched in the region.",
      rating: 5
    },
    {
      name: "David Otieno",
      role: "Operations Manager, Safaricom",
      company: "Safaricom PLC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      quote: "We trust TruckCorp with all our critical equipment transport. Their modern fleet and 24/7 support give us complete peace of mind for our nationwide operations.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden lg:pt-[80px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1485575301924-6891ef935dcd?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Logistics That
                <span className="block text-accent">Move Your Business</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-20 leading-relaxed">
                Professional trucking and freight services across East and Central Africa.
                We deliver reliability, efficiency, and excellence in every shipment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Buttons
                  borderRadius="1.75rem"
                  variant="default"
                  className="w-full bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                  <Link href="/get-quote" className="flex items-center justify-center">
                    Get Quote Now
                  </Link>
                </Buttons>

                <Button
                  className="text-lg bg-accent p-7 rounded-full border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                  <Link href="tel:+2547975969757" className="flex items-center justify-center">
                    Book A Free Call Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image card  */}
            <div className="hidden lg:flex justify-end items-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative bg-primary/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl max-w-sm">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={sliderImages[currentImageIndex].src}
                    alt={sliderImages[currentImageIndex].alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-opacity duration-1000"
                    key={sliderImages[currentImageIndex].src}
                    priority={true}
                    quality={100}
                  />
                </div>

                {/* Text below the image */}
                <div className="mt-4 text-center">
                  <p className="text-white text-sm capitalize font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
                    {sliderImages[currentImageIndex].description || "Reliable freight solutions across East Africa"}
                  </p>
                  <p className="text-white/80 text-xs mt-2">
                    Trusted by 500+ businesses across the region
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl capitalize text-primary max-w-2xl mx-auto">
              Reliable Trucking Services Across Africa
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* sub-title */}
              <div className="flex items-center justify-center my-5">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
                <h2 className="text-3xl md:text-3xl text-center font-bold text-foreground mb-4">
                  What We <span className="text-primary">Offer</span>
                </h2>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
              </div>

              <div className="relative">
                <img
                  src="/truck-fleet.jpg"
                  alt="Professional trucking fleet"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional Fleet</h3>
                  <p className="text-white/90">Modern trucks equipped for any cargo</p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Paragraph section */}
              <div>
                <h3 className="text-xl font-bold capitalize text-foreground mb-3">
                  Comprehensive logistics solutions tailored for African markets
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At TruckCorp, we provide comprehensive trucking and freight services designed to meet the unique
                  challenges of African logistics. Our modern fleet of trucks, experienced drivers, and advanced
                  tracking systems ensure your cargo reaches its destination safely and on time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From small packages to large freight shipments, we handle it all with the professionalism and
                  reliability that has made us the trusted choice for over 500 businesses across the region.
                </p>
              </div>

              {/* Full width image */}
              <div className="relative">
                <img
                  src="/hero-truck.jpg"
                  alt="Cargo containers and logistics operations"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-xl" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Port & Container Services</p>
                </div>
              </div>

              {/* Two service images in grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group cursor-pointer">
                  <img
                    src="/long-distance.jpg"
                    alt="Long distance trucking"
                    className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-semibold text-sm">Long Distance</p>
                    <p className="text-xs text-white/90">Cross-border freight</p>
                  </div>
                </div>

                <div className="relative group cursor-pointer">
                  <img
                    src="/logistics-operations.jpg"
                    alt="Warehouse and storage"
                    className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-semibold text-sm">Warehousing</p>
                    <p className="text-xs text-white/90">Storage solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center capitalize font-medium text-primary">Why Choose TruckCorp?</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center justify-center my-4">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
                <h2 className="mx-4 text-3xl md:text-3xl font-bold text-foreground mb-6 whitespace-nowrap">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
              </div>

              <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                Founded in 2013 with just two trucks and a vision to revolutionize logistics in East Africa,
                TruckCorp has grown into the region's most trusted freight and transportation company. Our journey
                began when our founder, Joseph Wachira , recognized the critical need for reliable, professional logistics
                services that could connect businesses across borders.
              </p>
              <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                Today, we operate a modern fleet of over 100 vehicles, employ more than 400 dedicated professionals, and
                have successfully completed over 100,000 deliveries across Kenya, Uganda, Tanzania, Rwanda, Congo,Burundi
                and oher parts of Africa. Our commitment to excellence, innovation, and customer satisfaction has made us
                the preferred logistics partner for businesses of all sizes.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-border/25">
                  <div className="text-4xl font-bold text-primary mb-2">{counters.clients}+</div>
                  <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-border/25">
                  <div className="text-4xl font-bold text-primary mb-2">{counters.experience}+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-border/25">
                  <div className="text-4xl font-bold text-primary mb-2">{counters.trucks}+</div>
                  <div className="text-sm text-muted-foreground font-medium">Modern Trucks</div>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-border/25">
                  <div className="text-4xl font-bold text-primary mb-2">{counters.delivery}%</div>
                  <div className="text-sm text-muted-foreground font-medium">On-Time Delivery</div>
                </div>
              </div>
            </div>

            <div className="relative space-y-20">
              <h3 className="text-xl font-bold capitalize text-foreground mb-4">
                Comprehensive logistics solutions tailored for African markets
              </h3>
              <Image
                src="/truck-fleet.jpg"
                width={800}
                height={800}
                alt="EastLogistics team and fleet"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

              <div className="absolute -bottom-3 -left-12 bg-transparent text-white rounded-xl object-fit shadow-2xl">
                <Image
                  src="/cargo-containers.jpg"
                  alt="Cargo containers and logistics operations"
                  width={300}
                  height={300}
                  priority={true}
                  quality={100}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <section className="mb-20 max-w-6xl mx-auto">
            <div className="text-left mb-8 space-y-1">
              <h2 className="text-xl md:text-lg uppercase font-bold text-foreground">
                Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-2xl text-muted-foreground capitalize mx-auto">
                Meet the dedicated professionals driving our success across Africa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="relative group">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Snack bar */}
                    <div className="absolute bottom-4 left-4 right-4 bg-primary/50 text-white p-4 border-l border-accent rounded-2xl shadow-2xl backdrop-blur-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                          <p className="text-white/90 text-sm">{member.position}</p>
                        </div>

                        {/* Social links */}
                        <div className="flex space-x-2">
                          <a
                            href={member.linkedin}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-300"
                          >
                            <FaLinkedinIn className="w-4 h-4 text-accent" />
                          </a>
                          <a
                            href={member.twitter}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          >
                            <FaXTwitter className="w-4 h-4 text-accent" />
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          >
                            <Mail className="w-4 h-4 text-accent" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Branches and Partners Section */}
          <div className="grid lg:grid-cols-1 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                Our <span className="text-primary ml-2">Partners</span>
              </h2>

              <div className="grid grid-cols-5 gap-6 mb-4">
                {[
                  { name: "Kenya Ports Authority", logo: "/logos/kpa-logo.png" },
                  { name: "Safaricom Kenya", logo: "/logos/safaricom-logo.png" },
                  { name: "Shell Energies", logo: "/logos/shell-logo.png" },
                  { name: "Tanzania Ports Authority", logo: "/logos/tanzania-logo.png" },
                  { name: "Total Energies", logo: "/logos/total-logo.png" },
                  { name: "Crown Paint", logo: "/logos/crown-logo.png" },
                  { name: "Dangote Group", logo: "/logos/dangote-logo.png" },
                  { name: "SADC", logo: "/logos/sadc-logo.png" },
                  { name: "Coca-Cola Beverages Africa", logo: "/logos/cocacola-logo.png" },
                  { name: "Bidco Africa", logo: "/logos/bidco-logo.png" },
                ].map((partner, index) => (
                  <div
                    key={partner.name}
                    className="bg-white p-6 rounded-2xl shadow-lg border-none hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                        <Image
                          width={64}
                          height={64}
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name || "Partner logo"}
                          className="max-h-16 max-w-16 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="clients" className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="mx-6 text-3xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="pb-2 border-b-2 border-accent/50 inline-block">Trusted by </span> {" "} Industry Leaders
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients across the region have to say about our logistics solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02]">

                {/* Quote */}
                <div className="mb-3">
                  <p className="text-foreground leading-relaxed">
                    <RiDoubleQuotesL size={30} />
                    {testimonial.quote}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center pt-4 border-t border-border/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary shadow-md"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs sub-section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center my-3">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-3xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Get answers to common questions about our logistics and transport services
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-muted-foreground/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-bold text-foreground pr-4 leading-relaxed">{faq.question}</h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${expandedFaq === index ? "rotate-180" : ""
                      }`}>
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-primary/20 to-transparent mb-4"></div>
                    <p className="text-muted-foreground text-justify leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA panel*/}
          <div className="text-center mt-12">
            <div className="bg-accent rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Don&apos;t see your question here? Drop us a line!</h3>
              <p className="text-white mb-6 max-w-2xl mx-auto">
                Our logistics experts are here to help. Contact us now for personalized assistance with your shipping needs and othere relevant queries.
              </p>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="tel:+254795969757">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                  </Link>

                  <Link href="mailto:josephwachira589@gmail.com">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                  </Link>

                  <Link href="https://wa.me/254795969757" target="_blank" rel="noopener noreferrer">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300">
                      <FaWhatsapp className="w-6 h-6" />
                    </div>
                  </Link>
                </div>

                <Link href="/contact-us">
                  <Buttons
                    borderRadius="1.75rem"
                    variant="default"
                    className="bg-white dark:bg-slate-900 cursor-pointer text-black dark:text-white px-6 py-3 border border-neutral-200 dark:border-slate-800 shadow hover:shadow-lg transition-all duration-300">
                    Contact Us
                  </Buttons>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
