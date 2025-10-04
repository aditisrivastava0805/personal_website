import PageLayout from '../components/PageLayout';
import SectionCard from '../components/SectionCard';
import SkillTag from '../components/SkillTag';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const skillsRef = useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL'],
      variant: 'primary' as const
    },
    {
      title: "Web Technologies", 
      skills: ['React', 'Node.js', 'Express', 'Flask', 'HTML/CSS', 'REST APIs'],
      variant: 'secondary' as const
    },
    {
      title: "DevOps & Infrastructure",
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'Git', 'Linux'],
      variant: 'accent' as const
    },
    {
      title: "Databases & Storage",
      skills: ['PostgreSQL', 'MongoDB', 'Redis'],
      variant: 'neutral' as const
    }
  ];

  const learningGoals = [
    { text: "Master Kubernetes deployment patterns and best practices", completed: true },
    { text: "Deep dive into AI-assisted code modernization tools", completed: true },
    { text: "Explore platform engineering and infrastructure as code", completed: false },
    { text: "Learn advanced system design patterns", completed: false },
    { text: "Study distributed systems and microservices architecture", completed: false }
  ];

  return (
    <PageLayout 
      title="Skills" 
      subtitle="Technical expertise and continuous learning in software engineering."
    >
      <div ref={skillsRef} className="max-w-7xl mx-auto px-8 py-16 animate-on-scroll">
        <div className="space-y-12">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SectionCard key={index}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink rounded-full"></div>
                    <h3 className="font-serif text-2xl text-umber">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill} variant={category.variant}>
                        {skill}
                      </SkillTag>
                    ))}
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          {/* Learning Goals */}
          <SectionCard>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink rounded-full"></div>
                <h3 className="font-serif text-2xl text-umber">Current Learning Goals</h3>
              </div>
              <div className="space-y-3">
                {learningGoals.map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      goal.completed 
                        ? 'bg-pink border-pink' 
                        : 'border-umber/30'
                    }`}>
                      {goal.completed && (
                        <svg className="w-3 h-3 text-cream" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`font-sans text-warm-gray ${
                      goal.completed ? 'line-through opacity-60' : ''
                    }`}>
                      {goal.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* Education */}
          <SectionCard>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink rounded-full"></div>
                <h3 className="font-serif text-2xl text-umber">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-lg font-semibold text-umber">University of Texas at Austin</h4>
                <p className="font-sans text-warm-gray">Bachelor of Science in Computer Science</p>
                <p className="font-sans text-sm text-chamoisee">
                  Relevant Coursework: Data Structures, Algorithms, Systems Programming, Database Systems, Software Engineering
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills; 