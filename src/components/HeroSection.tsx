import { Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo-agrobiotech.webp";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <img 
            src={logo} 
            alt="Agrobiotech Logo" 
            className="h-32 md:h-40 mx-auto drop-shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 
          className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Inovação e <span className="text-primary">Sustentabilidade</span>
        </h1>

        {/* Description */}
        <p 
          className="font-montserrat text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Soluções biotecnológicas para o agronegócio brasileiro. 
          Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer de forma sustentável.
        </p>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a 
            href="https://instagram.com/agrobiotech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/company/agrobiotech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://youtube.com/@agrobiotech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
