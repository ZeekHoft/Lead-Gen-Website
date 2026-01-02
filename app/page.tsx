import Image from "next/image";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContactSection from "@/components/contact";
import DisplayContact from "@/components/display-contact";

export default function Home() {
  return (
    <>
      <section>
        <HeroSection />

      </section>
      <section id="Features">
        <Features />

      </section>
      <section id="Contact">
        <ContactSection />
      </section>
      <section >
        <DisplayContact />
      </section>
    </>

  );
}
