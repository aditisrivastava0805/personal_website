import { useState } from 'react';

interface ToggleBlockProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const ToggleBlock = ({ title, children, defaultOpen = false }: ToggleBlockProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-chamoisee/30 dark:border-gray-800 p-3 bg-accent">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
      >
        <span className="text-chamoisee dark:text-gray-400">
          {isOpen ? '▼' : '▶'}
        </span>
        <span className="text-[15px] font-medium text-umber dark:text-gray-100">
          {title}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 ml-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default ToggleBlock;