import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";

export default function Certifications() {
  const certifications = [
    {
      title: "Introduction to Programming in Python (CS50P)",
      link: "https://certificates.cs50.io/e86b3afc-f963-478d-a3e8-fe8e581682d3.pdf?size=letter"
    },
    {
      title: "Data Science: R Basics (edX)",
      link: "https://courses.edx.org/certificates/9522be866ebd4106abd69eb0cf7c9f0c"
    },
    {
      title: "Visualization (edX)",
      link: "https://courses.edx.org/certificates/8699969c508f44079ecdfacacefa03f5"
    },
    {
      title: "Probability (edX)",
      link: "https://courses.edx.org/certificates/e9111142205d43bfa158b10d30ce8390"
    },
    {
      title: "Finance: Market Structure (edX)",
      link: "https://courses.edx.org/certificates/650f4b7c2e4f4ad98f43c7d79103aa17"
    }
  ];

  return (
    <section id="certifications" className="py-16">
      <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Certifications</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="bg-white bg-opacity-70 shadow-lg border-none">
            <CardContent className="p-6 flex justify-between items-center">
              <span className="text-slate-700">{cert.title}</span>
              <Button asChild variant="outline">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
