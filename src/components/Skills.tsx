
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Machine Learning', level: 95 },
    { name: 'Deep Learning', level: 90 },
    { name: 'Python', level: 95 },
    { name: 'TensorFlow', level: 88 },
    { name: 'PyTorch', level: 85 },
    { name: 'NLP', level: 82 },
    { name: 'Computer Vision', level: 80 },
    { name: 'MLOps', level: 75 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
