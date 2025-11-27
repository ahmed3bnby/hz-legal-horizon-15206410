import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, GraduationCap, TrendingUp, Users, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const positions = [
  {
    id: 1,
    title: "Senior Corporate Lawyer",
    location: "Dubai",
    type: "Full-time",
    experience: "5-8 years",
    description: "Leading corporate transactions, M&A, and providing strategic legal advice to multinational clients.",
  },
  {
    id: 2,
    title: "Commercial Litigation Associate",
    location: "Sharjah",
    type: "Full-time",
    experience: "3-5 years",
    description: "Handling commercial disputes, court representation, and arbitration matters in Sharjah courts.",
  },
  {
    id: 3,
    title: "Legal Consultant - Egypt Office",
    location: "Cairo",
    type: "Full-time",
    experience: "4-7 years",
    description: "Advising on Egyptian commercial law, investment regulations, and corporate compliance.",
  },
  {
    id: 4,
    title: "Junior Associate - Corporate Law",
    location: "Dubai",
    type: "Full-time",
    experience: "0-2 years",
    description: "Supporting senior lawyers in corporate transactions, contract drafting, and legal research.",
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We'll review your application and contact you soon.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", experience: "", coverLetter: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">Join Our Team</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Build your legal career with HZ Legal Consultancy. We're looking for talented legal professionals passionate about excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why Join HZ Legal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground">Clear career progression paths and professional development opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Work with experienced legal professionals on complex matters</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">Training programs, workshops, and international certifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diverse Practice</h3>
                <p className="text-muted-foreground">Exposure to various legal areas and jurisdictions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Open Positions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {positions.map((position) => (
                <Card key={position.id} className="border-border/50 hover:border-accent/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3 text-sm">
                          <span className="text-accent font-medium">{position.location}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{position.type}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{position.experience}</span>
                        </div>
                        <p className="text-muted-foreground">{position.description}</p>
                      </div>
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Program */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <GraduationCap className="h-16 w-16 mx-auto mb-6 text-accent" />
                <h2 className="text-4xl font-serif font-bold mb-4">Internship Program</h2>
                <p className="text-xl text-muted-foreground">
                  Launch your legal career with our comprehensive internship program
                </p>
              </div>
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>3-6 month structured internship program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Hands-on experience across multiple practice areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Mentorship from senior legal professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Training workshops and legal research opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Potential for full-time employment upon completion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-serif font-bold mb-8 text-center">Apply Now</h2>
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 XX XXX XXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Position Applied For *</label>
                      <Input
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        placeholder="e.g., Senior Corporate Lawyer"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Years of Experience *</label>
                      <Input
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="e.g., 5 years"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Letter *</label>
                      <Textarea
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        placeholder="Tell us why you want to join HZ Legal..."
                        rows={6}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Upload CV *</label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
