import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, FileText, Newspaper, Briefcase, Upload, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("blog");

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: `${type} has been saved successfully.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold mb-2">Content Management Dashboard</h1>
            <p className="text-muted-foreground">Manage your legal content, blog posts, and publications</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto">
              <TabsTrigger value="blog" className="gap-2">
                <FileText className="h-4 w-4" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="news" className="gap-2">
                <Newspaper className="h-4 w-4" />
                News
              </TabsTrigger>
              <TabsTrigger value="books" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Books
              </TabsTrigger>
              <TabsTrigger value="updates" className="gap-2">
                <FileText className="h-4 w-4" />
                Updates
              </TabsTrigger>
              <TabsTrigger value="services" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Services
              </TabsTrigger>
            </TabsList>

            {/* Blog Management */}
            <TabsContent value="blog" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Blog Post</CardTitle>
                  <CardDescription>Share your legal insights and expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, "Blog post")} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="blog-title-en">Title (English)</Label>
                        <Input id="blog-title-en" placeholder="Enter title in English" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="blog-title-ar">Title (Arabic)</Label>
                        <Input id="blog-title-ar" placeholder="أدخل العنوان بالعربية" required dir="rtl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="blog-category">Category</Label>
                      <Select>
                        <SelectTrigger id="blog-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Law</SelectItem>
                          <SelectItem value="commercial">Commercial Law</SelectItem>
                          <SelectItem value="arbitration">Arbitration</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="ip">Intellectual Property</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="blog-type">Content Type</Label>
                      <Select>
                        <SelectTrigger id="blog-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="insight">Quick Insight</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="blog-content-en">Content (English)</Label>
                        <Textarea
                          id="blog-content-en"
                          placeholder="Write your content..."
                          className="min-h-[200px]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="blog-content-ar">Content (Arabic)</Label>
                        <Textarea
                          id="blog-content-ar"
                          placeholder="اكتب المحتوى..."
                          className="min-h-[200px]"
                          required
                          dir="rtl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="blog-image">Featured Image</Label>
                      <div className="flex gap-2">
                        <Input id="blog-image" type="file" accept="image/*" />
                        <Button type="button" variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Publish Blog Post
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* News Management */}
            <TabsContent value="news" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add Legal News</CardTitle>
                  <CardDescription>Keep your audience informed with latest legal developments</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, "News article")} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="news-title-en">Headline (English)</Label>
                        <Input id="news-title-en" placeholder="Enter headline" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="news-title-ar">Headline (Arabic)</Label>
                        <Input id="news-title-ar" placeholder="أدخل العنوان" required dir="rtl" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="news-content-en">Content (English)</Label>
                        <Textarea id="news-content-en" className="min-h-[150px]" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="news-content-ar">Content (Arabic)</Label>
                        <Textarea id="news-content-ar" className="min-h-[150px]" required dir="rtl" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Publish News
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Books Management */}
            <TabsContent value="books" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add Legal Book</CardTitle>
                  <CardDescription>Add books to your online store</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, "Book")} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="book-title-en">Book Title (English)</Label>
                        <Input id="book-title-en" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="book-title-ar">Book Title (Arabic)</Label>
                        <Input id="book-title-ar" required dir="rtl" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="book-price">Price (AED)</Label>
                        <Input id="book-price" type="number" placeholder="299" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="book-category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate">Corporate Law</SelectItem>
                            <SelectItem value="commercial">Commercial Law</SelectItem>
                            <SelectItem value="civil">Civil Law</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="book-pdf">Upload PDF</Label>
                      <div className="flex gap-2">
                        <Input id="book-pdf" type="file" accept=".pdf" />
                        <Button type="button" variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Book to Store
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Updates Management */}
            <TabsContent value="updates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Law Update</CardTitle>
                  <CardDescription>Publish updates on legal and regulatory changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, "Law update")} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="update-title-en">Title (English)</Label>
                        <Input id="update-title-en" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="update-title-ar">Title (Arabic)</Label>
                        <Input id="update-title-ar" required dir="rtl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="update-jurisdiction">Jurisdiction</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select jurisdiction" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="uae">UAE</SelectItem>
                          <SelectItem value="dubai">Dubai</SelectItem>
                          <SelectItem value="sharjah">Sharjah</SelectItem>
                          <SelectItem value="egypt">Egypt</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="update-content-en">Description (English)</Label>
                        <Textarea id="update-content-en" className="min-h-[150px]" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="update-content-ar">Description (Arabic)</Label>
                        <Textarea id="update-content-ar" className="min-h-[150px]" required dir="rtl" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Publish Update
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Management */}
            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Services</CardTitle>
                  <CardDescription>Add or edit legal services by location</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, "Service")} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="service-location">Office Location</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select office" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dubai">Dubai</SelectItem>
                          <SelectItem value="sharjah">Sharjah</SelectItem>
                          <SelectItem value="egypt">Egypt</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service-name-en">Service Name (English)</Label>
                        <Input id="service-name-en" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service-name-ar">Service Name (Arabic)</Label>
                        <Input id="service-name-ar" required dir="rtl" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service-desc-en">Description (English)</Label>
                        <Textarea id="service-desc-en" className="min-h-[120px]" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service-desc-ar">Description (Arabic)</Label>
                        <Textarea id="service-desc-ar" className="min-h-[120px]" required dir="rtl" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Service
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
