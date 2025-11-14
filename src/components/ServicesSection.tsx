import FadeInSection from "@/components/FadeInSection";
import ServiceCardSkeleton from "@/components/ServiceCardSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Hospital, Wrench, Phone, Wind, Briefcase, Trees } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useRef, MouseEvent, useState } from "react";

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [showSkeletons, setShowSkeletons] = useState(true);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = { ...prev, [index]: true };
      // Hide skeletons after first image loads
      if (Object.keys(newLoaded).length > 0) {
        setTimeout(() => setShowSkeletons(false), 300);
      }
      return newLoaded;
    });
  };
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
              {showSkeletons && !loadedImages[index] && <ServiceCardSkeleton />}
              <Card 
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={`service-card group relative overflow-hidden border-border h-full flex flex-col bg-card transition-opacity duration-300 ${!loadedImages[index] && showSkeletons ? 'hidden' : 'opacity-100'}`}
              >
                <div className="relative overflow-hidden h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />
                  <img
                    src={servico.image}
                    alt={servico.title}
                    onLoad={() => handleImageLoad(index)}
                    className="service-card-image w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu will-change-transform"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent opacity-25 group-hover:opacity-45 transition-opacity duration-500" />
                  
                  {/* Icon with parallax effect */}
                  <div className="service-icon absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl">
                    <servico.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Title overlay with slide effect */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 group-hover:-translate-y-2 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {servico.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow relative z-20">
                  <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    {servico.description}
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=552135878424&text=${encodeURIComponent(servico.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      Solicitar Orçamento
                    </Button>
                  </a>
                </CardContent>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
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
