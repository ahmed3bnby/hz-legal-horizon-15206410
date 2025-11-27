import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, FileText, Newspaper, Briefcase, Trash2, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string | null;
  published: boolean;
  created_at: string;
}

interface NewsItem {
  id: string;
  title: string;
  content: string;
  category: string | null;
  published: boolean;
  created_at: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  description: string | null;
  category: string | null;
  created_at: string;
}

interface LawUpdate {
  id: string;
  title: string;
  content: string;
  category: string | null;
  jurisdiction: string | null;
  created_at: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("blog");
  
  // State for data
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [lawUpdates, setLawUpdates] = useState<LawUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [blogRes, newsRes, booksRes, updatesRes] = await Promise.all([
        supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
        supabase.from('news').select('*').order('created_at', { ascending: false }),
        supabase.from('books').select('*').order('created_at', { ascending: false }),
        supabase.from('law_updates').select('*').order('created_at', { ascending: false }),
      ]);

      if (blogRes.data) setBlogPosts(blogRes.data);
      if (newsRes.data) setNews(newsRes.data);
      if (booksRes.data) setBooks(booksRes.data);
      if (updatesRes.data) setLawUpdates(updatesRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "Failed to load data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase.from('blog_posts').insert({
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        category: formData.get('category') as string,
        author_id: user?.id,
        published: false,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Blog post created successfully.",
      });
      
      e.currentTarget.reset();
      loadData();
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase.from('news').insert({
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        category: formData.get('category') as string,
        author_id: user?.id,
        published: false,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "News article created successfully.",
      });
      
      e.currentTarget.reset();
      loadData();
    } catch (error) {
      console.error('Error creating news:', error);
      toast({
        title: "Error",
        description: "Failed to create news article",
        variant: "destructive",
      });
    }
  };

  const handleBookSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase.from('books').insert({
        title: formData.get('title') as string,
        author: formData.get('author') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        added_by: user?.id,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Book added successfully.",
      });
      
      e.currentTarget.reset();
      loadData();
    } catch (error) {
      console.error('Error adding book:', error);
      toast({
        title: "Error",
        description: "Failed to add book",
        variant: "destructive",
      });
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase.from('law_updates').insert({
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        category: formData.get('category') as string,
        jurisdiction: formData.get('jurisdiction') as string,
        added_by: user?.id,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Law update published successfully.",
      });
      
      e.currentTarget.reset();
      loadData();
    } catch (error) {
      console.error('Error creating law update:', error);
      toast({
        title: "Error",
        description: "Failed to create law update",
        variant: "destructive",
      });
    }
  };

  const togglePublished = async (id: string, table: 'blog_posts' | 'news', currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from(table)
        .update({ published: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success!",
        description: `Post ${!currentStatus ? 'published' : 'unpublished'} successfully.`,
      });
      
      loadData();
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string, table: 'blog_posts' | 'news' | 'books' | 'law_updates') => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const { error } = await supabase.from(table).delete().eq('id', id);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Item deleted successfully.",
      });
      
      loadData();
    } catch (error) {
      console.error('Error deleting item:', error);
      toast({
        title: "Error",
        description: "Failed to delete item",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold mb-2">لوحة التحكم</h1>
            <p className="text-muted-foreground">إدارة المحتوى القانوني والمقالات والمنشورات</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="blog" className="gap-2">
                <FileText className="h-4 w-4" />
                المدونة
              </TabsTrigger>
              <TabsTrigger value="news" className="gap-2">
                <Newspaper className="h-4 w-4" />
                الأخبار
              </TabsTrigger>
              <TabsTrigger value="books" className="gap-2">
                <BookOpen className="h-4 w-4" />
                الكتب
              </TabsTrigger>
              <TabsTrigger value="updates" className="gap-2">
                <FileText className="h-4 w-4" />
                التحديثات
              </TabsTrigger>
            </TabsList>

            {/* Blog Management */}
            <TabsContent value="blog" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>إضافة مقال جديد</CardTitle>
                  <CardDescription>شارك خبرتك القانونية</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBlogSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">العنوان</Label>
                      <Input id="title" name="title" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">الفئة</Label>
                      <Input id="category" name="category" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">المحتوى</Label>
                      <Textarea id="content" name="content" className="min-h-[200px]" required />
                    </div>

                    <Button type="submit" className="w-full">نشر المقال</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>المقالات المنشورة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>العنوان</TableHead>
                        <TableHead>الفئة</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell>{post.title}</TableCell>
                          <TableCell>{post.category}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={post.published}
                                onCheckedChange={() => togglePublished(post.id, 'blog_posts', post.published)}
                              />
                              <span>{post.published ? 'منشور' : 'مسودة'}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(post.id, 'blog_posts')}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* News Management */}
            <TabsContent value="news" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>إضافة خبر قانوني</CardTitle>
                  <CardDescription>أبقِ جمهورك على اطلاع بآخر التطورات القانونية</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="news-title">العنوان</Label>
                      <Input id="news-title" name="title" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="news-category">الفئة</Label>
                      <Input id="news-category" name="category" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="news-content">المحتوى</Label>
                      <Textarea id="news-content" name="content" className="min-h-[150px]" required />
                    </div>

                    <Button type="submit" className="w-full">نشر الخبر</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الأخبار المنشورة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>العنوان</TableHead>
                        <TableHead>الفئة</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {news.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.title}</TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={item.published}
                                onCheckedChange={() => togglePublished(item.id, 'news', item.published)}
                              />
                              <span>{item.published ? 'منشور' : 'مسودة'}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(item.id, 'news')}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Books Management */}
            <TabsContent value="books" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>إضافة كتاب قانوني</CardTitle>
                  <CardDescription>أضف كتب إلى المكتبة</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBookSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="book-title">عنوان الكتاب</Label>
                      <Input id="book-title" name="title" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="book-author">المؤلف</Label>
                      <Input id="book-author" name="author" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="book-category">الفئة</Label>
                      <Input id="book-category" name="category" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="book-description">الوصف</Label>
                      <Textarea id="book-description" name="description" className="min-h-[120px]" />
                    </div>

                    <Button type="submit" className="w-full">إضافة الكتاب</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الكتب المضافة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>العنوان</TableHead>
                        <TableHead>المؤلف</TableHead>
                        <TableHead>الفئة</TableHead>
                        <TableHead>إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {books.map((book) => (
                        <TableRow key={book.id}>
                          <TableCell>{book.title}</TableCell>
                          <TableCell>{book.author}</TableCell>
                          <TableCell>{book.category}</TableCell>
                          <TableCell>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(book.id, 'books')}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Updates Management */}
            <TabsContent value="updates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>تحديث قانوني</CardTitle>
                  <CardDescription>نشر تحديثات حول التغييرات القانونية والتنظيمية</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="update-title">العنوان</Label>
                      <Input id="update-title" name="title" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="update-jurisdiction">الاختصاص القضائي</Label>
                      <Input id="update-jurisdiction" name="jurisdiction" placeholder="الإمارات، دبي، الشارقة، مصر" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="update-category">الفئة</Label>
                      <Input id="update-category" name="category" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="update-content">المحتوى</Label>
                      <Textarea id="update-content" name="content" className="min-h-[150px]" required />
                    </div>

                    <Button type="submit" className="w-full">نشر التحديث</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>التحديثات المنشورة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>العنوان</TableHead>
                        <TableHead>الاختصاص</TableHead>
                        <TableHead>الفئة</TableHead>
                        <TableHead>إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lawUpdates.map((update) => (
                        <TableRow key={update.id}>
                          <TableCell>{update.title}</TableCell>
                          <TableCell>{update.jurisdiction}</TableCell>
                          <TableCell>{update.category}</TableCell>
                          <TableCell>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(update.id, 'law_updates')}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
