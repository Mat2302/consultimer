import Image from 'next/image';
import { Check } from 'lucide-react';

export default function ContainmentBenefits({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
            {dict.title}
          </h2>
          <div className="w-12 h-1 bg-consultimer-orange mx-auto mb-6"></div>
          {dict.description && (
            <p className="text-zinc-600 text-lg leading-relaxed">
              {dict.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {(dict.cards || []).map((card: any, idx: number) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-6 h-14 flex items-center">
                {card.icon ? (
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 bg-zinc-100 rounded-lg" />
                )}
              </div>

              <h3 className="text-lg font-bold text-zinc-900 mb-6 leading-snug">
                {card.title}
              </h3>

              {card.checks && card.checks.length > 0 && (
                <ul className="space-y-4 mt-auto">
                  {card.checks.map((check: string, checkIdx: number) => (
                    <li key={checkIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-consultimer-orange shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-zinc-600 text-sm leading-relaxed">
                        {check}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}