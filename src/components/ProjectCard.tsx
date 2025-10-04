interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    image: string;
    href: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-2xl border border-umber/20 bg-white/90 shadow-sm hover:shadow-pink-gradient hover:border-pink/30 transition hover:-translate-y-0.5 focus-within:shadow-pink-gradient">
      {/* Preview image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
        <img 
          className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" 
          loading="lazy" 
          alt={project.title}
          src={project.image}
        />
      </div>
      
      {/* Bottom bar (title + eye button) */}
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="font-semibold text-lg text-umber tracking-tight">
          {project.title}
        </h3>
        
                {/* Eye button */}
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-umber/30 bg-white/80 backdrop-blur hover:bg-pink/90 hover:border-pink/50 transition focus:outline-none focus:ring-2 focus:ring-pink/40">
          <svg 
            className="h-5 w-5 text-umber group-hover:text-cream" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
            />
          </svg>
        </button>
      </div>
      
      {/* Invisible link covering the entire card */}
      <a 
        href={project.href}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} project`}
      >
        <span className="sr-only">View {project.title} project</span>
      </a>
    </div>
  );
};

export default ProjectCard; 