import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SiGmail } from 'react-icons/si';
import { Locale, getDictionary } from '@/app/get-dictionary';

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const contactData = (dict as any).contact_page;
  if (!contactData) {
    return null;
  }

  return (
    <main className="min-h-screen bg-zinc-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            {contactData.hero.title}
          </h1>
          <p className="text-lg text-zinc-600">
            {contactData.hero.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-lg border border-zinc-100 p-8 md:p-10 space-y-10">
            {contactData.locations.map((location: any, index: number) => (
              <div 
                key={index} 
                className={index !== contactData.locations.length - 1 ? "border-b border-zinc-100 pb-8" : ""}
              >
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                  {location.title}
                </h3>
                <div className="space-y-4">
                  <a href={`mailto:${location.email}`} className="flex items-center gap-3 text-zinc-600 hover:text-consultimer-orange transition-colors">
                    <SiGmail size={18} className="text-consultimer-dark" />
                    <span className="truncate">{location.email}</span>
                  </a>
                  
                  <a href={`tel:${location.phone}`} className="flex items-center gap-3 text-zinc-600 hover:text-consultimer-orange transition-colors">
                    <Phone size={18} className="text-consultimer-dark" />
                    <span>{location.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white rounded-2xl shadow-lg border border-zinc-100 p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700">{contactData.form.name_label}</label>
                  <input type="text" id="name" name="name" required placeholder={contactData.form.name_placeholder} className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-consultimer-orange focus:border-consultimer-orange outline-none transition-all bg-zinc-50 focus:bg-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">{contactData.form.email_label}</label>
                  <input type="email" id="email" name="email" required placeholder={contactData.form.email_placeholder} className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-consultimer-orange focus:border-consultimer-orange outline-none transition-all bg-zinc-50 focus:bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700">{contactData.form.subject_label}</label>
                <input type="text" id="subject" name="subject" placeholder={contactData.form.subject_placeholder} className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-consultimer-orange focus:border-consultimer-orange outline-none transition-all bg-zinc-50 focus:bg-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700">{contactData.form.message_label}</label>
                <textarea id="message" name="message" rows={5} required placeholder={contactData.form.message_placeholder} className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-consultimer-orange focus:border-consultimer-orange outline-none transition-all resize-y bg-zinc-50 focus:bg-white"></textarea>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 mt-0.5">
                    <input id="privacy" name="privacy" type="checkbox" required className="w-5 h-5 border-zinc-300 rounded text-consultimer-orange focus:ring-consultimer-orange cursor-pointer" />
                  </div>
                  <label htmlFor="privacy" className="text-sm text-zinc-600 cursor-pointer">
                    {contactData.form.privacy_checkbox}
                  </label>
                </div>
                <div className="ml-8">
                  <Link href={`/${lang}/politica-de-privacidade`} className="text-sm font-medium text-consultimer-orange hover:underline">
                    {contactData.form.privacy_link_text}
                  </Link>
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full md:w-auto px-10 py-4 bg-consultimer-orange text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-300 shadow-md">
                  {contactData.form.submit_button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}