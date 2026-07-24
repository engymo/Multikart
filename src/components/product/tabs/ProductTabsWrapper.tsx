'use client';

import React, { useState } from 'react';
import { TabType } from '@/types/product-tabs';
import { DescriptionTab } from './DescriptionTab';
import { ReviewTab } from './ReviewTab';
import { QATab } from './QATab';

export const ProductTabsWrapper: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('description');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'description', label: 'Description' },
    { id: 'review', label: 'Review' },
    { id: 'qa', label: 'Q & A' },
  ];

  return (
    <div className="container mx-auto lg:px-20 px-4 mt-5">
      {/* Tab Buttons */}
      <div className="flex items-center gap-2 border border-[rgb(238,238,238)] p-3 bg-[rgb(248,248,248)]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? 'bg-[#E27C49] text-white border-[#E27C49] shadow-sm'
                  : 'bg-white text-[#333333] border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active Tab View */}
      <div className="bg-white border border-gray-100 rounded-sm p-6 lg:p-8 shadow-sm">
        {activeTab === 'description' && <DescriptionTab />}
        {activeTab === 'review' && <ReviewTab />}
        {activeTab === 'qa' && <QATab />}
      </div>
    </div>
  );
};

export default ProductTabsWrapper;