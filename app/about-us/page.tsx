'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaXTwitter, FaCheck, FaTruck, FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa6'
import { Mail, Target, Eye, Heart, TrendingUp, Shield, Globe } from 'lucide-react'

export default function AboutPage() {
    const [counters, setCounters] = useState({ clients: 100000, experience: 5, trucks: 300, delivery: 99 })

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

    // Core Values
    const coreValues = [
        {
            icon: FaHandshake,
            title: "Integrity & Trust",
            description: "We build lasting relationships through transparency, honesty, and reliable service delivery across all our operations."
        },
        {
            icon: FaTruck,
            title: "Excellence in Service",
            description: "Committed to delivering superior logistics solutions with precision, timeliness, and unmatched professionalism."
        },
        {
            icon: FaUsers,
            title: "Customer Centric",
            description: "Our clients' success is our success. We tailor solutions to meet unique business needs across African markets."
        },
        {
            icon: Shield,
            title: "Safety First",
            description: "Prioritizing the safety of our team, clients, and assets through rigorous standards and continuous training."
        },
        {
            icon: Globe,
            title: "African Expertise",
            description: "Deep understanding of local markets, regulations, and cultural nuances across East and Central Africa."
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            description: "Leveraging technology and creative thinking to solve complex logistics challenges and drive industry advancement."
        }
    ]

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

    return (
        <div>
            <section className="relative h-96 w-full">
                <div className="absolute inset-0">
                    <Image
                        src="/hero-truck.jpg"
                        alt="TruckCorp Logistics Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
                    <div className="flex items-center justify-center w-full my-6">
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
                        <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">About Us</h1>
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
                    </div>

                    <p className="text-xl md:text-2xl text-white opacity-90">
                        Leading Transport & Logistics Company Across Africa
                    </p>
                </div>
            </section>

            <section id="about-section" className="py-20 bg-muted/30">
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
                                began when our founder, Joseph Wachira, recognized the critical need for reliable, professional logistics
                                services that could connect businesses across borders.
                            </p>
                            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                                Today, we operate a modern fleet of over 100 vehicles, employ more than 400 dedicated professionals, and
                                have successfully completed over 100,000 deliveries across Kenya, Uganda, Tanzania, Rwanda, Congo, Burundi
                                and other parts of Africa. Our commitment to excellence, innovation, and customer satisfaction has made us
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

                    {/* Vision & Mission Section */}
                    <section className="mb-20">
                        <div className="flex items-center justify-center my-12">
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
                            <h2 className="mx-6 text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
                                Our <span className="text-primary">Vision & Mission</span>
                            </h2>
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Vision Card */}
                            <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 p-8 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                                        <Eye className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    To be Africa's most trusted and innovative logistics partner, connecting businesses and communities
                                    through seamless, reliable, and sustainable transportation solutions that drive economic growth
                                    across the continent.
                                </p>
                                <div className="mt-6 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                                    <p className="text-sm text-muted-foreground italic">
                                        "Building bridges through logistics, powering Africa's future"
                                    </p>
                                </div>
                            </div>

                            {/* Mission Card */}
                            <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 p-8 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    To deliver exceptional logistics services by leveraging cutting-edge technology,
                                    empowering our team, and building sustainable partnerships that exceed customer
                                    expectations while maintaining the highest standards of safety and reliability.
                                </p>
                                <div className="mt-6 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                                    <p className="text-sm text-muted-foreground italic">
                                        "Delivering excellence in every mile, for every client, across Africa"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Values Section */}
                    <section className="mb-20">
                        <h2 className="mx-6 text-2xl md:text-3xl font-bold text-foreground my-6 whitespace-nowrap">
                            Our <span className="pb-2 border-b-2 capitalize border-accent inline-block text-primary">Core Values</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coreValues.map((value, index) => (
                                <div
                                    key={value.title}
                                    className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6 hover:shadow-xl transition-all duration-300 group hover:border-primary/30"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                                            <value.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {value.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

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
                                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                                    >
                                                        <FaLinkedinIn className="w-4 h-4 text-accent" />
                                                    </a>
                                                    <a
                                                        href={member.twitter}
                                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                                    >
                                                        <FaXTwitter className="w-4 h-4 text-accent" />
                                                    </a>
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
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

                    {/* Partners Section */}
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
        </div>
    )
}
