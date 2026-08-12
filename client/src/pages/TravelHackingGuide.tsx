import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "./TravelHackingGuide.css";

export default function TravelHackingGuide() {
  const handleCTA = () => {
    window.location.href = "https://matthewvarga.gumroad.com/l/travelhackingguidebook?wanted=true";
  };

  // Exact original canonical assets uploaded to the active WebDev asset host
  const logoUrl = "/manus-storage/compass_logo_117ee988.png";
  const heroFirstClassUrl = "/manus-storage/hero_firstclass_8d677a0d.jpg";
  const hotelSuiteUrl = "/manus-storage/hero_hotel_suite_7932d134.jpg";
  const familyTravelUrl = "/manus-storage/hero_family_travel_7786a691.jpg";
  const guideMockupUrl = "/manus-storage/guide_mockup_9803c0fb.jpg";

  return (
    <div className="travel-hacking-page min-h-screen bg-[#1a1a1a] text-[#fafaf7]">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#333]">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Travel Hacking Logo" className="w-8 h-8 object-contain" />
            <span className="font-playfair text-lg font-bold text-[#fafaf7]">Travel Hacking</span>
          </div>
          <button onClick={handleCTA} className="text-sm font-montserrat font-600 text-[#e0c87a] hover:text-[#f0e0a0] transition-colors">
            Buy Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero-section relative"
        style={{
          backgroundImage: `url(${heroFirstClassUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[rgba(26,26,26,0.85)] to-transparent z-5" />
        <div className="container relative z-10 py-20 mt-20">
          <div className="hero-content">
            <div className="pre-headline">Stop Paying Retail</div>
            <h1 className="hero-headline">
              Learn How to Book $10,000 First-Class Flights and Luxury Suites for Pennies on the Dollar
            </h1>
            <p className="hero-subheadline">
              The exact step-by-step system ordinary families use to unlock elite travel, without spending hours searching or opening dozens of credit cards.
            </p>
            <div className="flex flex-col gap-4">
              <button onClick={handleCTA} className="cta-button w-fit">
                Get the 2026 Guide Now - Only $12.99
              </button>
              <div className="flex items-center gap-4 mt-4">
                <div className="relative inline-block">
                  <p className="text-2xl font-bold text-[#fafaf7]">$39.99</p>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <line x1="0" y1="15" x2="100" y2="15" stroke="#cc3333" strokeWidth="2" />
                  </svg>
                </div>
                <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-sm">
                  SAVE 67%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-[#fafaf7] text-[#1a1a1a]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="gold-accent-bar" />
              <h2 className="section-headline">
                You're leaving thousands of dollars on the table every time you fly.
              </h2>
              <p className="mb-4 text-lg">
                Let's be honest. When you see someone sipping champagne in a lie-flat first-class seat, or posting photos from an overwater bungalow in the Maldives, you probably think:
              </p>
              <p className="mb-6 text-lg italic text-[#c89a49]">
                "They must be rich."
              </p>
              <p className="mb-6 text-lg">
                But here's the truth: They aren't paying cash for those experiences. They are using points.
              </p>
              <p className="mb-6 text-lg font-semibold">
                The problem? The points game is rigged against beginners.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-[#c89a49] mr-3 font-bold">•</span>
                  <span>Hoarding points that devalue every year.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c89a49] mr-3 font-bold">•</span>
                  <span>Getting rejected for the best cards because you don't know the hidden rules (like Chase's 5/24).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c89a49] mr-3 font-bold">•</span>
                  <span>Transferring points to the wrong airline and losing half their value.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c89a49] mr-3 font-bold">•</span>
                  <span>Spending hours searching for award flights that don't exist.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg font-semibold">
                It's exhausting. And it's exactly what the banks want you to do.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e0c87a]/10 to-transparent rounded-lg" />
              <img
                src={hotelSuiteUrl}
                alt="Luxury overwater bungalow"
                className="rounded-lg shadow-2xl transform -rotate-3 border-8 border-[#1a1a1a] relative z-10 max-h-[450px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-[#1a1a1a]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e0c87a]/10 to-transparent rounded-lg" />
              <img
                src={familyTravelUrl}
                alt="Family traveling in Europe"
                className="rounded-lg shadow-2xl transform rotate-2 border-8 border-[#252520] relative z-10 max-h-[450px] object-cover w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="gold-accent-bar" />
              <h2 className="section-headline text-[#fafaf7]">
                What if you had the cheat code to the entire system?
              </h2>
              <p className="mb-6 text-lg text-[#fafaf7]">
                Introducing the <strong>Travel Hacking Guide 2026</strong>.
              </p>
              <p className="mb-8 text-lg text-[#fafaf7]">
                This isn't just a list of credit cards. It's a complete, engineered system that teaches you how to legally hack the travel industry. We've distilled years of trial and error into a proven roadmap that anyone can follow.
              </p>
              <h3 className="mb-6">Here is exactly what you will learn how to do:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#e0c87a] mr-3 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-[#fafaf7] block">Fly First Class for Economy Prices</strong>
                    <span className="text-[#aaa]">Discover the exact transfer partners and booking portals to turn everyday spending into luxury flights.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#e0c87a] mr-3 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-[#fafaf7] block">Unlock Free Hotel Stays</strong>
                    <span className="text-[#aaa]">Learn how to leverage the "Fourth Night Free" and companion passes to double your vacation time without doubling your budget.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#e0c87a] mr-3 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-[#fafaf7] block">Build the Perfect Portfolio</strong>
                    <span className="text-[#aaa]">Follow the "Three-Phase Strategy" to get approved for the highest-value cards in the exact right order.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#e0c87a] mr-3 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-[#fafaf7] block">Never Pay Retail Again</strong>
                    <span className="text-[#aaa]">Master the Cents Per Point (CPP) formula so you instantly know if a redemption is a steal or a scam.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="section bg-[#fafaf7] text-[#1a1a1a]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-accent-bar" />
            <h2 className="section-headline text-center mb-12">
              Everything you need to master luxury travel.
            </h2>

            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e0c87a]/20 to-transparent rounded-lg transform -rotate-1" />
                <img
                  src={guideMockupUrl}
                  alt="Travel Hacking Guide 2026"
                  className="w-56 h-auto rounded-lg shadow-2xl transform rotate-1 relative z-10 border-4 border-[#1a1a1a]"
                />
              </div>
            </div>

            <div className="space-y-3 mb-12">
              <div className="value-stack-card">
                <h4 className="text-lg mb-2">The Complete 160-Page Master Guide</h4>
                <p className="text-sm text-[#c89a49] font-semibold">Value: $39.99</p>
              </div>
              <div className="value-stack-card">
                <h4 className="text-lg mb-2">The Step-by-Step Card Application Sequence</h4>
                <p className="text-sm text-[#c89a49] font-semibold">Value: $19.99</p>
              </div>
              <div className="value-stack-card">
                <h4 className="text-lg mb-2">The Cents-Per-Point Calculator Formula</h4>
                <p className="text-sm text-[#c89a49] font-semibold">Value: $9.99</p>
              </div>
              <div className="value-stack-card">
                <h4 className="text-lg mb-2">Exclusive Canadian Reader Strategies</h4>
                <p className="text-sm text-[#c89a49] font-semibold">Value: $14.99</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg text-center text-[#fafaf7] mb-12">
              <p className="text-[#aaa] mb-2">Total Value</p>
              <p className="text-2xl text-[#fafaf7] font-bold mb-6">$84.96</p>
              <p className="text-[#aaa] mb-2">Normal Price: $39.99</p>
              <p className="text-[#aaa] mb-6">Your Price Today:</p>
              <div className="price-highlight mb-8 text-[#e0c87a]">$12.99</div>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="relative inline-block">
                  <p className="text-2xl font-bold text-[#fafaf7]">$39.99</p>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <line x1="0" y1="15" x2="100" y2="15" stroke="#cc3333" strokeWidth="2" />
                  </svg>
                </div>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  SAVE 67%
                </div>
              </div>
              <button onClick={handleCTA} className="cta-button w-full">
                Unlock the System for $12.99
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Preview Section */}
      <section className="section bg-[#1a1a1a]">
        <div className="container">
          <div className="gold-accent-bar" />
          <h2 className="section-headline text-[#fafaf7] text-center mb-12">
            Built for the moment you are ready to stop guessing.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="testimonial-card">
              <p className="font-montserrat text-xs font-bold tracking-[0.16em] text-[#e0c87a] uppercase mb-4">The Strategy</p>
              <h3 className="text-[#fafaf7] text-xl mb-3">A clear sequence, not a stack of random cards.</h3>
              <p className="testimonial-text">
                Learn where to start, how the Chase 5/24 rule affects your order, and how to build a useful points portfolio without creating avoidable roadblocks.
              </p>
            </div>
            <div className="testimonial-card">
              <p className="font-montserrat text-xs font-bold tracking-[0.16em] text-[#e0c87a] uppercase mb-4">The Tools</p>
              <h3 className="text-[#fafaf7] text-xl mb-3">Know where to search before you transfer a single point.</h3>
              <p className="testimonial-text">
                Use the linked loyalty programs, award-search platforms, shopping portals, dining programs, and booking resources included throughout the guide.
              </p>
            </div>
            <div className="testimonial-card">
              <p className="font-montserrat text-xs font-bold tracking-[0.16em] text-[#e0c87a] uppercase mb-4">The Redemptions</p>
              <h3 className="text-[#fafaf7] text-xl mb-3">Turn point balances into real travel decisions.</h3>
              <p className="testimonial-text">
                See practical examples covering premium cabins, hotel programs, family trips, Cents Per Point value, and the decisions behind a high-value redemption.
              </p>
            </div>
          </div>

          <div className="guarantee-box">
            <h3 className="mb-4">The "No-Brainer" Guarantee</h3>
            <p>
              If you don't save at least 10x the cost of this guide on your next trip, I'll refund every penny. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-r from-[#1a1a1a] to-[#252520]">
        <div className="container text-center">
          <h2 className="section-headline text-[#fafaf7] mb-6">
            The airlines are devaluing points every day.
          </h2>
          <p className="text-lg text-[#fafaf7] mb-8 max-w-2xl mx-auto">
            Every month you wait is another month of everyday spending that could have been earning you a free luxury vacation. The rules change fast, and this 2026 edition has the latest strategies working <em>right now</em>.
          </p>
          <p className="text-xl text-[#e0c87a] font-bold mb-8">
            Stop paying retail. Start traveling like an insider.
          </p>
          <button onClick={handleCTA} className="cta-button mb-4">
            Get Instant Access Now - $12.99
          </button>
          <p className="text-muted">
            Secure Checkout | Instant PDF Download
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] border-t border-[#333] py-8">
        <div className="container text-center text-muted">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logoUrl} alt="Travel Hacking Logo" className="w-6 h-6 object-contain" />
            <span className="font-playfair font-bold text-[#e0c87a]">Travel Hacking Guide 2026</span>
          </div>
          <p>© 2026 Travel Hacking Guide by Matthew Varga. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="https://www.matthewvarga.com" className="text-[#e0c87a] hover:underline">
              Visit Matthew Varga
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
