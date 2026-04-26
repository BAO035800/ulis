import OnboardingModal from "@/components/OnboardingModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareerMap from "@/components/CareerMap";
import CoreFeatures from "@/components/CoreFeatures";
import Roadmap from "@/components/Roadmap";
import TargetAudience from "@/components/TargetAudience";
import BlogTeaser from "@/components/BlogTeaser";
import Testimonials from "@/components/Testimonials";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <OnboardingModal />
      <Header />
      <main>
        <Hero />
        <CareerMap />
        <CoreFeatures />
        <Roadmap />
        <TargetAudience />
        <BlogTeaser />
        <Testimonials />
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
