interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  activePage: string;
  onPageChange: (page: string) => void;
}

const Sidebar = ({ collapsed, onToggle, activePage, onPageChange }: SidebarProps) => {
  const menuItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Projects', icon: '💼' },
    { name: 'Experience', icon: '👔' },
    { name: 'Skills', icon: '⚡' },
    { name: 'Contact', icon: '📧' }
  ];

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} border-r border-chamoisee/30 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur transition-all duration-200`}>
      <div className="p-4 border-b border-chamoisee/30 dark:border-gray-800">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2"
        >
          {!collapsed && <span>Menu</span>}
          <span className="text-chamoisee">{collapsed ? '→' : '←'}</span>
        </button>
      </div>
      
      <nav className="p-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onPageChange(item.name)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              activePage === item.name
                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            title={collapsed ? item.name : undefined}
          >
            <span className="text-base text-chamoisee">{item.icon}</span>
            {!collapsed && <span>{item.name}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;