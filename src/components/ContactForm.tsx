import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Visual only - no real submission
    setIsSubmitted(true);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset after animation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-4 bg-muted/50" id="contato">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-secondary mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg">
            Deixe sua mensagem e responderemos o mais breve possível
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-xl p-8 md:p-10 border border-border"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-primary mb-4" />
              <p className="font-montserrat text-xl font-semibold text-secondary">
                Mensagem enviada com sucesso!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-montserrat text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="font-montserrat"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-montserrat text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="font-montserrat"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-montserrat text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="font-montserrat"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-montserrat text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escreva sua mensagem aqui..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="font-montserrat resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full font-montserrat font-semibold text-lg gap-2 hover:scale-[1.02] transition-transform"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
