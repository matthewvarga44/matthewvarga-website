import { Calendar, ArrowRight, Tag } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Airbnb Arbitrage Strategy: How I Generate $22,000/Month Without Owning Property",
      excerpt: "Discover how to leverage Airbnb arbitrage to generate significant passive income by renting properties short-term without the burden of ownership. Learn the exact framework I used to scale from zero to $22K monthly income.",
      category: "Airbnb Strategy",
      date: "January 28, 2026",
      readTime: "8 min read",
      image: "/images/blog-airbnb-arbitrage.jpg",
      slug: "airbnb-arbitrage-strategy"
    },
    {
      id: "2",
      title: "Real Estate Market Analysis: 2026 Opportunities in Secondary Markets",
      excerpt: "Secondary markets are generating unprecedented returns for savvy investors. I break down the data, show you where to look, and reveal the three metrics that predict market growth before it happens.",
      category: "Market Insights",
      date: "January 25, 2026",
      readTime: "10 min read",
      image: "/images/blog-market-analysis.jpg",
      slug: "real-estate-market-2026"
    },
    {
      id: "3",
      title: "Seller Financing 101: How to Close Deals Without Bank Approval",
      excerpt: "Seller financing unlocks deals that traditional lenders won't touch. Learn how to structure deals, negotiate terms, and close transactions faster while building wealth through creative financing.",
      category: "Investment Strategy",
      date: "January 22, 2026",
      readTime: "9 min read",
      image: "/images/blog-seller-financing.jpg",
      slug: "seller-financing-deals"
    },
    {
      id: "4",
      title: "Property Management Automation: Systems That Save 10+ Hours Per Week",
      excerpt: "Managing multiple properties doesn't have to be a full-time job. Discover the automation tools and systems I use to manage 14 properties while maintaining 95%+ tenant satisfaction.",
      category: "Operations",
      date: "January 19, 2026",
      readTime: "7 min read",
      image: "/images/blog-property-management.jpg",
      slug: "property-management-automation"
    },
    {
      id: "5",
      title: "The 1031 Exchange: Tax-Free Real Estate Wealth Building",
      excerpt: "A 1031 exchange is one of the most powerful wealth-building tools available to real estate investors. Learn how to structure exchanges, avoid common mistakes, and defer taxes indefinitely.",
      category: "Tax Strategy",
      date: "January 16, 2026",
      readTime: "8 min read",
      image: "/images/blog-1031-exchange.jpg",
      slug: "1031-exchange-guide"
    },
    {
      id: "6",
      title: "From Foreclosure to $10M Portfolio: My Real Estate Journey",
      excerpt: "The complete story of how I went from my family's foreclosure in the 90s to building a $10M+ real estate portfolio. The lessons, mistakes, and breakthroughs that shaped my investing philosophy.",
      category: "Personal Story",
      date: "January 13, 2026",
      readTime: "12 min read",
      image: "/images/blog-journey.jpg",
      slug: "my-real-estate-journey"
    }
  ];

  const categories = ["All", "Airbnb Strategy", "Market Insights", "Investment Strategy", "Operations", "Tax Strategy", "Personal Story"];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gold/20 px-4 py-2 rounded-full mb-6">
              <span className="text-gold font-semibold">Real Estate Insights</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">The Blog</h1>
            <p className="text-xl text-slate-300 mb-8">
              Market insights, Airbnb strategies, investment tactics, and real estate wisdom from building a $10M+ portfolio.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-6 py-2 rounded-full border-2 border-slate-300 text-slate-900 font-semibold hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="group h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold transition-all duration-300 cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-gold text-slate-900 font-bold text-xs px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 border-t border-slate-200 pt-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div>{post.readTime}</div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Stay Updated with Real Estate Insights</h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Get weekly market analysis, investment strategies, and exclusive tips delivered to your inbox. Join 500+ real estate investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="bg-gold hover:bg-gold/90 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
