'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'

const faqs = [
  { q: "What areas do you cover for logistics services?", a: "We provide comprehensive logistics services across East and Central Africa, including Kenya, Uganda, Tanzania, Rwanda, and Burundi. Our network covers major cities like Nairobi, Kampala, Dar es Salaam, Kigali, and Bujumbura, as well as remote areas through our partner network." },
  { q: "How do you ensure the safety and security of cargo?", a: "We implement multiple security layers including GPS tracking on all vehicles, secure loading procedures with tamper-proof seals, experienced and vetted drivers, comprehensive insurance coverage, and 24/7 monitoring from our control center." },
  { q: "What types of cargo and freight do you transport?", a: "We handle general freight, perishables (with refrigerated trucks), hazardous materials (with proper permits), oversized and heavy loads, containerized cargo, and specialized equipment. Our fleet is equipped for diverse cargo requirements." },
  { q: "How can I track my shipment in real-time?", a: "We provide multiple tracking options including our online portal, mobile app with push notifications, regular SMS updates, email notifications, and direct communication with our customer service team. You receive a tracking number upon shipment confirmation." },
  { q: "What are your payment terms and pricing structure?", a: "We offer flexible payment terms including cash on delivery, bank transfers, mobile money payments, and credit facilities for established clients. Pricing is transparent and based on distance, cargo type, urgency, and special handling requirements." },
  { q: "Do you provide warehousing and storage services?", a: "Yes, we offer comprehensive warehousing solutions including short-term and long-term storage, inventory management, pick and pack services, and distribution from our strategically located warehouses across East Africa." },
  { q: "What documentation is required for cross-border shipments?", a: "We handle all necessary documentation including commercial invoices, packing lists, certificates of origin, import/export permits, customs declarations, and any special permits for specific cargo types." },
  { q: "How quickly can you deliver urgent shipments?", a: "We offer express delivery with dedicated vehicles and priority handling. Depending on destination and cargo, we provide same-day delivery within major cities, next-day delivery for regional shipments, and expedited cross-border services." },
  { q: "Do you offer cargo insurance?", a: "Yes, we provide comprehensive cargo insurance for all shipments. We can also work with your existing insurance provider to ensure full coverage throughout transit." },
  { q: "How do I get a quote for my shipment?", a: "You can get a quote by filling out our online quote form, calling us directly at +254 797 596 9757, or emailing us at josephwachira589@gmail.com. We typically respond within 2 hours during business hours." },
]

export default function FAQsPage() {
  const [expanded, setExpanded] = useState<number|null>(null)
  return (
    <div>
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image src="/hero-truck.jpg" alt="FAQs" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">FAQs</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>
          <p className="text-xl md:text-2xl text-white opacity-90 text-center">Frequently Asked Questions</p>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center my-3 mb-12">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
            <h2 className="mx-6 text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">Frequently Asked <span className="text-primary">Questions</span></h2>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[150px]" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq,i)=>(
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-muted-foreground/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <button onClick={()=>setExpanded(expanded===i?null:i)} className="w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-bold text-foreground pr-4 leading-relaxed">{faq.q}</h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${expanded===i?"rotate-180":""}`}>
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded===i?"max-h-96 opacity-100":"max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-primary/20 to-transparent mb-4"></div>
                    <p className="text-muted-foreground text-justify leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-accent rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Don't see your question? Drop us a line!</h3>
              <p className="text-white mb-6">Our logistics experts are here to help with any specific questions about your shipping needs.</p>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="tel:+254795969757"><div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300"><Phone className="w-6 h-6" /></div></Link>
                  <Link href="mailto:josephwachira589@gmail.com"><div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300"><Mail className="w-6 h-6" /></div></Link>
                  <Link href="https://wa.me/254795969757" target="_blank" rel="noopener noreferrer"><div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300"><FaWhatsapp className="w-6 h-6" /></div></Link>
                </div>
                <Link href="/contact-us" className="inline-flex items-center bg-white text-primary hover:bg-white/90 transition-colors px-6 py-3 rounded-full font-semibold">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
