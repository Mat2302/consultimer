import { getDictionary } from '../../get-dictionary';
import { TeamSection, CTASection } from '@/components/shared';
import { ServicesGridSection, ServicesHeroSection } from '@/components/services';

interface PageProps {
  params: Promise<{ lang: 'en' | 'pt' | 'es' }>;
}

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white">
      <ServicesHeroSection dict={dict.services.hero_section} />
      <ServicesGridSection 
        services={dict.home.services_section.items} 
        dict={dict.home.services_section} 
        lang={lang} 
      />
      <TeamSection dict={dict.services.team_section} />
      <CTASection dict={dict.home.cta_section} lang={lang} />
    </main>
  );
}