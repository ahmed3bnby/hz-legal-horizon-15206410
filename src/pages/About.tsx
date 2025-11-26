import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 text-cream">
                {t('about.title')}
              </h1>
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8 text-center">
                {t('about.storyTitle')}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-base md:text-lg leading-relaxed">
                  {t('about.story1')}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {t('about.story2')}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {t('about.story3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              <Card className="border-border/50 hover:border-gold/50 transition-all">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Target className="h-7 w-7 md:h-8 md:w-8 text-gold" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4">
                    {t('about.missionTitle')}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {t('about.missionDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-gold/50 transition-all">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Eye className="h-7 w-7 md:h-8 md:w-8 text-gold" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4">
                    {t('about.visionTitle')}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {t('about.visionDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-gold/50 transition-all">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Award className="h-7 w-7 md:h-8 md:w-8 text-gold" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4">
                    {t('about.valuesTitle')}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {t('about.valuesDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 md:mb-12 text-center">
                {t('about.whyChooseTitle')}
              </h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {t('about.reason1Title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.reason1Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {t('about.reason2Title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.reason2Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {t('about.reason3Title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.reason3Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {t('about.reason4Title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.reason4Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="h-12 w-12 md:h-16 md:w-16 text-gold mx-auto mb-4 md:mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6">
                {t('about.accreditationsTitle')}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('about.accreditationsDesc')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
