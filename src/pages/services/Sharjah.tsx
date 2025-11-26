import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, FileText, Gavel, Users, Scale, Home, Factory } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-sharjah.jpg";

const Sharjah = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Building2, titleKey: "service1Title", descKey: "service1Desc" },
    { icon: Briefcase, titleKey: "service2Title", descKey: "service2Desc" },
    { icon: FileText, titleKey: "service3Title", descKey: "service3Desc" },
    { icon: Factory, titleKey: "service4Title", descKey: "service4Desc" },
    { icon: Home, titleKey: "service5Title", descKey: "service5Desc" },
    { icon: Gavel, titleKey: "service6Title", descKey: "service6Desc" },
    { icon: Users, titleKey: "service7Title", descKey: "service7Desc" },
    { icon: Scale, titleKey: "service8Title", descKey: "service8Desc" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero with Image */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Sharjah cityscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/75"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-sm font-medium mb-6 text-cream">
                {t('pages.sharjah.office')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-cream">
                {t('pages.sharjah.title')}
              </h1>
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
                {t('pages.sharjah.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Why Sharjah */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center md:text-start">
                {t('pages.sharjah.whyTitle')}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                {t('pages.sharjah.whyDescription')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t('pages.sharjah.stat1')}</div>
                  <div className="text-sm text-muted-foreground">{t('pages.sharjah.stat1Label')}</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t('pages.sharjah.stat2')}</div>
                  <div className="text-sm text-muted-foreground">{t('pages.sharjah.stat2Label')}</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t('pages.sharjah.stat3')}</div>
                  <div className="text-sm text-muted-foreground">{t('pages.sharjah.stat3Label')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 md:mb-12 text-center">
              {t('pages.sharjah.servicesTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                      {t(`pages.sharjah.${service.titleKey}`)}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t(`pages.sharjah.${service.descKey}`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-cream">
              {t('pages.sharjah.ctaTitle')}
            </h2>
            <p className="text-lg md:text-xl text-cream/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              {t('pages.sharjah.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                {t('pages.sharjah.ctaButton')}
              </Button>
              <Button size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10">
                {t('pages.sharjah.ctaButton2')}
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
