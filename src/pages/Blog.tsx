import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, Video, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Corporate Law in the UAE",
    titleAr: "فهم قانون الشركات في الإمارات",
    excerpt: "A comprehensive guide to corporate regulations and compliance requirements in the UAE business landscape.",
    category: "Corporate Law",
    categoryAr: "قانون الشركات",
    type: "article",
    date: "2024-01-15",
    author: "Dr. Hassan Zayed",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Commercial Arbitration Best Practices",
    titleAr: "أفضل ممارسات التحكيم التجاري",
    excerpt: "Key strategies for successful commercial arbitration in international disputes.",
    category: "Arbitration",
    categoryAr: "التحكيم",
    type: "video",
    date: "2024-01-10",
    author: "Dr. Hassan Zayed",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Real Estate Investment Laws in Dubai",
    titleAr: "قوانين الاستثمار العقاري في دبي",
    excerpt: "Navigate the complex landscape of property investment regulations in Dubai's dynamic market.",
    category: "Real Estate",
    categoryAr: "العقارات",
    type: "article",
    date: "2024-01-05",
    author: "Dr. Hassan Zayed",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Intellectual Property Protection Strategies",
    titleAr: "استراتيجيات حماية الملكية الفكرية",
    excerpt: "Essential approaches to safeguarding your intellectual property rights in the MENA region.",
    category: "IP Law",
    categoryAr: "قانون الملكية الفكرية",
    type: "article",
    date: "2023-12-28",
    author: "Dr. Hassan Zayed",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 text-cream">
                {t('blog.title')}
              </h1>
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed mb-6 md:mb-8">
                {t('blog.subtitle')}
              </p>
              
              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute ltr:left-4 rtl:right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('blog.searchPlaceholder')}
                  className="ltr:pl-12 rtl:pr-12 h-12 md:h-14 bg-background text-foreground"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-gold transition-all duration-300 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={i18n.language === 'ar' ? post.titleAr : post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 ltr:right-4 rtl:left-4">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {i18n.language === 'ar' ? post.categoryAr : post.category}
                      </Badge>
                    </div>
                    {post.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                        <Video className="h-12 w-12 text-cream" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-gold transition-colors">
                      {i18n.language === 'ar' ? post.titleAr : post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                      <FileText className="h-4 w-4 ltr:mr-2 rtl:ml-2" />
                      {t('blog.readMore')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-base md:text-lg text-muted-foreground">{t('blog.noResults')}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
