import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-slate-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}