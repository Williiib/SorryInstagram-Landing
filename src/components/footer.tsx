import { Github, Mail } from 'lucide-react';
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Footer() {
  const navigate = useNavigate();

  // Function to navigate and scroll to top
  const navigateAndScrollToTop = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="border-t py-8 mt-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Williiib/SorryInstagram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Button variant="ghost" size="icon" className="rounded-full bg-background/80 shadow-sm hover:bg-background/90">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a 
            href="https://discord.gg/zWseGmTxJf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Button variant="ghost" size="icon" className="rounded-full bg-background/80 shadow-sm hover:bg-background/90">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path 
                  d="M19.2732 5.33137C17.9047 4.71964 16.4569 4.27091 14.9474 4C14.8028 4.2623 14.6158 4.71103 14.5138 5.06756C12.9138 4.82082 11.4086 4.82082 9.48704 5.06756C9.385 4.71103 9.19804 4.2623 9.05274 4C7.54321 4.27091 6.09539 4.71964 4.72652 5.33137C2.00782 9.3865 1.12434 13.3277 1.56743 17.2093C3.41763 18.6301 5.2182 19.5045 7.0021 20C7.42169 19.4188 7.79525 18.7996 8.11816 18.1423C7.47273 17.8991 6.85229 17.5974 6.27187 17.2393C6.37391 17.1613 6.47595 17.0784 6.57378 17.0003C9.85174 18.5796 13.4368 18.5796 16.6798 17.0003C16.7776 17.0784 16.8797 17.1613 16.9817 17.2393C16.4012 17.5974 15.781 17.8991 15.1354 18.1423C15.4583 18.7996 15.8321 19.4188 16.2515 20C18.0354 19.5045 19.8359 18.6301 21.6862 17.2093C22.2072 12.6795 20.8815 8.77624 19.2732 5.33137ZM8.22021 14.6842C7.13008 14.6842 6.23447 13.6909 6.23447 12.489C6.23447 11.2869 7.11295 10.2936 8.22021 10.2936C9.32726 10.2936 10.2059 11.2869 10.2057 12.489C10.2057 13.6909 9.32726 14.6842 8.22021 14.6842ZM15.7831 14.6842C14.6928 14.6842 13.7972 13.6909 13.7972 12.489C13.7972 11.2869 14.6757 10.2936 15.7831 10.2936C16.8902 10.2936 17.7688 11.2869 17.7686 12.489C17.7686 13.6909 16.8902 14.6842 15.7831 14.6842Z" 
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Discord</span>
            </Button>
          </a>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigateAndScrollToTop('/contact')}
            className="rounded-full bg-background/80 shadow-sm hover:bg-background/90 transition-transform hover:scale-110"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Contact</span>
          </Button>
        </div>
        <p className="text-center text-muted-foreground mt-2">
          Made with ❤️ in Europe
        </p>
        <p className="text-sm text-center text-muted-foreground">
          Open Source • EU Hosted • Community Driven
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground mt-2">
          <Button 
            variant="link" 
            className="text-xs hover:text-primary transition-colors"
            onClick={() => navigateAndScrollToTop('/terms')}
          >
            Terms & Conditions
          </Button>
          <Button 
            variant="link" 
            className="text-xs hover:text-primary transition-colors"
            onClick={() => navigateAndScrollToTop('/privacy')}
          >
            Privacy Policy
          </Button>
        </div>
      </div>
    </footer>
  );
} 