import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { productQAData } from '@/data/productTabsData';

export const QATab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg text-[#333333]">
          Have Doubts Regarding This Product ?
        </h3>
        <button className="px-5 py-2.5 bg-[#F5F5F5] hover:bg-gray-200 text-[#333333] text-xs font-semibold rounded transition-colors">
          Post Your Question
        </button>
      </div>

      <div className="divide-y divide-gray-100 space-y-6 pt-2">
        {productQAData.map((item, index) => (
          <div key={item.id} className={index !== 0 ? 'pt-6' : ''}>
            <div className="space-y-3">
              {/* Question */}
              <div className="flex items-start gap-3">
                <span className="bg-gray-100 text-gray-600 font-semibold text-xs px-2 py-1 rounded">
                  Q{index + 1}
                </span>
                <h4 className="font-bold text-sm text-[#333333] flex-1 mt-0.5">
                  {item.question}
                </h4>
                <div className="flex items-center gap-3 text-gray-400 text-sm shrink-0">
                  <button className="flex items-center gap-1 hover:text-gray-600 transition-colors">
                    <i className="ri-hand-coin-line text-base" />
                    <span className="text-xs">{item.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-600 transition-colors">
                    <i className="ri-dislike-line text-base" />
                    <span className="text-xs">{item.dislikes}</span>
                  </button>
                </div>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-3">
                <span className="bg-[#E27C49] text-white font-semibold text-xs px-2 py-1 rounded">
                  A{index + 1}
                </span>
                <p className="text-xs text-[#777777] flex-1 leading-relaxed mt-0.5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};