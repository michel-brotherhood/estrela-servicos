import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Hospital, Wrench, Phone, Wind, Briefcase, Trees } from "lucide-react";
import { NavLink } from "@/components/NavLink";

// Importar as imagens dos serviços
import limpezaConservacao from "@/assets/services/limpeza-conservacao.webp";
import portariaAcesso from "@/assets/services/portaria-controle-acesso.webp";
import limpezaHospitalar from "@/assets/services/limpeza-hospitalar.webp";
import manutencaoReforma from "@/assets/services/manutencao-reforma.webp";
import recepcaoTelefonia from "@/assets/services/recepcao-telefonia.webp";
import refrigeracao from "@/assets/services/refrigeracao.webp";
import gestaoFacilities from "@/assets/services/gestao-facilities.webp";
import manutencaoAreasVerdes from "@/assets/services/manutencao-areas-verdes.webp";

const ServicesSection = () => {
  const servicos = [
    {
      icon: Sparkles,
      title: "Limpeza & Conservação",
      image: limpezaConservacao,
      description: "Ambiente limpo e organizado com equipamentos modernos e produtos de alta qualidade.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Limpeza & Conservação."
    },
    {
      icon: Shield,
      title: "Portaria & Controle de Acesso",
      image: portariaAcesso,
      description: "Segurança patrimonial com profissionais treinados e capacitados.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Portaria & Controle de Acesso."
    },
    {
      icon: Hospital,
      title: "Limpeza Hospitalar",
      image: limpezaHospitalar,
      description: "Profissionais treinados com protocolos rigorosos de higienização.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Limpeza Hospitalar."
    },
    {
      icon: Wrench,
      title: "Manutenção & Reforma",
      image: manutencaoReforma,
      description: "Equipe técnica especializada em diversos tipos de manutenção predial.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Manutenção & Reforma."
    },
    {
      icon: Phone,
      title: "Recepção & Telefonia",
      image: recepcaoTelefonia,
      description: "Atendimento profissional e acolhedor para seus clientes e visitantes.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Recepção & Telefonia."
    },
    {
      icon: Wind,
      title: "Refrigeração",
      image: refrigeracao,
      description: "Manutenção e instalação de sistemas de refrigeração e climatização.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Refrigeração."
    },
    {
      icon: Briefcase,
      title: "Gestão de Facilities",
      image: gestaoFacilities,
      description: "Gestão completa e integrada de todos os serviços de sua empresa.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Gestão de Facilities."
    },
    {
      icon: Trees,
      title: "Áreas Verdes",
      image: manutencaoAreasVerdes,
      description: "Manutenção e cuidado profissional de jardins e áreas verdes.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Manutenção de Áreas Verdes."
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Soluções completas em terceirização de mão de obra
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicos.map((servico, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col bg-card">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={servico.image}
                    alt={servico.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm p-3 rounded-full">
                    <servico.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {servico.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                    {servico.description}
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=552135878424&text=${encodeURIComponent(servico.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Solicitar Orçamento
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={800}>
          <div className="text-center">
            <NavLink to="/servicos">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Todos os Serviços
              </Button>
            </NavLink>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ServicesSection;
