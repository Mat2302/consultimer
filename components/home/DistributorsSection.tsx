"use client";

import Image from "next/image";

interface DistributorItem {
  name: string;
  logo: string;
}

interface DistributorsSectionProps {
  dict: {
    title: string;
    items: DistributorItem[];
  };
}

export default function DistributorsSection({ dict }: DistributorsSectionProps) {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100" id="brands">
      <div className="container mx-auto px-6">
        
        <h3 className="text-2xl font-bold text-center text-consultimer-dark uppercase tracking-widest mb-12">
          {dict.title}
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {dict.items.map((item, index) => (
            <div 
              key={index}
              className="
                relative w-32 h-16 md:w-40 md:h-20 
                transition-all duration-300
                
                /* MOBILE */
                grayscale-0 opacity-80
                
                /* DESKTOP */
                md:grayscale md:opacity-50 
                md:hover:grayscale-0 md:hover:opacity-100"
            >
              <Image
                src={item.logo}
                alt={`Distribuidor ${item.name}`}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}