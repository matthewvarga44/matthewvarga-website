import React, { useState } from "react";
import { CheckCircle2, Mail, TrendingUp, Users, Zap } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

export default function Newsletter() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error('Please enter your name and email address');
      return;
    }

    setLoading(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xpqlzazz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      });

      if (response.ok) {
        toast.success('Welcome! Check your email for your first newsletter issue.');
        setSubmitted(true);
        setEmail("");
        setName("");
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error("Error subscribing:", err);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-2xl">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <CheckCircle2 className="h-20 w-20 text-secondary" />
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Welcome to the Community!
              </h2>
              <p className="text-xl text-foreground/80 mb-6">
                Check your email for your first issue. We're excited to share insights that will help you build wealth through real estate.
              </p>
              <p className="text-foreground/60">
                In the meantime, explore more resources on our site or join the The Ordinary Millionaire Community mastermind program.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
              <span className="text-sm font-semibold text-secondary">Join Our Community</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Build Wealth Through Real Estate
            </h1>

            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join 5,000+ real estate investors getting weekly insights on building a profitable rental portfolio, mastering Airbnb strategies, and achieving financial freedom.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>5,000+ Subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary" />
                <span>Weekly Emails</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                <span>Actionable Tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="font-heading text-4xl font-bold text-primary mb-8">
                What You'll Learn
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Investment Strategies",
                    description: "Proven tactics for building a profitable rental portfolio and scaling your real estate business.",
                  },
                  {
                    icon: Mail,
                    title: "Weekly Insights",
                    description: "Real estate market trends, deal analysis, and actionable tips delivered to your inbox every week.",
                  },
                  {
                    icon: Users,
                    title: "Community Access",
                    description: "Connect with like-minded investors, share deals, and learn from others' experiences.",
                  },
                  {
                    icon: Zap,
                    title: "Exclusive Resources",
                    description: "Templates, checklists, and tools to help you evaluate deals and manage properties efficiently.",
                  },
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/10">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-foreground/70">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Get Started Today
                </h3>
                <p className="text-foreground/70 mb-8">
                  Join thousands of investors building wealth through real estate. No spam, just valuable insights.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your first name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Subscribing..." : "Subscribe Now"}
                  </button>

                  <p className="text-xs text-foreground/60 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>

                {/* Social Proof */}
                <div className="mt-8 pt-8 border-t border-border/30">
                  <p className="text-sm text-foreground/60 mb-4">
                    Join these investors:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80">
                        <strong>Sarah Chen:</strong> "This newsletter helped me identify my first investment property in just 3 months."
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80">
                        <strong>David Rodriguez:</strong> "The weekly market insights have been invaluable for my portfolio decisions."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-4xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How often will I receive emails?",
                a: "We send one email per week with curated insights, market trends, and actionable strategies. You can adjust frequency in your preferences.",
              },
              {
                q: "Is this newsletter free?",
                a: "Yes! Our newsletter is completely free. We share valuable insights to help you build wealth through real estate.",
              },
              {
                q: "Can I unsubscribe anytime?",
                a: "Absolutely. Every email includes an unsubscribe link. We respect your inbox and won't send you anything you don't want.",
              },
              {
                q: "What if I want more personalized coaching?",
                a: "We offer the The Ordinary Millionaire Community mastermind program for investors ready for one-on-one coaching, deal analysis, and community support.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-foreground/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Build Your Real Estate Empire?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Start with our free weekly newsletter. Get insights, strategies, and inspiration delivered to your inbox.
          </p>
          <button
            onClick={() => document.getElementById("email")?.focus()}
            className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-bold py-4 px-10 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Subscribe to the Newsletter
          </button>
        </div>
      </section>
    </Layout>
  );
}
