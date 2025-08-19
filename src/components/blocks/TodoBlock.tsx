import { useState } from 'react';

interface TodoBlockProps {
  children: React.ReactNode;
  defaultChecked?: boolean;
}

const TodoBlock = ({ children, defaultChecked = false }: TodoBlockProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-start gap-3">
      <button
        onClick={() => setChecked(!checked)}
        className={`mt-1 w-4 h-4 rounded border-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          checked
            ? 'bg-blue-500 border-blue-500 text-white'
            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        }`}
      >
        {checked && (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      <div className={`text-[15px] leading-7 ${
        checked 
          ? 'text-gray-500 dark:text-gray-500 line-through' 
          : 'text-gray-700 dark:text-gray-300'
      }`}>
        {children}
      </div>
    </div>
  );
};

export default TodoBlock;