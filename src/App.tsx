import { SiteProvider } from "./context/SiteContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductStory } from "./components/ProductStory";
import { Products } from "./components/Products";
import { Ingredients } from "./components/Ingredients";
import { HowTo } from "./components/HowTo";
import { Numbers } from "./components/Numbers";
import { BrandStory } from "./components/BrandStory";
import { Membership } from "./components/Membership";
import { Opportunity } from "./components/Opportunity";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProductDialog } from "./components/ProductDialog";

export default function App() {
  return (
    <SiteProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <ProductStory />
        <Products />
        <Ingredients />
        <HowTo />
        <Numbers />
        <BrandStory />
        <Membership />
        <Opportunity />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ProductDialog />
    </SiteProvider>
  );
}
