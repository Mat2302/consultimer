"use client";

import Image from "next/image";

interface CertificationItem {
  name: string;
  logo: string;
}

interface CertificationsSectionProps {
  dict: {
    title: string;
    description: string;
    items: CertificationItem[];
  };
}

export default function CertificationsSection({ dict }: CertificationsSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-consultimer-dark mb-6">
            {dict.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {dict.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {dict.items.map((item, index) => (
            <div 
              key={index}
              className="
                group relative w-40 h-20 md:w-52 md:h-24 
                transition-all duration-500 ease-out
                
                /* MOBILE */
                grayscale-0 opacity-100 
                
                /* DESKTOP */
                md:grayscale md:opacity-60 
                md:hover:grayscale-0 md:hover:opacity-100
              "
            >
              <Image
                src={item.logo}
                alt={`Certificação ${item.name}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}