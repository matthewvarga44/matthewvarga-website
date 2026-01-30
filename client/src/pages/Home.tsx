import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, BookOpen, CheckCircle, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background pattern" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              Professional Coaching & Consulting
            </div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Unlock Your <span className="text-secondary">Potential</span>. Achieve More.
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
              I help ambitious professionals and entrepreneurs break through barriers, optimize their performance, and build a life of freedom and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/20 transition-all hover:translate-y-[-2px]">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-bold text-lg px-8 h-14 rounded-full">
                Learn More
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ professionals</p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[600px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              {/* Placeholder for Matthew's photo - using a professional placeholder for now */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Matthew Varga" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="font-heading text-2xl font-bold">Matthew Varga</p>
                <p className="text-white/80">Executive Coach & Consultant</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-left-12 md:right-auto bg-white p-6 rounded-xl shadow-xl max-w-[260px] border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-forwards">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <BarChart className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Results</p>
                  <p className="font-bold text-primary">Proven Strategy</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                "Matthew's coaching transformed my business approach completely."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">15+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">500+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Clients Coached</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">50k+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Community Members</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">100%</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl mb-6">
              More Than Just Coaching. <br/>A Partnership for <span className="text-secondary">Growth</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that true success isn't just about financial gain—it's about creating a life of freedom, purpose, and impact. My mission is to provide you with the tools, strategies, and accountability you need to turn your vision into reality.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-2 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <img src="/images/coaching-icon.png" alt="Coaching" className="h-8 w-8 object-contain" />
                </div>
                <CardTitle className="text-xl font-bold">Strategic Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personalized 1-on-1 and group coaching programs designed to help you identify blind spots, set clear goals, and execute with precision.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/coaching">
                  <a className="flex items-center text-secondary font-bold hover:underline">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-2 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <img src="/images/resources-icon.png" alt="Resources" className="h-8 w-8 object-contain" />
                </div>
                <CardTitle className="text-xl font-bold">Actionable Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access a library of practical tools, templates, and guides that you can implement immediately to see tangible results in your business.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources">
                  <a className="flex items-center text-secondary font-bold hover:underline">
                    Get Free Tools <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-2 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <img src="/images/community-icon.png" alt="Community" className="h-8 w-8 object-contain" />
                </div>
                <CardTitle className="text-xl font-bold">Thriving Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a network of like-minded professionals who are committed to growth. Share insights, get feedback, and grow together.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/community">
                  <a className="flex items-center text-secondary font-bold hover:underline">
                    Join the Tribe <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="bg-primary py-20 md:py-32 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Start With These <span className="text-secondary">Free Resources</span>
              </h2>
              <p className="text-blue-100 text-lg">
                Don't know where to begin? These hand-picked tools are the perfect starting point for your journey.
              </p>
            </div>
            <Button variant="outline" className="border-white text-primary hover:bg-white hover:text-primary font-bold">
              View All Resources
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The 7-Day Focus Challenge",
                desc: "A step-by-step guide to reclaiming your time and focusing on what truly matters.",
                tag: "Guide"
              },
              {
                title: "Strategic Planning Template",
                desc: "The exact spreadsheet I use to plan my year, quarter, and week for maximum productivity.",
                tag: "Template"
              },
              {
                title: "Deal Analysis Calculator",
                desc: "Evaluate opportunities quickly and confidently with this plug-and-play calculator.",
                tag: "Tool"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-colors border border-white/10">
                <div className="mb-4 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                  {item.tag}
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold">{item.title}</h3>
                <p className="mb-6 text-blue-100/80">{item.desc}</p>
                <a href="#" className="inline-flex items-center font-bold text-secondary hover:text-white transition-colors">
                  Download Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl md:text-5xl mb-16">
            Success Stories
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Jenkins",
                role: "Real Estate Investor",
                quote: "Matthew's coaching gave me the clarity I needed to scale my portfolio from 2 to 10 units in just 18 months. The accountability was a game-changer."
              },
              {
                name: "David Chen",
                role: "Tech Entrepreneur",
                quote: "I was burnt out and overwhelmed. Matthew helped me restructure my business operations so I could work less and earn more. I finally have my weekends back!"
              },
              {
                name: "Jessica Williams",
                role: "Small Business Owner",
                quote: "The resources and community Matthew has built are incredible. I've met my business partners and best friends through this network."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="pt-8">
                  <div className="mb-4 flex text-secondary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={testimonial.name} />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="rounded-3xl bg-primary px-6 py-16 md:px-16 md:py-24 text-center relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                Whether you're just starting out or looking to scale to the next level, I have a program that fits your needs. Let's build your future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/20">
                  Work With Me
                </Button>
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary font-bold text-lg px-8 h-14 rounded-full bg-transparent text-white">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
