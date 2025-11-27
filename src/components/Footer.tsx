import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-navy dark:bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-3 md:mb-4 text-accent">HZ Legal Consultancy</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-accent">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/dubai" className="text-white/80 hover:text-accent transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/knowledge/news" className="text-white/80 hover:text-accent transition-colors">{t('nav.knowledge')}</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-accent transition-colors">{t('nav.careers')}</Link></li>
              <li><Link to="/store" className="text-white/80 hover:text-accent transition-colors">{t('nav.store')}</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-accent">
              {t('contact.offices')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-white/80">{t('services.dubai')}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-white/80">{t('services.sharjah')}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-white/80">{t('services.egypt')}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-accent">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-white/80">+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-white/80">info@hzlegal.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-white/80">{t('contact.hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} HZ Legal Consultancy. {t('footer.copyright')}</p>
            <div className="flex gap-4 md:gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">{t('footer.privacy')}</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
