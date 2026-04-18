import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { ClientsSection } from "@/components/home/clients-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <FeaturedProjectsSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
