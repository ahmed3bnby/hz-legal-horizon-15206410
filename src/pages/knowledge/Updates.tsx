import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle, Calendar, Tag } from "lucide-react";

const updates = [
  {
    id: 1,
    title: "UAE Federal Decree-Law No. 50 of 2022 Amendments",
    jurisdiction: "UAE",
    date: "March 20, 2024",
    effectiveDate: "April 1, 2024",
    category: "Corporate Law",
    impact: "High",
    summary: "Key amendments to commercial companies law regarding foreign ownership, board composition, and shareholder rights.",
    tags: ["Companies", "Foreign Investment", "Governance"],
  },
  {
    id: 2,
    title: "New Labor Market Flexibility Regulations",
    jurisdiction: "UAE",
    date: "March 18, 2024",
    effectiveDate: "Immediate",
    category: "Employment",
    impact: "Medium",
    summary: "Updated regulations on remote work arrangements, flexible working hours, and gig economy employment contracts.",
    tags: ["Labor Law", "Remote Work", "Contracts"],
  },
  {
    id: 3,
    title: "Egypt Investment Law Implementing Regulations",
    jurisdiction: "Egypt",
    date: "March 15, 2024",
    effectiveDate: "May 1, 2024",
    category: "Investment",
    impact: "High",
    summary: "New implementing regulations clarifying investment incentives, golden license procedures, and sector-specific benefits.",
    tags: ["Investment", "Incentives", "GAFI"],
  },
  {
    id: 4,
    title: "DIFC Data Protection Law Updates",
    jurisdiction: "DIFC",
    date: "March 10, 2024",
    effectiveDate: "June 1, 2024",
    category: "Data Protection",
    impact: "High",
    summary: "Enhanced data protection requirements aligned with international standards including breach notification and consent management.",
    tags: ["Data Protection", "Privacy", "DIFC"],
  },
  {
    id: 5,
    title: "Sharjah Municipality Real Estate Regulations",
    jurisdiction: "Sharjah",
    date: "March 5, 2024",
    effectiveDate: "March 15, 2024",
    category: "Real Estate",
    impact: "Medium",
    summary: "New regulations on property registration fees, documentation requirements, and dispute resolution mechanisms.",
    tags: ["Real Estate", "Municipality", "Registration"],
  },
  {
    id: 6,
    title: "UAE Central Bank AML/CFT Guidelines Update",
    jurisdiction: "UAE",
    date: "February 28, 2024",
    effectiveDate: "Immediate",
    category: "Compliance",
    impact: "High",
    summary: "Revised anti-money laundering guidelines with enhanced customer due diligence and reporting obligations.",
    tags: ["AML", "Compliance", "Banking"],
  },
];

const jurisdictions = ["All", "UAE", "Dubai", "Sharjah", "DIFC", "Egypt"];
const impactLevels = ["All", "High", "Medium", "Low"];

const Updates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("All");
  const [selectedImpact, setSelectedImpact] = useState("All");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Law Updates</h1>
              <p className="text-xl text-primary-foreground/90">
                Recent legislative changes and regulatory updates across our jurisdictions
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
                    placeholder="Search updates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Jurisdiction</h3>
                  <div className="flex flex-wrap gap-2">
                    {jurisdictions.map((jurisdiction) => (
                      <Button
                        key={jurisdiction}
                        variant={selectedJurisdiction === jurisdiction ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedJurisdiction(jurisdiction)}
                        className={selectedJurisdiction === jurisdiction ? "bg-accent text-accent-foreground" : ""}
                      >
                        {jurisdiction}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Impact Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {impactLevels.map((impact) => (
                      <Button
                        key={impact}
                        variant={selectedImpact === impact ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedImpact(impact)}
                        className={selectedImpact === impact ? "bg-accent text-accent-foreground" : ""}
                      >
                        {impact}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updates List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {updates.map((update) => (
                <Card key={update.id} className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-medium text-accent uppercase tracking-wider">
                            {update.jurisdiction}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            update.impact === 'High' ? 'bg-red-500/10 text-red-500' :
                            update.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-600' :
                            'bg-green-500/10 text-green-600'
                          }`}>
                            {update.impact} Impact
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 hover:text-accent transition-colors cursor-pointer">
                          {update.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{update.summary}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {update.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                              <Tag className="h-3 w-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Published: {update.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        <span>Effective: {update.effectiveDate}</span>
                      </div>
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
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
