import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcess from "@/components/WorkingProcess";
import BeforeAfter from "@/components/BeforeAfter";
import TeamSection from "@/components/TeamSection";
import AppointmentSection from "@/components/AppointmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WorkingProcess />
      <BeforeAfter />
      <TeamSection />
      <AppointmentSection />
      <TestimonialsSection />
      <FAQSection />

      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
