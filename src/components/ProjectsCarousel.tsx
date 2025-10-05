import { useState } from 'react';
import { projects } from '../data/projects';

interface Project {
  id: string;
  title: string;
  image: string;
  href: string;
}

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Main Container */}
      <div className="bg-pink/10 rounded-3xl p-8 shadow-sm">
        {/* Title */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl text-umber font-medium">
            My Projects
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Projects Slider */}
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project: Project) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm mx-4">
                  {/* Project Image */}
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl text-umber font-semibold">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-warm-gray leading-relaxed">
                      A showcase of technical skills and creative problem-solving in software development.
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-pink font-medium">View Details</span>
                      <div className="w-8 h-8 bg-pink/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-all duration-200 disabled:opacity-50"
          >
            <svg className="w-5 h-5 text-umber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextProject}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-all duration-200 disabled:opacity-50"
          >
            <svg className="w-5 h-5 text-umber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-pink w-6' 
                  : 'bg-pink/30 hover:bg-pink/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
