import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, FileText, Gavel, Users, Shield, Landmark, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate & Commercial Law",
    description: "Company incorporation (LLC, JSC, partnerships), commercial registration, investment incentives, and business restructuring under Egyptian Companies Law.",
  },
  {
    icon: Briefcase,
    title: "Foreign Investment Advisory",
    description: "Investment Law compliance, GAFI registration, free zone establishment, incentives optimization, and foreign investor legal support.",
  },
  {
    icon: FileText,
    title: "Contracts & Agreements",
    description: "Commercial contracts drafting and negotiation under Egyptian Civil Code. Agency, distribution, franchise, and partnership agreements.",
  },
  {
    icon: Gavel,
    title: "Litigation & Arbitration",
    description: "Representation before Egyptian courts and Cairo Regional Centre for International Commercial Arbitration (CRCICA). Dispute resolution expertise.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    description: "Banking transactions, financing agreements, security documentation, Central Bank compliance, and financial regulatory matters.",
  },
  {
    icon: TrendingUp,
    title: "Capital Markets",
    description: "Capital market transactions, Egyptian Exchange listings, securities regulations, and investment fund establishment.",
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Employment contracts, Labor Law compliance, social insurance, work permits, collective agreements, and labor dispute resolution.",
  },
  {
    icon: Shield,
    title: "Tax & Regulatory",
    description: "Tax structuring, Egyptian Tax Authority dealings, customs, VAT compliance, transfer pricing, and regulatory advisory services.",
  },
];

const Egypt = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-sm font-medium mb-6">
                Egypt Office
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Legal Services in Egypt
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive legal services for businesses operating in Egypt's dynamic market. Expert guidance through Egyptian commercial law, investment regulations, and business environment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Egypt */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">Egypt Legal Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Egypt represents one of Africa's largest markets with over 100 million consumers, strategic location connecting Africa, Asia, and Europe, and significant economic reforms attracting foreign investment. Our Egypt office provides comprehensive legal services navigating Egyptian regulations, customs, and business practices with deep local expertise and international standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">180+</div>
                  <div className="text-sm text-muted-foreground">Egyptian Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">60+</div>
                  <div className="text-sm text-muted-foreground">Investment Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">12+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Egypt Services</h2>
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
              Investing in Egypt?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get expert legal counsel from our Cairo office
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                Request Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Call Egypt Office
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Egypt;
