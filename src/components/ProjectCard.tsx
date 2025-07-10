import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:shadow-2xl group overflow-hidden h-full flex flex-col">
      {/* Project Image with Skeleton Loader */}
      <div className="relative overflow-hidden aspect-video">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 animate-pulse" />
        )}
        
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
            <div className="text-slate-400 text-center p-4">
              <div className="bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📁</span>
              </div>
              <p className="text-sm">Project Image</p>
            </div>
          </div>
        ) : (
          <img 
            src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={handleImageError}
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <CardTitle className="text-white text-xl">
              {project.title}
            </CardTitle>
            <p className="text-slate-300 text-sm mt-1 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </CardTitle>
          <p className="text-slate-300 text-sm line-clamp-2">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="pt-0 mt-auto">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors duration-200 text-xs py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              asChild
              size="sm" 
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button 
              asChild
              size="sm" 
              variant="outline"
              className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 transition-all duration-300"
            >
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;