import { Link } from "react-router-dom";
import { Building2, Briefcase, FileText, Gavel, Users, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Company formation, governance, mergers & acquisitions, and corporate structuring.",
  },
  {
    icon: Briefcase,
    title: "Commercial Law",
    description: "Contract drafting, commercial disputes, and business transactions.",
  },
  {
    icon: FileText,
    title: "Contract Management",
    description: "Comprehensive contract review, negotiation, and dispute resolution.",
  },
  {
    icon: Gavel,
    title: "Arbitration & Litigation",
    description: "Expert representation in courts and arbitration proceedings.",
  },
  {
    icon: Users,
    title: "Labor & Employment",
    description: "Employment contracts, labor disputes, and HR compliance.",
  },
  {
    icon: Shield,
    title: "Compliance & Regulatory",
    description: "Regulatory compliance, risk management, and corporate governance.",
  },
];

const offices = [
  {
    name: "Dubai",
    description: "Full-service legal consultancy in the heart of Dubai's business district",
    link: "/services/dubai",
  },
  {
    name: "Sharjah",
    description: "Comprehensive legal services tailored to Sharjah's business environment",
    link: "/services/sharjah",
  },
  {
    name: "Egypt",
    description: "Expert legal counsel navigating Egyptian commercial law",
    link: "/services/egypt",
  },
];

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Practice Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-gold group">
              <CardContent className="p-4 md:p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mt-12 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-12">
            {t('services.viewAll')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {offices.map((office, index) => (
              <Link key={index} to={office.link}>
                <Card className="h-full border-border/50 hover:border-accent transition-all duration-300 hover:shadow-gold group cursor-pointer">
                  <CardContent className="p-6 md:p-8 text-center">
                    <h4 className="text-xl md:text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">{office.name}</h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{office.description}</p>
                    <Button variant="link" className="text-accent group-hover:gap-2 transition-all">
                      {t('services.viewAll')}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
