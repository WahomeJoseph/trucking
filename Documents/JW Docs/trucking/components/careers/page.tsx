import { Briefcase, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Truck Driver",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "3+ years",
      description: "Experienced driver for long-haul routes across East Africa"
    },
    {
      title: "Logistics Coordinator",
      location: "Mombasa, Kenya",
      type: "Full-time",
      experience: "2+ years",
      description: "Coordinate shipments and manage client communications"
    },
    {
      title: "Fleet Maintenance Technician",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "4+ years",
      description: "Maintain and repair our fleet of trucks and vehicles"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Careers</h1>
            <p className="text-xl text-muted-foreground">Join our growing team of logistics professionals</p>
          </div>

          <div className="service-card p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Competitive Salary</h3>
                <p className="text-muted-foreground">Attractive compensation packages</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground">Work-life balance matters</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Great Team</h3>
                <p className="text-muted-foreground">Supportive work environment</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={job.title} className="service-card p-6 rounded-lg animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      <p className="text-muted-foreground">{job.location} • {job.type}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">Experience required: {job.experience}</p>
                  <Button className="bg-accent hover:bg-accent-dark text-accent-foreground">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
