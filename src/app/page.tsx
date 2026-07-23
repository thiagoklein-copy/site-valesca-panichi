import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredentialsBar from "@/components/CredentialsBar";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredentialsBar />
        <About />
        <Approach />
        <Services />
        <Process />
        <FAQ />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
