import CTA from "@/components/design/CTA";
import FAQ from "@/components/design/FAQ";
import Feature from "@/components/design/Features";
import Hero from "@/components/design/Hero";
import HowItWorks from "@/components/design/HowItWorks";
import Pricing from "@/components/design/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
