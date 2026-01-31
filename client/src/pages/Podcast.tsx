import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function Podcast() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Auto-scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // Send to Flodesk
      const response = await fetch('https://api.flodesk.com/v1/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer fd_key_aef239100efa4a49a66ebe1c98336e1d.lAF82p96yj5UpVfZNBW55rv65S42GDNsufV6rVleKWUPxDFESLzr16Ild4Gl1XSb4qRL8Z1u34ffTZjCGFbwHywyhPL2hm4kctUhkDoI8vGenOwTcPITXhJ3s9nnhSLRjeO5TXq6PNq5f7oU7mBsFsu1UJiTxxSwHFzzjxOTtOs3ZoOUcDty8BiZgZmfwZAN`,
        },
        body: JSON.stringify({
          email: email,
          fields: {
            name: 'Podcast Subscriber',
          },
        }),
      });

      if (response.ok) {
        toast.success('You\'re on the list! Watch for updates about the podcast launch.');
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/50">
              <span className="text-amber-400 font-semibold text-sm">Coming 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Real Estate & Business Builders Podcast
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Learn from real estate experts, business owners, and entrepreneurs who've built multiple income streams. Discover strategies, hear their stories, and get actionable insights you can implement immediately.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8"
              >
                Notify Me When Live
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold text-lg px-8"
                onClick={() => {
                  const faqSection = document.getElementById('faq-section');
                  if (faqSection) {
                    faqSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">What to Expect</h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Each episode features in-depth conversations with successful entrepreneurs and real estate investors who share their journeys, strategies, and lessons learned.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-500/50 transition">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Real Estate Strategies</h3>
              <p className="text-slate-400">
                Deep dives into long-term rentals, Airbnb arbitrage, seller financing, 1031 exchanges, and other proven wealth-building strategies in real estate.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-500/50 transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Business Diversification</h3>
              <p className="text-slate-400">
                Learn from entrepreneurs who've built multiple businesses: property management companies, Airbnb management services, car washes, laundromats, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-500/50 transition">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Real Stories & Lessons</h3>
              <p className="text-slate-400">
                Hear authentic stories about failures, breakthroughs, and the strategies that led to financial freedom. Get actionable insights you can apply immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Types Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">Who You'll Hear From</h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            A diverse mix of entrepreneurs and investors building wealth through real estate and business ownership.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏠</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Real Estate Investors</h3>
                <p className="text-slate-400">Experts in rentals, Airbnb, flipping, and portfolio scaling</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🏢</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Property Management Pros</h3>
                <p className="text-slate-400">Building scalable property management businesses</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🚗</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Service Business Owners</h3>
                <p className="text-slate-400">Car washes, laundromats, and other passive income ventures</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🔨</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Renovation & Construction</h3>
                <p className="text-slate-400">Experts in flips, renovations, and construction businesses</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Tech & Digital Entrepreneurs</h3>
                <p className="text-slate-400">Building online businesses and digital assets</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Innovative Thinkers</h3>
                <p className="text-slate-400">Unique business models and unconventional strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-900/20 via-slate-900 to-slate-900 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Be the First to Know</h2>
          <p className="text-xl text-slate-300 text-center mb-8">
            Get notified the moment the podcast launches and receive exclusive updates about upcoming episodes and guests.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-3"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg py-3"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Notify Me When Live'}
            </Button>
          </form>

          <p className="text-sm text-slate-500 text-center mt-4">
            We respect your privacy. Unsubscribe anytime. No spam, just podcast updates.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">When does the podcast launch?</h3>
              <p className="text-slate-400 text-lg">
                The podcast is launching in 2026. Sign up above to get notified the moment the first episode goes live. You'll be among the first to hear from our featured guests.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">How often will episodes release?</h3>
              <p className="text-slate-400 text-lg">
                We're planning weekly episodes with deep-dive conversations with entrepreneurs and real estate investors. Each episode will be packed with actionable strategies and insights.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Where can I listen?</h3>
              <p className="text-slate-400 text-lg">
                The podcast will be available on all major platforms including Spotify, Apple Podcasts, Google Podcasts, and more. You'll get the links as soon as we launch.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Can I suggest a guest?</h3>
              <p className="text-slate-400 text-lg">
                Absolutely! We're always looking for interesting entrepreneurs and investors to feature. If you know someone with a great story, reach out and let us know.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Is this just about real estate?</h3>
              <p className="text-slate-400 text-lg">
                No! While real estate is a core focus, we also feature entrepreneurs from other industries like property management, Airbnb management, car washes, laundromats, renovations, and more. The common thread is building wealth and achieving financial freedom.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">How does this relate to the Retire with Rentals program?</h3>
              <p className="text-slate-400 text-lg">
                The podcast complements the Retire with Rentals program by providing diverse perspectives and strategies from successful entrepreneurs. It's a way to learn from multiple experts and get inspired by different paths to financial freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Wealth?</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            While you wait for the podcast, join the Retire with Rentals program and start building your real estate portfolio today.
          </p>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8"
            onClick={() => setLocation('/coaching')}
          >
            Learn About Retire with Rentals
          </Button>
        </div>
      </section>
    </div>
  );
}
