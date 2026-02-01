import { Calendar, ArrowLeft, Share2, ArrowRight, CheckCircle2, TrendingUp, Home, DollarSign, Zap, BookOpen } from "lucide-react";
import React from "react";
import Layout from "@/components/Layout";
import { Link, useParams } from "wouter";

interface BlogPostData {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
  slug?: string;
  relatedPosts: Array<{ title: string; slug: string }>;
  disclaimer?: 'tax' | 'financial' | 'investment' | 'legal' | 'none';
}

const getDisclaimerText = (type: string): string => {
  const disclaimers: Record<string, string> = {
    tax: "⚠️ Tax Disclaimer: This content is for educational purposes only and should not be considered tax advice. Tax laws are complex and vary by jurisdiction. Please consult with a qualified tax professional or CPA before making any tax-related decisions based on this information.",
    financial: "⚠️ Financial Disclaimer: This content is for educational purposes only and should not be considered financial advice. Past performance does not guarantee future results. Please consult with a qualified financial advisor before making investment decisions.",
    investment: "⚠️ Investment Disclaimer: This content is for educational purposes only and should not be considered investment advice. Real estate investing involves risk, including potential loss of principal. Please consult with a qualified investment advisor and conduct your own due diligence before making investment decisions.",
    legal: "⚠️ Legal Disclaimer: This content is for educational purposes only and should not be considered legal advice. Real estate laws vary by jurisdiction. Please consult with a qualified attorney in your area before entering into any contracts or legal agreements."
  };
  return disclaimers[type] || '';
};

const enhanceContent = (html: string): string => {
  let enhanced = html;
  const iconMap: Record<string, string> = {
    "What is": "❓",
    "Why I": "💡",
    "The Numbers": "📊",
    "The Step-by-Step": "🎯",
    "The Real Challenges": "⚠️",
    "How to Maximize": "📈",
    "Is": "✅",
    "The Bottom Line": "🎁",
    "The Secondary Market": "🌟",
    "Why Secondary Markets": "🚀",
    "The Three Metrics": "📐",
    "Top Secondary Markets": "🗺️",
    "Seller Financing": "💰",
    "How to Structure": "🏗️",
    "Common Mistakes": "❌",
    "Automation Tools": "⚙️",
    "1031 Exchange": "🔄",
    "Tax Benefits": "💵",
    "From Foreclosure": "📖"
  };
  enhanced = enhanced.replace(/<h2>(.*?)<\/h2>/g, (match, content) => {
    for (const [key, icon] of Object.entries(iconMap)) {
      if (content.includes(key)) {
        return `<h2 class="flex items-center gap-3 mt-8 mb-4"><span class="text-2xl">${icon}</span><span>${content}</span></h2>`;
      }
    }
    return `<h2 class="flex items-center gap-3 mt-8 mb-4"><span class="text-2xl">📝</span><span>${content}</span></h2>`;
  });
  enhanced = enhanced.replace(/<ul>/g, '<ul class="space-y-3 pl-4 my-4">');
  enhanced = enhanced.replace(/<li>/g, '<li class="flex items-start gap-3"><span class="text-gold font-bold text-lg">▸</span><span class="text-slate-700">');
  enhanced = enhanced.replace(/<\/li>/g, '</span></li>');
  enhanced = enhanced.replace(/<p><strong>(.*?)<\/strong>(.*?)<\/p>/g, '<p class="bg-slate-50 p-4 rounded-lg border-l-4 border-gold my-4"><strong class="text-slate-900 font-bold">$1</strong>$2</p>');
  return enhanced;
};

const blogPostsData: Record<string, BlogPostData> = {
  "first-rental-portfolio-year-1": {
    title: "Building Your First Rental Portfolio: Year 1 Action Plan",
    excerpt: "Your first year in real estate investing sets the foundation for everything that follows. Learn the exact action plan I used to acquire my first three properties and build momentum toward financial freedom.",
    category: "Portfolio Growth",
    date: "January 31, 2026",
    readTime: "11 min read",
    image: "/images/blog-first-portfolio.jpg",
    author: "Matthew Varga",
    disclaimer: "investment",
    content: `
<h2>Why Year 1 Matters</h2>
<p>Your first year in real estate investing is critical. It's where you build momentum, learn systems, and prove to yourself that you can execute. Most people never start because they're waiting for the perfect conditions. The truth is, year 1 is about taking action, learning from mistakes, and building confidence.</p>

<h2>The Year 1 Goal: Your First Three Properties</h2>
<p>My year 1 goal was simple: acquire three rental properties. Not ten. Not one. Three. Why three? Because three properties give you:</p>
<ul>
<li>Proof of concept (you know how to find, analyze, and close deals)</li>
<li>Diversification (if one property has issues, you have two others generating income)</li>
<li>Momentum (three properties generate enough cash flow to fund property four)</li>
<li>Experience (you've navigated the process three times, learned the lessons)</li>
</ul>

<h2>Months 1-3: Education and Preparation</h2>
<p><strong>Month 1: Build Your Foundation</strong></p>
<ul>
<li>Read 3-5 real estate investing books (Rich Dad Poor Dad, The Millionaire Real Estate Investor, etc.)</li>
<li>Listen to 20+ real estate podcasts</li>
<li>Join a local real estate investment club</li>
<li>Connect with 5 successful investors in your area</li>
<li>Understand the basics: cap rate, cash-on-cash return, NOI, DSCR</li>
</ul>

<p><strong>Month 2: Get Your Finances Ready</strong></p>
<ul>
<li>Check your credit score. Target 700+</li>
<li>Get pre-approved for a mortgage. Know your buying power</li>
<li>Save 20-25% down payment for your first property</li>
<li>Build a cash reserve (6-12 months of expenses)</li>
<li>Get your finances organized (tax returns, W2s, bank statements ready)</li>
</ul>

<p><strong>Month 3: Develop Your Strategy</strong></p>
<ul>
<li>Define your target market (location, property type, price range)</li>
<li>Identify your investment strategy (buy-and-hold, fix-and-flip, Airbnb, etc.)</li>
<li>Create a deal analysis spreadsheet</li>
<li>Set your investment criteria (minimum cap rate, maximum price, etc.)</li>
<li>Connect with real estate agents, wholesalers, and other deal sources</li>
</ul>

<h2>Months 4-6: Find Your First Deal</h2>
<p>This is where most people get stuck. They're waiting for the perfect deal. Here's the truth: your first deal won't be perfect. It will teach you lessons that make your second and third deals much better.</p>

<p><strong>How to Find Deals:</strong></p>
<ul>
<li>MLS listings (work with a real estate agent)</li>
<li>Off-market deals (wholesalers, bird dogs, direct mail)</li>
<li>Foreclosures and distressed properties</li>
<li>Networking (tell everyone you're looking to invest)</li>
<li>Driving neighborhoods looking for "for sale" signs</li>
</ul>

<p><strong>Analyze 50+ Deals</strong></p>
<p>You need to look at many deals to find one that works. I analyzed over 100 deals in my first year. Most didn't meet my criteria. But that process taught me what to look for.</p>

<p><strong>Close Your First Deal</strong></p>
<ul>
<li>Make offers on 10-20 properties</li>
<li>Expect 90% of offers to be rejected</li>
<li>When you get an accepted offer, conduct thorough due diligence</li>
<li>Get a professional inspection</li>
<li>Verify the numbers</li>
<li>Close the deal</li>
</ul>

<h2>Months 7-9: Optimize Your First Property</h2>
<p>Once you own your first property, the real work begins. You need to:</p>
<ul>
<li>Set up property management (self-manage or hire a manager)</li>
<li>Establish systems for rent collection, maintenance, tenant communication</li>
<li>Market the property to find quality tenants</li>
<li>Screen tenants thoroughly</li>
<li>Collect rent and manage expenses</li>
</ul>

<p><strong>Metrics to Track:</strong></p>
<ul>
<li>Monthly rent collected</li>
<li>Vacancy rate</li>
<li>Maintenance and repair costs</li>
<li>Property management costs</li>
<li>Actual vs. projected cash flow</li>
</ul>

<h2>Months 10-12: Acquire Properties 2 and 3</h2>
<p>By month 10, you have momentum. You've closed one deal. You understand the process. Now you can move faster.</p>

<p><strong>Lessons from Property 1 to Apply to Properties 2 and 3:</strong></p>
<ul>
<li>Better deal analysis (you know what works)</li>
<li>Faster closing (you know the process)</li>
<li>Better negotiations (you've done it once)</li>
<li>Better tenant screening (you learned what to look for)</li>
<li>Better systems (you've built them)</li>
</ul>

<p>Acquire properties 2 and 3 in months 10-12. By year-end, you'll own three properties generating cash flow.</p>

<h2>Year 1 Financial Targets</h2>
<p><strong>Property 1:</strong> $1,500/month rent, $800/month expenses, $700/month cash flow</p>
<p><strong>Property 2:</strong> $1,800/month rent, $900/month expenses, $900/month cash flow</p>
<p><strong>Property 3:</strong> $1,600/month rent, $850/month expenses, $750/month cash flow</p>
<p><strong>Total Year 1 Cash Flow:</strong> $2,350/month = $28,200/year</p>

<h2>Year 1 Mistakes to Avoid</h2>
<ul>
<li><strong>Overpaying for properties:</strong> Stick to your criteria. Don't get emotional.</li>
<li><strong>Poor tenant screening:</strong> A bad tenant costs more than a vacant unit. Screen thoroughly.</li>
<li><strong>Underestimating expenses:</strong> Budget 30-40% of rent for expenses (mortgage, taxes, insurance, maintenance, vacancy).</li>
<li><strong>Trying to do everything yourself:</strong> Hire professionals (inspectors, accountants, property managers).</li>
<li><strong>Giving up too early:</strong> Your first property might not be perfect. That's okay. Learn and move forward.</li>
</ul>

<h2>The Bottom Line</h2>
<p>Year 1 is about taking action, learning systems, and building momentum. Your goal is three properties generating $2,000-$3,000/month in cash flow. This foundation sets you up for year 2, where you'll scale to 5-6 properties. By year 5, you'll have 15+ properties and $10,000+/month in passive income. It all starts with year 1. Take action today.</p>
    `,
    relatedPosts: [
      { title: "Portfolio Scaling: From One to Ten Properties", slug: "portfolio-scaling" },
      { title: "Financial Freedom Through Real Estate", slug: "financial-freedom-real-estate" }
    ]
  },
  "cap-rates-truth": {
    title: "The Truth About Cap Rates: What Investors Get Wrong",
    excerpt: "Cap rate is the most misunderstood metric in real estate investing. Most investors focus on it too much, others ignore it completely. Learn what cap rate actually tells you and how to use it correctly to evaluate deals.",
    category: "Investment Strategy",
    date: "January 31, 2026",
    readTime: "9 min read",
    image: "/images/blog-cap-rates.jpg",
    author: "Matthew Varga",
    disclaimer: "investment",
    content: `
<h2>What is Cap Rate?</h2>
<p>Cap rate (capitalization rate) is the annual net operating income (NOI) divided by the property purchase price. It's expressed as a percentage.</p>
<p><strong>Formula: Cap Rate = NOI / Purchase Price</strong></p>
<p><strong>Example:</strong> A property costs $200,000 and generates $12,000 in annual NOI. Cap rate = $12,000 / $200,000 = 6%</p>

<h2>What Cap Rate Actually Tells You</h2>
<p>Cap rate tells you the annual return on your investment based on current income. It's a snapshot of cash-on-cash return at the time of purchase. That's it.</p>
<p>It does NOT tell you:</p>
<ul>
<li>How much the property will appreciate</li>
<li>Whether the deal is good or bad</li>
<li>How much money you'll make over 10 years</li>
<li>Whether you should buy the property</li>
<li>The quality of the investment</li>
</ul>

<h2>The Cap Rate Myth: Higher is Always Better</h2>
<p>This is where most investors get it wrong. They think: "8% cap rate is better than 5% cap rate. I should buy the 8% property."</p>
<p>Wrong. Here's why:</p>

<p><strong>Property A: 5% Cap Rate</strong></p>
<ul>
<li>Location: Prime downtown area</li>
<li>Property condition: Excellent</li>
<li>Tenant quality: Excellent</li>
<li>Appreciation potential: High (4-5% annually)</li>
<li>Vacancy risk: Low</li>
<li>10-year return: 5% cash flow + 50% appreciation = 55% total return</li>
</ul>

<p><strong>Property B: 8% Cap Rate</strong></p>
<ul>
<li>Location: Declining neighborhood</li>
<li>Property condition: Poor (needs repairs)</li>
<li>Tenant quality: Risky</li>
<li>Appreciation potential: Low (0-1% annually)</li>
<li>Vacancy risk: High</li>
<li>10-year return: 8% cash flow + 0% appreciation = 80% total return (if you don't have major problems)</li>
</ul>

<p>Property A is the better investment even though it has a lower cap rate. Why? Because it has appreciation potential, lower risk, and better long-term returns.</p>

<h2>What Cap Rate Doesn't Account For</h2>

<p><strong>1. Appreciation</strong></p>
<p>A property in a growing market with 5% cap rate and 4% annual appreciation will outperform a property with 8% cap rate and 0% appreciation over 10 years.</p>

<p><strong>2. Financing</strong></p>
<p>Cap rate assumes you paid cash. But most investors use leverage (mortgages). A 5% cap rate property financed at 70% LTV with a 4% interest rate generates 12-15% cash-on-cash return. A 8% cap rate property financed the same way generates 18-20% cash-on-cash return. But if the 8% property has higher risk, is it worth it?</p>

<p><strong>3. Risk</strong></p>
<p>A high cap rate often indicates high risk. Bad neighborhood. Difficult tenants. Deferred maintenance. You're getting paid more because the investment is riskier. Cap rate doesn't measure risk.</p>

<p><strong>4. Market Conditions</strong></p>
<p>In strong markets, cap rates are lower because properties are expensive. In weak markets, cap rates are higher because properties are cheap. A 4% cap rate in San Francisco might be a great deal. An 8% cap rate in a declining market might be a trap.</p>

<h2>The Right Way to Use Cap Rate</h2>

<p><strong>1. Use Cap Rate as a Screening Tool, Not a Decision Tool</strong></p>
<p>Cap rate helps you quickly eliminate properties that don't meet your minimum criteria. If your minimum cap rate is 5%, you can quickly screen out deals that don't qualify. But cap rate alone shouldn't determine whether you buy.</p>

<p><strong>2. Compare Cap Rates in the Same Market</strong></p>
<p>Comparing cap rates across different markets is meaningless. Compare cap rates of similar properties in the same market. A 5% cap rate in a strong market might be better than an 8% cap rate in a weak market.</p>

<p><strong>3. Analyze the Entire Deal</strong></p>
<p>Look at:</p>
<ul>
<li>Cash-on-cash return (accounting for financing)</li>
<li>Appreciation potential</li>
<li>Risk factors</li>
<li>Tenant quality</li>
<li>Property condition</li>
<li>Market fundamentals</li>
<li>10-year projected return</li>
</ul>

<p><strong>4. Understand Why the Cap Rate is What It Is</strong></p>
<p>If a property has a high cap rate, ask why. Is it because:</p>
<ul>
<li>The market is weak? (Risk)</li>
<li>The property needs repairs? (Opportunity)</li>
<li>The tenants are risky? (Risk)</li>
<li>The location is declining? (Risk)</li>
<li>It's undervalued? (Opportunity)</li>
</ul>

<h2>My Cap Rate Philosophy</h2>
<p>I target 5-7% cap rates in strong markets with good appreciation potential. Why? Because:</p>
<ul>
<li>Lower cap rates indicate better neighborhoods and properties</li>
<li>Better properties have lower vacancy and maintenance risk</li>
<li>Appreciation in good markets compounds over time</li>
<li>Lower cap rates often mean better long-term returns</li>
</ul>

<p>I avoid high cap rate deals (8%+) unless there's a specific value-add opportunity (repairs, tenant upgrades, etc.) that I can execute to increase the cap rate.</p>

<h2>Common Cap Rate Mistakes</h2>

<p><strong>Mistake 1: Chasing High Cap Rates</strong></p>
<p>High cap rates often indicate high risk. Don't chase them blindly.</p>

<p><strong>Mistake 2: Ignoring Appreciation</strong></p>
<p>A 5% cap rate property in an appreciating market beats an 8% cap rate property in a declining market over 10 years.</p>

<p><strong>Mistake 3: Not Accounting for Financing</strong></p>
<p>Cap rate assumes cash purchase. Your actual cash-on-cash return depends on financing. Calculate both.</p>

<p><strong>Mistake 4: Comparing Across Markets</strong></p>
<p>Cap rates vary by market. A 5% cap rate in one market might be excellent. In another, it might be poor.</p>

<p><strong>Mistake 5: Using Cap Rate as the Only Metric</strong></p>
<p>Cap rate is one metric. Analyze the entire deal using multiple metrics.</p>

<h2>The Bottom Line</h2>
<p>Cap rate is a useful screening tool, but it's not the whole story. Don't get obsessed with cap rates. Instead, focus on the complete analysis: cash flow, appreciation potential, risk, financing, and 10-year projected returns. A property with a 5% cap rate in a strong market often beats a property with an 8% cap rate in a weak market. Analyze the entire deal, not just the cap rate.</p>
    `,
    relatedPosts: [
      { title: "Real Estate Market Analysis: 2026 Opportunities", slug: "real-estate-market-2026" },
      { title: "Portfolio Scaling: From One to Ten Properties", slug: "portfolio-scaling" }
    ]
  }
};

export default function BlogPost() {
  // Scroll to top when component mounts or slug changes
  const params = useParams();
  const slug = params.slug as string;
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = blogPostsData[slug];

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const enhancedContent = enhanceContent(post.content);
  const disclaimerText = getDisclaimerText(post.disclaimer || 'none');

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-semibold text-sm mb-4">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div>{post.readTime}</div>
              <div>By {post.author}</div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Disclaimer */}
            {disclaimerText && (
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg mb-12">
                <p className="text-amber-800 text-sm">{disclaimerText}</p>
              </div>
            )}

            {/* Main Content */}
            <div
              className="prose prose-lg max-w-none text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: enhancedContent }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Share this post</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Posts</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {post.relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <div className="group p-6 border border-slate-200 rounded-xl hover:border-gold hover:shadow-lg transition-all cursor-pointer hover:bg-gradient-to-br hover:from-gold/5 hover:to-transparent">
                      <div className="flex items-start gap-3 mb-3">
                        <ArrowRight className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <h4 className="font-bold text-slate-900 group-hover:text-gold transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all ml-8">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <Zap className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Ready to Build Your Real Estate Portfolio?</h3>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join the Retire with Rentals program and learn the exact strategies I used to build a $10M+ portfolio. Get personalized guidance from someone who has been where you are.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply-mastermind">
                    <button className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Apply to Join the Mastermind
                    </button>
                  </Link>
                  <a
                    href="https://calendly.com/matthew-p-varga/15-minute-coaching-introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Schedule Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
