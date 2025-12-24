import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-agrobiotech.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Agrobiotech Logo" 
              className="h-12 brightness-0 invert"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <a 
              href="mailto:contato@agrobiotech.com.br" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-montserrat">contato@agrobiotech.com.br</span>
            </a>
            <a 
              href="tel:+5500000000000" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-montserrat">(00) 0000-0000</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/70">
            <p className="font-montserrat">
              © {currentYear} Agrobiotech. Todos os direitos reservados.
            </p>
            <p className="font-montserrat">
              Inovação e sustentabilidade no agronegócio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
