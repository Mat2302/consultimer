import Image from "next/image";

interface CommitmentSectionProps {
  dict: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
}

export default function CommitmentSection({ dict }: CommitmentSectionProps) {
  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-1 relative h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/about/commitment.jpg" 
              alt="Engenheiro Consultimer em campo"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
             <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply" />
          </div>

          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
              {dict.title}
            </h2>
            <div className="space-y-6 text-lg text-zinc-800 leading-relaxed font-light">
              <p>{dict.p1}</p>
              <p>{dict.p2}</p>
              <p>{dict.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}