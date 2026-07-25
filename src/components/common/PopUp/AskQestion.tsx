'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RiCloseLine } from '@remixicon/react';

interface AskQuestionProps {
  isOpen: boolean;
  onClose: () => void;
  product?: {
    title: string;
    price: number | string;
    image: string;
  };
}

const AskQuestion: React.FC<AskQuestionProps> = ({
  isOpen,
  onClose,
  product = {
    title: 'Wide Leg Shorts',
    price: '$9.00',
    image: '/images/3.jpg',
  },
}) => {
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity">
      {/* Container / Card */}
      <div className="relative w-full max-w-[480px] rounded-sm bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <h3 className="text-base font-semibold text-[#222222]">
            Ask A Question
          </h3>
          <button
            onClick={onClose}
            className="flex h-6 w-6 items-center justify-center bg-[#e27c49] text-white transition-colors hover:bg-[#d06936]"
          >
            <RiCloseLine size={18} />
          </button>
        </div>

        <form  className="p-5 space-y-4">
          {/* Product Info Box */}
          <div className="flex items-center gap-4 bg-[#f9f9f9] p-3 rounded-sm">
            <div className="relative h-16 w-14 shrink-0 overflow-hidden bg-white border border-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#222222]">
                {product.title}
              </h4>
              <p className="text-sm font-medium text-gray-500 mt-1">
                {typeof product.price === 'number'
                  ? `$${product.price.toFixed(2)}`
                  : product.price}
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#333333]">
              Your Questions <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Your Questions"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full rounded-sm border border-gray-200 p-3 text-xs text-gray-700 placeholder-gray-400 focus:border-[#e27c49] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="border border-[#e27c49] px-6 py-2.5 text-xs font-semibold text-[#222222] transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#e27c49] px-7 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#d06936]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;