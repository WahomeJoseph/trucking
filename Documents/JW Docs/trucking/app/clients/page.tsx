import { Building, Star, Award } from "lucide-react";

export default function ClientsPage() {
  const clients = [
    { name: "Safaricom PLC", industry: "Telecommunications", years: "5 years" },
    { name: "Bidco Africa", industry: "Manufacturing", years: "7 years" },
    { name: "East African Breweries", industry: "Beverage", years: "4 years" },
    { name: "Kenya Airways", industry: "Aviation", years: "3 years" },
    { name: "Nakumatt Holdings", industry: "Retail", years: "6 years" },
    { name: "Bamburi Cement", industry: "Construction", years: "5 years" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Our Clients</h1>
            <p className="text-xl text-muted-foreground">Trusted by leading companies across East Africa</p>
          </div>

          <div className="service-card p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Why Companies Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Proven Reliability</h3>
                <p className="text-muted-foreground">99.8% on-time delivery rate</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Industry Expertise</h3>
                <p className="text-muted-foreground">Specialized solutions for each industry</p>
              </div>
              <div className="text-center">
                <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Scalable Solutions</h3>
                <p className="text-muted-foreground">Services that grow with your business</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Valued Clients</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div key={client.name} className="service-card p-6 rounded-lg text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{client.name}</h3>
                  <p className="text-muted-foreground mb-2">{client.industry}</p>
                  <p className="text-sm text-accent font-semibold">Partner for {client.years}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
