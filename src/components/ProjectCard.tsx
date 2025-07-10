
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveDemo: string;
  github: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardHeader>
        <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-slate-300">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            onClick={() => window.open(project.liveDemo, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 transition-all duration-300"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
