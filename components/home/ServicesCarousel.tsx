"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function ServicesCarousel({ dict }: any) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const items = dict.items;
  const extendedItems = [...items, ...items, ...items]; 
  const startIndex = items.length;

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 344; 
      carouselRef.current.scrollLeft = startIndex * cardWidth;
    }
  }, [startIndex]);

  const handleInfiniteScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = 344;
    const scrollLeft = container.scrollLeft;
    const totalContentWidth = items.length * cardWidth;

    if (scrollLeft >= totalContentWidth * 2) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = scrollLeft - totalContentWidth;
    }
    
    if (scrollLeft <= cardWidth) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = scrollLeft + totalContentWidth;
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container || isTransitioning) return;

    setIsTransitioning(true);
    const scrollStep = 344;

    container.style.scrollBehavior = "smooth";
    container.scrollBy({ left: direction === "left" ? -scrollStep : scrollStep });

    setTimeout(() => {
      handleInfiniteScroll();
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-consultimer-dark mb-10">
          {dict.title}
        </h2>

        <div className="relative group">
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-20 p-2 text-consultimer-orange hover:scale-110 transition-all duration-300 hidden xl:block"
          >
            <ChevronLeft size={60} strokeWidth={1.5} />
          </button>

          <div 
            ref={carouselRef}
            onScroll={() => {
              if (!isTransitioning) handleInfiniteScroll();
            }}
            className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide no-scrollbar snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extendedItems.map((service: any, index: number) => (
              <div 
                key={index}
                className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[320px] snap-center bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-120"
              >
                <div>
                  <div className="relative w-18 h-18 mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-5">
                    {service.description}
                  </p>
                </div>

                <Link 
                  href={service.link} 
                  className="mt-6 inline-flex items-center text-consultimer-orange font-bold text-sm hover:translate-x-2 transition-all uppercase tracking-wider group/link"
                >
                  {dict.cta_card}
                  <ArrowRight size={18} className="ml-2 group-hover/link:ml-4 transition-all" />
                </Link>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll("right")}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-20 p-2 text-consultimer-orange hover:scale-110 transition-all duration-300 hidden xl:block"
          >
            <ChevronRight size={60} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}