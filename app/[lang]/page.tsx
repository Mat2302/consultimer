import { getDictionary } from '../get-dictionary'
import HeroSection from '@/components/HeroSection'

interface PageProps {
  params: Promise<{ lang: 'en' | 'pt' | 'es' }>
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-white">
      <HeroSection dict={dict.home.hero} />
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            {dict.home.clients_section.title}
          </h2>
          
          <div className="text-gray-400 p-10 border-2 border-dashed border-gray-200 rounded-lg">
            [Espaço para Logos dos Clientes]
          </div>
        </div>
      </section>
    </main>
  )
}