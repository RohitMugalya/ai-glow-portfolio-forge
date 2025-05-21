
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Server, BarChart, PenTool } from "lucide-react";

const SkillsSection = () => {
  const aiSkills = [
    { name: "Machine Learning", percentage: 95 },
    { name: "Deep Learning", percentage: 90 },
    { name: "Natural Language Processing", percentage: 85 },
    { name: "Computer Vision", percentage: 80 },
    { name: "Reinforcement Learning", percentage: 75 },
  ];

  const programmingSkills = [
    { name: "Python", percentage: 95 },
    { name: "TensorFlow/PyTorch", percentage: 90 },
    { name: "Flask/FastAPI", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "SQL & NoSQL", percentage: 85 },
  ];

  const techStack = [
    { name: "Machine Learning", icon: <Brain className="h-8 w-8" /> },
    { name: "Software Development", icon: <Code className="h-8 w-8" /> },
    { name: "Data Engineering", icon: <Database className="h-8 w-8" /> },
    { name: "Cloud & DevOps", icon: <Server className="h-8 w-8" /> },
    { name: "Data Visualization", icon: <BarChart className="h-8 w-8" /> },
    { name: "UI/UX Design", icon: <PenTool className="h-8 w-8" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50 relative">
      {/* Background blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build AI solutions that drive innovation
            and solve complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* AI Skills */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">AI & ML Skills</h3>
            {aiSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} className="h-2" />
              </div>
            ))}
          </div>

          {/* Programming Skills */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Programming Skills</h3>
            {programmingSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <Card key={tech.name} className="glass-morphism border-primary/10 hover-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="text-primary mb-4">{tech.icon}</div>
                  <h4 className="font-medium">{tech.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
