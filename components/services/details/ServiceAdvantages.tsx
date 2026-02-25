import Image from 'next/image';
import { Check } from 'lucide-react';

export default function ServiceAdvantages({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-100 lg:h-137 w-full rounded-4xl overflow-hidden shadow-xl">
            <Image
              src={dict.image}
              alt="Vantagens Consultimer"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
              {dict.title}
            </h2>

            {dict.text && (
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed">
                {dict.text}
              </p>
            )}

            <ul className="space-y-5">
              {(dict.checks || []).map((check: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-consultimer-orange shrink-0 mt-0.5" />
                  <span className="text-zinc-700 text-base leading-relaxed">{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}