import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HomeContent from '../components/content/HomeContent';
import FeaturedIn from '../components/FeaturedIn';
import ExpandableBars from '../components/ExpandableBars';

const About = () => {
  const aboutRef = useScrollAnimation();

  return (
    <div>
      {/* Full Width Expandable Bars */}
      <div className="w-full px-4 py-8">
        <ExpandableBars />
      </div>
      
      {/* Original About Content */}
      <div ref={aboutRef} className="max-w-6xl mx-auto px-6 py-16 animate-on-scroll">
        <HomeContent />
      </div>
      
      {/* Featured In Section */}
      <FeaturedIn />
    </div>
  );
};

export default About; 