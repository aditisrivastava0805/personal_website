import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionCard from '../SectionCard';
import SkillsCarousel from '../SkillsCarousel';

const HomeContent = () => {
  const skillsRef = useScrollAnimation();
  const exploringRef = useScrollAnimation();

  const skillsItems = [
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Building robust server-side applications with Java, Python, and Node.js. Experience with REST APIs, microservices, and database design.',
      category: 'Core Skills'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Creating responsive user interfaces with React, TypeScript, and modern CSS. Focus on performance and user experience.',
      category: 'Core Skills'
    },
    {
      id: 'devops',
      title: 'DevOps & Infrastructure',
      description: 'Containerization with Docker, orchestration with Kubernetes, and CI/CD pipeline automation. Cloud infrastructure management.',
      category: 'Core Skills'
    },
    {
      id: 'databases',
      title: 'Database Systems',
      description: 'PostgreSQL, MongoDB, and Redis. Database design, optimization, and scaling strategies for high-performance applications.',
      category: 'Core Skills'
    },
    {
      id: 'ai-tooling',
      title: 'AI Tooling',
      description: 'Integrating AI capabilities into applications. Working with machine learning models and AI-assisted development tools.',
      category: 'Core Skills'
    }
  ];

  const exploringItems = [
    {
      id: 'ai-modernization',
      title: 'AI-Assisted Code Modernization',
      description: 'Exploring how AI can help modernize legacy codebases, improve code quality, and accelerate development workflows.',
      category: 'Learning'
    },
    {
      id: 'platform-engineering',
      title: 'Platform Engineering',
      description: 'Building internal developer platforms and tools that improve developer productivity and streamline software delivery.',
      category: 'Learning'
    },
    {
      id: 'system-design',
      title: 'Advanced System Design',
      description: 'Deepening understanding of distributed systems, scalability patterns, and architectural decision-making.',
      category: 'Learning'
    },
    {
      id: 'microservices',
      title: 'Microservices Architecture',
      description: 'Designing and implementing microservices-based systems with proper service boundaries and communication patterns.',
      category: 'Learning'
    }
  ];

  return (
    <div className="space-y-12">
      

      {/* Skills Carousel */}
      <div ref={skillsRef} className="animate-on-scroll">
        <SectionCard>
          <SkillsCarousel title="What I'm good at" items={skillsItems} />
        </SectionCard>
      </div>

      {/* Exploring Carousel */}
      <div ref={exploringRef} className="animate-on-scroll">
        <SectionCard>
          <SkillsCarousel title="What I'm exploring" items={exploringItems} />
        </SectionCard>
      </div>
    </div>
  );
};

export default HomeContent;