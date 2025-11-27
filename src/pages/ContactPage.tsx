import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/home/Contact";
import Map from "@/components/Map";
import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 text-white">
                {t('contactPage.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {t('contactPage.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        {/* Office Locations Map */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {t('contactPage.officeLocationsTitle')}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                {t('contactPage.officeLocationsSubtitle')}
              </p>
            </div>
            <Map />
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Clock className="h-10 w-10 md:h-12 md:w-12 text-gold mx-auto mb-4 md:mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6">
                {t('contactPage.officeHoursTitle')}
              </h2>
              <div className="space-y-4 text-base md:text-lg">
                <div>
                  <p className="font-semibold">{t('contactPage.sundayToThursday')}</p>
                  <p className="text-muted-foreground">{t('contactPage.sundayToThursdayTime')}</p>
                </div>
                <div>
                  <p className="font-semibold">{t('contactPage.fridayToSaturday')}</p>
                  <p className="text-muted-foreground">{t('contactPage.closed')}</p>
                </div>
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t('contactPage.urgentMatters')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
