import React, { useEffect } from 'react';
import { Github, Mail } from 'lucide-react';
import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/theme-toggle";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { year: 2020, revenue: 25.7 },
  { year: 2021, revenue: 30.0 },
  { year: 2022, revenue: 25.7 },
  { year: 2023, revenue: 32.0 },
  { year: 2024, revenue: 35.0 },
];

function App() {
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
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h2 
            className="text-2xl font-bold cursor-pointer" 
            onClick={() => window.location.href = '/'}
          >
            SorryInstagram - an Instagram Copy
          </h2>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Williiib/SorryInstagram" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <ThemeToggle />
            <div className="w-4"></div>
            <div className="w-6"></div>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/contact'} 
              className="flex items-center gap-2 px-4 border-primary/20 hover:bg-primary/5"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            The European Social Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Open-source, Web3-ready, and built for the European community. Share moments while keeping your data sovereign.
          </p>
          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop"
              alt="Person using Vyxel on iPhone"
              className="rounded-lg shadow-xl mx-auto max-w-sm"
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button onClick={() => {
              const formElement = document.getElementById('tally-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Join Waitlist</Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/Williiib/SorryInstagram" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Europe Needs Its Own Platform */}
      <section className="container py-16 bg-card rounded-lg border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Europe Needs Its Own Social Platform</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Data Sovereignty and Privacy</h3>
              <p className="text-muted-foreground">European users' data is currently stored and processed primarily in the US, subject to US laws and regulations. With SorryInstagram (name yet to be chosen), data stays within EU borders, protected by GDPR and European data protection standards.</p>
              <div className="mt-4 p-4 bg-accent/30 rounded-lg">
                <p className="text-sm font-medium">Critical Privacy Impact</p>
                <p className="text-muted-foreground mt-2">Meta generates approximately €84 per European user annually through data monetization and targeted advertising. In 2023, this resulted in over €4.2 billion in revenue solely from personal data exploitation, separate from direct advertising revenue.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Economic Independence</h3>
              <p className="text-muted-foreground mb-6">Meta's revenue from European operations has grown significantly, with most of this value leaving the EU digital economy. Here's the 5-year revenue trend:</p>
              
              <div className="h-[200px] w-full mt-8 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="year" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" label={{ value: 'Revenue (Billion $)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontWeight: 'bold', fill: 'hsl(var(--primary))' } }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem',
                      }}
                      itemStyle={{
                        color: 'hsl(var(--foreground))',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-muted-foreground">Meta's Revenue from European Operations (Billion $)</p>
                <p className="text-center text-sm text-muted-foreground mt-4">Total Revenue from Europe: $140 billion</p>
              </div>
            </div>


            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-4">Digital Autonomy in a Divided World</h3>
              <p className="text-muted-foreground">As American social media platforms increasingly reflect and amplify US political polarization—with growing divides between Democrats and Republicans affecting content policies and user experience—Europe has the opportunity to create a platform that reflects its own values and democratic principles. It's time for Europe to step forward and build social platforms that unite rather than divide, focusing on community and shared values rather than engagement through controversy.</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6">Imagine the impact it would have had if this money would not have gone to Meta but would have stayed within the European economic zone to develop our own software industry.</p>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-xl mb-2">Open Source</h3>
            <p className="text-muted-foreground">Built by the community, for the community. Transparent and collaborative development.</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-xl mb-2">Web3 Ready</h3>
            <p className="text-muted-foreground">Future-proof platform with blockchain integration for digital ownership and fair revenue distribution.</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-xl mb-2">EU First</h3>
            <p className="text-muted-foreground">Developed and hosted in Europe, compliant with EU privacy standards and cultural values.</p>
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section id="tally-form" className="container py-16">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Join the European Digital Revolution</h2>
          <p className="text-center text-muted-foreground mb-8">Sign up to be part of the first wave of users reclaiming Europe's digital independence</p>
          <iframe data-tally-src="https://tally.so/embed/w8MPrP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="465" frameBorder="0" marginHeight={0} marginWidth={0} title="🚀 Sorry Instagram - an Instagram copy Purpose of this form: evaluate the interest for people to use a made & hosted in Europe social media platform."></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container text-center text-muted-foreground">
          <p className="mb-2">Made with ❤️ in Europe</p>
          <p className="text-sm">Open Source • EU Hosted • Community Driven</p>
        </div>
      </footer>
    </div>
  );
}

export default App;