
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import LoadingScreen from "@/components/LoadingScreen";

// Mock Flask API service
const mockApiService = {
  getVisitorCount: () => Promise.resolve(5432),
  logVisit: () => Promise.resolve({ success: true })
};

const Index = () => {
  useEffect(() => {
    // Mock API call to Flask backend
    const logVisit = async () => {
      try {
        await mockApiService.logVisit();
        console.log("Visit logged successfully");
        const count = await mockApiService.getVisitorCount();
        console.log(`Total visitors: ${count}`);
      } catch (error) {
        console.error("Error logging visit:", error);
      }
    };

    logVisit();

    // Ensure dark mode is applied
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
    
    // Fade in elements on scroll
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.animate-fade-in').forEach(element => {
      element.classList.remove('animate-fade-in');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <LoadingScreen />
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
