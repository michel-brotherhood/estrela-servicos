import FadeInSection from "@/components/FadeInSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Quais são os principais serviços oferecidos?",
      answer:
        "Oferecemos serviços de Limpeza & Conservação, Portaria & Controle de Acesso, Limpeza Hospitalar, Manutenção & Reforma, Recepção & Telefonia, Refrigeração, Gestão de Facilities e Manutenção de Áreas Verdes.",
    },
    {
      question: "Em quais regiões a Estrela Serviços atua?",
      answer:
        "Atuamos nos estados do Rio de Janeiro, São Paulo e Minas Gerais, com sede em Niterói/RJ e estações de trabalho no Centro do Rio de Janeiro, Faria Lima em São Paulo e Bairro Funcionários em Belo Horizonte.",
    },
    {
      question: "Como funciona o processo de contratação?",
      answer:
        "Entre em contato conosco através do WhatsApp, telefone ou formulário de contato. Nossa equipe fará uma análise das suas necessidades e elaborará uma proposta personalizada para sua empresa.",
    },
    {
      question: "A Estrela Serviços possui certificações?",
      answer:
        "Sim, somos uma empresa regularizada com todas as certificações necessárias para prestação de serviços terceirizados. Atuamos há mais de 33 anos no mercado com total conformidade legal.",
    },
    {
      question: "Qual o diferencial da Estrela Serviços?",
      answer:
        "Combinamos mais de 33 anos de experiência no mercado com práticas modernas de gestão, equipe qualificada e comprometimento com a excelência no atendimento. Oferecemos soluções personalizadas que geram economia e eficiência para nossos clientes.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FAQSection;
