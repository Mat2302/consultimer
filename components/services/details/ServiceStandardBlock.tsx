import Image from 'next/image';
import { Check, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface ServiceStandardProps {
  dict: any;
}

export default function ServiceStandardBlock({ dict }: ServiceStandardProps) {
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(dict.whatsapp_message)}`;

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              {dict.title}
            </h1>
            
            <p className="text-zinc-600 text-lg font-light mb-10 leading-relaxed">
              {dict.description}
            </p>

            <ul className="space-y-5 mb-12">
              {dict.checks.map((check: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-consultimer-orange shrink-0 mt-0.5" />
                  <span className="text-zinc-700 text-base">{check}</span>
                </li>
              ))}
            </ul>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-consultimer-orange hover:text-orange-700 transition-colors uppercase tracking-wide group"
            >
              <ChevronRight className="w-5 h-5 text-consultimer-orange group-hover:translate-x-1 transition-transform" />
              {dict.cta}
            </a>
          </div>

          <div className="order-1 lg:order-2 relative h-112.5 lg:h-150 w-full rounded-4xl overflow-hidden shadow-2xl">
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