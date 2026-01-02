import Image from "next/image";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="Features">
        <Features />

      </section>
    </>

  );
}
