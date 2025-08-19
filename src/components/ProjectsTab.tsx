const ProjectsTab = () => {
  const projects = [
    {
      title: 'Closetify',
      description: 'Wardrobe boards & AI outfits',
      tech: ['React', 'Node', 'DnD Kit', 'MongoDB']
    },
    {
      title: 'System Emulator',
      description: '5-stage pipeline',
      tech: ['C', 'ARMv8', 'caches', 'branch pred', 'LRU']
    },
    {
      title: 'Talk2Me',
      description: 'AAC communication app',
      tech: ['Flask', 'React', 'accessibility', 'PWA']
    }
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;