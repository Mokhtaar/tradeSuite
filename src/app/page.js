import Navbar from "./Components/HomePage/Navbar";
import Footer from "./Components/HomePage/Footer";
import HeroSection from "./components/HomePage/HeroSection";
import OurServices from "./components/HomePage/OurServices";
import Testmonials from "./components/HomePage/Testmonials";
import HeroSection2 from "./components/HomePage/HeroSection2";
import { getCurrentUser } from "../../lib/session";

async function Home() {
  const user = await getCurrentUser();
  console.log(user);

  return (
    <>
      <div
        className="w-screen  "
        style={{
          backgroundColor: "black",
          backgroundImage:
            "linear-gradient(170deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
        }}
      >
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <HeroSection2 />
          <HeroSection />
          <OurServices />
          <Testmonials />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
