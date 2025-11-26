import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, FileText, Gavel, Users, Scale, Home, Factory } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Setup & Licensing",
    description: "Company formation in Sharjah free zones (SAIF Zone, Hamriyah Free Zone) and mainland. Complete licensing, trade name registration, and initial approvals.",
  },
  {
    icon: Briefcase,
    title: "Commercial Transactions",
    description: "Commercial contracts, supplier agreements, distribution contracts, and business transactions under Sharjah Commerce and Tourism regulations.",
  },
  {
    icon: FileText,
    title: "Contract Law Services",
    description: "Drafting, review, and negotiation of business contracts. Dispute resolution and contract enforcement under Sharjah jurisdiction.",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    description: "Legal services for industrial projects, manufacturing licenses, factory setup, and industrial zone regulations in Sharjah.",
  },
  {
    icon: Home,
    title: "Real Estate Services",
    description: "Property transactions, lease agreements, real estate development contracts, and Sharjah Municipality compliance.",
  },
  {
    icon: Gavel,
    title: "Litigation & Disputes",
    description: "Representation in Sharjah Courts for civil, commercial, and criminal matters. Expert handling of legal disputes and litigation.",
  },
  {
    icon: Users,
    title: "Labor & Employment",
    description: "Employment contracts, labor law compliance, employee disputes, visa processing, and HR legal advisory for Sharjah businesses.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Business compliance with Sharjah regulations, corporate governance, licensing renewals, and ongoing legal advisory.",
  },
];

const Sharjah = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-sm font-medium mb-6">
                Sharjah Office
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Legal Services in Sharjah
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Expert legal consultancy for businesses in Sharjah's thriving industrial, commercial, and free zone sectors. Tailored solutions for Sharjah's unique business environment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Sharjah */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">Sharjah Business Legal Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Sharjah offers competitive business costs, strategic location, and strong industrial infrastructure. Our Sharjah office specializes in serving manufacturers, traders, and service providers with deep knowledge of local regulations, free zone requirements, and Sharjah's distinctive business culture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Sharjah Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Industrial Licenses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years in Sharjah</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Sharjah Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Start Your Business in Sharjah?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our Sharjah office for expert legal guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                Schedule Meeting
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Call Sharjah Office
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sharjah;
