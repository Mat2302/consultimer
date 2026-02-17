import { getDictionary } from '../get-dictionary'
import HeroSection from '@/components/HeroSection'
import ClientsSection from '@/components/ClientsSection'

interface PageProps {
  params: Promise<{ lang: 'en' | 'pt' | 'es' }>
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-white">
      <HeroSection dict={dict.home.hero} />
      <ClientsSection dict={dict.home.clients_section} />
    </main>
  )
}