'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  { title: "Agriculture", href: "/industries/agriculture", desc: "Specialized transport for perishables, grains, and farm produce with temperature-controlled solutions.", emoji: "🌾" },
  { title: "Automotive", href: "/industries/automotive", desc: "Secure vehicle transport, spare parts logistics, and specialized equipment handling.", emoji: "🚗" },
  { title: "Construction", href: "/industries/construction", desc: "Heavy equipment haulage, building materials, and project site logistics across the region.", emoji: "🏗️" },
  { title: "Retail", href: "/industries/retail", desc: "Fast, reliable distribution for retailers with last-mile delivery and inventory management.", emoji: "🛍️" },
  { title: "Pharmaceutical", href: "/industries/pharmaceutical", desc: "GDP-compliant cold chain logistics for medicines, vaccines, and medical supplies.", emoji: "💊" },
  { title: "Food & Beverage", href: "/industries/food-and-beverage", desc: "End-to-end food-grade transport with HACCP-certified facilities and reefer trucks.", emoji: "🍽️" },
]

export default function IndustriesPage() {
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="Industries" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">Industries</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center">Specialized Logistics for Every Sector</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industries We <span className="text-primary">Serve</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tailored logistics solutions for the unique requirements of each industry we serve.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map(ind=>(
              <Link key={ind.title} href={ind.href} className="group bg-white rounded-2xl shadow-lg border border-border/50 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] block">
                <div className="text-5xl mb-6">{ind.emoji}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">{ind.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{ind.desc}</p>
                <div className="flex items-center text-primary font-semibold gap-2 group-hover:gap-3 transition-all"><span>Learn More</span><ArrowRight className="w-4 h-4" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">We serve many more sectors. Contact us to discuss a customized solution.</p>
          <Link href="/contact-us" className="inline-flex items-center bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3 rounded-full font-semibold text-lg">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  )
}
