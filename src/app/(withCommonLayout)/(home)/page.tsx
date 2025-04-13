import { CTASection } from "@/components/Home/CTASection/CTASection";
import { HeroSection } from "@/components/Home/HeroSection/HeroSection";
import { HowItWorks } from "@/components/Home/HowItWorks/HowItWorks";
import { KeyFeature } from "@/components/Home/KeyFeatureSection/KeyFeature";
import { NewsletterSection } from "@/components/Home/NewsLetterSection/NewsLetterSection";
import { SubjectsCoverSection } from "@/components/Home/Subjects/SubjectsCover";
import { Testimonials } from "@/components/Home/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="container mx-auto space-y-4">
      <HeroSection></HeroSection>
      <KeyFeature></KeyFeature>
      <Testimonials></Testimonials>
      <CTASection></CTASection>
      <SubjectsCoverSection></SubjectsCoverSection>
      <HowItWorks></HowItWorks>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default HomePage;
