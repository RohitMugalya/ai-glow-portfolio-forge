
import { useState, useEffect } from "react";
import { 
  Menu, X, Github, Linkedin, Twitter, 
  Home, User, Code, Briefcase, MessageSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gradient">Alex.AI</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="nav-link flex items-center gap-2">
            <Home size={18} />
            Home
          </a>
          <a href="#about" className="nav-link flex items-center gap-2">
            <User size={18} />
            About
          </a>
          <a href="#skills" className="nav-link flex items-center gap-2">
            <Code size={18} />
            Skills
          </a>
          <a href="#projects" className="nav-link flex items-center gap-2">
            <Briefcase size={18} />
            Projects
          </a>
          <a href="#contact" className="nav-link flex items-center gap-2">
            <MessageSquare size={18} />
            Contact
          </a>
        </nav>
        
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <Button size="sm" variant="outline" className="ml-2">Resume</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-morphism animate-fade-in">
          <nav className="flex flex-col py-4 px-4">
            <a href="#home" className="py-2 px-4 hover:bg-accent rounded-md flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Home size={18} />
              Home
            </a>
            <a href="#about" className="py-2 px-4 hover:bg-accent rounded-md flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <User size={18} />
              About
            </a>
            <a href="#skills" className="py-2 px-4 hover:bg-accent rounded-md flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Code size={18} />
              Skills
            </a>
            <a href="#projects" className="py-2 px-4 hover:bg-accent rounded-md flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Briefcase size={18} />
              Projects
            </a>
            <a href="#contact" className="py-2 px-4 hover:bg-accent rounded-md flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <MessageSquare size={18} />
              Contact
            </a>
            
            <div className="flex items-center gap-4 mt-4 px-4 pt-4 border-t border-border">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <Button size="sm" variant="outline" className="ml-2">Resume</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

