"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  dict: {
    home: string;
    about_us: string;
    services: string;
    products: string;
    brands: string;
    news: string;
    careers: string;
    contact: string;
    visit_store: string;
  }
}

export default function Navbar({ dict }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const locales = ['en', 'es', 'pt'];
  const currentLocale = locales.find(locale => pathname.startsWith(`/${locale}`)) || 'en';

  const getLocalizedHref = (path: string) => {
    if (path.startsWith("http")) return path;
    return path === "/" ? `/${currentLocale}` : `/${currentLocale}${path}`;
  };
  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|es|pt)/, '') || '/';
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  };

  const navLinks= [
    { name: dict.home, href: "/" },
    { name: dict.about_us, href: "/about" },
    { name: dict.services, href: "/services" },
    { name: dict.products, href: "/products" },
    { name: dict.brands, href: "/#brands" },
    { name: dict.news, href: "/news" },
    { name: dict.careers, href: siteConfig.links.jobify },
    { name: dict.contact, href: "/contact" },
  ];

  return (
    <nav className='bg-black text-consultimer-white-label w-full z-50 border-b fixed top-0 left-0 border-gray-800'>
      <div className='container mx-auto px-6 h-20 flex justify-between items-center'>
        <Link href={getLocalizedHref('/')} className="flex items-center gap-2">
          <div className="relative w-40 h-10">
            <Image src='/consultimer-logo-branco.png' alt='Consultimer Logo' fill className="object-contain"/>
          </div>
        </Link>
        
        <div className="hidden xl:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
            <Link key={link.name} href={getLocalizedHref(link.href)}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="hover:text-consultimer-orange transition-colors duration-200">
                {link.name}
            </Link>
            );
          })}
        </div>

        <div className="hidden xl:flex items-center gap-6">
          <Link href={getLocalizedHref('/products')}
            className="flex items-center gap-2 text-consultimer-orange hover:text-orange-400 font-semibold transition">
              <ShoppingCart size={20} />
                {dict.visit_store}
          </Link>

          <div className="flex items-center gap-3">
            <Link href={switchLocale('pt')}>
              <div className={`relative w-8 h-8 transition ${currentLocale === 'pt' ? 'opacity-100' : 'opacity-50'}`}>
                <Image src='/brasil_logo.png' alt='Brasil Logo' fill className="object-contain"/>
              </div>
            </Link>
            <Link href={switchLocale('en')}>
              <div className={`relative w-8 h-8 transition ${currentLocale === 'en' ? 'opacity-100' : 'opacity-50'}`}>
                <Image src='/usa_logo.png' alt='USA Logo' fill className="object-contain"/>
              </div>
            </Link>
            <Link href={switchLocale('es')}>
              <div className={`relative w-8 h-8 transition ${currentLocale === 'es' ? 'opacity-100' : 'opacity-50'}`}>
                <Image src='/spain_logo.png' alt='Spain Logo' fill className="object-contain"/>
              </div>
            </Link>
          </div>
        </div>

        <div className="xl:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-zinc-900 border-t border-gray-800">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={getLocalizedHref(link.href)}
                className="block text-white hover:text-consultimer-orange py-2"
                onClick={() => setIsOpen(false)}>
                  {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-700 my-2"></div>
            <Link href={getLocalizedHref('/products')}
              className="text-consultimer-orange font-bold flex gap-2">
                <ShoppingCart size={18} /> {dict.visit_store}
            </Link>
            <div className="flex items-center gap-3">
              <Link href={switchLocale('pt')}>
                <div className={`relative w-8 h-8 transition ${currentLocale === 'pt' ? 'opacity-100' : 'opacity-50'}`}>
                  <Image src='/brasil_logo.png' alt='Brasil Logo' fill className="object-contain"/>
                </div>
              </Link>
              <Link href={switchLocale('en')}>
                <div className={`relative w-8 h-8 transition ${currentLocale === 'en' ? 'opacity-100' : 'opacity-50'}`}>
                  <Image src='/usa_logo.png' alt='USA Logo' fill className="object-contain"/>
                </div>
              </Link>
              <Link href={switchLocale('es')}>
                <div className={`relative w-8 h-8 transition ${currentLocale === 'es' ? 'opacity-100' : 'opacity-50'}`}>
                  <Image src='/spain_logo.png' alt='Spain Logo' fill className="object-contain"/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}