import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-8 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 gradient-blob"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 gradient-blob"></div>
      </div>
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 