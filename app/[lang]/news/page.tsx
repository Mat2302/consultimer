import Link from 'next/link';
import Image from 'next/image';
import { getNewsList } from '@/config/news';

const PenIcon = () => (
  <svg className="w-4 h-4 text-consultimer-orange" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);

export default async function NewsListPage({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  const news = getNewsList(lang);

  return (
    <main className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 border-b border-zinc-200 pb-6">
          <h1 className="text-4xl font-bold text-zinc-900">
            {lang === 'en' ? 'News' : lang === 'es' ? 'Noticias' : 'Notícias'}
          </h1>
        </div>

        <div className="flex flex-col gap-12">
          {news.map((article) => {
            const [year, month, day] = article.date.split('-');

            return (
              <article key={article.slug} className="group">
                <Link href={`/${lang}/news/${article.slug}`} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex flex-col shrink-0 w-20 shadow-sm transition-transform group-hover:-translate-y-1">
                    <div className="bg-[#F26522] text-white flex flex-col items-center justify-center py-2">
                      <span className="text-2xl font-bold leading-none">{day}</span>
                      <span className="text-xs font-medium mt-1">{month}, {year}</span>
                    </div>
                    <div className="bg-zinc-100 flex items-center justify-center py-2">
                      <PenIcon />
                    </div>
                  </div>

                  <div className="relative w-full md:w-72 h-48 shrink-0 overflow-hidden bg-zinc-100">
                    {article.image ? (
                      <Image 
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-400">
                        Sem Imagem
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-start pt-2">
                    <h2 className="text-[22px] md:text-[26px] leading-tight font-medium text-[#F26522] mb-3 group-hover:underline decoration-2 underline-offset-4">
                      {article.title}
                    </h2>
                    <p className="text-zinc-600 text-base leading-relaxed line-clamp-3 md:line-clamp-4">
                      {article.description}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
        {news.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            Nenhuma notícia encontrada para este idioma.
          </div>
        )}
      </div>
    </main>
  );
}