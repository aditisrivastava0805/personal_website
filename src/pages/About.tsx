import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HomeContent from '../components/content/HomeContent';

const About = () => {
  const aboutRef = useScrollAnimation();

  return (
    <div ref={aboutRef} className="max-w-6xl mx-auto px-6 py-16 animate-on-scroll">
      <HomeContent />
    </div>
  );
};

export default About; 