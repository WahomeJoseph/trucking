import { MapPin, Phone, Clock } from "lucide-react";

export default function BranchesPage() {
  const branches = [
    {
      city: "Nairobi",
      address: "Industrial Area, Nairobi, Kenya",
      phone: "+254 797 596 9757",
      hours: "Mon-Sun: 24/7",
      manager: "Joseph Wachira"
    },
    {
      city: "Mombasa",
      address: "Mombasa Road, Mombasa, Kenya",
      phone: "+254 722 123 456",
      hours: "Mon-Sat: 6:00 AM - 10:00 PM",
      manager: "Sarah Mwangi"
    },
    {
      city: "Kisumu",
      address: "Kisumu Central, Kisumu, Kenya",
      phone: "+254 733 987 654",
      hours: "Mon-Sat: 7:00 AM - 8:00 PM",
      manager: "David Omondi"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Our Branches</h1>
            <p className="text-xl text-muted-foreground">Find our locations across Kenya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={branch.city} className="service-card p-6 rounded-lg animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-foreground">{branch.city}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-muted-foreground mr-3 mt-1" />
                    <p className="text-muted-foreground">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-muted-foreground mr-3" />
                    <p className="text-muted-foreground">{branch.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-muted-foreground mr-3" />
                    <p className="text-muted-foreground">{branch.hours}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">Branch Manager: <span className="font-semibold text-foreground">{branch.manager}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
