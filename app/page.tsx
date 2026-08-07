import Loader from "@/components/Loader";
import FloatingPetals from "@/components/FloatingPetals";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BridalShowcase from "@/components/BridalShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Loader />
      <FloatingPetals />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BridalShowcase />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}