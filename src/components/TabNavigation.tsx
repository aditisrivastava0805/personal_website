interface TabNavigationProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const TabNavigation = ({ activePage, onPageChange }: TabNavigationProps) => {
  const tabs = [
    { name: 'Home', icon: '🏠' },
    { name: 'Projects', icon: '💼' },
    { name: 'Experience', icon: '👔' },
    { name: 'Skills', icon: '⚡' },
    { name: 'Contact', icon: '📧' }
  ];

  return (
    <div className="mb-8">
      <nav className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onPageChange(tab.name)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              activePage === tab.name
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            <span className="text-base text-chamoisee">{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;