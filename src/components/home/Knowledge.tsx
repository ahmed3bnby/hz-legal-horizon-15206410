import { Link } from "react-router-dom";
import { Newspaper, BookOpen, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Knowledge = () => {
  const { t } = useTranslation();

  const knowledgeCategories = [
    {
      icon: Newspaper,
      titleKey: "legalNews",
      descKey: "legalNewsDesc",
      link: "/knowledge/news",
      badgeKey: "latestUpdates",
    },
    {
      icon: BookOpen,
      titleKey: "publishedBooks",
      descKey: "publishedBooksDesc",
      link: "/knowledge/books",
      badgeKey: "professionalResources",
    },
    {
      icon: FileText,
      titleKey: "lawUpdates",
      descKey: "lawUpdatesDesc",
      link: "/knowledge/updates",
      badgeKey: "recentChanges",
    },
  ];

  const recentArticles = [
    {
      category: "Corporate Law",
      title: "New UAE Commercial Companies Law: Key Changes for 2024",
      date: "March 15, 2024",
      link: "/knowledge/news/1",
    },
    {
      category: "Arbitration",
      title: "Guide to International Arbitration in DIFC Courts",
      date: "March 12, 2024",
      link: "/knowledge/news/2",
    },
    {
      category: "Employment",
      title: "Updates to UAE Labor Law: What Employers Need to Know",
      date: "March 8, 2024",
      link: "/knowledge/news/3",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            {t('knowledgeSection.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('knowledgeSection.subtitle')}
          </p>
        </div>

        {/* Knowledge Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {knowledgeCategories.map((category, index) => (
            <Link key={index} to={category.link}>
              <Card className="h-full border-border/50 hover:border-gold transition-all duration-300 hover:shadow-lg group cursor-pointer">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <category.icon className="h-6 w-6 md:h-7 md:w-7 text-gold" />
                    </div>
                    <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {t(`knowledgeSection.${category.badgeKey}`)}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-gold transition-colors">
                    {t(`knowledgeSection.${category.titleKey}`)}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {t(`knowledgeSection.${category.descKey}`)}
                  </p>
                  <Button variant="link" className="text-gold p-0 group-hover:gap-2 transition-all">
                    {t('knowledgeSection.explore')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Articles */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold">
              {t('knowledgeSection.recentArticles')}
            </h3>
            <Link to="/knowledge/news">
              <Button variant="link" className="text-gold">
                {t('knowledgeSection.viewAll')}
                <ArrowRight className="ltr:ml-2 rtl:mr-2 rtl:rotate-180 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {recentArticles.map((article, index) => (
              <Link key={index} to={article.link}>
                <Card className="h-full border-border/50 hover:border-gold/50 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4 md:p-6">
                    <span className="text-xs font-medium text-gold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h4 className="text-base md:text-lg font-semibold mt-3 mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{article.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
