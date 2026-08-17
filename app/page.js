import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DietitianBio from "@/components/DietitianBio";
import HowItWorks from "@/components/HowItWorks";
import PersonalizedPlan from "@/components/PersonalizedPlan";
import Automation from "@/components/Automation";
import HumanSupport from "@/components/HumanSupport";
import Plans from "@/components/Plans";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <DietitianBio />
      <HowItWorks />
      <PersonalizedPlan />
      <Automation />
      <HumanSupport />
      <Plans />
      <FinalCta />
      <Footer />
    </div>
  );
}
