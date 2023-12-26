import Navbar from "./Components/HomePage/Navbar";
import Footer from "./Components/HomePage/Footer";
import HeroSection from "./components/HomePage/HeroSection";
import OurServices from "./components/HomePage/OurServices";
import Testmonials from "./components/HomePage/Testmonials";
import { getCurrentUser } from "../../lib/session";

async function Home() {
  const user = await getCurrentUser();
  console.log(user);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <OurServices />
        <Testmonials />
      </main>
      <Footer />
    </>
  );
}

export default Home;
