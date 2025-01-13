import { Card, CardContent, CardFooter } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Tetris",
      description: "Developed the classic game Tetris using JavaFX Java 21, implemented features focusing on user experience and gameplay mechanics.",
      color: "bg-purple-50",
      technologies: ["JavaFX", "Java 21", "IntelliJ IDEA"],
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
      <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Featured Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className={`overflow-hidden ${project.color} border-none shadow-lg transition-all hover:shadow-xl`}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-slate-800 ml-2">{project.title}</h3>
              </div>
              <p className="text-slate-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
