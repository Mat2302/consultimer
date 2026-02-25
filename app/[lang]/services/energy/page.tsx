import { getDictionary } from '../../../get-dictionary';
import { CTASection } from '@/components/shared';
import { 
    ServiceDetailHero,
    ServiceAdvantages,
    ServiceOfferingsCards
 } from '@/components/services/details';

interface PageProps {
  params: Promise<{ lang: 'en' | 'pt' | 'es' }>;
}

export default async function InfraestruturaPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const content = dict.services_details.energy;

  return (
    <main className="min-h-screen bg-white">
      <ServiceDetailHero dict={content.hero} lang={lang} />
      <ServiceOfferingsCards dict={content.offerings} />
      <ServiceAdvantages dict={content.advantages} />
      <CTASection dict={content.cta_section} lang={lang} />
    </main>
  );
}