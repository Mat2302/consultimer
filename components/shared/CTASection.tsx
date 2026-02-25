"use client";

import { siteConfig } from "@/config/site";
import { ArrowRight, Mail, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  dict: {
    title: string;
    description: string;
    quote: string;
    button_primary: string;
    button_secondary: string;
    whatsapp_message: string;
  };
  lang: string;
}

export default function CTASection({ dict, lang }: CTASectionProps) {
  const encodedMessage = encodeURIComponent(dict.whatsapp_message);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-amber-500 z-0" />
      <div className="container relative z-10 mx-auto px-6 text-center" id="fale-com-especialista">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          {dict.title}
        </h2>

        <p className="text-white/90 text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          {dict.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            href={`/${lang}/contact`} 
            className="w-full sm:w-auto group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {dict.button_primary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
          >
              <MessageCircle className="w-5 h-5 fill-current" />
              {dict.button_secondary}
            </a>
        </div>

         <div className="w-16 h-1 bg-white/20 mx-auto mb-10 rounded-full" />
         <blockquote className="text-white/80 text-sm md:text-base italic max-w-2xl mx-auto font-medium">
          "{dict.quote}"
        </blockquote>
      </div>
    </section>
  );
}