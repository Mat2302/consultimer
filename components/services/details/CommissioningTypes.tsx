"use client";

import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function CommissioningTypes({ dict }: { dict: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
              {dict.title}
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              {dict.description}
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {(dict.items || []).map((item: any, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg shadow-sm border border-zinc-100 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center gap-4 p-5 text-left transition-colors hover:bg-zinc-50/50"
                  >
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-consultimer-orange shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-zinc-900 shrink-0" />
                    )}
                    <span className={`text-lg font-medium ${isOpen ? 'text-consultimer-orange' : 'text-zinc-900'}`}>
                      {item.title}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 text-zinc-600 leading-relaxed border-t border-zinc-50 whitespace-pre-line">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}