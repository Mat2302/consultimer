import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ServicesGridSectionProps {
  services: ServiceItem[];
  dict: {
    title: string;
    cta_card: string;
  };
  lang: string;
}

export default function ServicesGridSection({ services, dict, lang }: ServicesGridSectionProps) {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            {dict.title}
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative w-20 h-20 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.image} 
                  alt={`Ilustração do serviço: ${service.title}`}
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-zinc-600 font-light leading-relaxed mb-8 grow">
                {service.description}
              </p>
              
              <Link 
                href={`/${lang}${service.link}`} 
                className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors mt-auto uppercase tracking-wide"
              >
                {dict.cta_card}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}