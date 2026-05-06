import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, TrendingUp, Award } from "lucide-react";
import Layout from "@/components/Layout";

export default function BookConsultation() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const calendlyUrl = "https://calendly.com/matthew-p-varga/15-minute-coaching-introduction";
  const teachableUrl = "https://matthew-varga-real-estate.teachable.com/p/matthew-varga-one-on-one-coaching-call";

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Learn About the Program",
      description: "Get an overview of the The Ordinary Millionaire Community mastermind and how it can help you achieve financial freedom."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "15-Minute Call",
      description: "Quick, focused conversation to understand your goals and determine if the program is right for you."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Ask Questions",
      description: "Get answers to any questions about the mastermind, coaching approach, and community."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "No Pressure",
      description: "This is a low-pressure conversation to see if we're a good fit for working together."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight mb-6">
              Schedule Your <span className="text-secondary">Free Consultation</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Interested in learning more about the The Ordinary Millionaire Community mastermind program? Schedule a free 15-minute consultation call with me to discuss your goals and see if the program is right for you.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30"
              onClick={() => window.open(calendlyUrl, '_blank')}
            >
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
              What We'll Discuss
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              During your free 15-minute consultation, we'll explore your real estate goals and discuss whether the The Ordinary Millionaire Community mastermind is the right fit for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className="h-1 bg-secondary w-full"></div>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Details Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-12 text-center">
              Consultation Overview
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Duration</h3>
                  <p className="text-primary-foreground/90">
                    15-minute phone or video call scheduled at a time that works for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What We'll Cover</h3>
                  <p className="text-primary-foreground/90">
                    Your real estate goals, current situation, what you're looking to achieve, and how the The Ordinary Millionaire Community mastermind program can help you get there.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How to Book</h3>
                  <p className="text-primary-foreground/90">
                    Click the button below to schedule your free consultation on Calendly. Select a time that works for you and you'll receive a confirmation with the call details.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cost</h3>
                  <p className="text-primary-foreground/90">
                    Completely free! This is a no-obligation consultation to see if we're a good fit for working together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-12 text-center">
              Is This For You?
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary font-bold text-sm">✓</div>
                </div>
                <div>
                  <p className="text-lg text-foreground/90">
                    You're curious about the The Ordinary Millionaire Community mastermind program and want to learn more before committing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary font-bold text-sm">✓</div>
                </div>
                <div>
                  <p className="text-lg text-foreground/90">
                    You want to ask questions and understand if the program is the right fit for your goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary font-bold text-sm">✓</div>
                </div>
                <div>
                  <p className="text-lg text-foreground/90">
                    You're interested in real estate investing and want to explore a structured path to financial freedom.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary font-bold text-sm">✓</div>
                </div>
                <div>
                  <p className="text-lg text-foreground/90">
                    You prefer a no-pressure conversation to explore if joining the community is right for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Schedule your free 15-minute consultation today. No obligation, just a genuine conversation about your goals.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30"
              onClick={() => window.open(calendlyUrl, '_blank')}
            >
              Schedule Your Free Consultation
            </Button>
            <p className="text-sm text-primary-foreground/70 mt-6">
              Free 15-minute call • Flexible scheduling • No pressure
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
