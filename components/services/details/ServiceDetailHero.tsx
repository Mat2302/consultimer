import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ServiceDetailHero({ dict, lang }: { dict: any, lang: string }) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">
              {dict.title}
            </h1>
            <div className="space-y-6 text-zinc-600 text-lg font-light mb-10">
              {dict.description.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <Link 
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors uppercase tracking-wide group"
            >
              <ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
              {dict.cta}
            </Link>
          </div>

          <div className="relative h-100 lg:h-125 w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={dict.image}
              alt={dict.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}