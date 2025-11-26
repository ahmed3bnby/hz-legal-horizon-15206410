import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Download } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Corporate Law in UAE: A Comprehensive Guide",
    author: "HZ Legal Team",
    description: "Complete guide to UAE corporate law covering company formation, governance, mergers, and regulatory compliance.",
    pages: 450,
    year: 2024,
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80",
  },
  {
    id: 2,
    title: "International Arbitration Handbook",
    author: "Senior Partners",
    description: "Practical handbook for international arbitration procedures, enforcement, and best practices in MENA region.",
    pages: 380,
    year: 2024,
    category: "Arbitration",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&q=80",
  },
  {
    id: 3,
    title: "UAE Labor Law Essentials",
    author: "Employment Law Department",
    description: "Essential guide to UAE employment regulations, contracts, termination procedures, and employee rights.",
    pages: 320,
    year: 2023,
    category: "Employment",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80",
  },
  {
    id: 4,
    title: "Commercial Contracts in Egypt",
    author: "Egypt Office Team",
    description: "Comprehensive analysis of Egyptian commercial contracts, drafting techniques, and enforcement mechanisms.",
    pages: 410,
    year: 2023,
    category: "Commercial Law",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
  },
  {
    id: 5,
    title: "DIFC Legal Framework Guide",
    author: "Corporate Team",
    description: "Detailed guide to Dubai International Financial Centre legal system, courts, and business regulations.",
    pages: 290,
    year: 2024,
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80",
  },
  {
    id: 6,
    title: "Mergers & Acquisitions in MENA",
    author: "M&A Practice Group",
    description: "Strategic guide to M&A transactions in Middle East and North Africa with case studies and frameworks.",
    pages: 520,
    year: 2023,
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
];

const categories = ["All", "Corporate Law", "Arbitration", "Employment", "Commercial Law"];

const Books = () => {
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
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Legal Publications</h1>
              <p className="text-xl text-primary-foreground/90">
                Expert publications and guides from our legal team
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
                    placeholder="Search books..."
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

        {/* Books Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <Card key={book.id} className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-muted">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {book.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-accent transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">by {book.author}</p>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{book.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{book.pages} pages</span>
                      <span>{book.year}</span>
                    </div>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Books;
