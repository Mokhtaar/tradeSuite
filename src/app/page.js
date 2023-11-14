import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import Testmonials from "./components/Testmonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <OurServices />
      <Testmonials />
    </main>
  );
}
