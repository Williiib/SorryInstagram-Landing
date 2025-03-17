import React, { useEffect } from 'react';
import { Github, Mail, ArrowLeft } from 'lucide-react';
import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/theme-toggle";
import { GitHubStars } from "./components/github-stars";
import { Footer } from "./components/footer";

function Contact() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = function() {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
          (e as HTMLIFrameElement).src = (e as HTMLIFrameElement).dataset.tallySrc || "";
        });
      }
    };
    if (typeof Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="'+w+'"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  const Tally = (window as any).Tally;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Header */}
      <header className="border-b relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container flex h-16 items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <h2 
              className="text-2xl font-bold cursor-pointer transition-colors hover:text-primary" 
              onClick={() => window.location.href = '/'}
            >
              SorryInstagram
            </h2>
            <span className="text-sm bg-primary/10 px-2 py-0.5 rounded-full text-primary font-medium animate-pulse">
              Contact
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.location.href = '/'} 
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <a href="https://github.com/Williiib/SorryInstagram" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <ThemeToggle />
            <GitHubStars repo="Williiib/SorryInstagram" />
          </div>
        </div>
      </header>

      <section className="container py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left side content */}
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight">
              Get in Touch with us!
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're building something <span className="font-bold text-primary">revolutionary</span> in the European tech space! 🚀 Our mission is to create a social platform that truly represents European values and keeps data sovereignty where it belongs - in Europe.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Whether you're an investor ready to back the next big tech revolution, a talented developer eager to shape the future, or simply excited about our vision - we want to hear from you! Let's build this together and change the social media landscape forever.
            </p>
          </div>
          
          {/* Right side form */}
          <div className="bg-card rounded-lg border p-6">
            <iframe 
              data-tally-src="https://tally.so/embed/mDME7Z?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="589" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Get in Touch with us!"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact; 