import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from "./ui/button";

interface GitHubStarsProps {
  repo: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function GitHubStars({ 
  repo, 
  variant = 'outline', 
  size = 'sm' 
}: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStars(data.stargazers_count);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub stars:', error);
        setError(true);
        setLoading(false);
      });
  }, [repo]);

  const handleClick = () => {
    window.open(`https://github.com/${repo}/stargazers`, '_blank');
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      className="flex items-center gap-1 bg-primary/5 border-primary/20 hover:bg-primary/10"
      onClick={handleClick}
    >
      <Star className="h-4 w-4 text-amber-500" />
      <span>
        {loading ? 'Loading stars...' : 
         error ? 'Star Project' : 
         `Star Project (${stars})`}
      </span>
    </Button>
  );
} 