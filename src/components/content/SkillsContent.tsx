import PageHeader from '../PageHeader';
import HeadingBlock from '../blocks/HeadingBlock';
import TextBlock from '../blocks/TextBlock';
import ToggleBlock from '../blocks/ToggleBlock';
import TodoBlock from '../blocks/TodoBlock';

const SkillsContent = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <PageHeader 
        title="Skills"
        subtitle="Technical skills and areas of expertise."
      />

      <TextBlock>
        My technical skills span full-stack development, systems programming, and DevOps practices. I'm constantly learning and exploring new technologies.
      </TextBlock>

      <ToggleBlock title="Core Technologies">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Web Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express', 'Flask', 'HTML/CSS', 'REST APIs'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ToggleBlock>

      <ToggleBlock title="DevOps & Infrastructure">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Containerization & Orchestration</h4>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'OpenShift'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">CI/CD & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['CI/CD', 'Git', 'Linux', 'Shell Scripting'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ToggleBlock>

      <ToggleBlock title="Databases & Storage">
        <TextBlock>
          Experience with both relational and NoSQL databases: PostgreSQL, MongoDB, Redis. Understanding of database design, optimization, and scaling strategies.
        </TextBlock>
      </ToggleBlock>

      <HeadingBlock level="h2">Current Learning Goals</HeadingBlock>
      
      <div className="space-y-3">
        <TodoBlock defaultChecked={true}>
          Master Kubernetes deployment patterns and best practices
        </TodoBlock>
        <TodoBlock defaultChecked={true}>
          Deep dive into AI-assisted code modernization tools
        </TodoBlock>
        <TodoBlock defaultChecked={false}>
          Explore platform engineering and infrastructure as code
        </TodoBlock>
        <TodoBlock defaultChecked={false}>
          Learn advanced system design patterns
        </TodoBlock>
        <TodoBlock defaultChecked={false}>
          Study distributed systems and microservices architecture
        </TodoBlock>
      </div>

      <HeadingBlock level="h2">Certifications & Education</HeadingBlock>
      
      <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
        <h3 className="text-lg font-semibold mb-2 text-umber dark:text-gray-100">University of Texas at Austin</h3>
        <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300">
          Bachelor of Science in Computer Science
        </p>
        <p className="text-sm text-chamoisee dark:text-gray-400 mt-1">
          Relevant Coursework: Data Structures, Algorithms, Systems Programming, Database Systems, Software Engineering
        </p>
      </div>
    </div>
  );
};

export default SkillsContent;