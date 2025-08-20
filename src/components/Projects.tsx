import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle,_rgba(108,88,76,0.08)_1px,_transparent_1px)] before:bg-[size:16px_16px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 