import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "My personal portfolio to showcase my skills, projects, and experience.",
      tech: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui"],
      github: "https://github.com/shambelkibr/Portifolio_Talwindcss_TypeScript",
      demo: "https://shanbelkibredev.vercel.app/",
    },
    {
      title: "Student Management System",
      description:
        "A distributed system using React, Express, Java Sockets, and MySQL.",
      tech: ["React", "Express.js", "Java", "MySQL"],
      github: "https://github.com/shambelkibr/Student-_managment_java_Socket",
      demo: "https://student-managment-java-socket.vercel.app/",
    },
    {
      title: "Internship Control Platform",
      description:
        "A hackathon project built with HTML, CSS, and JavaScript, using local storage.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/shambelkibr/EthioInterShip_platform_DBU_Hackton",
      demo: "https://ethio-inter-ship-platform.vercel.app/",
    },
    {
      title: "React Portfolio",
      description: "A personal portfolio built with React and Vite.",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/shambelkibr/my-Portfolio-by-React",
      demo: "https://shanbelkibremyportfolio.vercel.app/",
    },
    {
      title: "Student Registration Platform",
      description:
        "A simple Express + EJS + PostgreSQL student registration system for performing CRUD operations (Create, Read, Update, Delete).",
      tech: [
        "Node.js",
        "Express.js",
        "EJS",
        "PostgreSQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/shambelkibr/student-registration_platForm",
      demo: "https://student-registration-plat-form.vercel.app/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product management, shopping cart, and secure payment integration. Features a responsive design and real-time inventory updates.",
      tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    },
    {
      title: "Task Management Dashboard",
      description:
        "An intuitive task management application with drag-and-drop functionality, team collaboration features, and deadline tracking. Built with modern UI/UX principles for optimal productivity.",
      tech: ["JavaScript", "Node.js", "MySQL", "Tailwind CSS"],
    },
    {
      title: "Social Media Analytics Tool",
      description:
        "A comprehensive analytics platform that aggregates data from multiple social media sources, providing insights through interactive charts and customizable reports for data-driven decisions.",
      tech: ["Express.js", "PostgreSQL", "HTML", "CSS"],
    },
  ];

  
  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 bg-card border-border flex flex-col card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>

              <p className="text-muted-foreground mb-6 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="flex-1 gap-2"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1 gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
