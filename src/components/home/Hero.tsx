import { Button } from "@/components/ui/button";
import { ArrowRight, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Dubai Legal Consultancy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
            <Scale className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Dubai • Sharjah • Egypt</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Excellence in
            <span className="block text-accent">Corporate Law</span>
          </h1>

          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            HZ Legal Consultancy delivers premium legal services with international standards across the Middle East and North Africa region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold group">
                Get Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Our Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-primary-foreground/80">
            <div>
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm">Clients Served</div>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div>
              <div className="text-3xl font-bold text-accent">3</div>
              <div className="text-sm">Office Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
