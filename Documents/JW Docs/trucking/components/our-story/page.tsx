import { BookOpen, Target, Eye } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Our Story</h1>
            <p className="text-xl text-muted-foreground">The journey of TruckCorp Logistics</p>
          </div>

          <div className="service-card p-8 rounded-lg mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent mx-auto mb-6 shadow-accent-glow">
              <BookOpen className="w-10 h-10 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">Our Journey</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded in 2010, TruckCorp started as a small family-owned trucking company with just two vehicles. 
                Our founder, Joseph Wachira, saw the need for reliable logistics services in the East African region 
                and set out to build a company that would redefine transportation standards.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we've grown into one of Kenya's leading logistics providers, serving clients across 
                multiple industries including manufacturing, retail, and construction. Our commitment to excellence 
                and customer satisfaction has been the driving force behind our success.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To provide reliable, efficient, and cost-effective logistics solutions that empower businesses 
                to grow and thrive in the East African market.
              </p>
            </div>

            <div className="service-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the leading logistics partner in East Africa, known for innovation, reliability, 
                and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
