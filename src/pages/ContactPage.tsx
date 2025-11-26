import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/home/Contact";
import Map from "@/components/Map";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Reach out to our legal team for consultations and inquiries across our offices in Dubai, Sharjah, and Egypt.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        {/* Office Locations Map */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Office Locations</h2>
              <p className="text-lg text-muted-foreground">Visit us at any of our offices across Dubai, Sharjah, and Egypt</p>
            </div>
            <Map />
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold mb-6">Office Hours</h2>
              <div className="space-y-4 text-lg">
                <div>
                  <p className="font-semibold">Sunday - Thursday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold">Friday - Saturday</p>
                  <p className="text-muted-foreground">Closed</p>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground">
                    For urgent legal matters outside office hours, please call our emergency line or send us a message via WhatsApp.
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
