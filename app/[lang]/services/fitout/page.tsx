import { getDictionary } from '../../../get-dictionary';
import { ServiceStandardBlock } from '@/components/services/details';

export default async function FitoutPage({ params }: { params: Promise<{ lang: 'en' | 'pt' | 'es' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const phoneNumber = "551938129712"; 

  return (
    <main className="min-h-screen bg-white">
      <ServiceStandardBlock dict={dict.services_details.fitout} />
    </main>
  );
}