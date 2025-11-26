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
        dashboard: "Dashboard",
        login: "Login",
        logout: "Logout"
      },
      hero: {
        title: "Excellence in Legal Consultancy",
        subtitle: "Professional legal services across Dubai, Sharjah, and Egypt with over 15 years of expertise in corporate and commercial law",
        cta: "Get Consultation",
        welcome: "Welcome to HZ Legal",
        trustMessage: "Your trusted partner in legal excellence"
      },
      services: {
        title: "Our Legal Services",
        subtitle: "Comprehensive legal solutions tailored to your needs",
        dubai: "Dubai",
        sharjah: "Sharjah",
        egypt: "Egypt",
        viewAll: "View All Services",
        corporate: "Corporate Law",
        commercial: "Commercial Law",
        arbitration: "Arbitration",
        consultation: "Legal Consultation"
      },
      knowledge: {
        title: "Legal Knowledge Center",
        subtitle: "Stay updated with the latest legal news and insights",
        news: "Latest News",
        books: "Legal Books",
        updates: "Law Updates",
        readMore: "Read More",
        search: "Search",
        filter: "Filter"
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
        hours: "Office Hours",
        sendSuccess: "Message sent successfully!",
        address: "Address"
      },
      auth: {
        login: "Login",
        signup: "Sign Up",
        email: "Email Address",
        password: "Password",
        confirmPassword: "Confirm Password",
        loginTitle: "Welcome Back",
        loginSubtitle: "Sign in to access your dashboard",
        signupTitle: "Create Account",
        signupSubtitle: "Join HZ Legal Consultancy",
        forgotPassword: "Forgot Password?",
        noAccount: "Don't have an account?",
        hasAccount: "Already have an account?",
        loginError: "Invalid email or password",
        signupError: "Could not create account",
        passwordMismatch: "Passwords do not match",
        emailRequired: "Email is required",
        passwordRequired: "Password is required",
        passwordMinLength: "Password must be at least 6 characters",
        loginSuccess: "Logged in successfully!",
        signupSuccess: "Account created successfully!",
        accessDenied: "Access denied. Admin privileges required.",
        notAuthorized: "You are not authorized to access this page"
      },
      dashboard: {
        title: "Content Management Dashboard",
        subtitle: "Manage your legal content, blog posts, and publications",
        blog: "Blog",
        news: "News",
        books: "Books",
        updates: "Updates",
        services: "Services",
        create: "Create New",
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",
        success: "Saved successfully!",
        error: "An error occurred"
      },
      footer: {
        about: "About HZ Legal",
        description: "Premium legal consultancy services with offices in Dubai, Sharjah, and Egypt",
        quickLinks: "Quick Links",
        copyright: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      common: {
        loading: "Loading...",
        error: "Error",
        success: "Success",
        close: "Close",
        submit: "Submit",
        back: "Back"
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
        dashboard: "لوحة التحكم",
        login: "تسجيل الدخول",
        logout: "تسجيل الخروج"
      },
      hero: {
        title: "التميز في الاستشارات القانونية",
        subtitle: "خدمات قانونية احترافية في دبي والشارقة ومصر مع أكثر من 15 عامًا من الخبرة في القانون التجاري والشركات",
        cta: "احصل على استشارة",
        welcome: "مرحباً بك في HZ القانونية",
        trustMessage: "شريكك الموثوق في التميز القانوني"
      },
      services: {
        title: "خدماتنا القانونية",
        subtitle: "حلول قانونية شاملة مصممة خصيصًا لاحتياجاتك",
        dubai: "دبي",
        sharjah: "الشارقة",
        egypt: "مصر",
        viewAll: "عرض جميع الخدمات",
        corporate: "قانون الشركات",
        commercial: "القانون التجاري",
        arbitration: "التحكيم",
        consultation: "استشارات قانونية"
      },
      knowledge: {
        title: "مركز المعرفة القانونية",
        subtitle: "ابق على اطلاع بأحدث الأخبار والرؤى القانونية",
        news: "آخر الأخبار",
        books: "الكتب القانونية",
        updates: "تحديثات القوانين",
        readMore: "اقرأ المزيد",
        search: "بحث",
        filter: "تصفية"
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
        hours: "ساعات العمل",
        sendSuccess: "تم إرسال الرسالة بنجاح!",
        address: "العنوان"
      },
      auth: {
        login: "تسجيل الدخول",
        signup: "إنشاء حساب",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        confirmPassword: "تأكيد كلمة المرور",
        loginTitle: "مرحباً بعودتك",
        loginSubtitle: "سجل الدخول للوصول إلى لوحة التحكم",
        signupTitle: "إنشاء حساب جديد",
        signupSubtitle: "انضم إلى HZ للاستشارات القانونية",
        forgotPassword: "هل نسيت كلمة المرور؟",
        noAccount: "ليس لديك حساب؟",
        hasAccount: "لديك حساب بالفعل؟",
        loginError: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
        signupError: "لم نتمكن من إنشاء الحساب",
        passwordMismatch: "كلمات المرور غير متطابقة",
        emailRequired: "البريد الإلكتروني مطلوب",
        passwordRequired: "كلمة المرور مطلوبة",
        passwordMinLength: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
        loginSuccess: "تم تسجيل الدخول بنجاح!",
        signupSuccess: "تم إنشاء الحساب بنجاح!",
        accessDenied: "تم رفض الوصول. مطلوب صلاحيات المسؤول.",
        notAuthorized: "غير مصرح لك بالوصول إلى هذه الصفحة"
      },
      dashboard: {
        title: "لوحة تحكم المحتوى",
        subtitle: "إدارة المحتوى القانوني والمقالات والمنشورات",
        blog: "المدونة",
        news: "الأخبار",
        books: "الكتب",
        updates: "التحديثات",
        services: "الخدمات",
        create: "إنشاء جديد",
        save: "حفظ",
        cancel: "إلغاء",
        delete: "حذف",
        edit: "تعديل",
        success: "تم الحفظ بنجاح!",
        error: "حدث خطأ"
      },
      footer: {
        about: "عن HZ القانونية",
        description: "خدمات استشارات قانونية متميزة مع مكاتب في دبي والشارقة ومصر",
        quickLinks: "روابط سريعة",
        copyright: "جميع الحقوق محفوظة",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة"
      },
      common: {
        loading: "جاري التحميل...",
        error: "خطأ",
        success: "نجاح",
        close: "إغلاق",
        submit: "إرسال",
        back: "رجوع"
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
