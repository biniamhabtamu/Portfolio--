
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "biniam@example.com",
      link: "mailto:biniam@example.com",
      color: "text-red-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "biniam-habtamu",
      link: "https://linkedin.com/in/biniam-habtamu",
      color: "text-blue-400"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "biniam-habtamu",
      link: "https://github.com/biniam-habtamu",
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Portfolio",
      description: "Explore my work",
      value: "biniamhabtamu.dev",
      link: "https://biniamhabtamu.dev",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to bring your project to life? Reach out for collaborations, freelance opportunities, or tech discussions!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group cursor-pointer"
              onClick={() => window.open(method.link, '_blank')}
            >
              <CardHeader className="text-center">
                <method.icon className={`w-12 h-12 mx-auto mb-4 ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors duration-300">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-slate-400">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center gap-2 text-slate-300 group-hover:text-white transition-colors duration-300">
                  <span className="font-mono text-sm">{method.value}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Open to Opportunities
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance projects, full-time positions, and exciting collaborations. 
              Let's discuss how we can build something amazing together!
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('mailto:biniam@example.com', '_blank')}
            >
              Start a Conversation
              <Mail className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
