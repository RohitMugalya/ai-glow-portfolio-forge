
import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const categories = ["All", "Machine Learning", "Computer Vision", "NLP", "Data Science"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "NeuralSpeech",
      description: "AI-powered speech recognition and synthesis platform with support for 20+ languages.",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["NLP", "TensorFlow", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      category: "NLP",
      stars: 124
    },
    {
      id: 2,
      title: "Vision Analyzer",
      description: "Real-time object detection and scene understanding system for autonomous vehicles.",
      image: "https://images.unsplash.com/photo-1547962041-2d307a23108d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Computer Vision", "PyTorch", "C++"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Computer Vision",
      stars: 89
    },
    {
      id: 3,
      title: "PredictX",
      description: "Time-series forecasting model for financial markets with 87% accuracy.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Machine Learning", "Data Science", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Science",
      stars: 67
    },
    {
      id: 4,
      title: "Sentiment Analyzer",
      description: "Advanced sentiment analysis tool for social media monitoring and brand insights.",
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["NLP", "Deep Learning", "Flask"],
      liveUrl: "#",
      githubUrl: "#",
      category: "NLP",
      stars: 103
    },
    {
      id: 5,
      title: "MedicalVision",
      description: "AI-assisted diagnosis system for medical imaging with 95% diagnostic accuracy.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Computer Vision", "Healthcare", "PyTorch"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Computer Vision",
      stars: 156
    },
    {
      id: 6,
      title: "DeepRecommender",
      description: "Personalized recommendation engine using deep learning for e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1505236732171-72a3d494cbe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Machine Learning", "TensorFlow", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Machine Learning",
      stars: 78
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my portfolio of AI and machine learning projects that demonstrate
            practical applications of cutting-edge technologies.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full transition-all"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="glass-morphism hover-card overflow-hidden border-primary/10 animate-fade-in h-full"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center text-yellow-400">
                    <Star size={16} className="fill-yellow-400" />
                    <span className="text-sm ml-1">{project.stars}</span>
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
