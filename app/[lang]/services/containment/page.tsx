import { getDictionary } from '../../../get-dictionary';
import { CTASection } from '@/components/shared';
import { ServiceDetailHero, ServiceAdvantages, ThermalProblems, ContainmentBenefits } from '@/components/services/details';

export default async function ContainmentPage({ params }: { params: Promise<{ lang: 'en' | 'pt' | 'es' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const content = dict.services_details.containment;

  return (
    <main className="min-h-screen bg-white">
      <ServiceDetailHero dict={content.hero} lang={lang} />
      <ThermalProblems dict={content.problems_section}/>
      <ContainmentBenefits dict={content.benefits_section} />
      <ServiceAdvantages dict={content.advantages} />
      <CTASection dict={content.cta_section} lang={lang} />
    </main>
  );
}