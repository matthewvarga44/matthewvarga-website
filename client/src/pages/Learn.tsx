import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

export default function Learn() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-24 md:py-40">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight mb-6">
              Learn Real Estate <span className="text-secondary">Your Way</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Choose your learning path. Whether you're just starting out or ready to scale, I have the perfect course or coaching option to accelerate your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Course 1: Airbnb Wealth Academy */}
      <section className="py-0 md:py-0 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-[500px] overflow-hidden order-2 md:order-1">
            <img 
              src="/images/airbnb-hero.jpg" 
              alt="Airbnb Wealth Academy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-16 order-1 md:order-2 bg-white">
            <div className="max-w-lg">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6">
                Most Popular Course
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Airbnb Wealth Academy
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Master the art of Airbnb arbitrage and build a thriving short-term rental business without owning property. Learn the exact system I used to generate consistent passive income and scale to multiple properties.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Complete Airbnb arbitrage system from A-Z</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Property selection, negotiation & lease strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Pricing optimization & revenue maximization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Guest management & operational systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Scale to multiple properties & passive income</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 group"
                onClick={() => window.open('https://matthew-varga-real-estate.teachable.com/p/airbnb-wealth-academy', '_blank')}
              >
                View Course
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course 2: Retire with Rentals */}
      <section className="py-0 md:py-0 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-[500px] overflow-hidden">
            <img 
              src="/images/retire-rentals-hero.jpg" 
              alt="Retire with Rentals Course"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-16 bg-white">
            <div className="max-w-lg">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6">
                Coming Soon
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Retire with Rentals Course
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Learn the proven buy-and-hold strategy I used to build a $10M+ portfolio and achieve financial freedom in my 30s. This is the long-term wealth-building system that creates generational income.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Buy-and-hold investment strategy fundamentals</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Property analysis, underwriting & due diligence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Financing strategies & leverage optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Tenant management & property operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Build a $10M+ portfolio & achieve financial freedom</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 group"
                onClick={() => window.open('https://matthew-varga-real-estate.teachable.com/p/retire-with-rentals-course', '_blank')}
              >
                View Course
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course 3: One-on-One Coaching */}
      <section className="py-0 md:py-0 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-[500px] overflow-hidden order-2 md:order-1">
            <img 
              src="/images/coaching-hero.jpg" 
              alt="One-on-One Coaching"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-16 order-1 md:order-2 bg-white">
            <div className="max-w-lg">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6">
                Premium Offering
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                One-on-One Coaching Call
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Get personalized guidance from me directly. Perfect for analyzing specific deals, getting feedback on your strategy, or discussing your unique real estate investing situation.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">60-minute personalized coaching session</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Deal analysis & investment feedback</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Custom strategy development for your goals</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Direct access to my expertise & experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Actionable next steps & implementation plan</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 group"
                onClick={() => window.open('https://matthew-varga-real-estate.teachable.com/p/matthew-varga-one-on-one-coaching-call', '_blank')}
              >
                View Coaching
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-10">
              Start with a course to learn the fundamentals, or schedule a free consultation to discuss which option is best for your goals. Ready for the complete experience? Join the Mastermind program for ongoing coaching and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30"
                onClick={() => window.location.href = '/book-consultation'}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 h-14 rounded-full"
                onClick={() => window.location.href = '/apply-mastermind'}
              >
                Learn About Mastermind
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
