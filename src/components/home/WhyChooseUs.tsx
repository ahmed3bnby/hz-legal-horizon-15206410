import { Award, Globe, Clock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Award, titleKey: "excellence", descKey: "excellenceDesc" },
    { icon: Globe, titleKey: "international", descKey: "internationalDesc" },
    { icon: Clock, titleKey: "responsive", descKey: "responsiveDesc" },
    { icon: Users, titleKey: "clientFocused", descKey: "clientFocusedDesc" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {t(`whyChooseUs.${feature.titleKey}`)}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t(`whyChooseUs.${feature.descKey}`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-hero rounded-lg p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-cream">
            {t('whyChooseUs.ctaTitle')}
          </h3>
          <p className="text-lg md:text-xl text-cream/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t('whyChooseUs.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+971XXXXXXXXX" 
              className="inline-flex items-center justify-center rounded-md bg-gold text-white px-6 md:px-8 py-3 font-medium hover:bg-gold/90 transition-colors shadow-gold"
            >
              {t('whyChooseUs.callNow')}
            </a>
            <a 
              href="https://wa.me/971XXXXXXXXX" 
              className="inline-flex items-center justify-center rounded-md bg-cream/10 text-cream border border-cream/30 px-6 md:px-8 py-3 font-medium hover:bg-cream/20 transition-colors"
            >
              {t('whyChooseUs.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
