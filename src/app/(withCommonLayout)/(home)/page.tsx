import { CTASection } from "@/components/Home/CTASection/CTASection";
import { HeroSection } from "@/components/Home/HeroSection/HeroSection";
import { HowItWorks } from "@/components/Home/HowItWorks/HowItWorks";
import { KeyFeature } from "@/components/Home/KeyFeatureSection/KeyFeature";
import { NewsletterSection } from "@/components/Home/NewsLetterSection/NewsLetterSection";
import { SubjectsCoverSection } from "@/components/Home/Subjects/SubjectsCover";
import { Testimonials } from "@/components/Home/Testimonials/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto space-y-4">
      <HeroSection></HeroSection>
      <KeyFeature></KeyFeature>
       <SubjectsCoverSection></SubjectsCoverSection>
     
      <CTASection></CTASection>
     
      <HowItWorks></HowItWorks>
       <Testimonials></Testimonials>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default HomePage;
