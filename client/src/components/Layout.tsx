import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Coaching", href: "/coaching" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Matthew Varga Logo" className="h-10 w-10" />
            <span className="font-heading text-2xl font-bold text-primary tracking-tight">
              MATTHEW<span className="text-secondary">VARGA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`text-sm font-medium transition-colors hover:text-secondary ${
                location === item.href
                  ? "text-primary font-bold"
                  : "text-muted-foreground"
              }`}>
                {item.label}
              </Link>
            ))}
            <Link href="/book-consultation" asChild>
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full px-6">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-8">
                  <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="/images/logo.png" alt="Matthew Varga Logo" className="h-10 w-10" />
                    <span className="font-heading text-2xl font-bold text-primary">
                      MATTHEW<span className="text-secondary">VARGA</span>
                    </span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className={`text-lg font-medium transition-colors hover:text-secondary ${
                        location === item.href
                          ? "text-primary font-bold"
                          : "text-muted-foreground"
                      }`} onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                    <Link href="/book-consultation" asChild>
                      <Button 
                        className="bg-secondary hover:bg-secondary/90 text-white font-bold w-full mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <img src="/images/logo.png" alt="Matthew Varga Logo" className="h-10 w-10" />
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                MATTHEW<span className="text-secondary">VARGA</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering professionals to achieve their goals through strategic coaching and actionable resources.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Explore</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Free Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Podcast</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Newsletter</a></li>
              <li><Link href="/faq" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/matthewpvarga/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/matthew_varga" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://www.instagram.com/matthew_varga/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@matthewpvarga" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.26 6.26 0 0 0-1-.1A6.15 6.15 0 0 0 5 20.94a6.61 6.61 0 0 0 5.88 3.75q3.46 0 5.7-2.23c1.5-1.5 2.3-3.46 2.3-5.43V9.86a7.05 7.05 0 0 0 3.77 1.23V7.13a4.92 4.92 0 0 1-.88-.08z"/></svg>
              </a>
              <a href="https://www.youtube.com/@MatthewVarga" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            <p className="text-primary-foreground/60 text-xs">
              © {new Date().getFullYear()} Matthew Varga. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
