const ExperienceTab = () => {
  const experiences = [
    {
      title: 'Ericsson SWE Intern',
      description: 'BOS/vOSS-BSS',
      location: 'Dallas, 2025'
    },
    {
      title: 'Texas Guadaloop',
      description: 'Analytics',
      location: 'Austin'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-gray-300 dark:border-gray-700 pl-6"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {exp.description} — {exp.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;