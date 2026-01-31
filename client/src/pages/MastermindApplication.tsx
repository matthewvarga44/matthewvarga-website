import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import Layout from "@/components/Layout";

export default function MastermindApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentInvestments: "",
    investmentCapital: "",
    coachingNeeds: [] as string[],
    investmentGoals: "",
    whyJoin: "",
    experience: "",
    timeCommitment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      coachingNeeds: checked
        ? [...prev.coachingNeeds, value]
        : prev.coachingNeeds.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate essential fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError("Please enter your name, email, and phone number.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare the email content
      const emailContent = `
NEW MASTERMIND APPLICATION

═══════════════════════════════════════════════════════════════

APPLICANT INFORMATION
─────────────────────
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

═══════════════════════════════════════════════════════════════

INVESTMENT BACKGROUND
──────────────────────
Current Properties/Investments: ${formData.currentInvestments || "Not specified"}
Available Investment Capital: ${formData.investmentCapital || "Not specified"}

═══════════════════════════════════════════════════════════════

COACHING INTERESTS
──────────────────────────
${formData.coachingNeeds.length > 0 ? formData.coachingNeeds.map(need => `• ${need}`).join('\n') : "Not specified"}

═══════════════════════════════════════════════════════════════

GOALS & MOTIVATION
──────────────────
Investment Goals:
${formData.investmentGoals || "Not specified"}

Why Join Mastermind:
${formData.whyJoin || "Not specified"}

═══════════════════════════════════════════════════════════════

EXPERIENCE & COMMITMENT
──────────────────────
Experience Level: ${formData.experience || "Not specified"}
Time Commitment per Week: ${formData.timeCommitment || "Not specified"}

═══════════════════════════════════════════════════════════════

Submitted: ${new Date().toLocaleString()}
`;

      // Send email using Formspree
      const response = await fetch("https://formspree.io/f/xyzpkwdq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullName,
          message: emailContent,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          currentInvestments: "",
          investmentCapital: "",
          coachingNeeds: [],
          investmentGoals: "",
          whyJoin: "",
          experience: "",
          timeCommitment: "",
        });
      } else {
        setError("Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-2xl">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full bg-secondary/10 p-4">
                  <CheckCircle2 className="h-16 w-16 text-secondary" />
                </div>
              </div>
              <h1 className="font-heading text-4xl font-bold text-primary">Application Submitted!</h1>
              <p className="text-lg text-foreground/70">
                Thank you for applying to join the Retire with Rentals Mastermind. I've received your application and will review it carefully.
              </p>
              <p className="text-foreground/60">
                I personally review every application to ensure we maintain an exclusive community of serious investors. You'll hear back from me within 3-5 business days.
              </p>
              <div className="pt-8">
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 h-12 rounded-full"
                >
                  Return to Home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary">
              Exclusive Opportunity
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Apply to Join the <span className="text-secondary">Mastermind</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              We're selective about who joins our community. This application helps us ensure you're the right fit and that you have the resources to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Lock className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Exclusive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">
                  We carefully vet each member to maintain the quality and integrity of our mastermind group.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Qualified Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">
                  All members have demonstrated investment capital and are committed to their real estate journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Personal Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">
                  I personally review every application to ensure the best fit for our community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <Card className="border-none shadow-xl">
            <CardHeader className="border-b bg-primary/5">
              <CardTitle className="text-2xl">Application Form</CardTitle>
              <CardDescription>
                Please answer all questions thoroughly. This helps me understand your background and goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {error}
                  </div>
                )}

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-bold text-primary">Contact Information</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Investment Background */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-heading text-lg font-bold text-primary">Investment Background</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How many properties/investments do you currently own?
                    </label>
                    <input
                      type="text"
                      name="currentInvestments"
                      value={formData.currentInvestments}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="e.g., None, 1, 2-3, 4-5, 6+, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What is your available investment capital?
                    </label>
                    <input
                      type="text"
                      name="investmentCapital"
                      value={formData.investmentCapital}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="e.g., Under $25k, $25k-$50k, $50k-$100k, $100k-$250k, $250k+, etc."
                    />
                  </div>
                </div>

                {/* Coaching Interests */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-heading text-lg font-bold text-primary">What are you most looking for in a coaching program?</h3>
                  <p className="text-sm text-foreground/70">Select all that apply</p>

                  <div className="space-y-3">
                    {[
                      "Personalized one-on-one coaching and accountability",
                      "Access to a community of like-minded investors",
                      "Specific strategies (Airbnb arbitrage, seller financing, etc.)",
                      "Deal sourcing and partnership opportunities",
                      "Tax optimization and financial planning guidance",
                      "Scaling from single properties to a portfolio",
                      "Passive income generation strategies",
                      "Networking with experienced real estate professionals",
                      "Templates, checklists, and operational systems",
                      "Ongoing support and mentorship",
                    ].map((need) => (
                      <label key={need} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          value={need}
                          checked={formData.coachingNeeds.includes(need)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary/50"
                        />
                        <span className="text-sm text-foreground">{need}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Goals & Motivation */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-heading text-lg font-bold text-primary">Goals & Motivation</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What are your real estate investment goals?
                    </label>
                    <textarea
                      name="investmentGoals"
                      value={formData.investmentGoals}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 min-h-24"
                      placeholder="E.g., Build a portfolio of 10 rental properties, generate $10k/month passive income, retire in 5 years, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Why do you want to join the Mastermind?
                    </label>
                    <textarea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 min-h-24"
                      placeholder="What specific challenges are you facing? What do you hope to gain from the community?"
                    />
                  </div>
                </div>

                {/* Experience & Commitment */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-heading text-lg font-bold text-primary">Experience & Commitment</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What's your real estate experience level?
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="e.g., Beginner, Intermediate, Advanced, Expert, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How much time can you commit to the mastermind weekly?
                    </label>
                    <input
                      type="text"
                      name="timeCommitment"
                      value={formData.timeCommitment}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="e.g., 1-2 hours, 2-5 hours, 5-10 hours, 10+ hours, etc."
                    />
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900 pt-6 border-t">
                  By submitting this application, you agree that I may contact you to discuss your fit for the mastermind group.
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 h-12 rounded-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
