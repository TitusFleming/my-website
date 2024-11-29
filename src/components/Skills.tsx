import { Card, CardContent } from "@/components/card";
import { Badge } from "@/components/badge";

export default function Skills() {
  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Java", level: "Advanced" },
    { name: "C", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "GDB", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "Assembly", level: "Intermediate" },
    { name: "IntelliJ IDEA", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
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
