import { notFound } from 'next/navigation';
import { getNewsBySlug } from '@/config/news';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default async function NewsArticlePage({ 
  params 
}: { 
  params: Promise<{ lang: string; slug: string }> 
}) {
  const { lang, slug } = await params;
  const article = getNewsBySlug(lang, slug);
  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.frontmatter.date).toLocaleDateString(
    lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US',
    { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <main className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            {article.frontmatter.title}
          </h1>
          
          <div className="flex items-center gap-4 text-zinc-500 mb-8 border-b border-zinc-100 pb-8">
            <time dateTime={article.frontmatter.date}>{formattedDate}</time>
          </div>

          {article.frontmatter.image && (
            <div className="relative w-full h-75 md:h-112.5 rounded-2xl overflow-hidden mb-12">
              <Image 
                src={article.frontmatter.image} 
                alt={article.frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <article className="prose prose-lg prose-zinc prose-a:text-consultimer-orange hover:prose-a:text-orange-600 max-w-none">
          <ReactMarkdown>
            {article.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}