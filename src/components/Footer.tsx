import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">HZ Legal Consultancy</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Premium legal consultancy services across Dubai, Sharjah, and Egypt. Corporate law excellence with international standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/knowledge" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Knowledge</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/store" className="text-primary-foreground/80 hover:text-accent transition-colors">Books Store</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Our Offices</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Sharjah, UAE</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Cairo, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@hzlegal.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Sun - Thu: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} HZ Legal Consultancy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
