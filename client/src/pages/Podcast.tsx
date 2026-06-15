import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface Episode {
  id: string;
  title: string;
  guest: string;
  date: string;
  description: string;
  image?: string;
}

const podcastEpisodes: Episode[] = [
  {
    id: 'cody-davis-200-rental-units',
    title: 'From Zero to 200+ Rental Units',
    guest: 'Cody Davis',
    date: 'June 15, 2026',
    description: 'By the time Cody Davis was 23 years old, he had built a portfolio of over 200 rental units. He started at 19 with no money — just cold calls and a willingness to figure out creative financing.',
  },
];

export default function Podcast() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await fetch('https://formspree.io/f/mgoygqqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        toast.success('You\'re on the list! Watch for updates about new episodes.');
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
      {/* Navigation Header */}
      <div className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            className="text-amber-400 hover:text-amber-300 hover:bg-slate-800"
            onClick={() => setLocation('/')}
          >
            ← Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/50">
              <span className="text-amber-400 font-semibold text-sm">🎙️ LIVE NOW</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ordinary Millionaire Podcast
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Learn from real estate experts, business owners, and entrepreneurs who've built multiple income streams. Discover strategies, hear their stories, and get actionable insights you can implement immediately.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://open.spotify.com/show/1vJHRnpmKxo0H4v10zUvqo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8"
                >
                  Listen on Spotify
                </Button>
              </a>
              <a 
                href="https://podcasts.apple.com/us/podcast/the-ordinary-millionaire/id1885938813" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold text-lg px-8"
                >
                  Apple Podcasts
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Episodes</h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Deep-dive conversations with entrepreneurs and real estate investors building wealth through proven strategies.
          </p>

          {/* Episodes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {podcastEpisodes.map((episode) => (
              <div 
                key={episode.id}
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition group cursor-pointer"
                onClick={() => setLocation(`/podcast/${episode.id}`)}
              >
                {/* Episode Image Placeholder */}
                <div className="bg-gradient-to-br from-amber-600/20 to-slate-800 h-48 flex items-center justify-center group-hover:from-amber-600/30 transition">
                  <div className="text-6xl">🎙️</div>
                </div>

                {/* Episode Info */}
                <div className="p-6">
                  <p className="text-amber-400 text-sm font-semibold mb-2">{episode.date}</p>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition">
                    {episode.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Guest: <span className="text-amber-400 font-semibold">{episode.guest}</span>
                  </p>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                    {episode.description}
                  </p>
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/podcast/${episode.id}`);
                    }}
                  >
                    Listen to Episode
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center">
            <p className="text-slate-300 text-lg">
              More episodes coming soon! New episodes every week.
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="email-section" className="py-16 md:py-24 bg-gradient-to-br from-amber-900/20 via-slate-900 to-slate-900 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Get Notified of New Episodes</h2>
          <p className="text-xl text-slate-300 text-center mb-8">
            Subscribe to get notified when new episodes drop. New episodes every week.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 py-3"
              disabled={isLoading}
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg py-3"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Notify Me of New Episodes'}
            </Button>
          </form>

          <p className="text-sm text-slate-500 text-center mt-4">
            We respect your privacy. Unsubscribe anytime. No spam, just podcast updates.
          </p>
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
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-500/50 transition">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Real Estate Strategies</h3>
              <p className="text-slate-400">
                Deep dives into long-term rentals, Airbnb arbitrage, seller financing, 1031 exchanges, and other proven wealth-building strategies in real estate.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-500/50 transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Business Diversification</h3>
              <p className="text-slate-400">
                Learn from entrepreneurs who've built multiple businesses: property management companies, Airbnb management services, car washes, laundromats, and more.
              </p>
            </div>

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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Wealth?</h2>
          <p className="text-xl text-slate-300 mb-8">
            The podcast is just the beginning. Join The Ordinary Millionaire Community program and start building your real estate portfolio with proven strategies from successful investors.
          </p>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-12"
            onClick={() => setLocation('/coaching')}
          >
            Learn About The Ordinary Millionaire Community
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">How often do episodes release?</h3>
              <p className="text-slate-400 text-lg">
                New episodes release every week with deep-dive conversations with entrepreneurs and real estate investors. Each episode is packed with actionable strategies and insights.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Where can I listen?</h3>
              <p className="text-slate-400 text-lg">
                The podcast is available on all major platforms including Spotify, Apple Podcasts, YouTube, and Buzzsprout. You can find links to all platforms on this page.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Can I suggest a guest?</h3>
              <p className="text-slate-400 text-lg">
                Absolutely! We're always looking for interesting entrepreneurs and investors to feature. If you know someone with a great story, reach out to us on Instagram @matthewvarga.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Is this just about real estate?</h3>
              <p className="text-slate-400 text-lg">
                While real estate is a core focus, we also feature entrepreneurs from other industries like property management, Airbnb management, car washes, laundromats, renovations, and more. The common thread is building wealth and achieving financial freedom.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">How does this relate to The Ordinary Millionaire Community?</h3>
              <p className="text-slate-400 text-lg">
                The podcast complements The Ordinary Millionaire Community program by providing diverse perspectives and strategies from successful entrepreneurs. It's a way to learn from multiple experts and get inspired by different paths to financial freedom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
