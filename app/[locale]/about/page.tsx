import AboutHero from "@/components/sections/AboutHero";
import AboutContent from "@/components/sections/AboutContent";
import Values from "@/components/sections/Values";
import { Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  
  return (
    <>
      <AboutHero locale={locale} />
      <AboutContent locale={locale} />
      <Values locale={locale} />
    </>
  );
}
