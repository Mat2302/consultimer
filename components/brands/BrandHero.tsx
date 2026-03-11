import Image from 'next/image';
import Link from 'next/link';

interface BrandHeroProps {
  dict: {
    title: string;
    hero_image: string;
    brand_logo: string;
    description: string[];
    cta_button: string;
  };
  lang: string;
}

export default function BrandHero({ dict, lang }: BrandHeroProps) {
  return (
    <section className="w-full">
      <div className="relative w-full h-75 md:h-100">
        <Image
          src={dict.hero_image}
          alt={dict.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <div className="flex-1 md:pr-12">
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              {dict.title}
            </h1>
            
            <div className="space-y-4 mb-8">
              {dict.description.map((paragraph, index) => (
                <p key={index} className="text-zinc-600 text-lg leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <Link 
              href={`/${lang}/contact`}
              className="inline-block px-8 py-3 bg-consultimer-orange text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-300 shadow-sm"
            >
              {dict.cta_button}
            </Link>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-xl shadow-lg border border-zinc-100 p-8 flex items-center justify-center -mt-24 md:-mt-32 z-10">
              <div className="relative w-full h-full">
                <Image
                  src={dict.brand_logo}
                  alt="Logo do Parceiro"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}