import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-montserrat">
      <HeroSection />
      <ContactForm />
      <VideoSection />
      <Footer />
    </main>
  );
};

export default Index;
