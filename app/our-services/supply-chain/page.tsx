'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const features = [
      {name:"End-to-End Visibility",desc:"Complete transparency across your entire supply chain in real time"},
      {name:"Procurement Support",desc:"Vendor sourcing, evaluation, and relationship management"},
      {name:"Demand Forecasting",desc:"Data-driven demand planning to reduce stockouts and overstock"},
      {name:"Last-Mile Delivery",desc:"Efficient urban and rural last-mile distribution networks"},
      {name:"Returns Management",desc:"Streamlined reverse logistics and returns processing"},
      {name:"Technology Integration",desc:"Seamless integration with your ERP and business systems"},
]
const processSteps = [
      {num:"01",title:"Current State Analysis",desc:"Map and analyze your existing supply chain for gaps and opportunities"},
      {num:"02",title:"Solution Design",desc:"Develop an integrated supply chain blueprint tailored to your needs"},
      {num:"03",title:"System Integration",desc:"Connect TruckCorp systems with your existing technology stack"},
      {num:"04",title:"Go-Live & Support",desc:"Phased implementation with dedicated transition support team"},
]

export default function Page() {
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="Supply Chain Solutions" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white text-center">Supply Chain Solutions</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center max-w-2xl">Integrated supply chain management from source to destination</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About This <span className="text-primary">Service</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Our end-to-end supply chain solutions help businesses achieve seamless operations from procurement through last-mile delivery. We integrate all supply chain functions into a single, transparent, and efficient system tailored for African markets.</p>
              <Link href="/get-quote" className="inline-flex items-center bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-3 rounded-full font-semibold">Get A Quote</Link>
            </div>
            <div className="relative">
              <Image src="/hero-truck.jpg" alt="Supply Chain Solutions" width={800} height={500} className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
              <h2 className="mx-6 text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">Key <span className="text-primary">Features</span></h2>
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(f=>(
                <div key={f.name} className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"><CheckCircle className="w-5 h-5 text-primary" /></div>
                    <div><h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{f.name}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground my-6">Our <span className="pb-2 border-b-2 border-accent inline-block text-primary">Process</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map(step=>(
                <div key={step.num} className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group relative">
                  <div className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-4">{step.num}</div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 mt-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Contact TruckCorp today for a customized supply chain solutions solution tailored to your needs.</p>
          <Link href="/get-quote" className="inline-flex items-center bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3 rounded-full font-semibold text-lg">Get A Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
