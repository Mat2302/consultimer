import { X } from 'lucide-react';

export default function ThermalProblems({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-zinc-900 text-zinc-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            {dict.title}
          </h2>
          <div className="w-16 h-1 bg-consultimer-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(dict.items || []).map((problem: string, idx: number) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800/80 transition-colors duration-300"
            >
              <div className="relative shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                <X className="w-5 h-5 text-red-400" strokeWidth={2.5} />
              </div>
              
              <p className="text-zinc-300 leading-relaxed text-base">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}