import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Get in Touch</h2>
        <Card className="bg-white bg-opacity-70 shadow-lg border-none">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="mailto:richard.fleming@brown.edu">
                  <Mail className="mr-2 h-4 w-4" />
                  richard.fleming@brown.edu
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://www.linkedin.com/in/Tito-Fleming/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  linkedin.com/in/Tito-Fleming
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://github.com/TitusFleming" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  github.com/TitusFleming
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
