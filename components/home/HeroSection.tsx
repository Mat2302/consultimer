import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
    dict: {
        title: string;
        description: string;
        button: string;
    };
    lang: string;
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="text-consultimer-white-label relative w-full h-160 items-center">
      <div className="absoule isnet-0 -z-10 py-20">
          <Image src="/hero-bg.jpg" alt="Empresa especializada em Data Center" fill
            className="object-cover object-center md:object-right" priority/>
          <div className="absolute inset-0 bg-linear-to-r from-consultimer-dark via-consultimer-dark/80 to-transparent pointer-events-none md:hidden"></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-2xl'>
          <h1 className='text-3xl md:text-4xl font-bold mb-6'>
            {dict.title}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl font-light text-consultimer-description-homepage-header">
            {dict.description}
          </p>
          
          <Link 
            href={`/${lang}/services`}
            className="inline-block bg-consultimer-orange hover:bg-consultimer-orange-hover text-white font-bold py-3 px-8 rounded transition duration-300 text-center"
          >
            {dict.button}
          </Link>
        </div>
      </div>
    </section>
  )
}