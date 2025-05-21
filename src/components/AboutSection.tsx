
import { Code2, BrainCircuit, Atom, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
              AI Developer & Machine Learning Engineer
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Hello! I'm Alex Chen, a passionate AI developer with expertise in machine learning, 
              deep neural networks, and natural language processing. With 5+ years of experience
              building intelligent systems, I've worked on projects ranging from computer vision
              to conversational AI.
            </p>
            
            <p className="text-muted-foreground mb-6">
              My approach combines cutting-edge AI research with practical software engineering 
              principles to build AI solutions that deliver real value. I'm particularly interested 
              in explainable AI and ensuring that AI systems are ethical and transparent.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <Code2 size={16} className="text-primary" />
                </span>
                <span>Python, TensorFlow, PyTorch, & Flask</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <BrainCircuit size={16} className="text-primary" />
                </span>
                <span>Neural Networks & Deep Learning</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <Atom size={16} className="text-primary" />
                </span>
                <span>Natural Language Processing</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <Workflow size={16} className="text-primary" />
                </span>
                <span>MLOps & Deployment Pipelines</span>
              </li>
            </ul>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-square relative glass-morphism rounded-2xl overflow-hidden animate-fade-in shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
                alt="Alex Chen, AI Developer" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              
              {/* Experience Card */}
              <Card className="absolute -bottom-6 -right-6 w-48 glass-morphism animate-float md:block hidden">
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">5+ Years</CardTitle>
                  <CardDescription>Professional Experience</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
