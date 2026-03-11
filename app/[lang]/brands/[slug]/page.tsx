import { getDictionary, Locale } from "@/app/get-dictionary";
import { BrandHero } from '@/components/brands';

interface PageProps {
    params: Promise<{ lang: Locale, slug: string }>
}

export default async function BrandsPage({ params }: PageProps) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);
    const brandData = (dict as any).brands_details?.[slug];

    return (
        <main className="w-full bg-white pb-20">
            <BrandHero dict={brandData.hero} lang={lang}/>
        </main>
    );
}