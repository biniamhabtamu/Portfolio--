import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, Mail, Code2, Rocket, Zap, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import biniam from '../Assets/biniam.png'; // Make sure this path is correct

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
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-10">
            Hi there! I'm Biniam Habtamu, a passionate Front-End Developer dedicated to crafting responsive, 
            user-centric web applications. I leverage cutting-edge technologies like React.js, JavaScript, 
            Tailwind CSS, and Git to build seamless digital experiences. With a foundation in C++ and MongoDB, 
            I bridge front-end elegance with robust functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Profile image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 w-64 h-64 md:w-80 md:h-80">
                <div className="bg-slate-800 rounded-full p-1 w-full h-full overflow-hidden">
                  <img 
                    src={biniam} 
                    alt="Biniam Habtamu" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full font-bold shadow-lg">
                <span className="text-sm md:text-base">1+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                My Journey
              </h3>
              <p className="text-slate-400">
                Started coding at 16, I've evolved from basic scripts to complex applications. 
                My journey includes working with startups and established companies, solving real-world 
                problems through elegant code and intuitive interfaces.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Philosophy
              </h3>
              <p className="text-slate-400">
                I believe in building applications that are not just functional but delightful to use. 
                Clean code, performance optimization, and accessibility are at the core of everything I create.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                Beyond Coding
              </h3>
              <p className="text-slate-400">
                When I'm not coding, you'll find me contributing to open-source projects, writing tech blogs, 
                or exploring new design trends. I'm passionate about mentoring junior developers and 
                participating in hackathons.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button 
                variant="outline" 
                className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:text-white transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-white transition-all"
                onClick={() => window.open('https://linkedin.com/in/biniamhabtamu', '_blank')}
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Skills preview */}
        <div className="mt-20 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Core Development Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'MongoDB', 'Git', 'UI/UX Design'].map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-slate-700/30 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          © {new Date().getFullYear()} Biniam Habtamu. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;