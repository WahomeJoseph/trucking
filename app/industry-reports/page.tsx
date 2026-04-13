'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BarChart3, Download } from 'lucide-react'

const reports = [
  { title: "East Africa Freight Index Q4 2024", period: "Q4 2024", desc: "Quarterly analysis of freight rates, volumes, and capacity utilization across major East African trade corridors.", type: "Quarterly Report" },
  { title: "Annual Logistics Cost Benchmark Report 2024", period: "Annual 2024", desc: "Comprehensive benchmarking of logistics costs across industries and regions in East and Central Africa.", type: "Annual Report" },
  { title: "Cross-Border Trade Volume Report 2024", period: "Annual 2024", desc: "Analysis of cross-border cargo volumes, commodity breakdowns, and border efficiency metrics for 2024.", type: "Annual Report" },
  { title: "East Africa Freight Index Q3 2024", period: "Q3 2024", desc: "Third quarter freight rate trends, capacity analysis, and market outlook for the East African corridor.", type: "Quarterly Report" },
  { title: "Agricultural Logistics Performance Report", period: "H1 2024", desc: "Performance analysis of agricultural supply chains, cold chain efficiency, and seasonal logistics patterns.", type: "Sector Report" },
]

export default function IndustryReportsPage() {
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="Industry Reports" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">Industry Reports</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center">Data-Driven Logistics Intelligence</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Market <span className="text-primary">Intelligence</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Quarterly and annual reports on freight markets, trade volumes, and logistics performance across East Africa.</p>
          </div>
          <div className="space-y-6">
            {reports.map((report,i)=>(
              <div key={i} className="group bg-white rounded-2xl shadow-lg border border-border/50 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{report.type}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">{report.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{report.title}</h3>
                    <p className="text-muted-foreground">{report.desc}</p>
                  </div>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 transition-colors px-5 py-2.5 rounded-full font-semibold shrink-0">
                    <Download className="w-4 h-4" /> Get Report
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
