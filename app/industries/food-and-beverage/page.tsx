'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

const challenges = [
      "Food safety regulations require HACCP-certified handling throughout",
      "Perishables have short shelf lives requiring rapid transit",
      "Contamination risks demand strict hygiene protocols",
      "Consumer demand for fresh products requires reliable fast delivery",
]
const solutions = [
      {title:"HACCP-Certified Facilities",desc:"All vehicles and warehouses meet HACCP food safety standards"},
      {title:"Reefer Transport",desc:"Multi-temperature refrigerated trucks for all food product types"},
      {title:"Rapid Transit",desc:"Priority routing to minimize transit time for perishables"},
      {title:"Hygiene Protocols",desc:"Strict cleaning and sanitization protocols between all loads"},
]
const stats = [
      {val:"200+",label:"F&B Clients"},
      {val:"48hr",label:"Fresh Delivery SLA"},
      {val:"HACCP",label:"Certified"},
      {val:"0",label:"Food Safety Incidents"},
]

export default function Page() {
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="Food & Beverage" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white text-center">Food & Beverage</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center max-w-2xl">End-to-end food-grade logistics solutions</p>
        </div>
      </section>
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(s=>(<div key={s.label}><div className="text-4xl font-bold mb-2">{s.val}</div><div className="text-white/80">{s.label}</div></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Logistics for <span className="text-primary">Food & Beverage</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">TruckCorp's food and beverage logistics maintains the highest standards of hygiene, temperature control, and regulatory compliance from production facilities to retail shelves.</p>
              <Link href="/get-quote" className="inline-flex items-center bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-3 rounded-full font-semibold">Get A Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </div>
            <div className="relative">
              <Image src="/truck-fleet.jpg" alt="Food & Beverage logistics" width={800} height={500} className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Industry <span className="pb-2 border-b-2 border-accent inline-block text-primary">Challenges</span></h2>
              <div className="space-y-4">
                {challenges.map((c,i)=>(<div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-muted-foreground">{c}</p></div>))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our <span className="pb-2 border-b-2 border-accent inline-block text-primary">Solutions</span></h2>
              <div className="space-y-4">
                {solutions.map(s=>(<div key={s.title} className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300"><h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3><p className="text-sm text-muted-foreground">{s.desc}</p></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Food & Beverage Logistics?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Get a customized solution designed for the food & beverage sector.</p>
          <Link href="/get-quote" className="inline-flex items-center bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3 rounded-full font-semibold text-lg">Get A Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
