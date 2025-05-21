
import { Github, Linkedin, Twitter, Mail, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="py-8 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-1 hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUpCircle size={36} />
          </button>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gradient">Alex.AI</h3>
          </div>
          
          <ul className="flex flex-wrap justify-center gap-6 mb-8">
            <li>
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </li>
          </ul>
          
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter />
            </a>
            <a
              href="mailto:alex@aideveloper.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
          
          <div className="text-center text-muted-foreground text-sm">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Alex.AI | All Rights Reserved
            </p>
            <p>
              Portfolio of a Fictional AI Developer | Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
