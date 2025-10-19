'use client'

import HeroSlider from "@/components/hero/HeroSlider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Cloud, Smartphone, Star, CheckCircle, Users, Target, BarChart, MessageSquare, Clock, Award, ChevronDown, ChevronUp, ExternalLink, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function HomePage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom, responsive websites and web applications built with modern technologies like Next.js, React, and TypeScript. We create SEO-optimized, high-performance digital experiences that convert visitors into customers and drive business growth through intuitive user interfaces, e-commerce capabilities, and robust backend systems tailored to your specific business needs.",
      href: "/services/web-development",
      image: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences. We build intuitive, high-performance apps with features like push notifications, offline capabilities, secure payment integrations, and seamless API connections to keep your users engaged and connected while providing tangible business value.",
      href: "/services/mobile-apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud infrastructure design, migration, and management services using AWS, Azure, and Google Cloud platforms. We help businesses achieve scalability, enhance security, reduce operational costs, and ensure high availability for critical applications through strategic cloud adoption and ongoing optimization.",
      href: "/services/cloud-solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    }
  ]

  const projects = [
    {
      title: "E-commerce Platform for Sofa Retail Business",
      challenge: "Local sofa retailer struggling with limited physical reach and manual inventory management, resulting in missed sales opportunities, order tracking difficulties, and operational inefficiencies that hampered business growth.",
      solution: "Developed a comprehensive Next.js e-commerce platform featuring integrated M-Pesa payment processing via Daraja API, real-time inventory management, automated order fulfillment system, customer relationship management tools, and an admin dashboard for complete business oversight.",
      impact: "Increased online sales by 187% in the first 6 months, reduced inventory management time by 65%, eliminated order tracking errors, expanded customer reach nationwide, and improved customer satisfaction scores by 45% through streamlined operations.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c",
      projectUrl: "https://sofa-revamp.vercel.app/",
      client: "Sofa.Lux",
      description: "A modern, responsive e-commerce platform specializing in premium sofas and furniture, featuring seamless mobile payments, inventory management, and customer engagement tools designed for the Kenyan market."
    },
    {
      title: "Healthcare Management System for Clinic Network",
      challenge: "Healthcare provider relying on paper-based medical records and manual appointment scheduling leading to extended patient wait times, booking errors, inefficient resource allocation, and difficulties in patient data retrieval during emergencies.",
      solution: "Created a comprehensive digital healthcare ecosystem featuring electronic medical records, automated appointment scheduling with SMS reminders, patient portal for medical history access, staff coordination tools, prescription management, and real-time availability tracking for doctors and facilities.",
      impact: "Reduced patient wait times by 40%, decreased scheduling errors by 92%, improved patient satisfaction scores from 68% to 94%, reduced paperwork by 85%, and enabled 24/7 access to medical records for authorized personnel, significantly improving emergency response times.",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
      projectUrl: "https://healthcare-management-demo.vercel.app",
      client: "Enamel DentaCare",
      description: "A full-featured healthcare management system designed to digitize medical practices, streamline patient care, and improve operational efficiency for clinics and hospitals across Kenya."
    },
    {
      title: "Enterprise Cloud Migration for Financial Services",
      challenge: "Financial institution operating on outdated on-premise infrastructure experiencing frequent system downtime, security vulnerabilities, inability to scale during peak transaction periods, and high maintenance costs that affected customer trust and operational reliability.",
      solution: "Executed a comprehensive cloud migration strategy to AWS with robust disaster recovery protocols, enhanced security measures including encryption and multi-factor authentication, auto-scaling architecture, and continuous monitoring systems to ensure optimal performance and compliance with financial regulations.",
      impact: "Achieved 99.9% system uptime, reduced infrastructure costs by 35%, enhanced security compliance meeting all regulatory requirements, enabled handling of 300% higher transaction volumes during peak seasons, improved application performance by 60%, and significantly enhanced customer trust and satisfaction.",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      projectUrl: "https://cloud-migration-case-study.vercel.app",
      client: "Regional Financial Institution",
      description: "A secure, scalable cloud infrastructure migration for financial services ensuring reliability, compliance, and enhanced performance for critical banking operations and customer transactions."
    }
  ]

  const testimonials = [
    {
      quote: "Our online sales increased by 300% within 3 months of launching our new website. The M-Pesa integration made it so easy for our customers to pay.",
      name: "Sarah Wanjiku",
      company: "Nairobi Fashion House",
      rating: 5,
      location: "Nairobi, Kenya",
      industry: "Fashion & Retail"
    },
    {
      quote: "The SEO work they did helped us rank #1 for 'best restaurant Mombasa'. Our bookings have tripled and we're booked solid every weekend.",
      name: "Ahmed Hassan",
      company: "Coastal Delights Restaurant",
      rating: 5,
      location: "Mombasa, Kenya",
      industry: "Hospitality"
    },
    {
      quote: "From a small local business to serving customers across East Africa. Their e-commerce platform handles everything from inventory to shipping seamlessly.",
      name: "Grace Muthoni",
      company: "Kiambu Tea Exports",
      rating: 5,
      location: "Kiambu, Kenya",
      industry: "Agriculture & Export"
    },
    {
      quote: "The mobile app they built for our logistics company has streamlined our entire operation. Real-time tracking and automated billing saved us 40+ hours weekly.",
      name: "James Kariuki",
      company: "Rapid Express Kenya",
      rating: 5,
      location: "Nakuru, Kenya",
      industry: "Logistics & Transport"
    },
    {
      quote: "Professional, reliable, and they understand the Kenyan market. Our digital transformation journey was smooth and the results speak for themselves.",
      name: "Fatima Abdi",
      company: "Eastleigh Electronics",
      rating: 5,
      location: "Nairobi, Kenya",
      industry: "Electronics & Technology"
    },
    {
      quote: "They helped us digitize our entire farming cooperative. Now our 200+ farmers can access market prices, weather data, and sell directly to buyers online.",
      name: "Peter Kimani",
      company: "Mount Kenya Cooperative",
      rating: 5,
      location: "Meru, Kenya",
      industry: "Agriculture & Cooperative"
    }
  ]

  const process = [
    {
      step: "Consultation",
      description: "We discuss your requirements and business goals",
      icon: MessageSquare
    },
    {
      step: "Planning",
      description: "We create a detailed project roadmap and strategy",
      icon: Target
    },
    {
      step: "Development",
      description: "Our experts build your solution using best practices",
      icon: Code
    },
    {
      step: "Support",
      description: "We provide ongoing maintenance and updates",
      icon: Clock
    }
  ]

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>
        </div>

        <div className="container mx-auto relative px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                  Transform Your <span className="text-emerald-400">Business</span> with Digital Excellence
                </h1>
                <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-lg">
                  We create cutting-edge digital solutions that drive growth, enhance efficiency,
                  and position Kenyan businesses for success in the digital age.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg rounded-3xl px-8 py-6 font-semibold">
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-none text-white hover:bg-white rounded-3xl hover:text-slate-900 text-lg px-8 py-6 font-semibold">
                    <Link href="/portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Slider */}
            <div className="pr-10 relative">
              <div className="aspect-[5/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <HeroSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to meet your business needs and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 leading-relaxed text-gray-600">
                      {service.description}
                    </CardDescription>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto font-medium text-emerald-600 hover:text-emerald-700"
                    >
                      <Link href={service.href} className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your project&apos;s success from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-600 transition-colors shadow-md">
                      <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.step}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 capitalize pb-1">Real business</span> Real outcomes
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here is a selection of some of our successful implementations accross various industries.
              Our approach is tailored to each client&apos;s unique needs, ensuring optimal results and satisfaction.
              {/* Explore some of our successful implementations across various industries */}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col border-0 shadow-lg hover:-translate-y-2"
              >
                {/* Image with overlay on hover */}
                <div className="h-52 overflow-hidden relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        {expandedProject === index ? "Hide Details" : "View Project"}
                      </Button>
                    </div>
                  </div>
                  {/* Category badge */}
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 backdrop-blur-sm border-0">
                    {project.category}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.client && (
                    <p className="text-xl text-amber-600 uppercase font-semibold mt-1">{project.client}</p>
                  )}
                </CardHeader>

                <CardContent className="flex-grow pb-4">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description || "A comprehensive solution delivering exceptional results."}
                  </CardDescription>

                  <Button
                    variant="outline"
                    size={'lg'}
                    className="w-full flex items-center justify-between border-emerald-200 text-emerald-100 bg-emerald-700 hover:border-emerald-300"
                    onClick={() => toggleProject(index)}
                  >
                    <span>{expandedProject === index ? "Show Less" : "View Case Study"}</span>
                    {expandedProject === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CardContent>

                {/* Expanded Project Details */}
                {expandedProject === index && (
                  <div className="px-6 pb-6">
                    <div className="space-y-4 mb-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                          The Challenge
                        </h4>
                        <p className="text-sm text-gray-600">{project.challenge}</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                          Our Solution
                        </h4>
                        <p className="text-sm text-gray-600">{project.solution}</p>
                      </div>

                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                          Impact Delivered
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">{project.impact}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project.projectUrl && (
                        <Button
                          className="w-full bg-emerald-600 hover:bg-emerald-700"
                          asChild
                        >
                          <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live Project
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center mt-20">
            {/* cta card */}
            <Card className="bg-emerald-100/20 max-w-xl border-t-4  text-white rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-amber-600 text-center font-bold">
                  Ready to Take Your Business Online?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black/90 text-center text-[1.2rem] mb-6">
                  If you are looking to build your business online and digitally, Look no further,
                  Let’s build a modern website that attracts clients and grows your brand.
                </p>
                <div className="flex items-center justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-emerald-100 w-1/2 rounded-full">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="border-b-4 text-emerald-600">100+ Kenyan Businesses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why businesses across Kenya choose Digital Fixers for their digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 px-20 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white p-8 text-center group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 relative overflow-hidden">
                <div className="flex justify-center mb-6">
                  <div className="bg-amber-50 px-4 py-2 rounded-full inline-flex items-center border border-amber-100">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-amber-200 text-amber-200"
                          } transition-transform duration-300 group-hover:scale-110 ${i === 0 ? "ml-0" : "ml-1"
                          }`}
                      />
                    ))}
                    <span className="ml-2 text-amber-700 text-sm font-semibold">{testimonial.rating}.0</span>
                  </div>
                </div>

                {/* Quote with decorative icons */}
                <div className="relative mb-8">
                  <BiSolidQuoteAltLeft size={32} className="text-emerald-600" />
                  <p className="text-gray-700 text-lg leading-relaxed italic relative z-10 group-hover:text-gray-800 transition-colors">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Client info with avatar placeholder */}
                <div className="border-t border-gray-100 pt-6 group-hover:border-gray-200 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      {testimonial.company}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-400">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {testimonial.industry}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-emerald-50/0 group-hover:from-white/50 group-hover:to-emerald-50/50 transition-all duration-500 -z-10 rounded-lg"></div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-emerald-600 rounded-full hover:bg-emerald-700 text-white px-8">
              <Link href="/testimonials">
                Read More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Digital Fixers?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through expertise, dedication, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our skilled professionals bring years of experience and specialized knowledge to every project.</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">We maintain the highest standards through rigorous testing and quality control processes.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-Driven</h3>
                  <p className="text-gray-600">We focus on delivering measurable results that contribute to your business growth and success.</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">We provide continuous maintenance and support to ensure your solutions remain effective and up-to-date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can help you achieve your technology goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-700 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600"
            >
              <Link href="/get-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
