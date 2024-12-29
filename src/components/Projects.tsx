import { Card, CardContent, CardFooter } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

export default function Projects() {
  const projects = [
    
    // {
    //   title: "AI-Powered Chess Tutor",
    //   description: "Developed a machine learning model to analyze chess games and provide personalized feedback to improve players' skills.",
    //   icon: <ChessKing className="w-6 h-6 text-purple-600" />,
    //   color: "bg-purple-50",
    //   technologies: ["Python", "TensorFlow", "Chess.js"],
    //   link: "https://github.com/TitusFleming/chess-tutor"
    // },
    // {
    //   title: "Eco-Friendly Campus Initiative App",
    //   description: "Created a mobile app to track and incentivize sustainable practices among Brown University students.",
    //   icon: <Leaf className="w-6 h-6 text-green-600" />,
    //   color: "bg-green-50",
    //   technologies: ["React Native", "Firebase", "Node.js"],
    //   link: "https://github.com/TitusFleming/eco-campus-app"
    // },
    // {
    //   title: "Algorithmic Music Composer",
    //   description: "Implemented an algorithm to generate original musical compositions based on input parameters and style preferences.",
    //   icon: <Music className="w-6 h-6 text-blue-600" />,
    //   color: "bg-blue-50",
    //   technologies: ["Python", "Music21 library", "MIDI"],
    //   link: "https://github.com/TitusFleming/algo-composer"
    // },
    {
      title: "Soccer Analytics Chatbot",
      description: "Developed an AI-powered chatbot leveraging the FBRef database of 250,000+ player profiles, enabling users to query detailed soccer statistics and analytics through natural language processing, enhancing accessibility to professional soccer data.",
      color: "bg-blue-50",
      technologies: ["Python", "OpenAI API", "FBRef Data", "Natural Language Processing"],
    },
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
