import { getDictionary } from '../get-dictionary'
import { CTASection, TeamSection } from '@/components/shared'
import { 
  HeroSection,
  ClientsSection,
  AboutExperienceSection,
  ServicesCarousel,
  DifferentialsSection,
  CertificationsSection,
  DistributorsSection
} from '@/components/home'

interface PageProps {
  params: Promise<{ lang: 'en' | 'pt' | 'es' }>
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-white">
      <HeroSection dict={dict.home.hero} lang={lang} />
      <ClientsSection dict={dict.home.clients_section} />
      <AboutExperienceSection dict={dict.home.about_experience_section} lang={lang} />
      <ServicesCarousel dict={dict.home.services_section} />
      <TeamSection dict={dict.home.team_section} />
      <DifferentialsSection dict={dict.home.differentials_section} />
      <CertificationsSection dict={dict.home.certifications_section} />
      <DistributorsSection dict={dict.home.distributors_section} lang={lang} />
      <CTASection dict={dict.home.cta_section} lang={lang} />
    </main>
  )
}