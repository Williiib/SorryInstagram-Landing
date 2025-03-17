import { ArrowLeft } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Footer } from "../components/footer";
import { useNavigate } from 'react-router-dom';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container flex h-16 items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <h2 
              className="text-2xl font-bold cursor-pointer transition-colors hover:text-primary" 
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
              }}
            >
              SorryInstagram
            </h2>
            <span className="text-sm bg-primary/10 px-2 py-0.5 rounded-full text-primary font-medium">
              Terms
            </span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => {
              window.history.back();
              setTimeout(() => window.scrollTo(0, 0), 100);
            }} 
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </div>
      </header>

      <main className="container py-12 max-w-3xl">
        <div className="prose dark:prose-invert mx-auto bg-card p-8 rounded-lg border shadow-sm">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms & Conditions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Purpose of this Site</h2>
              <p className="text-muted-foreground leading-relaxed">
                This landing page is designed to gauge interest in a potential European social media platform. 
                We are not yet offering any services, but merely collecting information from interested parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting your information through our contact form or interest form, you agree to allow us to 
                contact you with updates about the development of this potential platform. We will not share your 
                information with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this landing page, including text, graphics, logos, and images, is the property 
                of the SorryInstagram project and is protected by applicable copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. No Guarantees</h2>
              <p className="text-muted-foreground leading-relaxed">
                We make no guarantees about whether this platform will eventually be developed or launched. 
                This site is meant to evaluate interest and gather feedback to inform future decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Updates to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these terms at any time. Any significant changes will be communicated to 
                individuals who have submitted their contact information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us through 
                the contact form on this website.
              </p>
            </section>
          </div>
          
          <p className="text-sm text-muted-foreground mt-12 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
} 