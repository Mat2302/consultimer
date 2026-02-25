"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface TeamItem {
  title: string;
  image: string;
  items: string[];
}

interface TeamSectionProps {
  dict: {
    title: string;
    subtitle: string;
    cards: TeamItem[];
  };
}

export default function TeamSection({ dict }: TeamSectionProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            {dict.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-consultimer-dark leading-tight">
            {dict.subtitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.cards.map((card, index) => (
            <div 
              key={index}
              className="group relative flex flex-col md:block h-auto md:h-125 w-full overflow-hidden rounded-2xl shadow-lg cursor-default bg-white"
            >
              <div className="relative h-64 md:absolute md:inset-0 md:h-full w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <div className="hidden md:block absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="
                /* MOBILE */
                relative w-full p-6 bg-white flex flex-col

                /* DESKTOP */
                md:absolute md:bottom-0 md:left-0 md:h-auto md:max-h-[85%]
                md:bg-white/95 md:backdrop-blur-sm md:group-hover:bg-white
                md:transition-all md:duration-500
                md:transform md:translate-y-[calc(100%-80px)] md:group-hover:translate-y-0
              ">
                
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-consultimer-dark md:group-hover:text-consultimer-dark transition-colors duration-300">
                    {card.title}
                  </h4>
                  <div className="w-12 h-1 bg-consultimer-orange mt-2 mb-4" />
                </div>

                <ul className="
                  space-y-3 pr-2 pb-2
                  
                  /* MOBILE */
                  opacity-100
                  
                  /* DESKTOP */
                  md:overflow-y-auto md:custom-scrollbar
                  md:opacity-0 md:group-hover:opacity-100 
                  md:transition-opacity md:duration-500 md:delay-100
                ">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-consultimer-orange shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
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