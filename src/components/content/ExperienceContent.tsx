import PageHeader from '../PageHeader';
import HeadingBlock from '../blocks/HeadingBlock';
import TextBlock from '../blocks/TextBlock';
import DividerBlock from '../blocks/DividerBlock';

const ExperienceContent = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <PageHeader 
        title="Experience"
        subtitle="Professional experience in software engineering and analytics."
      />

      <div className="space-y-6">
        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-semibold text-umber dark:text-gray-100">Ericsson SWE Intern</h3>
            <span className="text-sm text-chamoisee dark:text-gray-400">2025</span>
          </div>
          <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300 mb-2">
            <strong>BOS/vOSS-BSS</strong> — Dallas
          </p>
          <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300">
            Working on DevOps and GenAI modernization initiatives. Contributing to business operations support systems and network management solutions.
          </p>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-semibold text-umber dark:text-gray-100">Texas Guadaloop</h3>
            <span className="text-sm text-chamoisee dark:text-gray-400">Austin</span>
          </div>
          <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300 mb-2">
            <strong>Analytics</strong>
          </p>
          <p className="text-[15px] leading-7 text-gray-700 dark:text-gray-300">
            Data analysis and performance optimization for hyperloop pod systems. Working with sensor data and real-time analytics.
          </p>
        </div>
      </div>

      <DividerBlock />

      <HeadingBlock level="h2">Skills & Technologies</HeadingBlock>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
                          {['Java', 'Python', 'C', 'JavaScript', 'TypeScript'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {skill}
                </span>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'Flask', 'Express'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  {skill}
                </span>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">DevOps & Cloud</h3>
          <div className="flex flex-wrap gap-2">
                          {['Docker', 'Kubernetes', 'OpenShift', 'CI/CD'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  {skill}
                </span>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Databases</h3>
          <div className="flex flex-wrap gap-2">
                          {['PostgreSQL', 'MongoDB', 'Redis'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;