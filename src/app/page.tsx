import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Signature } from "@/components/site/Signature";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";

export const metadata = {
  title: "Tapasya Spa & Wellness — Kumily, Thekkady",
  description: "Tapasya Spa & Wellness in Kumily, Thekkady — Western, Ayurvedic & Asian massage therapies. Hot stone, bamboo, Balinese, Thai, facials & more. Book on WhatsApp.",
  openGraph: {
    title: "Tapasya Spa & Wellness — Kumily, Thekkady",
    description: "Kumily's trusted spa for Western, Ayurvedic & Asian therapies. Steps from the Elephant Camp & Periyar boat counter.",
  }
};

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Signature />
      <TrustStrip />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}