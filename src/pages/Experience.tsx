import PageLayout from '../components/PageLayout';
import SectionCard from '../components/SectionCard';
import SkillTag from '../components/SkillTag';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const experienceRef = useScrollAnimation();

  const experiences = [
    {
      title: "SWE & System Integration Intern",
      company: "Ericsson BOS/vOSS-BSS",
      location: "Dallas",
      period: "2025",
      description: "Working on DevOps and GenAI modernization initiatives. Contributing to business operations support systems and network management solutions.",
      skills: ['DevOps', 'GenAI', 'Business Systems', 'Network Management']
    },
    {
      title: "Analytics & Research Intern",
      company: "ACEing Autism",
      location: "Austin",
      period: "2024",
      description: "Data analysis and performance optimization for autism-focused sports-based intervention techniques to improve participant outcomes. Worked with sensor data and real-time analytics.",
      skills: ['Data Analysis', 'Performance Optimization', 'Sensor Data', 'Real-time Analytics']
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript'],
      variant: 'primary' as const
    },
    {
      title: "Frameworks & Libraries",
      skills: ['React', 'Node.js', 'Flask', 'Express'],
      variant: 'secondary' as const
    },
    {
      title: "DevOps & Cloud",
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD'],
      variant: 'accent' as const
    },
    {
      title: "Databases",
      skills: ['PostgreSQL', 'MongoDB', 'Redis'],
      variant: 'neutral' as const
    }
  ];

  return (
    <PageLayout 
      title="Experience" 
      subtitle="Professional journey in software engineering and analytics."
    >
      <div ref={experienceRef} className="max-w-7xl mx-auto px-8 py-16 animate-on-scroll">
        <div className="space-y-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <SectionCard key={index}>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink rounded-full"></div>
                      <div>
                        <h3 className="font-serif text-2xl text-umber mb-1">{exp.title}</h3>
                        <p className="font-sans text-lg text-chamoisee">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="font-sans text-sm text-warm-gray">{exp.location}</p>
                      <p className="font-sans text-sm text-chamoisee">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="font-sans text-warm-gray leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <SkillTag key={skill} variant="neutral" size="sm">
                        {skill}
                      </SkillTag>
                    ))}
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          {/* Skills & Technologies */}
          <SectionCard>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink rounded-full"></div>
                <h3 className="font-serif text-2xl text-umber">Skills & Technologies</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-sans text-lg font-semibold text-umber">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <SkillTag key={skill} variant={category.variant} size="sm">
                          {skill}
                        </SkillTag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience; 