import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Our Services",
        knowledge: "Our Knowledge",
        about: "About Us",
        contact: "Contact Us",
        careers: "Join Us",
        store: "Books Store",
        blog: "Blog",
        dashboard: "Dashboard"
      },
      hero: {
        title: "Excellence in Legal Consultancy",
        subtitle: "Professional legal services across Dubai, Sharjah, and Egypt with over 15 years of expertise in corporate and commercial law",
        cta: "Get Consultation"
      },
      services: {
        title: "Our Legal Services",
        subtitle: "Comprehensive legal solutions tailored to your needs",
        dubai: "Dubai",
        sharjah: "Sharjah",
        egypt: "Egypt",
        viewAll: "View All Services"
      },
      knowledge: {
        title: "Legal Knowledge Center",
        subtitle: "Stay updated with the latest legal news and insights",
        news: "Latest News",
        books: "Legal Books",
        updates: "Law Updates"
      },
      contact: {
        title: "Contact Us",
        subtitle: "Reach out to our legal team",
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        message: "Your Message",
        send: "Send Message",
        offices: "Our Offices",
        hours: "Office Hours"
      },
      footer: {
        about: "About HZ Legal",
        description: "Premium legal consultancy services with offices in Dubai, Sharjah, and Egypt",
        quickLinks: "Quick Links",
        copyright: "All rights reserved"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        services: "خدماتنا",
        knowledge: "مركز المعرفة",
        about: "من نحن",
        contact: "اتصل بنا",
        careers: "انضم إلينا",
        store: "متجر الكتب",
        blog: "المدونة",
        dashboard: "لوحة التحكم"
      },
      hero: {
        title: "التميز في الاستشارات القانونية",
        subtitle: "خدمات قانونية احترافية في دبي والشارقة ومصر مع أكثر من 15 عامًا من الخبرة في القانون التجاري والشركات",
        cta: "احصل على استشارة"
      },
      services: {
        title: "خدماتنا القانونية",
        subtitle: "حلول قانونية شاملة مصممة خصيصًا لاحتياجاتك",
        dubai: "دبي",
        sharjah: "الشارقة",
        egypt: "مصر",
        viewAll: "عرض جميع الخدمات"
      },
      knowledge: {
        title: "مركز المعرفة القانونية",
        subtitle: "ابق على اطلاع بأحدث الأخبار والرؤى القانونية",
        news: "آخر الأخبار",
        books: "الكتب القانونية",
        updates: "تحديثات القوانين"
      },
      contact: {
        title: "اتصل بنا",
        subtitle: "تواصل مع فريقنا القانوني",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "رسالتك",
        send: "إرسال الرسالة",
        offices: "مكاتبنا",
        hours: "ساعات العمل"
      },
      footer: {
        about: "عن HZ القانونية",
        description: "خدمات استشارات قانونية متميزة مع مكاتب في دبي والشارقة ومصر",
        quickLinks: "روابط سريعة",
        copyright: "جميع الحقوق محفوظة"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
