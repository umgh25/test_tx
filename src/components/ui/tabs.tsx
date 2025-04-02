// components/TabNavigation.tsx
import { FC } from 'react';

interface Tab {
  id: string;
  name: string;
  active?: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
}

const TabNavigation: FC<TabNavigationProps> = ({ tabs, onTabChange }) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              tab.active
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;