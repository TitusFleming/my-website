import { Card, CardContent } from "@/components/card";
import { Badge } from "@/components/badge";

export default function Skills() {
  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "C", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "Tableau", level: "Intermediate" },
    { name: "Assembly", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Skills</h2>
      <Card className="max-w-4xl mx-auto overflow-hidden bg-white border-none shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                <span className="text-slate-700 font-medium">{skill.name}</span>
                <Badge 
                  variant={skill.level === "Advanced" ? "default" : skill.level === "Intermediate" ? "secondary" : "outline"}
                >
                  {skill.level}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
