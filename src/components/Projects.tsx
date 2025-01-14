import { Card, CardContent, CardFooter } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Full-Stack CRUD App",
      description: "Built a full-stack CRUD application using Next.js, Prisma ORM, and PostgreSQL. Features user authentication, real-time updates, and a responsive UI.",
      color: "bg-blue-50",
      link: "https://crud.titofleming.com",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Tetris",
      description: "Developed the classic game Tetris using JavaFX Java 21, implemented features focusing on user experience and gameplay mechanics.",
      color: "bg-purple-50",
      technologies: ["Java", "JavaFX", "Object-Oriented Design"]
    },
    {
      title: "DoodleJump",
      description: "Designed DoodleJump with random layout generation to enhance user engagement.",
      color: "bg-green-50",
      technologies: ["JavaFX", "Java 21", "IntelliJ IDEA"],
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <Card key={index} className={`${project.color} border-none shadow-lg hover:shadow-xl transition-all`}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.link && (
                <Button variant="outline" className="mt-2" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
