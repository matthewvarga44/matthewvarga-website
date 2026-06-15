import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

interface Episode {
  id: string;
  title: string;
  guest: string;
  date: string;
  description: string;
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-slate-950 to-black text-white py-20 md:py-32 border-b border-yellow-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-yellow-500 font-semibold text-sm mb-4 uppercase tracking-wider">The Ordinary Millionaire Podcast</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Real Stories. Real Numbers. Real Possibilities.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Join Matthew Varga as he interviews everyday people who've built extraordinary wealth through real estate and smart investing. Learn the strategies, mindsets, and decisions that made them millionaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://open.spotify.com/show/1vJHRnpmKxo0H4v10zUvqo" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 text-lg">
                  Listen on Spotify
                </Button>
              </a>
              <a href="https://podcasts.apple.com/us/podcast/the-ordinary-millionaire/id1885938813" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-bold px-8 py-6 text-lg">
                  Apple Podcasts
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Episodes</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded"></div>
          </div>

          {/* Episodes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcastEpisodes.map((episode) => (
              <div
                key={episode.id}
                className="group bg-slate-950 border border-yellow-600/20 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 cursor-pointer"
                onClick={() => setLocation(`/podcast/${episode.id}`)}
              >
                {/* Episode Card */}
                <div className="p-6 h-full flex flex-col">
                  {/* Date */}
                  <p className="text-yellow-400 text-sm font-semibold mb-3">{episode.date}</p>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {episode.title}
                  </h3>

                  {/* Guest */}
                  <p className="text-slate-400 text-sm mb-4">with {episode.guest}</p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {episode.description}
                  </p>

                  {/* Listen Button */}
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/podcast/${episode.id}`);
                    }}
                  >
                    Listen & Read Show Notes
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          {podcastEpisodes.length === 1 && (
            <div className="mt-16 text-center">
              <p className="text-slate-400 text-lg mb-4">More episodes coming soon...</p>
              <p className="text-slate-500 text-sm">New episodes released every week</p>
            </div>
          )}
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-slate-950 to-black border-t border-yellow-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Get notified when new episodes drop, plus exclusive insights and resources.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
