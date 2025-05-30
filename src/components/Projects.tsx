
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI Chatbot Platform',
      description: 'A conversational AI platform built with transformers and deployed on AWS.',
      technologies: ['Python', 'Transformers', 'FastAPI', 'AWS'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    },
    {
      title: 'Computer Vision App',
      description: 'Real-time object detection and classification using deep learning.',
      technologies: ['PyTorch', 'OpenCV', 'React', 'Flask'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Advanced sentiment analysis tool for social media monitoring.',
      technologies: ['BERT', 'TensorFlow', 'Docker', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
