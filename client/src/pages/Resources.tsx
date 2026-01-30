import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Calculator, CheckCircle, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import DownloadModal from "@/components/DownloadModal";

export default function Resources() {
  const [downloadModal, setDownloadModal] = useState<{
    isOpen: boolean;
    resourceTitle: string;
    downloadUrl: string;
  }>({
    isOpen: false,
    resourceTitle: "",
    downloadUrl: "",
  });

  const handleDownloadClick = (title: string, url: string) => {
    setDownloadModal({
      isOpen: true,
      resourceTitle: title,
      downloadUrl: url,
    });
  };

  const resources = [
    {
      category: "Spreadsheets & Calculators",
      items: [
        {
          title: "Property Analysis Calculator",
          description: "Complete spreadsheet to analyze real estate investment opportunities. Calculate cap rate, cash-on-cash return, NOI, and more. Includes sample data to get you started.",
          icon: <Calculator className="h-8 w-8" />,
          value: "$200+",
          downloadUrl: "/Property-Analysis-Calculator.xlsx",
          features: [
            "Property information & financing",
            "Income analysis & projections",
            "Expense tracking & calculations",
            "Cash flow analysis",
            "Investment metrics (Cap Rate, ROI, GRM)"
          ]
        },
        {
          title: "Airbnb ROI Calculator",
          description: "Analyze short-term rental profitability. Calculate occupancy rates, pricing strategies, and monthly cash flow for Airbnb properties.",
          icon: <Calculator className="h-8 w-8" />,
          value: "$150+",
          downloadUrl: "/Airbnb-ROI-Calculator.xlsx",
          features: [
            "Nightly rate optimization",
            "Occupancy rate projections",
            "Expense tracking",
            "Monthly & annual ROI",
            "Comparison analysis"
          ]
        },
        {
          title: "Rental Property Expense Tracker",
          description: "Track all rental property expenses throughout the year for accurate tax reporting and profitability analysis.",
          icon: <Calculator className="h-8 w-8" />,
          value: "$100+",
          downloadUrl: "/Expense-Tracker.xlsx",
          features: [
            "Monthly expense logging",
            "Tax category organization",
            "Annual summaries",
            "Deduction tracking",
            "Multi-property support"
          ]
        }
      ]
    },
    {
      category: "Checklists & Guides",
      items: [
        {
          title: "Due Diligence Checklist",
          description: "Complete checklist for evaluating properties before purchase. Covers inspection, financials, legal, and market analysis.",
          icon: <CheckCircle className="h-8 w-8" />,
          value: "$75+",
          downloadUrl: "/Due-Diligence-Checklist.pdf",
          features: [
            "Property inspection items",
            "Financial analysis points",
            "Legal & title review",
            "Market analysis questions",
            "Negotiation tips"
          ]
        },
        {
          title: "Tenant Screening Guide",
          description: "Step-by-step guide for screening tenants to minimize risk and ensure quality renters for your properties.",
          icon: <FileText className="h-8 w-8" />,
          value: "$75+",
          downloadUrl: "/Tenant-Screening-Guide.pdf",
          features: [
            "Credit check guidelines",
            "Background verification",
            "Income verification",
            "Reference checking",
            "Legal compliance tips"
          ]
        },
        {
          title: "Property Management Template",
          description: "Complete templates for property management including lease agreements, maintenance logs, and tenant communication.",
          icon: <FileText className="h-8 w-8" />,
          value: "$100+",
          downloadUrl: "/Property-Management-Templates.pdf",
          features: [
            "Lease agreement template",
            "Maintenance log template",
            "Tenant communication templates",
            "Inspection checklists",
            "Emergency procedures"
          ]
        }
      ]
    },
    {
      category: "Strategies & Guides",
      items: [
        {
          title: "Airbnb Arbitrage Playbook",
          description: "Complete guide to the Airbnb arbitrage model. Learn how to source properties, negotiate leases, and scale to multiple units.",
          icon: <Zap className="h-8 w-8" />,
          value: "$150+",
          downloadUrl: "/Airbnb-Arbitrage-Playbook.pdf",
          features: [
            "Finding arbitrage opportunities",
            "Lease negotiation strategies",
            "Furnishing & setup guide",
            "Pricing optimization",
            "Scaling to multiple units"
          ]
        },
        {
          title: "Seller Financing Guide",
          description: "Learn how to structure seller financing deals to get properties with less cash down and creative terms.",
          icon: <FileText className="h-8 w-8" />,
          value: "$100+",
          downloadUrl: "/Seller-Financing-Guide.pdf",
          features: [
            "Seller financing basics",
            "Deal structure examples",
            "Negotiation tactics",
            "Legal considerations",
            "Case studies"
          ]
        },
        {
          title: "Real Estate Investing Roadmap",
          description: "Step-by-step roadmap to go from beginner to experienced real estate investor. Includes timeline, milestones, and action items.",
          icon: <Zap className="h-8 w-8" />,
          value: "$125+",
          downloadUrl: "/Real-Estate-Roadmap.pdf",
          features: [
            "Year 1 action plan",
            "Year 2-3 scaling strategy",
            "Financing progression",
            "Portfolio diversification",
            "Financial milestones"
          ]
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight mb-6">
              Free Resources to <span className="text-secondary">Accelerate Your Growth</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Access the same tools and templates I use in my $10M+ real estate portfolio. Download spreadsheets, checklists, and guides to analyze deals, track expenses, and scale your business.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
                {category.category}
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {category.items.map((resource, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="border-secondary/20 hover:border-secondary/60 transition-all hover:shadow-lg overflow-hidden flex flex-col"
                  >
                    <CardHeader className="bg-primary/5 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-secondary">{resource.icon}</div>
                        <span className="text-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                          {resource.value}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-primary">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col pt-6">
                      <p className="text-foreground/80 mb-6 flex-1">
                        {resource.description}
                      </p>

                      <div className="mb-6">
                        <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-3">
                          Includes:
                        </p>
                        <ul className="space-y-2">
                          {resource.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                              <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full"
                        onClick={() => handleDownloadClick(resource.title, resource.downloadUrl)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">
              Total Value: $1,275+
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              These are the exact tools I've used to build a $10M+ portfolio and help 300+ members achieve their financial goals. Download them all for free and start analyzing deals today.
            </p>
            <div className="grid gap-6 md:grid-cols-3 max-w-2xl mx-auto mb-12">
              <div>
                <p className="text-3xl font-bold text-secondary mb-2">9</p>
                <p className="text-primary-foreground/90">Total Resources</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary mb-2">$1,275+</p>
                <p className="text-primary-foreground/90">Total Value</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary mb-2">100%</p>
                <p className="text-primary-foreground/90">Completely Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              Ready to Scale Your Real Estate Business?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              These free resources are just the beginning. Join Retire with Rentals to get personalized coaching, expert calls, accountability groups, and a community of 300+ investors all working toward financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq">
                <a>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30">
                    Learn More About the Program
                  </Button>
                </a>
              </Link>
              <Link href="/book-consultation">
                <a>
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 h-14 rounded-full">
                    Schedule Free Consultation
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-4xl font-bold text-primary mb-12 text-center">
              Resource FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Are these resources really free?",
                  a: "Yes! All resources are completely free. No email required, no strings attached. I created these tools to help real estate investors make better decisions."
                },
                {
                  q: "Can I use these in my business?",
                  a: "Absolutely! These are yours to use, modify, and share with your team. Feel free to customize them for your specific needs and market conditions."
                },
                {
                  q: "Are these Excel files compatible with Google Sheets?",
                  a: "Yes! All Excel files can be opened and edited in Google Sheets. Simply upload them to your Google Drive and they'll work perfectly."
                },
                {
                  q: "Will you add more resources?",
                  a: "Yes! I'm constantly creating new tools and templates based on member feedback. Join the program to get early access to new resources and exclusive tools."
                }
              ].map((item, index) => (
                <Card key={index} className="border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">
                      {item.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      {item.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModal.isOpen}
        onClose={() =>
          setDownloadModal({ ...downloadModal, isOpen: false })
        }
        resourceTitle={downloadModal.resourceTitle}
        downloadUrl={downloadModal.downloadUrl}
      />
    </Layout>
  );
}
