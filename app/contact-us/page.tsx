"use client";

import { useState } from "react";
import { Phone, Mail,Send, MessageCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Customer Service",
      description: "+254 797 596 9757",
      subtitle: "24/7 Emergency Line",
      link: "tel:+2547975969757",
    },
    {
      icon: MessageCircle,
      title: "Chat With Us",
      description: "Live Support",
      subtitle: "Instant messaging",
      link: "#chat",
    },
    {
      icon: Mail,
      title: "Mail Us",
      description: "josephwachira589@gmail.com",
      subtitle: "Response within 2 hours",
      link: "mailto:josephwachira589@gmail.com",
    },
    {
      icon: Users,
      title: "Follow Us",
      description: "Find us on social media",
      subtitle: "East Africa Logistics Hub",
      link: "https://maps.google.com/?q=Nairobi,Kenya",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="relative pt-32 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center mx-auto px-4 mb-16">

          <div className="flex items-center justify-center my-8">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
            <h1 className="mx-6 text-4xl md:text-5xl font-bold text-white whitespace-nowrap">Contact Us</h1>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-[150px]" />
          </div>

          <p className="text-xl text-white">
            <span className="pb-2 border-b-2 capitalize border-primary inline-block"> Get in touch with</span> {""}
            our logistics experts</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Contact Cards - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactCards.map((card) => (
                <div key={card.title} >
                  <a href={card.link} className="block h-full">
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <card.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-foreground text-lg mb-2">{card.title}</h3>
                        <p className="font-semibold mb-1">{card.description}</p>
                        <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              ))}
            </div>

            {/* Contact Form Section */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid lg:grid-cols-5">
                    {/* Form Side */}
                    <div className="lg:col-span-3 p-8 md:p-12">
                      <div className="max-w-2xl bg-transparent">
                        <h2 className="text-2xl font-bold capitalize text-foreground mb-2">Do you have an questions?Feel Free to Reach out!</h2>
                        <p className="text-muted-foreground mb-8">
                          Fill out the form below and our team will get back to you in no time.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:border-transparent transition-all duration-200"
                              />
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                                Phone Number <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                placeholder="+254 ___ ___ ___"
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:border-transparent transition-all duration-200"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              placeholder="your.email@example.com"
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:border-transparent transition-all duration-200"
                            />
                          </div>

                          <div>
                            <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                              Service Needed <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              required
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:border-transparent transition-all duration-200"
                            >
                              <option value="">Select a service</option>
                              <option value="freight">Freight Transportation</option>
                              <option value="logistics">Logistics Management</option>
                              <option value="warehousing">Warehousing</option>
                              <option value="supply-chain">Supply Chain Solutions</option>
                              <option value="cross-border">Cross-Border Transport</option>
                              <option value="last-mile">Last-Mile Delivery</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                              Project Details <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows={5}
                              value={formData.message}
                              placeholder="Tell us about your logistics needs, shipment details, and any specific requirements..."
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:border-transparent transition-all duration-200 resize-none"
                            ></textarea>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-accent text-accent-foreground font-semibold py-6 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
                          >
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </Button>
                        </form>
                      </div>
                    </div>

                    {/* Info Side */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 border-l border-gray-200">
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                            <Clock className="w-6 h-6 mr-2 text-accent" />
                            Business Hours
                          </h3>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                              <span className="text-foreground font-medium">Monday - Friday</span>
                              <span className="font-semibold text-foreground">6:00 AM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                              <span className="text-foreground font-medium">Saturday</span>
                              <span className="font-semibold text-foreground">7:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-foreground font-medium">Sunday</span>
                              <span className="font-semibold text-accent">Emergency Services</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                          <h4 className="font-bold text-foreground mb-3">Why Choose Us?</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              Fast response within 2 hours
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              24/7 emergency support
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              East Africa coverage
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              Professional logistics experts
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Full Width Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-20"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Service <span className="text-accent">Areas</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We provide comprehensive logistics coverage across East Africa and beyond.
                  Contact us to see if we serve your specific location.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.093913504874!2d36.8121!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c56cb2d8cf%3A0xf95f7520d3b5b2e!2sNairobi!5e0!3m2!1sen!2ske!4v1669033190723!5m2!1sen!2ske"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
