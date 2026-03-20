import { getDictionary, Locale } from '@/app/get-dictionary';
import Link from 'next/link';

export default async function BrandsMasterPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const brandsData = (dict as any).brands_page;
  if (!brandsData) return null;

  return (
    <main className="min-h-screen bg-zinc-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            {brandsData.hero.title}
          </h1>
          <p className="text-lg text-zinc-600">
            {brandsData.hero.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandsData.list.map((brand: any, index: number) => (
            <Link 
              href={`/${lang}/brands/${brand.slug}`} 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-full h-32 mb-6 flex items-center justify-center bg-zinc-50 rounded-lg p-4 group-hover:bg-zinc-100 transition-colors">
                <img 
                  src={brand.logo} 
                  alt={`Logo ${brand.name}`} 
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
              </div>

              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                {brand.name}
              </h2>
              <p className="text-zinc-600 mb-6 grow">
                {brand.short_description}
              </p>

              <span className="inline-flex items-center gap-2 text-consultimer-orange font-semibold group-hover:gap-3 transition-all">
                {brandsData.view_more}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}