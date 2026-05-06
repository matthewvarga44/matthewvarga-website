import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Instagram, Youtube, BookOpen, Music, Twitter, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";

export default function Contact() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mgoygqqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/matthew_varga/",
      color: "hover:text-pink-500",
      description: "Daily tips & lifestyle updates",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@MatthewVarga",
      color: "hover:text-red-500",
      description: "In-depth real estate strategies",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://www.tiktok.com/@matthewpvarga",
      color: "hover:text-black",
      description: "Quick real estate tips & trends",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/matthew_varga",
      color: "hover:text-blue-400",
      description: "Market insights & daily updates",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/matthewpvarga/",
      color: "hover:text-blue-600",
      description: "Professional insights & articles",
    },
    {
      name: "Teachable",
      icon: BookOpen,
      url: "https://matthew-varga-real-estate.teachable.com/",
      color: "hover:text-blue-500",
      description: "Coaching programs & courses",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gold/20 px-4 py-2 rounded-full mb-6">
              <span className="text-gold font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-slate-300 mb-8">
              Have questions about the The Ordinary Millionaire Community program? Want to collaborate or discuss opportunities? I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Mail className="text-gold w-8 h-8" />
                Send Me a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Message
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-slate-600 text-sm">
                  💡 <strong>Tip:</strong> For faster responses, you can also reach out via my social media channels below or schedule a free consultation call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Let's Connect on Social!</h2>
              <p className="text-xl text-slate-300">
                Follow me for daily real estate tips, market insights, and member success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-slate-700/50 hover:bg-slate-700 rounded-2xl p-8 text-center transition-all duration-300 border border-slate-600 hover:border-gold no-underline"
                  >
                    <Icon className={`w-16 h-16 mx-auto mb-4 text-slate-300 group-hover:text-gold transition-colors duration-300 ${social.color}`} />
                    <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                    <p className="text-slate-400 mb-4">
                      {social.description}
                    </p>
                    <div className="inline-block bg-gold text-slate-900 font-bold py-2 px-6 rounded-lg group-hover:bg-gold/90 transition-colors duration-200">
                      Follow →
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3">Ready to Join The Ordinary Millionaire Community?</h3>
                <p className="text-slate-300 mb-6">
                  Schedule a free consultation to learn if the program is right for you
                </p>
                <button
                  onClick={() => window.open('https://calendly.com/matthew-p-varga/15-minute-coaching-introduction', '_blank')}
                  className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer border-none"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
