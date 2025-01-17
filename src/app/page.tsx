import Header from '../components/Header';
import Intro from '../components/Intro';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="animate-fade-up">
          <Intro />
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Education />
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Skills />
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Projects />
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <Certifications />
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}