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
  title: "Tapasya is Now Hornbill Spa | Spa & Wellness",
  description: "Tapasya is now Hornbill Spa — a wellness destination in Kumily, Thekkady offering relaxing Western and Asian massage therapies. Call +91 75111 93223.",
  openGraph: {
    title: "Tapasya is Now Hornbill Spa | Spa & Wellness",
    description: "Tapasya is now Hornbill Spa — Kumily, Thekkady's wellness destination for Western, Ayurvedic & Asian massage therapies.",
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