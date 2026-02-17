"use client";
import Image from "next/image";

interface ClientsSectionProps {
  dict: {
    title: string;
  };
}

const CLIENTS = [
  { name: "Cargill", logo: "/clients_section/cargill-cliente-consultimer.jpg" },
  { name: "Oracle", logo: "/clients_section/oracle-cliente-consultimer.jpg" },
  { name: "Amazon", logo: "/clients_section/amazon-cliente-consultimer.jpg" },
  { name: "Microsoft", logo: "/clients_section/microsoft-cliente-consultimer.jpg" },
  { name: "Unisys", logo: "/clients_section/unisys-cliente-consultimer.jpg" },
  { name: "Bradesco", logo: "/clients_section/bradesco-cliente-consultimer.jpg" },
];

export default function ClientsSection({ dict }: ClientsSectionProps) {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl font-bold text-zinc-900">
          {dict.title}
        </h2>
      </div>
      
      <div className="relative w-200 mx-auto mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-scroll gap-16 items-center">
          {CLIENTS.map((client, index) => (
            <div 
              key={`logo-1-${index}`} 
              className="relative w-40 h-20 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <div className="relative w-full h-full">
                 <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* MAP duplicado para manter o loop infinito sem animação de pulo */}
          {CLIENTS.map((client, index) => (
            <div 
              key={`logo-2-${index}`} 
              className="relative w-40 h-20 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <div className="relative w-full h-full">
                 <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}