import { getDictionary } from '../../../get-dictionary';
import { CTASection } from '@/components/shared';
import { ServiceDetailHero, ServiceAdvantages, CommissioningTypes, CommissioningProcess } from '@/components/services/details';

export default async function ComissioningPage({ params }: { params: Promise<{ lang: 'en' | 'pt' | 'es' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const content = dict.services_details.commissioning;

  return (
    <main className="min-h-screen bg-white">
      <ServiceDetailHero dict={content.hero} lang={lang} />
      <CommissioningTypes dict={content.types_section} /> 
      <CommissioningProcess dict={content.process_section} />
      <ServiceAdvantages dict={content.documentation_section} />
      <CTASection dict={content.cta_section} lang={lang} />
    </main>
  );
}