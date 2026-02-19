import { getDictionary } from '../../get-dictionary';
import {
    PageHeader,
    WhoWeAreSection,
    CommitmentSection,
    SustainabilitySection,
    CTASection
} from '@/components/about'

interface PageProps {
  params: Promise<{ lang: 'en' | 'pt' | 'es' }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title={dict.about.header.title} 
        description={dict.about.header.description} 
      />

      <WhoWeAreSection dict={dict.about.who_we_are_section} />
      <CommitmentSection dict={dict.about.commitments_section} />
      <SustainabilitySection dict={dict.about.sustainability_section} lang={lang} />
      <CTASection dict={dict.home.cta_section} lang={lang} />
    </main>
  );
}