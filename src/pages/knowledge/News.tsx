import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    category: "Corporate Law",
    title: "New UAE Commercial Companies Law: Key Changes for 2024",
    excerpt: "Understanding the significant amendments to UAE's commercial companies law and their impact on foreign ownership and corporate governance.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: 2,
    category: "Arbitration",
    title: "Guide to International Arbitration in DIFC Courts",
    excerpt: "Comprehensive overview of arbitration procedures, enforcement mechanisms, and best practices in Dubai International Financial Centre.",
    date: "March 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    id: 3,
    category: "Employment",
    title: "Updates to UAE Labor Law: What Employers Need to Know",
    excerpt: "Recent amendments to employment regulations including remote work policies, end of service benefits, and employment contracts.",
    date: "March 8, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
  {
    id: 4,
    category: "Investment",
    title: "Egypt's New Investment Law: Opportunities for Foreign Investors",
    excerpt: "Analysis of investment incentives, sector-specific benefits, and streamlined procedures under Egypt's latest investment legislation.",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 5,
    category: "Real Estate",
    title: "Real Estate Transactions in Sharjah: Legal Framework",
    excerpt: "Essential legal requirements, documentation, and procedures for property purchases and leases in Sharjah Emirate.",
    date: "March 1, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: 6,
    category: "Compliance",
    title: "Anti-Money Laundering Regulations in UAE: Compliance Guide",
    excerpt: "Practical guidance on AML/CFT compliance requirements for businesses operating in UAE and implementation strategies.",
    date: "February 28, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
];

const categories = ["All", "Corporate Law", "Arbitration", "Employment", "Investment", "Real Estate", "Compliance"];

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Legal News & Insights</h1>
              <p className="text-xl text-primary-foreground/90">
                Stay informed with the latest legal developments, industry insights, and expert analysis
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                      <Button variant="link" className="text-accent p-0 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="default" size="sm" className="bg-accent text-accent-foreground">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
