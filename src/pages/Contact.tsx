import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactContent from '../components/content/ContactContent';

const Contact = () => {
  const contactRef = useScrollAnimation();

  return (
    <div ref={contactRef} className="max-w-6xl mx-auto px-6 py-16 animate-on-scroll">
      <ContactContent />
    </div>
  );
};

export default Contact; 