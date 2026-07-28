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
  'ryan-leake-10m-airbnb': {
    id: 'ryan-leake-10m-airbnb',
    title: 'From Zero to $10M in 2 Years: How Ryan Leake Built an Airbnb Management Empire',
    guest: 'Ryan Leake',
    guestHandle: '@itsaleak',
    guestLink: 'https://www.instagram.com/itsaleak/',
    date: 'July 28, 2026',
    description: 'Ryan Leake had never managed a single Airbnb when he took an online course and got his first client 14 days later. Two years later, he and his partners manage 70 luxury short-term rentals across Austin and San Antonio with $10 million in gross revenue.',
    fullDescription: `Ryan Leake had never managed a single Airbnb when he took an online course and got his first client 14 days later. Two years after that, he and his partners manage 70 luxury short-term rentals across Austin and San Antonio with roughly $10 million in gross revenue and a team of 17 people.

In this episode, Ryan gives a complete roadmap — from how to land your first client with zero experience (including the box of cookies that got him his), to what the financial breakdown actually looks like at scale, to how he's now using ChatGPT and Claude to generate inbound leads without spending a dollar on ads.

Whether you're thinking about getting into Airbnb management, already running properties, or just want to understand how to build a service business from scratch, this one is loaded.`,
    timestamps: [
      { time: '00:00', title: 'How Ryan got his first client in 14 days (no experience, no portfolio)' },
      { time: '05:30', title: 'The box of cookies that landed his first deal' },
      { time: '12:15', title: 'The two strategies that took him from 0 to 10 properties in 10 months' },
      { time: '18:45', title: 'Why Google My Business was his #1 growth tool' },
      { time: '25:00', title: 'How AI tools like ChatGPT and Claude are now sending him leads for free' },
      { time: '35:20', title: 'The full financial breakdown: $10M gross, 18% average fee, ~$1M EBITDA' },
      { time: '42:30', title: 'How strategic mergers helped him scale faster than organic growth' },
      { time: '50:15', title: 'His complete tech stack for managing 70 properties' },
      { time: '56:00', title: 'The pool ROI math: why he\'s added pools at 10 properties and counting' },
    ],
    keyQuotes: [
      '"Focus on massive income before passive income."',
      '"The box of cookies was worth more than any marketing campaign."',
      '"AI is now our best lead generation tool — and it costs nothing."',
    ],
    buzzsproutUrl: 'https://www.buzzsprout.com/2603590',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/1vJHRnpmKxo0H4v10zUvqo',
    applePodcastsUrl: 'https://podcasts.apple.com/us/podcast/the-ordinary-millionaire/id1885938813',
  },
  'spencer-ashley-80-properties': {
    id: 'spencer-ashley-80-properties',
    title: 'From Airbnb Investor to Managing 80 Properties — How Spencer & Ashley Built a Business They Can Run From Anywhere',
    guest: 'Spencer & Ashley',
    guestHandle: '@spencerandashley',
    guestLink: 'https://www.instagram.com/spencerandashley/',
    date: 'July 7, 2026',
    description: 'Spencer and Ashley started investing in Airbnb in Niagara because they wanted more than two weeks of vacation a year. Today they manage over 80 properties through their company Travel Lux — all while traveling the world using credit card points.',
    fullDescription: `Spencer and Ashley started investing in Airbnb in Niagara because they wanted more than two weeks of vacation a year. Today they own six short-term rentals, one long-term property, and a management company called Travel Lux with over 80 properties — all while traveling the world using credit card points.

In this episode they break down exactly how they research new markets, what amenities are actually moving the needle in 2026 (including the $80,000 pickleball court that added $10,000 in a single month), how to start a property management business from scratch with no clients, and how they've flown Emirates First Class and stayed at the St. Regis Maldives for a fraction of the cash cost.

If you're thinking about getting into short-term rentals, scaling what you already have, or building a business you can run from anywhere in the world — this one is packed.`,
    timestamps: [
      { time: '00:00', title: 'Introduction & how Spencer & Ashley got started' },
      { time: '03:45', title: 'Their first Airbnb BRRRR: St. Catharines, $310k, beach proximity' },
      { time: '09:35', title: 'Buying in Ellicottville, NY sight unseen during COVID' },
      { time: '11:35', title: 'How to research any Airbnb market in 2026 (AirDNA, BnbCalc, PriceLabs)' },
      { time: '17:30', title: 'What\'s working in Ellicottville today: $200k+ gross revenue properties' },
      { time: '22:00', title: 'What amenities actually drive revenue in 2026' },
      { time: '25:00', title: 'The pickleball court: $80k investment, $10k monthly lift, 20–50% revenue increase' },
      { time: '35:28', title: 'Best markets to invest in right now: Niagara & Kawartha Lakes' },
      { time: '37:45', title: 'Is Airbnb dead? Their answer (with data)' },
      { time: '40:57', title: 'How Travel Lux started (a Kijiji ad) and grew to 80 properties' },
      { time: '45:35', title: 'How to start a co-hosting business from scratch today' },
      { time: '54:00', title: 'What you actually keep from a 20% management fee (80–85% margins)' },
      { time: '1:03:30', title: 'Travel hacking: how it started and the first business class redemption' },
      { time: '1:09:00', title: 'The Emirates "Boomerang": $100k in flights for 300k points' },
      { time: '1:14:30', title: 'Qatar Q Suites and the best Aeroplan redemptions for Canadians' },
    ],
    keyQuotes: [
      '"We can choose anywhere in the world that we work."',
      '"The pickleball court paid for itself in one month."',
      '"Airbnb is not dead — you just have to be smarter about amenities."',
    ],
    buzzsproutUrl: 'https://www.buzzsprout.com/2603590',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/1vJHRnpmKxo0H4v10zUvqo',
    applePodcastsUrl: 'https://podcasts.apple.com/us/podcast/the-ordinary-millionaire/id1885938813',
  },
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
      <section className="py-16 md:py-24 bg-black">
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
