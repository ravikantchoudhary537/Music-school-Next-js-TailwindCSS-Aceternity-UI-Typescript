import FeatureData from "@/components/FeatureData";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseus from "@/components/WhyChooseus";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-4xl text-white">Hello</h1> */}
      <HeroSection/>
      <FeatureData/>
      <WhyChooseus/>
      <TestimonialCards/>
      <UpcomingWebinar/>
      <Instructors/>
    </main>
  );
}
