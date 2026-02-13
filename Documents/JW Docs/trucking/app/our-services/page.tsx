import { Truck, Warehouse, Globe, Package, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "Freight Transportation",
      description: "Reliable cargo transport across East Africa with real-time tracking",
      features: ["Nationwide coverage", "Real-time tracking", "Secure handling"]
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Secure storage solutions with advanced inventory management",
      features: ["Climate control", "24/7 security", "Inventory management"]
    },
    {
      icon: Globe,
      title: "Cross-Border Transport",
      description: "Seamless logistics across East African borders",
      features: ["Customs clearance", "Border expertise", "Document handling"]
    },
    {
      icon: Package,
      title: "Last-Mile Delivery",
      description: "Efficient final delivery solutions to your doorstep",
      features: ["Urban logistics", "Time-sensitive", "Customer notification"]
    },
    {
      icon: Clock,
      title: "Logistics Management",
      description: "Comprehensive supply chain optimization services",
      features: ["Route optimization", "Cost analysis", "Performance metrics"]
    },
    {
      icon: Shield,
      title: "Supply Chain Solutions",
      description: "End-to-end logistics solutions for your business",
      features: ["Risk management", "Quality assurance", "Continuous improvement"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored for the East African market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={service.title} className="service-card p-6 rounded-lg animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4 shadow-accent-glow">
                <service.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn More
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            <Link href="/get-quote">
              Get a Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
