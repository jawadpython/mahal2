import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import { Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  
  return (
    <>
      <PortfolioHero locale={locale} />
      <PortfolioGallery locale={locale} />
    </>
  );
}
