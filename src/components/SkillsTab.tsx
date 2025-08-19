const SkillsTab = () => {
  const skills = [
    'Java', 'Python', 'React', 'Node', 'Docker', 
    'Kubernetes', 'OpenShift', 'PostgreSQL', 'CI/CD'
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;