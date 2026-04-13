'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiDoubleQuotesL } from 'react-icons/ri'

const clients = [
  { name: "Safaricom PLC", industry: "Telecommunications", logo: "/logos/safaricom-logo.png", since: "2016" },
  { name: "Kenya Ports Authority", industry: "Port Operations", logo: "/logos/kpa-logo.png", since: "2015" },
  { name: "Twiga Foods", industry: "Food Distribution", logo: "/logos/bidco-logo.png", since: "2019" },
  { name: "Dangote Group", industry: "Manufacturing", logo: "/logos/dangote-logo.png", since: "2017" },
  { name: "Coca-Cola Beverages Africa", industry: "Beverages", logo: "/logos/cocacola-logo.png", since: "2018" },
  { name: "Bidco Africa", industry: "FMCG", logo: "/logos/bidco-logo.png", since: "2020" },
  { name: "Total Energies", industry: "Energy", logo: "/logos/total-logo.png", since: "2016" },
  { name: "Crown Paint", industry: "Manufacturing", logo: "/logos/crown-logo.png", since: "2021" },
  { name: "Shell Energies", industry: "Energy", logo: "/logos/shell-logo.png", since: "2015" },
  { name: "Tanzania Ports Authority", industry: "Port Operations", logo: "/logos/tanzania-logo.png", since: "2018" },
]
const testimonials = [
  { name: "John Mwangi", role: "Logistics Manager", company: "Kenfreight Ltd", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", quote: "TruckCorp has completely transformed our regional cargo operations. Their reliability and professional approach have significantly improved our supply chain efficiency.", rating: 5 },
  { name: "Sarah Kilonzo", role: "Supply Chain Director", company: "Twiga Foods", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", quote: "The dedication and timely delivery from TruckCorp enabled us to expand rapidly into new markets. Their cross-border expertise is unmatched in the region.", rating: 5 },
  { name: "David Otieno", role: "Operations Manager", company: "Safaricom PLC", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", quote: "We trust TruckCorp with all our critical equipment transport. Their modern fleet and 24/7 support give us complete peace of mind.", rating: 5 },
  { name: "Grace Achieng", role: "Procurement Manager", company: "Bidco Africa", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", quote: "Five years of partnership and TruckCorp continues to exceed our expectations. Their warehousing and distribution network is second to none.", rating: 5 },
  { name: "Michael Njoroge", role: "CEO", company: "Nairobi Distributors", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face", quote: "The real-time tracking and transparent communication has transformed how we manage our supply chain. Highly recommended.", rating: 5 },
  { name: "Amina Hassan", role: "Director of Operations", company: "East Africa Trading Co.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face", quote: "TruckCorp's cross-border expertise saved us countless hours in customs and documentation. They truly understand the African logistics landscape.", rating: 5 },
]

export default function OurClientsPage() {
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="Our Clients" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">Our Clients</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center">Trusted by 500+ Businesses Across Africa</p>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "1000+", label: "Active Clients" }, { val: "10+", label: "Years Serving" }, { val: "8", label: "Countries" }, { val: "99%", label: "Satisfaction Rate" }].map(s => (
              <div key={s.label}><div className="text-4xl font-bold mb-2">{s.val}</div><div className="text-white/80">{s.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
            <h2 className="mx-6 text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">Our <span className="text-primary">Partners & Clients</span></h2>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {clients.map(client => (
              <div key={client.name} className="bg-white p-6 rounded-2xl shadow-lg border-none hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                    <Image width={64} height={64} src={client.logo} alt={client.name} className="max-h-16 max-w-16 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                  <p className="text-xs text-primary mt-1 font-medium">Since {client.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="mx-6 text-3xl md:text-3xl font-bold text-foreground whitespace-nowrap">
              <span className="pb-2 border-b-2 border-accent/50 inline-block">Trusted by </span> {" "} Industry Leaders
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients across the region have to say about our logistics solutions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="group bg-white border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02]">
                <div className="mb-3"><RiDoubleQuotesL size={30} className="text-primary/40 mb-2" /><p className="text-foreground leading-relaxed">{t.quote}</p></div>
                <div className="flex mb-4">{[...Array(t.rating)].map((_, i) => (<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <div className="flex items-center pt-4 border-t border-border/30">
                  <Image src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary shadow-md" />
                  <div className="ml-4"><p className="font-semibold text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.role}</p><p className="text-xs text-primary font-medium">{t.company}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project and Case Studies Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join 500+ Businesses That Trust TruckCorp</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Experience the reliability and professionalism that has made us East Africa&apos;s preferred logistics partner.</p>
          <Link href="/get-quote" className="inline-flex items-center bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3 rounded-full font-semibold text-lg">Get A Quote Today</Link>
        </div>
      </section>
    </div>
  )
}
