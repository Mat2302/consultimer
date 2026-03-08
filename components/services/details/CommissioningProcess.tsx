import Image from 'next/image';

export default function CommissioningProcess({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
            {dict.title}
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(dict.steps || []).map((step: any, idx: number) => (
            <div 
              key={idx} 
              className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-lg shadow-zinc-200/40 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-16 h-16 shrink-0 bg-zinc-50 rounded-xl p-2 flex items-center justify-center">
                  {step.icon ? (
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-zinc-300 rounded-full" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 leading-snug">
                  {step.title}
                </h3>
              </div>
              {step.text && (
                <p className="text-zinc-600 leading-relaxed text-base whitespace-pre-line">
                  {step.text}
                </p>
              )}

              {step.checks && step.checks.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {step.checks.map((check: string, checkIdx: number) => (
                    <li key={checkIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 shrink-0 mt-2"></span>
                      <span className="text-zinc-700 text-base leading-relaxed">
                        {check}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}