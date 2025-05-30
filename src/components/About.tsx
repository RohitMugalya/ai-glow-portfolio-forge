
import React from 'react';
import { Brain, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              AI Developer & ML Engineer
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate AI developer with 5+ years of experience in machine learning, 
              deep learning, and natural language processing. I love creating intelligent 
              systems that can understand, learn, and adapt to solve complex problems.
            </p>
            <p className="text-muted-foreground mb-6">
              My expertise spans across various domains including computer vision, NLP, 
              reinforcement learning, and MLOps. I'm committed to building AI solutions 
              that are not only technically advanced but also ethical and accessible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Brain className="text-primary" size={20} />
                <span>Machine Learning & Deep Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="text-primary" size={20} />
                <span>Python, TensorFlow, PyTorch</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-primary" size={20} />
                <span>MLOps & Production Deployment</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-2xl p-8 flex items-center justify-center">
              <div className="text-8xl text-primary animate-float">
                🤖
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
