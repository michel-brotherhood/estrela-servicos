import FadeInSection from "@/components/FadeInSection";
import GradientButton from "@/components/GradientButton";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Entre em contato e solicite um orçamento personalizado para sua empresa
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=552135878424&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20serviços%20da%20Estrela%20Serviços."
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientButton className="text-lg px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                SOLICITAR ORÇAMENTO
              </GradientButton>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
