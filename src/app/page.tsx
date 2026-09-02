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
  title: "Tapasya is now Hornbill Spa",
  description: "Tapasya Spa is now Hornbill Spa & Wellness in Kumily, Thekkady — the same trusted team, now in a new luxury space. Western, Ayurvedic & Asian therapies. Book on WhatsApp.",
  openGraph: {
    title: "Tapasya is now Hornbill Spa",
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