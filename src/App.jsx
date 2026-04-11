import { useEffect } from "react";
import BackgroundLayout from "./components/layout/BackgroundLayout";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Screenshots from "./components/sections/Screenshots";
import Statistics from "./components/sections/Statistics";
import Faq from "./components/sections/Faq";
import Download from "./components/sections/Download";

function App() {
  useEffect(() => {
    document.title =
      "CURRO – Běžecká aplikace pro tracking, statistiky a komunitu";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "CURRO je běžecká aplikace pro sledování času, vzdálenosti a tempa. Zaznamenávej běhy, sleduj statistiky, buduj konzistenci a sdílej aktivitu s komunitou."
      );
    }
  }, []);

  return (
    <BackgroundLayout>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Statistics />
        <Screenshots />
        <Faq />
        <Download />
      </main>
      <Footer />
    </BackgroundLayout>
  );
}

export default App;
