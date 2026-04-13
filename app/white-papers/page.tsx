'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Download, FileText } from 'lucide-react'

const papers = [
  { title: "The State of East African Logistics 2025", desc: "A comprehensive analysis of freight volumes, infrastructure gaps, and emerging opportunities across the EAC region.", pages: 42, year: "2025" },
  { title: "Cold Chain Excellence in Sub-Saharan Africa", desc: "Best practices and technology solutions for maintaining product integrity across African cold chain networks.", pages: 28, year: "2024" },
  { title: "Cross-Border Trade Facilitation: EAC Progress Report", desc: "Evaluating the impact of one-stop border posts and digital customs systems on regional trade efficiency.", pages: 35, year: "2024" },
  { title: "Sustainable Logistics: Reducing Carbon Footprint in African Freight", desc: "Practical strategies and technologies for greener logistics operations across the continent.", pages: 22, year: "2024" },
  { title: "Last-Mile Delivery Innovation in African Urban Centers", desc: "Emerging models and technologies reshaping urban logistics in Nairobi, Kampala, Dar es Salaam, and Kigali.", pages: 30, year: "2023" },
]

export default function WhitePapersPage() {
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="White Papers" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">White Papers</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center">Research & Insights on African Logistics</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Research <span className="text-primary">Library</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">In-depth research and analysis on East African logistics, trade, and supply chain management.</p>
          </div>
          <div className="space-y-6">
            {papers.map((paper,i)=>(
              <div key={i} className="group bg-white rounded-2xl shadow-lg border border-border/50 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{paper.year}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">{paper.pages} pages</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{paper.title}</h3>
                    <p className="text-muted-foreground">{paper.desc}</p>
                  </div>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 transition-colors px-5 py-2.5 rounded-full font-semibold shrink-0">
                    <Download className="w-4 h-4" /> Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
