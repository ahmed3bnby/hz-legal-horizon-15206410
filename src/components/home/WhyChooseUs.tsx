import { Award, Globe, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excellence & Expertise",
    description: "15+ years of proven track record in corporate and commercial law across MENA region",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "Global best practices combined with deep local market knowledge and cultural understanding",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description: "24/7 availability with rapid response times for urgent legal matters and consultations",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Personalized legal strategies tailored to your unique business needs and objectives",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose HZ Legal</h2>
          <p className="text-xl text-muted-foreground">
            Premium legal consultancy with a commitment to excellence and client success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-lg p-12 text-center text-primary-foreground">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Ready to Discuss Your Legal Needs?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced legal team today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971XXXXXXXXX" className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-3 font-medium hover:bg-accent/90 transition-colors shadow-gold">
              Call Now
            </a>
            <a href="https://wa.me/971XXXXXXXXX" className="inline-flex items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-8 py-3 font-medium hover:bg-primary-foreground/20 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
