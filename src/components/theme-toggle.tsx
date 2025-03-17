import { Moon, Sun } from "lucide-react"

import { Button } from "../components/ui/button"
import { useTheme } from "../components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === 'dark' ? 'block' : 'hidden'}`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === 'light' ? 'block' : 'hidden'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}