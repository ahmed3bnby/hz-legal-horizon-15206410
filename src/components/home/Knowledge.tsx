import { Link } from "react-router-dom";
import { Newspaper, BookOpen, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const knowledgeCategories = [
  {
    icon: Newspaper,
    title: "Legal News",
    description: "Stay updated with the latest legal developments and industry insights",
    link: "/knowledge/news",
    badge: "Latest Updates",
  },
  {
    icon: BookOpen,
    title: "Published Books",
    description: "Comprehensive legal guides and publications by our expert team",
    link: "/knowledge/books",
    badge: "Professional Resources",
  },
  {
    icon: FileText,
    title: "Law Updates",
    description: "Recent changes in legislation and regulatory frameworks",
    link: "/knowledge/updates",
    badge: "Recent Changes",
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

const Knowledge = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Knowledge</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights, publications, and legal updates from our team
          </p>
        </div>

        {/* Knowledge Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {knowledgeCategories.map((category, index) => (
            <Link key={index} to={category.link}>
              <Card className="h-full border-border/50 hover:border-accent transition-all duration-300 hover:shadow-lg group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <category.icon className="h-7 w-7 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {category.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="link" className="text-accent p-0 group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Articles */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-serif font-bold">Recent Articles</h3>
            <Link to="/knowledge/news">
              <Button variant="link" className="text-accent">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <Link key={index} to={article.link}>
                <Card className="h-full border-border/50 hover:border-accent/50 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h4 className="text-lg font-semibold mt-3 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{article.date}</p>
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
