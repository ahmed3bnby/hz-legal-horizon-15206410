import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About HZ Legal</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Premium legal consultancy delivering excellence across Dubai, Sharjah, and Egypt with international standards and local expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  HZ Legal Consultancy was established to bridge the gap between international legal standards and regional business needs. With over 15 years of combined experience, our firm has grown from a boutique consultancy to a respected corporate entity serving clients across the MENA region.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began in Dubai, where we recognized the need for premium legal services that combine global best practices with deep understanding of local regulations and cultural nuances. Today, we maintain offices in Dubai, Sharjah, and Egypt, serving a diverse portfolio of clients ranging from startups to multinational corporations.
                </p>
                <p className="text-lg leading-relaxed">
                  We take pride in our corporate identity, operating as a unified firm rather than individual practitioners. This approach ensures consistency, reliability, and comprehensive service delivery across all our practice areas and office locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver exceptional legal services that empower businesses to achieve their goals with confidence and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted legal consultancy in the MENA region, recognized for excellence, integrity, and client success.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Excellence, integrity, responsiveness, and unwavering commitment to our clients' success and satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why Choose HZ Legal</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Corporate Identity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We operate as a unified corporate entity, ensuring consistency, accountability, and institutional knowledge across all engagements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Regional Expertise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Deep understanding of UAE and Egyptian legal frameworks, commercial practices, and cultural business environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">International Standards</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Global best practices combined with local expertise to serve both regional and international clients effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Personalized attention with dedicated teams ensuring your legal needs are met with precision and care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-serif font-bold mb-6">Accreditations & Memberships</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HZ Legal Consultancy maintains memberships with leading professional legal associations and adheres to the highest standards of professional conduct. Our team members are licensed to practice in their respective jurisdictions and participate in continuous professional development.
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
