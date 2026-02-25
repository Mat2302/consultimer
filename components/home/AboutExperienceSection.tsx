"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ExperienceSectionProps {
  dict: {
    title: string;
    description_1: string;
    description_2: string;
    cta_button: string;
    locations: {
      queretaro: string;
      miami: string;
      santiago: string;
      cosmopolis: string;
    };
  };
  lang: string;
}

export default function ExperienceSection({ dict, lang }: ExperienceSectionProps) {
  const locations = [
    { id: "usa", name: dict.locations.miami, top: "20%", left: "43%" },
    { id: "mex", name: dict.locations.queretaro, top: "25%", left: "28%" },
    { id: "bra", name: dict.locations.cosmopolis, top: "64%", left: "66%" },
    { id: "chl", name: dict.locations.santiago, top: "64%", left: "53%" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-consultimer-dark leading-tight">
              {dict.title}
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>{dict.description_1}</p>
              <p>{dict.description_2}</p>
            </div>

            <div className="pt-4">
              <Link 
                href={`/${lang}/about`}
                className="inline-flex items-center gap-2 text-consultimer-orange font-bold hover:text-consultimer-orange-hover transition-colors uppercase text-sm tracking-wide"
              >
                {dict.cta_button}
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-125 aspect-square">
              <div className="relative w-full h-full">
                 <Image
                  src="/earth-globe.jpg"
                  alt="Consultimer Global Presence"
                  fill
                  className="object-contain"
                />
              </div>

              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="absolute group cursor-pointer"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-consultimer-orange opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-consultimer-orange border border-amber-700 shadow-md"></span>

                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    <div className="bg-black/80 text-white text-xs py-1 px-3 rounded-md backdrop-blur-sm shadow-lg">
                      {loc.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}