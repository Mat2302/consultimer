import Image from 'next/image';
import { Check } from 'lucide-react';

export default function ServiceOfferingsCards({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-16 max-w-3xl mx-auto leading-tight">
          {dict.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dict.items.map((item: any, idx: number) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full">   
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-6">{item.title}</h3>
              
              <div className="grow">
                <div className="space-y-4 mb-6">
                  {(item.paragraphs || []).map((text: string, pIdx: number) => (
                    <p key={`p-${pIdx}`} className="text-zinc-600 text-sm leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>

                <ul className="space-y-4">
                  {(item.checks || []).map((check: string, cIdx: number) => (
                    <li key={`c-${cIdx}`} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 text-sm leading-relaxed">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}