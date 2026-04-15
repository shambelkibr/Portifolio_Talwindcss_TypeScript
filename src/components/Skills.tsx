import { Card } from "@/components/ui/card";
import { Code2, Server, Database, GitBranch, ClipboardList, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
    },
    {
      title: "Project Management",
      icon: ClipboardList,
      skills: ["Jira", "Kanban", "Scrum"],
    },
    {
      title: "Design Tools",
      icon: Layers,
      skills: ["Enterprise Architecture", "StarUML", "Visual Paradigm"],
    },
  ];

  return (
    <section id="skills">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-8 bg-card border-border card-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
