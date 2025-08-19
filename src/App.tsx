import { useState } from 'react';
import AboutTab from './components/AboutTab';
import ProjectsTab from './components/ProjectsTab';
import ExperienceTab from './components/ExperienceTab';
import SkillsTab from './components/SkillsTab';
import ContactTab from './components/ContactTab';

function App() {
  const [activeTab, setActiveTab] = useState('About');

  const tabs = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'About':
        return <AboutTab />;
      case 'Projects':
        return <ProjectsTab />;
      case 'Experience':
        return <ExperienceTab />;
      case 'Skills':
        return <SkillsTab />;
      case 'Contact':
        return <ContactTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aditi Srivastava</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Building useful systems with clean code and clear thinking.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap space-x-2 border-b border-gray-200 dark:border-gray-800 pb-2 mb-8 sticky top-0 bg-white dark:bg-gray-950 z-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App;