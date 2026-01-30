import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Luxury Dark Background */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-40">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background pattern" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary">
              Retire with Rentals
            </div>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl leading-tight">
              Retire with <span className="text-secondary">Rentals</span>. Build Your Legacy.
            </h1>
            <p className="max-w-[600px] text-lg text-primary-foreground/90 md:text-xl leading-relaxed font-light">
              Join 300+ real estate investors in the Retire with Rentals program. Learn the proven strategies I used to build a $10M+ portfolio and achieve financial freedom in my 30s.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 transition-all hover:translate-y-[-2px]" onClick={() => window.open('https://matthew-varga-real-estate.teachable.com/p/matthew-varga-one-on-one-coaching-call', '_blank')}>
                Join Retire with Rentals
              </Button>
              <Link href="/book-consultation">
                <a>
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 h-14 rounded-full">
                    Schedule Consultation
                  </Button>
                </a>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-sm text-primary-foreground/80">
              <div className="space-y-1">
                <p className="font-bold text-secondary">$10M+</p>
                <p className="text-xs uppercase tracking-wide">Real Estate Portfolio</p>
              </div>
              <div className="w-px h-12 bg-secondary/30"></div>
              <div className="space-y-1">
                <p className="font-bold text-secondary">300</p>
                <p className="text-xs uppercase tracking-wide">Program Members</p>
              </div>
              <div className="w-px h-12 bg-secondary/30"></div>
              <div className="space-y-1">
                <p className="font-bold text-secondary">30s</p>
                <p className="text-xs uppercase tracking-wide">Retired & Traveling</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[600px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-4 border-secondary/20">
              {/* Matthew's professional photo */}
              <img 
                src="/images/matthew-hero.jpg" 
                alt="Matthew Varga" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-primary-foreground">
                <p className="font-heading text-3xl font-bold">Matthew Varga</p>
                <p className="text-secondary font-semibold">Real Estate Investor & Coach</p>
                <p className="text-primary-foreground/80 text-sm mt-2">Retired in my 30s • $10M+ Portfolio • Airbnb Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="border-y bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">$10M+</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">Real Estate Owned</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">300+</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">Program Members</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">700K+</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">YouTube Followers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">5 Yrs</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">To Build Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section - My Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-16">
              <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-8">
              From Foreclosure to <span className="text-secondary">Financial Freedom</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <div>
                <h3 className="font-bold text-primary text-xl mb-3">Overcoming Early Challenges</h3>
                <p>
                  My journey began with significant financial struggles. In the 90s, my mom was laid off, and we faced incredibly tough times. Our home was foreclosed on, utilities were shut off, and at one point, we had no hot water. We had to boil water in a kettle just to take a bath. These experiences were painful and humbling, but they ignited a fierce determination in me. I realized the importance of understanding money and vowed to never be in that position again.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-primary text-xl mb-3">Building a Strong Foundation</h3>
                <p>
                  With this newfound drive, I embarked on a career in the financial sector. Over the next decade, I worked in banking, becoming a Certified Financial Planner, Mortgage Broker, and Real Estate Agent. Each role provided valuable insights, but my true passion was real estate. Over the past ten years, I invested in properties and built a portfolio of 14 units worth $10 million—a journey of learning, growth, and perseverance.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-primary text-xl mb-3">Reaching Financial Independence</h3>
                <p>
                  Retiring in my 30s as a multi-millionaire was a dream come true. It wasn't just about the money; it was about the freedom to live life on my own terms. That's when I discovered the potential of Airbnb. In less than a year, I built an Airbnb business that brought in multiple six figures, proving that with the right approach, anyone can achieve similar success.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-primary text-xl mb-3">Embracing Life's Adventures</h3>
                <p>
                  Financial freedom opened up a world of possibilities. I quit my job twice to backpack around the world, exploring more than 40 countries. I've run with the bulls in Spain, scuba dived with sharks, flown in a Red Bull stunt plane, skydived, and climbed mountains. These adventures have reinforced my belief in the power of financial freedom. It's about creating unforgettable experiences and living life to the fullest.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mt-8 pt-8 border-t border-secondary/20">
              Now, I'm on a mission to help ambitious professionals like you escape the 9-5 and build lasting wealth through proven real estate strategies. This isn't about quick flips or risky moves. It's about playing the long game and building passive income streams that give you freedom—just like I did.
            </p>
          </div>

            <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <CardTitle className="text-xl font-bold text-primary">Long-Term Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Master the buy-and-hold strategy that builds steady passive income through rental properties and long-term appreciation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Airbnb & Short-Term</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Generate premium returns through short-term rentals and build a scalable Airbnb investment portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Exclusive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Network with 300+ serious investors committed to retirement through real estate. Share deals, strategies, and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Estate Mastery Program Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container">
            <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                <span className="text-secondary">Retire with Rentals</span> Program
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A comprehensive, community-driven program designed to help you build a profitable rental portfolio and retire on your terms.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="bg-primary-foreground/5 border border-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="font-heading text-2xl font-bold mb-6 text-secondary">What's Included</h3>
                <ul className="space-y-4">
                  {[
                    "Weekly live coaching sessions with me",
                    "Access to exclusive real estate deals",
                    "Property analysis templates & tools",
                    "Airbnb investment strategies",
                    "Market analysis & trends",
                    "Private community forum",
                    "Deal evaluation framework",
                    "Tax & financing strategies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary font-bold text-sm">✓</span>
                      </div>
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/10 border-2 border-secondary rounded-2xl p-8">
                <div className="text-center mb-8">
                  <p className="text-primary-foreground/80 text-sm uppercase tracking-widest font-semibold mb-2">Annual Investment</p>
                  <h3 className="font-heading text-5xl font-bold text-secondary mb-2">$3,000</h3>
                  <p className="text-primary-foreground/80">/year</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-primary-foreground/90">
                    <span>Monthly Cost</span>
                    <span className="font-bold">$250</span>
                  </div>
                  <div className="h-px bg-secondary/20"></div>
                  <div className="flex items-center justify-between text-primary-foreground/90">
                    <span>Program Members</span>
                    <span className="font-bold">300 (Capped)</span>
                  </div>
                  <div className="h-px bg-secondary/20"></div>
                  <div className="flex items-center justify-between text-primary-foreground/90">
                    <span>Access Duration</span>
                    <span className="font-bold">12 Months</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14 rounded-full shadow-lg shadow-secondary/30">
                  Join Now - Limited Spots
                </Button>
                
                <p className="text-center text-primary-foreground/60 text-sm mt-6">
                  Only 300 members allowed. Spots are filling up fast.
                </p>
              </div>
            </div>

            <div className="bg-primary-foreground/5 border border-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="font-heading text-2xl font-bold mb-6 text-secondary">Why Retire with Rentals?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      <span className="font-bold text-secondary">Proven Track Record:</span> I've built a $10M+ rental portfolio in less than 5 years. You'll learn exactly what worked and what didn't.
                    </p>
                  </div>
                  <div>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      <span className="font-bold text-secondary">Exclusive Community:</span> Network with 300 serious investors committed to retirement through rentals. Share deals, strategies, and support.
                    </p>
                  </div>
                  <div>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      <span className="font-bold text-secondary">Actionable Strategies:</span> No fluff. Every session focuses on practical rental strategies you can implement immediately.
                    </p>
                  </div>
                  <div>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      <span className="font-bold text-secondary">Lifetime Access:</span> Access to all recorded sessions and resources. Learn at your own pace, forever.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
                Free <span className="text-secondary">Rental Resources</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Start building your rental portfolio with these hand-picked tools and guides.
              </p>
            </div>
            <Link href="/resources">
              <a>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-bold">
                  View All Resources
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real Estate Investing Checklist",
                desc: "The complete checklist I use before buying any property. Covers financing, inspections, and due diligence.",
                tag: "Checklist"
              },
              {
                title: "Airbnb Financial Breakdown",
                desc: "Real numbers from my Airbnb properties. See exactly how much you can make from short-term rentals.",
                tag: "Guide"
              },
              {
                title: "Property Analysis Calculator",
                desc: "The spreadsheet I use to evaluate every deal. Plug in numbers and get instant ROI calculations.",
                tag: "Tool"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-primary/10 p-8 hover:border-secondary/50 hover:shadow-lg transition-all">
                <div className="mb-4 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {item.tag}
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-primary">{item.title}</h3>
                <p className="mb-6 text-foreground/70">{item.desc}</p>
                <a href="#" className="inline-flex items-center font-bold text-secondary hover:text-primary transition-colors">
                  Download Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-center text-primary sm:text-5xl mb-16">
            Success Stories from <span className="text-secondary">Retire with Rentals Members</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Chen",
                role: "First-Time Investor",
                quote: "Matthew's strategies helped me buy my first rental property. I'm now generating $2,500/month in passive income."
              },
              {
                name: "David Rodriguez",
                role: "Airbnb Investor",
                quote: "The Airbnb breakdown was eye-opening. I scaled from 1 to 3 properties in 18 months. Game changer."
              },
              {
                name: "Jessica Williams",
                role: "Real Estate Investor",
                quote: "The community alone is worth it. I've met my business partners and best friends through this program."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="mb-4 flex text-secondary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 text-foreground/70 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                      <p className="text-xs text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/5 px-6 py-16 md:px-16 md:py-24 text-center relative overflow-hidden border border-secondary/30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Ready to <span className="text-secondary">Retire with Rentals?</span>
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
                Join 300+ investors in the Retire with Rentals program. Limited spots available. Enrollment closes when we hit capacity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 h-14 rounded-full">
                  Schedule a Call
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-8">
                Questions? <a href="mailto:contact@matthewvarga.com" className="text-secondary hover:underline font-bold">Email me directly</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
