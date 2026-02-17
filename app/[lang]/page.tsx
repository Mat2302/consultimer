import { getDictionary } from '../get-dictionary'
import HeroSection from '@/components/HeroSection'
import ClientsSection from '@/components/ClientsSection'
import AboutExperienceSection from '@/components/AboutExperienceSection'

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
      <AboutExperienceSection dict={dict.home.about_experience_section} />
    </main>
  )
}