import { getDictionary } from '../get-dictionary'

interface PageProps {
  params: Promise<{ lang: 'en' | 'pt' | 'es' }>
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold text-blue-900">
        {dict.home.welcome}
      </h1>
      
      <p className="text-gray-500 font-mono">
        Idioma detectado: {lang.toUpperCase()}
      </p>

      <div className="flex gap-2 text-sm text-blue-600 underline">
        <a href="/pt">Português</a>
        <a href="/en">English</a>
        <a href="/es">Español</a>
      </div>
    </div>
  )
}