import { ArrowLeft } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Footer } from "../components/footer";
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
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
              Privacy
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
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how we collect, use, and protect your personal information when you 
                interact with our landing page. We are committed to respecting your privacy and ensuring 
                the security of your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect the following information when you submit it through our forms:
              </p>
              <ul className="text-muted-foreground mt-2 space-y-1">
                <li>• Name and email address</li>
                <li>• Your interest in a European social media platform</li>
                <li>• Any feedback or suggestions you provide</li>
                <li>• Basic website usage data via analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information you provide solely to:
              </p>
              <ul className="text-muted-foreground mt-2 space-y-1">
                <li>• Gauge interest in a European social media alternative</li>
                <li>• Communicate with you about the development of this project</li>
                <li>• Improve our understanding of user needs and expectations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Data Storage and Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                All data collected through this landing page is stored securely within the European Union. 
                We employ appropriate technical and organizational measures to protect your personal information 
                against unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use Tally.so for form submissions and may use basic analytics tools to understand site usage. 
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or request the deletion of your personal information. 
                If you wish to exercise any of these rights, please contact us through our contact form.
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