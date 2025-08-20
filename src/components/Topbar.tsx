

interface TopbarProps {
  onCommandPalette: () => void;
  onToggleDarkMode: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Topbar = ({ onCommandPalette, onToggleDarkMode, searchQuery, onSearchChange }: TopbarProps) => {


  return (
    <header className="sticky top-0 z-30 border-b border-chamoisee/30 dark:border-gray-800 bg-white dark:bg-gray-950/70 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-umber dark:text-gray-100">Portfolio</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-64 px-3 py-1.5 text-sm border border-chamoisee/30 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>

          <button
            onClick={onCommandPalette}
            className="px-3 py-1.5 text-sm border border-chamoisee/30 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            ⌘K
          </button>

          <button
            onClick={onToggleDarkMode}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            🌙
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;