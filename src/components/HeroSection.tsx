
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
        <div className="animate-fade-in space-y-4">
          <div className="inline-block glass-morphism px-4 py-2 rounded-full mb-6">
            <p className="text-sm font-medium">AI Developer & ML Engineer</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-gradient">AI Solutions</span> <br />
            <span>for the Future</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Building intelligent systems that solve complex problems. 
            Specializing in machine learning, neural networks, and natural language processing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="animate-float">
              View Projects
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <a 
          href="#about" 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ArrowDownCircle size={40} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
