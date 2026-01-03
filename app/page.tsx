import Image from "next/image";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContactSection from "@/components/contact";
import DisplayContact from "@/components/display-contact";
import FooterSection from "@/components/footer";
import Process from "@/components/process";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="Features">
        <Process />
        <Features />

      </section>


      <section id="Contact">
        <ContactSection />
      </section>
      <section>
        <FooterSection />

      </section>
    </>

  );
}
