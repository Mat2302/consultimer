import Image from 'next/image';
import Link from 'next/link';

interface BrandHeroProps {
  dict: {
    title: string;
    hero_image: string;
    brand_logo: string;
    description: string[];
    cta_button: string;
    catalog_button?: string;
    catalog_link?: string;
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

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-start pt-6 md:pt-16 pb-16">
          <div className="flex flex-col items-start md:w-2/3 md:pr-12 w-full">
            <div className="flex flex-row items-end md:block w-full mb-6">
              <div className="relative -mt-16 mr-5 md:mr-0 md:mt-0 md:absolute md:-top-24 md:right-6 w-28 h-28 md:w-64 md:h-64 bg-white shadow-xl rounded-xl flex items-center justify-center p-3 z-10 border border-zinc-100 shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={dict.brand_logo}
                    alt="Logo do Parceiro"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight text-left pb-1 md:pb-0 md:mb-6">
                {dict.title}
              </h1>
            </div>
            
            <div className="space-y-4 mb-8 w-full text-left">
              {dict.description.map((paragraph, index) => (
                <p key={index} className="text-zinc-700 text-lg leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap justify-start items-center gap-4 w-full">
              <Link 
                href={`/${lang}/contato`}
                className="inline-block px-8 py-3 bg-consultimer-orange text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-300 shadow-sm"
              >
                {dict.cta_button}
              </Link>

              {dict.catalog_button && dict.catalog_link && (
                <a 
                  href={dict.catalog_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white text-consultimer-orange border-2 border-consultimer-orange font-semibold rounded hover:bg-orange-50 transition-colors duration-300 shadow-sm text-center"
                >
                  {dict.catalog_button}
                </a>
              )}
            </div>
          </div>
          <div className="hidden md:block md:w-1/3"></div>
        </div>
      </div>
    </section>
  );
}