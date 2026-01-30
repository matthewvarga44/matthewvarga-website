import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("SERVICE_ID_PLACEHOLDER");

export default function MastermindApplication() {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    currentInvestments: string;
    investmentCapital: string;
    coachingNeeds: string[];
    investmentGoals: string;
    whyJoin: string;
    experience: string;
    timeCommitment: string;
  }>({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    setIsSubmitting(true);
    setError("");

    try {
      // Format the email content
      const emailContent = `
NEW MASTERMIND APPLICATION

APPLICANT INFORMATION
=====================
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

INVESTMENT BACKGROUND
=====================
Current Properties: ${formData.currentInvestments}
Available Capital: ${formData.investmentCapital}

COACHING PROGRAM INTERESTS
==========================
${formData.coachingNeeds.map((need) => `• ${need}`).join("\n")}

GOALS & MOTIVATION
==================
Investment Goals:
${formData.investmentGoals}

Why Join Mastermind:
${formData.whyJoin}

Experience Level: ${formData.experience}
Time Commitment: ${formData.timeCommitment} per week

---
Submitted at: ${new Date().toLocaleString()}
      `;

      // Send email using EmailJS
      const response = await emailjs.send(
        "SERVICE_ID_PLACEHOLDER",
        "TEMPLATE_ID_PLACEHOLDER",
        {
          to_email: "Matthew.p.varga@gmail.com",
          from_email: formData.email,
          from_name: formData.fullName,
          subject: "Mastermind Application Form",
          message: emailContent,
          reply_to: formData.email,
          coachingNeeds: formData.coachingNeeds.join(", "),
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({
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
                      How many properties do you currently own or have invested in? *
                    </label>
                    <select
                      name="currentInvestments"
                      value={formData.currentInvestments}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      <option value="">Select an option</option>
                      <option value="none">None - I'm just starting</option>
                      <option value="1">1 property</option>
                      <option value="2-3">2-3 properties</option>
                      <option value="4-5">4-5 properties</option>
                      <option value="6plus">6+ properties</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Do you have capital available to invest in real estate? *
                    </label>
                    <select
                      name="investmentCapital"
                      value={formData.investmentCapital}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      <option value="">Select an option</option>
                      <option value="under25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250kplus">$250,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      What are you most looking for in a real estate coaching program? * (Select all that apply)
                    </label>
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
                      ].map((option: string) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={option}
                            checked={formData.coachingNeeds.includes(option)}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary/50"
                          />
                          <span className="text-sm text-foreground">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Goals & Motivation */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-heading text-lg font-bold text-primary">Goals & Motivation</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What are your real estate investment goals? *
                    </label>
                    <textarea
                      name="investmentGoals"
                      value={formData.investmentGoals}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="E.g., Build a portfolio of 10 rental properties, generate $10k/month passive income, retire in 5 years, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Why do you want to join the Mastermind? *
                    </label>
                    <textarea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="What specific challenges are you facing? What do you hope to gain from the community?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What's your real estate experience level? *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      <option value="">Select an option</option>
                      <option value="beginner">Beginner - Just learning</option>
                      <option value="intermediate">Intermediate - Some deals done</option>
                      <option value="advanced">Advanced - Multiple properties</option>
                      <option value="expert">Expert - Scaling operations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How much time can you commit to the mastermind weekly? *
                    </label>
                    <select
                      name="timeCommitment"
                      value={formData.timeCommitment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      <option value="">Select an option</option>
                      <option value="1-2hours">1-2 hours</option>
                      <option value="2-5hours">2-5 hours</option>
                      <option value="5-10hours">5-10 hours</option>
                      <option value="10plus">10+ hours</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t">
                  <p className="text-sm text-foreground/60 mb-6">
                    By submitting this application, you agree that I may contact you to discuss your fit for the mastermind group.
                  </p>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-12 rounded-full"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Setup Instructions */}
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">📧 Email Setup Required</h3>
            <p className="text-sm text-blue-800">
              To enable email delivery of applications, you'll need to set up EmailJS. Visit{" "}
              <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                emailjs.com
              </a>
              , create a free account, and replace the SERVICE_ID_PLACEHOLDER and TEMPLATE_ID_PLACEHOLDER in the code with your actual credentials.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
