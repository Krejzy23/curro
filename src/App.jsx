import BackgroundLayout from "./components/layout/BackgroundLayout";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Screenshots from "./components/sections/Screenshots";
import Statistic from "./components/sections/Statistic";
import Faq from "./components/sections/Faq";
import Download from "./components/sections/Download";

function App() {
  return (
    <BackgroundLayout>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Statistic />
        <Screenshots />
        <Faq />
        <Download />
      </main>

      <Footer />
    </BackgroundLayout>
  );
}

export default App;
