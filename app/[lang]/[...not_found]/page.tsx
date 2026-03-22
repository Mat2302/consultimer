import Link from 'next/link';
import { Home, ServerOff } from 'lucide-react';
import { Locale, getDictionary } from '@/app/get-dictionary'; 

export default async function NotFoundCatchAll({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-zinc-50 px-6">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center rounded-full bg-orange-100/50">
          <ServerOff className="w-12 h-12 text-consultimer-orange" strokeWidth={1.5} />
        </div>

        <h1 className="text-8xl font-black text-zinc-900 tracking-tighter mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
          {dict.not_found.title}
        </h2>
        
        <p className="text-zinc-600 text-lg mb-10 leading-relaxed max-w-md mx-auto">
          {dict.not_found.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href={`/${lang}`}
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-consultimer-orange text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
          >
            <Home size={20} />
            {dict.not_found.back_home}
          </Link>
          
          <Link 
            href={`/${lang}/contact`}
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-white text-zinc-700 font-semibold rounded border border-zinc-200 hover:bg-zinc-50 transition-colors duration-300"
          >
            {dict.not_found.support}
          </Link>
        </div>
      </div>
    </main>
  );
}