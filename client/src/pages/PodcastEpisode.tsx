import React, { useEffect } from 'react';
import { useLocation, useRoute } from 'wouter';
import { Button } from '@/components/ui/button';

interface Episode {
  id: string;
  title: string;
  guest: string;
  guestHandle: string;
  guestLink: string;
  date: string;
  description: string;
  fullDescription: string;
  timestamps: Array<{ time: string; title: string }>;
  keyQuotes: string[];
  buzzsproutUrl: string;
  youtubeUrl: string;
  spotifyUrl: string;
  applePodcastsUrl: string;
}

const episodes: Record<string, Episode> = {
  'cody-davis-200-rental-units': {
    id: 'cody-davis-200-rental-units',
    title: 'From Zero to 200+ Rental Units',
    guest: 'Cody Davis',
    guestHandle: '@doingcodythings',
    guestLink: 'https://www.instagram.com/doingcodythings/',
    date: 'June 15, 2026',
    description: 'By the time Cody Davis was 23 years old, he had built a portfolio of over 200 rental units. He started at 19 with no money — just cold calls and a willingness to figure out creative financing.',
    fullDescription: `By the time Cody Davis was 23 years old, he had built a portfolio of over 200 rental units. He started at 19 with no money — just cold calls and a willingness to figure out creative financing.

In this episode, Cody breaks down exactly how he scaled that fast: the financing strategies that made it possible, how he thinks about the numbers on every deal, and why he eventually took property management fully in-house.

Whether you're trying to buy your first property or scale to your first 50 units, this conversation will change how you think about what's actually possible.`,
    timestamps: [
      { time: '00:00', title: 'Cody\'s story: 19 years old and starting from scratch' },
      { time: '09:52', title: 'Creative financing strategies (no big down payment required)' },
      { time: '19:52', title: 'Building a sustainable multi-family portfolio' },
      { time: '29:35', title: 'Cold calling and landing his first deals' },
      { time: '35:07', title: 'How to analyze a deal using the numbers' },
      { time: '41:40', title: 'Teaching his kids about money and wealth building' },
      { time: '48:57', title: 'Why he brought property management in-house' },
      { time: '54:24', title: 'Advice for new investors who feel stuck' },
    ],
    keyQuotes: [
      '"Numbers don\'t lie, people do."',
      '"Make it simple, make it repeatable."',
      '"Buy the stuff that moves you forward."',
    ],
    buzzsproutUrl: 'https://www.buzzsprout.com/2603590/episodes/18863733',
    youtubeUrl: 'https://youtu.be/HPyZLh6kdB4',
    spotifyUrl: 'https://open.spotify.com/show/1vJHRnpmKxo0H4v10zUvqo',
    applePodcastsUrl: 'https://podcasts.apple.com/us/podcast/the-ordinary-millionaire/id1885938813',
  },
};

export default function PodcastEpisode() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute('/podcast/:episodeId');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.episodeId]);

  if (!match || !params?.episodeId) {
    return <div>Episode not found</div>;
  }

  const episode = episodes[params.episodeId];

  if (!episode) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Episode Not Found</h1>
          <Button 
            onClick={() => setLocation('/podcast')}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
          >
            Back to Podcast
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="bg-black border-b border-yellow-600/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            className="text-yellow-400 hover:text-yellow-300 hover:bg-slate-900"
            onClick={() => setLocation('/podcast')}
          >
            ← Back to Episodes
          </Button>
        </div>
      </div>

      {/* Episode Header */}
      <section className="bg-gradient-to-br from-black via-slate-950 to-black text-white py-16 md:py-24 border-b border-yellow-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-yellow-400 font-semibold text-sm mb-4">{episode.date}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {episode.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {episode.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                  Listen on Spotify
                </Button>
              </a>
              <a href={episode.applePodcastsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-bold">
                  Apple Podcasts
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="md:col-span-2">
              {/* Video Player */}
              <div className="bg-slate-950 rounded-lg overflow-hidden border border-yellow-600/20 mb-12">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/HPyZLh6kdB4"
                    title={episode.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">About This Episode</h2>
                <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                  {episode.fullDescription}
                </p>
              </div>

              {/* Timestamps */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">⏱️ Timestamps</h2>
                <div className="bg-slate-950 border border-yellow-600/20 rounded-lg p-6 space-y-3">
                  {episode.timestamps.map((ts, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="text-yellow-400 font-bold min-w-fit">{ts.time}</span>
                      <span className="text-slate-300">{ts.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Quotes */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">🔑 Key Quotes</h2>
                <div className="space-y-4">
                  {episode.keyQuotes.map((quote, idx) => (
                    <div key={idx} className="bg-slate-950 border-l-4 border-yellow-500 rounded-lg p-6">
                      <p className="text-slate-300 text-lg italic">
                        {quote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Guest Info */}
              <div className="bg-slate-950 border border-yellow-600/20 rounded-lg p-6 mb-6 sticky top-24">
                <h3 className="text-sm text-slate-400 font-semibold mb-3 uppercase">Guest</h3>
                <a 
                  href={episode.guestLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 font-bold text-xl block mb-4"
                >
                  {episode.guest}
                </a>
                <a 
                  href={episode.guestLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-300 text-sm"
                >
                  {episode.guestHandle}
                </a>
              </div>

              {/* Listen Buttons */}
              <div className="space-y-3 mb-6">
                <a href={episode.buzzsproutUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    Listen on Buzzsprout
                  </Button>
                </a>
                <a href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-bold">
                    Watch on YouTube
                  </Button>
                </a>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-yellow-900/20 to-slate-950 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Ready to Build?</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Join The Ordinary Millionaire Community and start your wealth-building journey.
                </p>
                <Button 
                  onClick={() => setLocation('/coaching')}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
