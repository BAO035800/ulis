import OnboardingModal from "@/components/OnboardingModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CareerMap from "@/components/CareerMap";
import MiniPathQuiz from "@/components/MiniPathQuiz";
import CoreFeatures from "@/components/CoreFeatures";
import Roadmap from "@/components/Roadmap";
import TargetAudience from "@/components/TargetAudience";
import BlogTeaser from "@/components/BlogTeaser";
import Testimonials from "@/components/Testimonials";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import SectionProgressDots from "@/components/SectionProgressDots";
import CursorFollower from "@/components/CursorFollower";
import Mascot from "@/components/Mascot";

export default function Home() {
  return (
    <>
      <OnboardingModal />
      <CursorFollower />
      <SectionProgressDots />
      <Header />

      <main>
        <Hero />

        {/* white → white but with stats card on top */}
        <div id="stats">
          <Stats />
        </div>

        <SectionDivider fromColor="#ffffff" toColor="#f8fafc" variant="wave" />
        <CareerMap />

        <SectionDivider fromColor="#f8fafc" toColor="#ffffff" variant="curve" />

        {/* Mini path quiz with mascot peeking */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -top-8 right-4 z-10 hidden lg:block"
            aria-hidden
          >
            <Mascot pose="point" size={110} />
          </div>
          <MiniPathQuiz />
        </div>

        <CoreFeatures />

        <SectionDivider fromColor="#ffffff" toColor="#f8fafc" variant="wave" flip />
        <Roadmap />

        <SectionDivider fromColor="#ffffff" toColor="#ffffff" variant="curve" />
        <TargetAudience />

        <SectionDivider fromColor="#ffffff" toColor="#f8fafc" variant="wave" />
        <BlogTeaser />

        <SectionDivider fromColor="#f8fafc" toColor="#ffffff" variant="curve" flip />
        <Testimonials />

        <SignupForm />
      </main>

      <Footer />
    </>
  );
}
