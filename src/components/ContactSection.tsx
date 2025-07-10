import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "biniam@example.com",
      link: "mailto:biniamhabtamu320@gmail.com",
      color: "text-red-400",
      bg: "bg-red-500/10"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "biniam-habtamu",
      link: "https://linkedin.com/in/biniamhabtamu",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "biniam-habtamu",
      link: "https://github.com/biniamhabtamu",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      icon: Globe,
      title: "Portfolio",
      description: "Explore my work",
      value: "biniamhabtamu.dev",
      link: "https://biniamhabtamu.dev",
      color: "text-green-400",
      bg: "bg-green-500/10"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect!
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to bring your project to life? Reach out for collaborations, freelance opportunities, or tech discussions!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <a 
              key={index} 
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                className={`${method.bg} backdrop-blur-sm border-slate-700 transition-all duration-500 hover:scale-105 group cursor-pointer overflow-hidden h-full`}
              >
                <div className="relative">
                  <div className={`absolute inset-0 ${method.bg.replace('10', '20')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="text-center relative z-10">
                    <div className="flex justify-center">
                      <div className={`p-4 rounded-full ${method.bg} mb-4`}>
                        <method.icon className={`w-8 h-8 ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-500">
                      {method.title}
                    </CardTitle>
                    <p className="text-slate-400">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-2 text-slate-300 group-hover:text-white transition-colors duration-300">
                      <span className="font-mono text-sm">{method.value}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              Open to Opportunities
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto relative z-10">
              I'm currently available for freelance projects, full-time positions, and exciting collaborations. 
              Let's discuss how we can build something amazing together!
            </p>
            <Button 
              asChild
              size="lg"
              className="relative z-10 bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <a href="mailto:biniamhabtamu320@gmail.com">
                <span>Start a Conversation</span>
                <Mail className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;