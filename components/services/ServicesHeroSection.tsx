import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicesHeroSectionProps {
  dict: {
    title: string;
    p1: string;
    p2: string;
    cta_button: string;
  };
}

export default function ServicesHeroSection({ dict }: ServicesHeroSectionProps) {
  return (
    <section className="relative bg-zinc-950 pt-22 pb-14 lg:pt-30 lg:pb-18 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              {dict.title}
            </h1>
            <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed mb-10">
              <p>{dict.p1}</p>
              <p>{dict.p2}</p>
            </div>
            
            <Link 
              href="#fale-com-especialista"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 group"
            >
              <span>{dict.cta_button}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative h-100 lg:h-150 hidden md:block rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/services/hero.jpg"
              alt="Manutenção de Rack de Data Center"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-200 h-200 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}