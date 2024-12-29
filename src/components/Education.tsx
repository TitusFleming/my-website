import { Badge } from "@/components/badge";
import { Card, CardContent } from "@/components/card";
import { School, GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      school: "Brown University",
      degree: "Bachelor of Science in Computer Science",
      period: "2023 - 2027",
      icon: <GraduationCap className="w-6 h-6 text-brown-600" />,
      color: "bg-brown-50",
      details: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Computer Systems",
        "Artificial Intelligence",
        "Database Management Systems",
        "Web Development"
      ]
    }
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <Card key={index} className={`overflow-hidden ${edu.color} border-none shadow-lg transition-all hover:shadow-xl`}>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-6 flex flex-col justify-between bg-white bg-opacity-90">
                  <div>
                    <div className="flex items-center mb-2">
                      {edu.icon}
                      <h3 className="text-xl font-semibold text-slate-800 ml-2">{edu.school}</h3>
                    </div>
                    <p className="text-slate-600">{edu.degree}</p>
                  </div>
                  <Badge variant="outline" className="self-start mt-4">
                    {edu.period}
                  </Badge>
                </div>
                <div className="md:w-2/3 p-6 bg-gradient-to-br from-white via-transparent to-transparent">
                  <h4 className="text-lg font-semibold text-slate-700 mb-3">Highlights</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-slate-400 mt-2 mr-2" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
