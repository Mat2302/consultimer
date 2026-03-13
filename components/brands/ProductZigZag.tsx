import Image from 'next/image';

interface Product {
  name: string;
  description: string;
  image: string;
}

interface ProductZigZagProps {
  dict: Product[];
}

export default function ProductZigZag({ dict }: ProductZigZagProps) {
  if (!dict || dict.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col space-y-24">
          
          {dict.map((product, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${isOdd ? 'md:flex-row-reverse' : ''} items-center gap-10 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative w-full aspect-16/10 md:aspect-4/3 rounded-md overflow-hidden border-zinc-100 bg-zinc-50">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                    {product.name}
                  </h2>
                  <p className="text-zinc-700 text-lg leading-relaxed text-justify md:text-left whitespace-pre-wrap">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}