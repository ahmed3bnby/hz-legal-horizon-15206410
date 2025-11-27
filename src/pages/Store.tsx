import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, BookOpen, Download, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const books = [
  {
    id: 1,
    title: "Corporate Law in UAE: Complete Guide",
    author: "HZ Legal Team",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    description: "Comprehensive 450-page guide covering all aspects of UAE corporate law, company formation, and governance.",
    format: "PDF Download",
    pages: 450,
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80",
    bestseller: true,
  },
  {
    id: 2,
    title: "International Arbitration Handbook",
    author: "Senior Partners",
    price: 349,
    rating: 4.9,
    reviews: 89,
    description: "Expert guide to international arbitration procedures, enforcement, and best practices in MENA region.",
    format: "PDF Download",
    pages: 380,
    category: "Arbitration",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&q=80",
    bestseller: true,
  },
  {
    id: 3,
    title: "UAE Labor Law Essentials",
    author: "Employment Law Department",
    price: 249,
    rating: 4.7,
    reviews: 156,
    description: "Essential guide to UAE employment regulations, contracts, and employee rights compliance.",
    format: "PDF Download",
    pages: 320,
    category: "Employment",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80",
  },
  {
    id: 4,
    title: "Commercial Contracts in Egypt",
    author: "Egypt Office Team",
    price: 279,
    rating: 4.6,
    reviews: 78,
    description: "Comprehensive analysis of Egyptian commercial contracts with practical drafting techniques.",
    format: "PDF Download",
    pages: 410,
    category: "Commercial Law",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
  },
  {
    id: 5,
    title: "DIFC Legal Framework Guide",
    author: "Corporate Team",
    price: 299,
    rating: 4.8,
    reviews: 92,
    description: "Detailed guide to Dubai International Financial Centre legal system and business regulations.",
    format: "PDF Download",
    pages: 290,
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80",
  },
  {
    id: 6,
    title: "Mergers & Acquisitions in MENA",
    author: "M&A Practice Group",
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    reviews: 67,
    description: "Strategic guide to M&A transactions in Middle East and North Africa with case studies.",
    format: "PDF Download",
    pages: 520,
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    bestseller: true,
  },
];

const categories = ["All Books", "Corporate Law", "Arbitration", "Employment", "Commercial Law"];

const Store = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (bookId: number) => {
    setCart([...cart, bookId]);
    toast({
      title: "Added to Cart",
      description: "Book has been added to your cart.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Legal Books Store</h1>
              <p className="text-xl text-primary-foreground/90">
                Professional legal publications and guides - instant digital download
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
                <Button variant="outline" className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Cart ({cart.length})
                </Button>
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
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] rounded-t-lg overflow-hidden bg-muted">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {book.bestseller && (
                        <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                          Bestseller
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {book.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-1 group-hover:text-accent transition-colors line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{book.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({book.reviews} reviews)</span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{book.description}</p>
                      
                      <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                        <Download className="h-3 w-3" />
                        <span>{book.format}</span>
                        <span>•</span>
                        <span>{book.pages} pages</span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-accent">AED {book.price}</span>
                          {book.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              AED {book.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <Button 
                        onClick={() => addToCart(book.id)}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">Why Buy from MK Legal Store</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Download</h3>
                  <p className="text-sm text-muted-foreground">Access your purchase immediately after payment</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Authors</h3>
                  <p className="text-sm text-muted-foreground">Written by our experienced legal professionals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Updated Content</h3>
                  <p className="text-sm text-muted-foreground">Regular updates with latest legal changes</p>
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

export default Store;
