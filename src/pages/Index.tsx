import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppIconsSection from "@/components/AppIconsSection";
import LogoMarquee from "@/components/LogoMarquee";
import SpeedSection from "@/components/SpeedSection";
import UseCasesSection from "@/components/UseCasesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <AppIconsSection />
        <LogoMarquee />
        <div id="product">
          <SpeedSection />
        </div>
        <div id="individuals">
          <UseCasesSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="business">
          <TestimonialsSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="about">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;