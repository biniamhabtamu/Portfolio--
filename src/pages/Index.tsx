
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, Mail, Code2, Rocket, Zap, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured online store with product filtering, cart management, and secure checkout.",
      tech: ["React.js", "Tailwind CSS", "Context API", "Firebase"],
      liveDemo: "#",
      github: "#",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Real-time Chat Application",
      description: "Interactive messaging platform supporting 1:1 chats, group conversations, and message history.",
      tech: ["React.js", "Socket.io", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Dire-Dev Web App",
      description: "Developer collaboration hub for code sharing, project tracking, and resource management.",
      tech: ["React.js", "RESTful APIs", "Tailwind CSS", "Git"],
      liveDemo: "#",
      github: "#",
      image: "photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  const features = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "Prioritizing maintainable, well-documented code."
    },
    {
      icon: Users,
      title: "User-First Mindset",
      description: "Designing intuitive interfaces with optimal UX/UI."
    },
    {
      icon: Zap,
      title: "Performance-Driven",
      description: "Optimized solutions for speed and scalability."
    },
    {
      icon: Rocket,
      title: "Continuous Learner",
      description: "Always exploring new tech stacks and best practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Hi there! I'm Biniam Habtamu, a passionate Front-End Developer dedicated to crafting responsive, 
            user-centric web applications. I leverage cutting-edge technologies like React.js, JavaScript, 
            Tailwind CSS, and Git to build seamless digital experiences. With a foundation in C++ and MongoDB, 
            I bridge front-end elegance with robust functionality.
          </p>
        </div>

        {/* Why Work With Me */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are some highlights from my portfolio, showcasing my expertise in React.js and modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700 text-center">
        <p className="text-slate-400">
          ✨ Crafting digital experiences that merge creativity with functionality—one line of code at a time. ✨
        </p>
        <p className="text-slate-500 mt-2">
          © 2024 Biniam Habtamu. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
