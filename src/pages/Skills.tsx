import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SkillsContent from '../components/content/SkillsContent';

const Skills = () => {
  const skillsRef = useScrollAnimation();

  return (
    <div ref={skillsRef} className="max-w-6xl mx-auto px-6 py-16 animate-on-scroll">
      <SkillsContent />
    </div>
  );
};

export default Skills; 