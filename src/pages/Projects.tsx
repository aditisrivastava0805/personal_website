import PageLayout from '../components/PageLayout';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <PageLayout 
      title="Projects" 
      subtitle="A showcase of my work in software engineering, from full-stack applications to system design."
    >
      <Projects />
    </PageLayout>
  );
};

export default ProjectsPage; 