import { Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SustainabilitySectionProps {
  dict: {
    title: string;
    p1: string;
    p2: string;
    ombudsman_button: string;
    card1_title: string;
    card1_description: string;
    card2_title: string;
    card2_description: string;
  };
  lang: string;
}

export default function SustainabilitySection({ dict, lang }: SustainabilitySectionProps) {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8 tracking-tight max-w-2xl">
              {dict.title}
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-light max-w-2xl">
              <p>{dict.p1}</p>
              <p>{dict.p2}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-green-100 text-green-700 rounded-xl shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-1">{dict.card1_title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {dict.card1_description}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-zinc-900 mb-1">{dict.card2_title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  {dict.card2_description}
                </p>
                <Link 
                  href={`/${lang}/ombudsman`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors group"
                >
                  {dict.ombudsman_button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}