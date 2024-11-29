"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Image from 'next/image'

export default function About() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section - Always Visible */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Richard “Tito” Fleming</h1>
        <p className="text-2xl mb-6 text-gray-600">Computer Science Sophomore at Brown University</p>
        <Image
          src="/Tito.png"
          alt="Richard “Tito” Fleming"
          className="rounded-full mx-auto mb-6 border-4 border-gray-200 shadow-lg"
          width={150}
          height={150}
        />
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" className="text-gray-600 hover:bg-gray-100 transition-colors duration-300">
            <a href="https://github.com/TitusFleming" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="text-gray-600 hover:bg-gray-100 transition-colors duration-300">
            <a href="https://www.linkedin.com/in/richard-tito-fleming-b33582245/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="text-gray-600 hover:bg-gray-100 transition-colors duration-300">
            <MailIcon className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 py-4">
        <Button onClick={() => setActiveSection('about')} className="bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300">
          About
        </Button>
        <Button onClick={() => setActiveSection('projects')} className="bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300">
          Projects
        </Button>
        <Button onClick={() => setActiveSection('resume')} className="bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300">
          Resume
        </Button>
      </div>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-10 bg-gray-50 transition-opacity duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-lg mb-4 text-gray-700">
              Hi, I’m Richard “Tito” Fleming, a sophomore at Brown University studying Computer Science. I’m passionate about technology, problem-solving, and creating meaningful solutions through code. Whether it’s working on exciting projects, exploring new ideas, or mentoring others, I’m always looking to learn and make an impact.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Welcome to my website!
            </p>
          </div>
        </section>
      )}

      {/* Education Section */}
      {activeSection === 'about' && (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>
            <Card className="border-gray-200 shadow-md flex justify-between items-center">
              <div className="flex-1">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-2xl text-gray-800">Brown University</CardTitle>
                  <CardDescription className="text-gray-600">Bachelor of Science in Computer Science</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Expected Graduation: May 2027</li>
                    <li>GPA: 3.9/4.0</li>
                    <li>Relevant Coursework: Computer Systems, AI, Data Structures and Algorithms, Linear Algebra</li>
                  </ul>
                </CardContent>
              </div>
              <Image
                src="/BrownLogo.png"
                alt="Brown University Logo"
                className="w-12 h-12 mr-4"
                width={48}
                height={48}
              />
            </Card>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'about' && (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Python</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">C++</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Java</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">TypeScript</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">R</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Node.js</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">React</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Next.js</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Vercel CLI</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">SQL</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Google Cloud</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Docker</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Hadoop</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Pytorch</Badge>
              <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300">Spanish (ILR Level 3)</Badge>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-10 bg-gray-50 transition-opacity duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gray-100">
                  <CardTitle className="text-gray-800">Tetris</CardTitle>
                  <CardDescription className="text-gray-600">Developed the classic game Tetris using JavaFX, implemented features focusing on user experience and gameplay mechanics.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Tetris.jpeg"
                    alt="Tetris Game"
                    className="w-full h-48 object-cover"
                    width={300}
                    height={200}
                  />
                </CardContent>
              </Card>
              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gray-100">
                  <CardTitle className="text-gray-800">DoodleJump</CardTitle>
                  <CardDescription className="text-gray-600">Designed DoodleJump with random layout generation to enhance user engagement.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/doodlejump.png"
                    alt="DoodleJump Game"
                    className="w-full h-48 object-cover"
                    width={300}
                    height={200}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Resume Section */}
      {activeSection === 'resume' && (
        <section className="py-10 transition-opacity duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Resume</h2>
            <iframe
              src="/path/to/your/resume.pdf"
              className="w-full h-screen"
              title="Richard Fleming's Resume"
            />
          </div>
        </section>
      )}
    </div>
  )
}