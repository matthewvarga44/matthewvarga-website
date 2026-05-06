import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function FAQ() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [openItems, setOpenItems] = useState<number[]>([]);

  
  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Program Overview",
      questions: [
        {
          q: "What exactly is the The Ordinary Millionaire Community mastermind program?",
          a: "The Ordinary Millionaire Community is an exclusive mastermind community of 300 real estate investors committed to building wealth through rental properties, Airbnb, and alternative business models. You get monthly one-on-one coaching with me, access to industry experts, a private community, accountability groups, and exclusive resources—all designed to accelerate your path to financial freedom."
        },
        {
          q: "How is this different from other real estate courses?",
          a: "Most courses are one-way information delivery. The Ordinary Millionaire Community is a living, breathing community with direct access to me for personalized coaching, monthly expert calls, peer accountability, deal-sharing, and ongoing support. You're not just learning strategies—you're joining a network of serious investors executing those strategies in real-time."
        },
        {
          q: "Who is this program for?",
          a: "The Ordinary Millionaire Community is for ambitious professionals who want to escape the 9-5, build passive income through real estate, and achieve financial freedom. Whether you're a complete beginner or an experienced investor looking to scale, this program has value. The only requirement is a genuine commitment to building wealth."
        },
        {
          q: "Is this program for beginners?",
          a: "Absolutely! Many of our members are complete beginners. We start from the fundamentals and build from there. However, we also have experienced investors scaling from 5 to 20+ properties. The program is designed to meet you where you are and accelerate your progress."
        }
      ]
    },
    {
      category: "Time Commitment & Logistics",
      questions: [
        {
          q: "How much time do I need to commit to this program?",
          a: "It depends on your level of engagement. Minimum: 2-3 hours per month for your one-on-one coaching call and attending the monthly expert call. Recommended: 5-8 hours per month if you want to actively participate in accountability groups, community discussions, and deal analysis. Maximum: As much as you want—some members spend 15+ hours diving deep into opportunities."
        },
        {
          q: "Can I do this while working a full-time job?",
          a: "Yes! Most of our members started while working full-time jobs. The program is designed to fit into a busy schedule. You can attend calls at times that work for you, participate in the community asynchronously, and move at your own pace. Many members have transitioned to full-time real estate investing after building their portfolios."
        },
        {
          q: "Are the coaching calls recorded?",
          a: "Yes! All group calls and expert sessions are recorded and available in our resource library. You can watch them on your schedule. One-on-one coaching calls are private between you and me, but you can take notes and reference them anytime."
        },
        {
          q: "What if I can't make a live call?",
          a: "No problem. All calls are recorded and available immediately after. You can watch at your convenience. The private community also allows asynchronous discussion, so you can participate whenever works for you."
        }
      ]
    },
    {
      category: "Investment & Pricing",
      questions: [
        {
          q: "How much does the program cost?",
          a: "$3,000 per year, paid upfront at enrollment. That breaks down to roughly $250/month for unlimited access to monthly one-on-one coaching ($400/hour value), monthly expert calls, accountability groups, the private community, exclusive resources, and annual retreats. Most members recoup this investment within their first deal."
        },
        {
          q: "Is there a payment plan?",
          a: "No, the program requires a one-time upfront payment of $3,000 for the full year. This ensures commitment from members and allows us to deliver the highest quality coaching and community experience. Payment is due at enrollment."
        },
        {
          q: "What if I'm not satisfied with the program?",
          a: "We stand behind the program. If you're not seeing value within the first 30 days, we offer a full refund—no questions asked. However, most members see immediate value from the first coaching call and community access."
        },
        {
          q: "Is there a long-term contract?",
          a: "No. The program renews annually, but you're not locked into a multi-year contract. You can cancel anytime after your membership period ends. That said, most members renew because the value compounds over time."
        },
        {
          q: "What's included in the $3,000 annual investment?",
          a: "Monthly one-on-one coaching calls ($4,800 value), monthly industry expert calls, bi-weekly accountability group calls, private online community access, exclusive resource library, annual in-person/virtual mastermind retreat, deal-sourcing opportunities, goal-setting sessions, case study deep dives, and exclusive vendor partnerships with discounts."
        }
      ]
    },
    {
      category: "Program Content & Support",
      questions: [
        {
          q: "What topics do you cover in the coaching calls?",
          a: "Everything related to building wealth through real estate and business: property analysis, financing strategies, Airbnb optimization, market analysis, scaling strategies, tax planning, legal structures, deal evaluation, negotiation tactics, and overcoming specific challenges you're facing. We tailor calls to your situation."
        },
        {
          q: "What business models are covered?",
          a: "We cover long-term buy-and-hold rentals, Airbnb and short-term rentals, commercial real estate, wholesaling, business acquisitions (laundromats, car washes, lawn care), storage facilities, seller financing, subject-to purchases, E2 visa strategies, and alternative income streams. You choose what's relevant to your goals."
        },
        {
          q: "Will you help me find deals?",
          a: "The private community has a deal-sourcing section where members share off-market opportunities, wholesaler connections, and partnership opportunities. I also share deals I'm evaluating and teach you my deal evaluation framework. You'll have access to a network of deal sources and other investors."
        },
        {
          q: "Do you provide templates and tools?",
          a: "Yes! The exclusive resource library includes property analysis spreadsheets, due diligence checklists, Airbnb pricing strategies, financing comparison tools, lease templates, and more. These are the actual tools I use in my business."
        },
        {
          q: "What if I have a specific challenge or question?",
          a: "That's what your monthly one-on-one coaching call is for. You can bring any challenge—financing issues, tenant problems, market analysis, scaling strategy, whatever—and we'll work through it together. You also have the community to ask questions and get peer feedback."
        }
      ]
    },
    {
      category: "Community & Networking",
      questions: [
        {
          q: "How large is the community?",
          a: "We cap the program at 300 members to maintain quality and ensure you get personalized attention. This creates an exclusive, tight-knit community rather than a massive, impersonal group. Currently, we have [X] members and are filling up fast."
        },
        {
          q: "Will I actually connect with other members?",
          a: "Yes! The private community platform facilitates real connections. Members share deals, ask questions, celebrate wins, and collaborate on partnerships. Many members have become business partners and lifelong friends through the program."
        },
        {
          q: "Are there partnership opportunities?",
          a: "Absolutely. Many members form joint ventures, partnerships, and collaborations through the community. We have a structured deal-sourcing process to vet opportunities and facilitate partnerships. Some of the best deals happen between community members."
        },
        {
          q: "What's the vibe of the community?",
          a: "Supportive, ambitious, and action-oriented. Everyone is committed to building wealth and achieving financial freedom. There's no judgment—only collaboration and mutual support. We celebrate each other's wins and help each other overcome challenges."
        }
      ]
    },
    {
      category: "Results & Success Stories",
      questions: [
        {
          q: "What kind of results are members seeing?",
          a: "Results vary based on starting point and effort, but common outcomes include: first-time investors closing their first deal within 6-12 months, experienced investors scaling from 3 to 8+ properties, Airbnb investors generating $20K-50K+ monthly income, and members achieving financial independence within 3-5 years."
        },
        {
          q: "How long before I see results?",
          a: "Some members see results immediately—clarity on their strategy, confidence in deal analysis, connections with other investors. Others close their first deal within 6 months. Financial freedom typically takes 3-5 years depending on your starting point, capital, and execution. It's a marathon, not a sprint."
        },
        {
          q: "Can I really retire in my 30s like you did?",
          a: "It's possible, but depends on your starting point, capital, and execution. If you start in your 20s with solid income and follow the strategies, yes. If you start in your 40s, you might achieve financial independence by your 50s. The program accelerates your timeline, but the fundamentals remain: consistent investing, smart financing, and compound growth."
        },
        {
          q: "Do you guarantee results?",
          a: "I can't guarantee specific financial results because that depends on your effort, market conditions, and execution. What I can guarantee is that you'll learn proven strategies, get direct access to me, join a supportive community, and have all the tools you need to succeed. Your results depend on your commitment."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I join?",
          a: "Click the 'Join The Ordinary Millionaire Community' button on our website. You'll be taken to our enrollment page where you can sign up and make your first payment. You'll get immediate access to the community, resource library, and we'll schedule your first one-on-one coaching call."
        },
        {
          q: "What happens after I enroll?",
          a: "You'll get immediate access to the private community and resource library. Within 48 hours, we'll schedule your first one-on-one coaching call. You'll also be invited to the next monthly expert call and can join accountability groups immediately."
        },
        {
          q: "Should I schedule a consultation first?",
          a: "Absolutely! If you have questions or want to make sure this is the right fit, schedule a free 15-minute consultation. We'll discuss your goals, answer your questions, and help you decide if The Ordinary Millionaire Community is right for you. No pressure—just a genuine conversation."
        },
        {
          q: "What if I'm still not sure?",
          a: "Schedule a free consultation call with me. We can discuss your specific situation, your goals, and whether this program is the right fit. I'm happy to answer any questions and help you make the best decision for your situation."
        },
        {
          q: "When does the program start?",
          a: "You can join anytime! There's no fixed start date. You'll get immediate access to the community, resources, and we'll schedule your first coaching call within 48 hours. You'll be integrated into the current cohort and can start participating immediately."
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
            <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary mb-4">
              <HelpCircle className="inline h-4 w-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight mb-6">
              Your Questions <span className="text-secondary">Answered</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Everything you need to know about the The Ordinary Millionaire Community mastermind program. Can't find your answer? Schedule a free consultation to chat directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="font-heading text-3xl font-bold text-primary mb-8">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <Card
                        key={itemIndex}
                        className="border-secondary/20 hover:border-secondary/60 transition-colors cursor-pointer"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-4">
                            <CardTitle className="text-lg font-semibold text-foreground flex-1 text-left">
                              {item.q}
                            </CardTitle>
                            <ChevronDown
                              className={`h-5 w-5 text-secondary flex-shrink-0 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </CardHeader>
                        {isOpen && (
                          <CardContent className="pt-0">
                            <p className="text-foreground/80 leading-relaxed">
                              {item.a}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Schedule a free 15-minute consultation with me. I'm happy to answer any questions and help you decide if The Ordinary Millionaire Community is the right fit for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <a>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30">
                    Schedule Free Consultation
                  </Button>
                </a>
              </Link>
              <Link href="/apply-mastermind">
                <a>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 h-14 rounded-full"
                  >
                    Join Now
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              Why You Can Trust Us
            </h2>
            <p className="text-lg text-foreground/80">
              We're not here to make quick money off you. We're here to help you build lasting wealth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-secondary/20 text-center">
              <CardHeader>
                <CardTitle className="text-secondary text-4xl font-bold mb-2">
                  $10M+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  I've personally built a $10M+ portfolio. I'm not teaching theory—I'm teaching what actually works.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 text-center">
              <CardHeader>
                <CardTitle className="text-secondary text-4xl font-bold mb-2">
                  300+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  300+ members have joined and are seeing real results. We're capped at 300 to maintain quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 text-center">
              <CardHeader>
                <CardTitle className="text-secondary text-4xl font-bold mb-2">
                  30-Day
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  30-day money-back guarantee. If you're not satisfied, we'll refund you—no questions asked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
