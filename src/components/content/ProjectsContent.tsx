import PageHeader from '../PageHeader';
import HeadingBlock from '../blocks/HeadingBlock';
import DatabaseTable from '../blocks/DatabaseTable';
import TextBlock from '../blocks/TextBlock';

const ProjectsContent = () => {
  const projectsData = [
    { name: 'Closetify', tech: 'React, Node, MongoDB', status: 'Active', link: '/#closetify' },
    { name: 'System Emulator', tech: 'C, ARMv8', status: 'Complete', link: '/#emulator' },
    { name: 'Talk2Me', tech: 'Flask, React', status: 'Active', link: '/#talk2me' }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <PageHeader 
        title="Projects"
        subtitle="Software projects showcasing full-stack development and systems programming."
      />

      <TextBlock>
        Here are some of the key projects I've worked on, spanning web applications, systems programming, and accessibility tools.
      </TextBlock>

      <HeadingBlock level="h2">Featured Projects</HeadingBlock>
      
      <DatabaseTable 
        columns={['Name', 'Tech', 'Status', 'Link']}
        data={projectsData}
      />

      <div className="space-y-4">
        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <h3 className="text-xl font-semibold mb-2 text-umber dark:text-gray-100">Closetify</h3>
          <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300 mb-3">
            Wardrobe management application with AI-powered outfit suggestions. Features drag-and-drop interface for organizing clothing items and smart recommendations.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'MongoDB', 'DnD Kit'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <h3 className="text-xl font-semibold mb-2 text-umber dark:text-gray-100">System Emulator</h3>
          <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300 mb-3">
            5-stage pipeline processor emulator with cache simulation, branch prediction, and LRU replacement policy implementation.
          </p>
          <div className="flex flex-wrap gap-2">
            {['C', 'ARMv8', 'Caches', 'Branch Prediction', 'LRU'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <h3 className="text-xl font-semibold mb-2 text-umber dark:text-gray-100">Talk2Me</h3>
          <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300 mb-3">
            Augmentative and Alternative Communication (AAC) application designed for accessibility. Progressive Web App with offline capabilities.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Flask', 'React', 'PWA', 'Accessibility'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;