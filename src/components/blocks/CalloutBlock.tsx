interface CalloutBlockProps {
  children: React.ReactNode;
  icon?: string;
}

const CalloutBlock = ({ children, icon }: CalloutBlockProps) => {
  return (
    <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-4 bg-accent dark:bg-gray-900">
      <div className="flex items-start gap-3">
        {icon && <span className="text-base mt-0.5 text-chamoisee">{icon}</span>}
        <div className="text-[15px] leading-7 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CalloutBlock;