import { Card, CardContent, CardFooter } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Soccer Stats Chat",
      description: "Built an interactive web app using Next.js and OpenAI that enables natural conversations about soccer player statistics, featuring real-time chat and comprehensive player data.",
      color: "bg-green-50",
      link: "https://soccer.titofleming.com",
      technologies: ["Next.js", "OpenAI", "PostgreSQL", "TypeScript", "Tailwind CSS"]
    },
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
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className={`${project.color} border-none shadow-lg hover:shadow-xl transition-shadow`}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{project.title}</h3>
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
