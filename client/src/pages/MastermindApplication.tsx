import React from "react";
import Layout from "@/components/Layout";

export default function MastermindApplication() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight mb-6">
              Apply to Join <span className="text-secondary">The Ordinary Millionaire Community</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Take the next step toward building your real estate empire. Apply now to join our exclusive mastermind community.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Intro Text */}
            <div className="mb-12 prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                <strong>The Ordinary Millionaire Community is an exclusive mastermind community for serious real estate investors.</strong> If you're committed to building wealth through rental properties, Airbnb strategies, and alternative income streams, we'd love to learn more about you.
              </p>

              <div className="flex items-start gap-3 mb-8 p-4 bg-secondary/5 rounded-lg">
                <span className="text-2xl flex-shrink-0">📞</span>
                <p className="text-foreground/90 m-0">
                  <strong>After you apply, we'll invite you to a quick Discovery Call</strong> with me. This conversation helps us both make sure The Ordinary Millionaire Community is the right fit for you.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">Why the call?</h3>
              <ol className="space-y-3 mb-8 list-decimal list-inside">
                <li className="text-foreground/90">
                  <strong>We're selective</strong> – The Ordinary Millionaire Community is capped at 300 members so we can go deep, not wide. We want to get to know you and make sure you're going to be a valuable member of the community too.
                </li>
                <li className="text-foreground/90">
                  <strong>We focus on serious investors</strong> – This program isn't for beginners or info collectors. We want to understand your real estate experience and what you've accomplished so far.
                </li>
                <li className="text-foreground/90">
                  <strong>This is an investment</strong> – At $3,000 for the first year (and $2,000 annually after), we want to make sure you get your questions answered and feel CONFIDENT about joining.
                </li>
                <li className="text-foreground/90">
                  <strong>We're building something special</strong> – Our community members are actively executing strategies, sharing deals, and supporting each other's growth. We want to ensure you're ready to contribute and benefit.
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-primary mb-4">On the call, you'll get:</h3>
              <ul className="space-y-2 mb-8">
                <li className="text-foreground/90">→ Clarity about where you are in your real estate journey and what's next</li>
                <li className="text-foreground/90">→ A peek inside the The Ordinary Millionaire Community community & experience</li>
                <li className="text-foreground/90">→ Time to ask any questions before making your decision</li>
                <li className="text-foreground/90">→ Real talk about whether this program is the right fit for your goals</li>
              </ul>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-8">
                <p className="text-amber-900 m-0">
                  <strong>While we're typically full at 300 members, a few spots open each month.</strong> Apply now! If there's space available, you'll be admitted right away. Otherwise, you'll be added to the waitlist and be the first to be notified when a spot becomes available.
                </p>
              </div>

              <p className="text-lg text-foreground/90 font-semibold">
                Ready to take the next step toward financial freedom? Fill out the application below and let's talk.
              </p>
            </div>

            {/* Tally Embed */}
            <div className="mt-12 pt-12 border-t">
              <iframe
                src="https://tally.so/embed/dWddOA"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Real Estate Mastermind Application"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
