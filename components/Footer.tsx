import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SiFacebook, SiGmail, SiInstagram, SiLinkedin, SiTiktok, SiX } from "react-icons/si";


interface FooterProps {
    dict: {
        description: string,
        rights_reserved: string,
        privacy_policy: string,
        ombudsman: string
    }
}

export default function Footer({ dict }: FooterProps) {
    const countries = [
        {
            country: "Brazil",
            city: "Cosmópolis",
            flag: "/brasil_footer.png",
            email: siteConfig.contact_brazil.email,
            phone: siteConfig.contact_brazil.phone
        },
        {
            country: "USA",
            city: "Miami",
            flag: "/usa_footer.png",
            email: siteConfig.contact_usa.email,
            phone: siteConfig.contact_usa.phone
        },
        {
            country: "Chile",
            city: "Santiago",
            flag: "/chile_footer.png",
            email: siteConfig.contact_chile.email,
            phone: siteConfig.contact_chile.phone
        },
        {
            country: "México",
            city: "Querétaro",
            flag: "/mexico_footer.png",
            email: siteConfig.contact_mexico.email,
            phone: siteConfig.contact_mexico.phone
        }
    ];
    const socialLinks = [
        {
            icon: SiFacebook,
            href: siteConfig.links.facebook
        },
        {
            icon: SiX,
            href: siteConfig.links.x
        },
        {
            icon: SiInstagram,
            href: siteConfig.links.instagram
        },
        { 
            icon: SiLinkedin,
            href: siteConfig.links.linkedin
        },
        {
            icon: SiTiktok,
            href: siteConfig.links.tiktok
        }
    ];

    return (
        <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col xl:flex-row gap-12">
              <div className="xl:w-1/3 space-y-6">
                <div className="relative w-48 h-12">
                  <Image src='/consultimer-logo-branco.png' alt="Consultimer Group" fill className="object-contain"/>
                </div>

                <p className="text-sm leading-relaxed text-gray-400">
                  { dict.description }
                </p>

                <div className="flex gap-4 pt-2">
                    { socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <Link key={index}
                              href={social.href}
                              target="_blank"
                              className="bg-zinc-900 p-2 rounded-full hover:bg-consultimer-orange-hover hover:text-consultimer-white-label transition-all duration-300">
                                <Icon size={18}></Icon>
                            </Link>
                        );
                    })}
                </div>
              </div>

              <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {countries.map((country) => (
                  <div key={country.country} className="flex gap-4 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 hover:border-consultimer-orange/50 transition duration-300">
                    <div className="relative w-10 h-8 shrink-0 mt-1">
                      <Image 
                        src={country.flag} 
                        alt={`Flag of ${country.country}`} 
                        fill 
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <h4 className="font-bold text-white text-lg">
                        {country.city}, {country.country}
                      </h4>
                    
                      <a href={`mailto:${country.email}`} className="flex items-center gap-2 hover:text-consultimer-orange transition">
                        <SiGmail size={14} className="text-consultimer-orange" />
                          {country.email}
                      </a>
                    
                      <a href={`tel:${country.phone}`} className="flex items-center gap-2 hover:text-consultimer-orange transition">
                        <Phone size={14} className="text-consultimer-orange" />
                          {country.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    
            <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              <p> © 2012 - {new Date().getFullYear()} Consultimer. {dict.rights_reserved}
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition">
                  {dict.privacy_policy}
                </Link>
                <span>|</span>
                <Link href="/ombudsman" className="hover:text-white transition">
                  {dict.ombudsman}
                </Link>
              </div>
            </div>
          </div>
        </footer>
    );
}