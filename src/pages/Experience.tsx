import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ExperienceContent from '../components/content/ExperienceContent';

const Experience = () => {
  const experienceRef = useScrollAnimation();

  return (
    <div ref={experienceRef} className="max-w-6xl mx-auto px-6 py-16 animate-on-scroll">
      <ExperienceContent />
    </div>
  );
};

export default Experience; 