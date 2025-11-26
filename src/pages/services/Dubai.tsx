import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, FileText, Gavel, Users, Shield, Scale, Award } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Formation & Structuring",
    description: "Complete company formation services in Dubai mainland and free zones including LLC, FZE, FZCO, and branch offices. Expert guidance on optimal corporate structure for tax efficiency and compliance.",
  },
  {
    icon: Briefcase,
    title: "Commercial Contracts",
    description: "Drafting and negotiation of distribution agreements, agency contracts, joint ventures, and commercial partnerships under UAE law. Comprehensive contract review and risk assessment.",
  },
  {
    icon: FileText,
    title: "Mergers & Acquisitions",
    description: "Full M&A advisory including due diligence, transaction structuring, documentation, and regulatory compliance for acquisitions and mergers in UAE market.",
  },
  {
    icon: Gavel,
    title: "Dispute Resolution & Arbitration",
    description: "Representation in DIFC Courts, Dubai Courts, and international arbitration. Expert handling of commercial disputes, breach of contract, and arbitration proceedings.",
  },
  {
    icon: Users,
    title: "Employment & Labor Law",
    description: "Employment contract drafting, termination procedures, labor disputes, visa and work permit assistance, and HR policy development compliant with UAE Labor Law.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Corporate governance, anti-money laundering compliance, data protection, economic substance regulations, and ongoing regulatory advisory for UAE businesses.",
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    description: "Trademark registration, copyright protection, licensing agreements, and IP enforcement in UAE. Protection of brand identity and intellectual assets.",
  },
  {
    icon: Award,
    title: "Real Estate & Construction",
    description: "Real estate transactions, property registration, construction contracts, developer agreements, and RERA compliance. End-to-end property legal services.",
  },
];

const Dubai = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-sm font-medium mb-6">
                Dubai Office
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Legal Services in Dubai
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive corporate and commercial legal services in Dubai mainland, free zones, and DIFC. Expert counsel for businesses operating in the UAE's premier commercial hub.
              </p>
            </div>
          </div>
        </section>

        {/* Why Dubai */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">Why Dubai Legal Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dubai stands as the Middle East's leading business hub, attracting international corporations and entrepreneurs with its strategic location, world-class infrastructure, and business-friendly regulations. Our Dubai office provides specialized legal services tailored to the unique requirements of Dubai mainland, free zones, and the Dubai International Financial Centre (DIFC).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Dubai Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Free Zone Formations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Dubai Services</h2>
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
              Need Legal Consultation in Dubai?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Schedule a meeting with our Dubai legal team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Call Dubai Office
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dubai;
