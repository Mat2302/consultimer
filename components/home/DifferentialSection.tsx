"use client";

import { 
  Globe2, 
  TrendingDown, 
  Zap, 
  Users 
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  scalability: Globe2,
  cost: TrendingDown,
  flexibility: Zap,
  workforce: Users,
};

interface DifferentialItem {
  id: string;
  title: string;
  description: string;
}

interface DifferentialsSectionProps {
  dict: {
    items: DifferentialItem[];
  };
}

export default function DifferentialsSection({ dict }: DifferentialsSectionProps) {
  return (
    // Fundo com Gradiente Laranja para dar profundidade
    <section className="py-24 bg-linear-to-r from-orange-600 to-orange-500">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items.map((item, index) => {
            const IconComponent = ICON_MAP[item.id] || Globe2;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
              >
                {/* Ícone */}
                <div className="mb-6">
                  <IconComponent 
                    size={48} 
                    strokeWidth={1.5}
                    className="text-consultimer-orange" 
                  />
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-consultimer-orange mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}