import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Front-End Developer",
    "React.js Specialist",
    "UX Engineer",
    "Web Solutions Architect"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Greeting Badge */}
        <div className="animate-fade-in">
          <Badge 
            variant="outline" 
            className="mb-6 px-4 py-2 text-sm border-indigo-400 text-indigo-400 bg-indigo-900/20 backdrop-blur-sm"
          >
            <span className="mr-2">🌟</span> Available for new opportunities
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="animate-fade-in delay-200">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Biniam Habtamu
            </span>
          </h1>
        </div>

        {/* Dynamic Role Rotation */}
        <div className="h-12 mb-8">
          <div 
            key={roleIndex}
            className="animate-fade-in text-2xl md:text-3xl text-slate-300"
          >
            {roles[roleIndex]}
          </div>
        </div>

        {/* Description */}
        <div className="animate-fade-in delay-300">
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building performant web applications with React, TypeScript & modern tools. 
            Focused on creating accessible, responsive interfaces with exceptional UX.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in delay-400">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/30"
              onClick={() => scrollToSection('projects')}
            >
              <span>View Projects</span>
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800/50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              onClick={() => scrollToSection('contact')}
            >
              <span>Contact Me</span>
              <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in delay-500">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-white transition-colors duration-300 group"
            aria-label="Scroll down"
          >
            <div className="animate-bounce flex flex-col items-center">
              <ChevronDown className="w-8 h-8 group-hover:text-indigo-400 transition-colors" />
              <span className="text-xs mt-2 tracking-wider font-light opacity-80 group-hover:opacity-100">
                EXPLORE MORE
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;