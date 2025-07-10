import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Tailwind CSS", "Node.js", "Socket.io", "Next.js"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Firebase", "MongoDB", "Vercel"],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Additional Skills",
      skills: ["C++", "RESTful APIs", "Responsive Design", "UX/UI Design", "Webpack"],
      color: "from-yellow-400 to-amber-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Technical Stack
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient highlight */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-green-300 transition-all duration-500">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="bg-slate-700/80 backdrop-blur-sm text-slate-200 border border-slate-600 hover:bg-slate-700 transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-blue-500/20 py-1.5 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience timeline */}
        <div className="mt-20 p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
            Development Experience
          </h3>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-slate-400">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;