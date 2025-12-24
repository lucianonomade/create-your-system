import { Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo-agrobiotech.webp";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
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
          className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Site em <span className="text-primary">Manutenção</span>
        </h1>

        {/* Description */}
        <p 
          className="font-montserrat text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Estamos trabalhando para melhorar sua experiência. 
          Em breve voltaremos com novidades. Enquanto isso, entre em contato conosco 
          ou acompanhe nossas redes sociais.
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
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/company/agrobiotech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://youtube.com/@agrobiotech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
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
