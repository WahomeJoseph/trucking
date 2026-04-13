'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Truck, Package, Warehouse, Globe, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  { icon: Truck, title: "Freight Transportation", href: "/our-services/freight-transportation", desc: "Reliable road freight solutions across East and Central Africa with real-time tracking and dedicated support." },
  { icon: BarChart3, title: "Logistics Management", href: "/our-services/logistics", desc: "End-to-end supply chain optimization, route planning, and performance analytics for your business." },
  { icon: Warehouse, title: "Warehousing", href: "/our-services/warehousing", desc: "Secure, climate-controlled storage facilities strategically located across the region." },
  { icon: Package, title: "Supply Chain Solutions", href: "/our-services/supply-chain", desc: "Integrated supply chain management from procurement to last-mile delivery." },
  { icon: Globe, title: "Cross-Border Transport", href: "/our-services/cross-border-transport", desc: "Seamless cross-border logistics with full customs clearance and documentation support." },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="Our Services" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">Our Services</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center">Comprehensive Logistics Solutions Across Africa</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We <span className="text-primary">Offer</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From freight to warehousing, we provide end-to-end logistics solutions designed for African markets.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              services.map(service => (
                <Link key={service.title} href={service.href} className="group bg-white rounded-2xl shadow-lg border border-border/50 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] block">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all"><span>Learn More</span><ArrowRight className="w-4 h-4" /></div>
                </Link>
              ))
            }
          </div>
          </div>
        </section>

          <section className="py-20 bg-primary text-white text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">Ready to Move Your Business Forward?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">Contact TruckCorp today for a customized logistics solution tailored to your needs.</p>
              <Link href="/get-quote" className="inline-flex items-center bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3 rounded-full font-semibold text-lg">Get A Free Quote</Link>
            </div>
          </section>
    </div>
  )
}
