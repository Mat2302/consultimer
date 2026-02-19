import Image from "next/image";

interface WhoWeAreSectionProps {
  dict: {
    title: string;
    p1: string;
    p2: string;
  };
}

export default function WhoWeAreSection({ dict }: WhoWeAreSectionProps) {
  return (
    <section className="pt-24 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
              {dict.title}
            </h2>
            <div className="space-y-6 text-lg text-zinc-800 leading-relaxed font-light">
              <p>{dict.p1}</p>
              <p>{dict.p2}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/about/who-we-are.jpg" 
              alt="Equipe Consultimer em reunião"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}