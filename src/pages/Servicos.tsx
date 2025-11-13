import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeInSection from "@/components/FadeInSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Hospital, Wrench, Phone as PhoneIcon, Wind, Briefcase, Trees } from "lucide-react";

// Importar as imagens dos serviços
import limpezaConservacao from "@/assets/services/limpeza-conservacao.webp";
import portariaAcesso from "@/assets/services/portaria-controle-acesso.webp";
import limpezaHospitalar from "@/assets/services/limpeza-hospitalar.webp";
import manutencaoReforma from "@/assets/services/manutencao-reforma.webp";
import recepcaoTelefonia from "@/assets/services/recepcao-telefonia.webp";
import refrigeracao from "@/assets/services/refrigeracao.webp";
import gestaoFacilities from "@/assets/services/gestao-facilities.webp";

const Servicos = () => {
  const servicos = [
    {
      icon: Sparkles,
      title: "Limpeza & Conservação",
      image: limpezaConservacao,
      description:
        "Um ambiente limpo e organizado é fundamental para a produção da sua empresa. A fim de satisfazer essa necessidade, a Estrela Serviços se ocupa dessas funções, permitindo a você mais tempo para cuidar do seu negócio.",
      details: "Serviços de limpeza profissional com equipamentos modernos e produtos de alta qualidade.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Limpeza & Conservação."
    },
    {
      icon: Shield,
      title: "Portaria & Controle de Acesso",
      image: portariaAcesso,
      description:
        "Serviço de segurança patrimonial desarmada, fornecendo mão de obra nas funções de Porteiro e Vigia, que são treinados e capacitados para identificação e controle de acesso de pessoas, veículos e materiais.",
      details: "Profissionais uniformizados e capacitados para garantir a segurança do seu patrimônio.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Portaria & Controle de Acesso."
    },
    {
      icon: Hospital,
      title: "Limpeza Hospitalar",
      image: limpezaHospitalar,
      description:
        "Profissionais adequadamente treinados para trabalhar em ambientes hospitalares, com preocupação com a limpeza e higienização indispensável para garantir a segurança de pacientes e profissionais da saúde.",
      details: "Seguimos protocolos rigorosos de higienização e biossegurança.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Limpeza Hospitalar."
    },
    {
      icon: Wrench,
      title: "Manutenção & Reforma",
      image: manutencaoReforma,
      description:
        "Serviços de manutenção predial e pequenas reformas. Experiência em piso: azulejos, alvenaria comum, hidráulica, elétrica, lavagem e pinturas em geral.",
      details: "Equipe técnica especializada em diversos tipos de manutenção predial.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Manutenção & Reforma."
    },
    {
      icon: PhoneIcon,
      title: "Recepção & Telefonia",
      image: recepcaoTelefonia,
      description:
        "Serviço personalizado de acordo com os valores da sua empresa. Além disso, qualificamos nossos funcionários para desempenharem o atendimento ao público. São responsáveis pelo controle de acesso (recepcionista), incluindo sistemas eletrônicos, e pela realização de chamadas telefônicas ativas e passivas.",
      details: "Primeiro contato profissional e acolhedor com seus clientes e visitantes.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Recepção & Telefonia."
    },
    {
      icon: Wind,
      title: "Refrigeração: Manutenção e Instalação",
      image: refrigeracao,
      description:
        "Serviços relacionados a desgaste, correção de instalações mal feitas e demais serviços para ajudar na climatização. Manutenção preventiva e corretiva de sistemas de ar condicionado e ventilação.",
      details: "Técnicos especializados em sistemas de climatização residencial e comercial.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Refrigeração: Manutenção e Instalação."
    },
    {
      icon: Briefcase,
      title: "Gestão de Facilities",
      image: gestaoFacilities,
      description:
        "Serviço de gestão e otimização a partir da análise das necessidades dos nossos clientes e das suas características de negócio, desenvolvendo um plano de implantação de múltiplos serviços integrados, melhorando a performance das operações da empresa.",
      details: "Solução completa para terceirização de serviços com gestão integrada.",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para serviços de Gestão de Facilities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">NOSSOS SERVIÇOS</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluções completas em terceirização de mão de obra e gestão de facilities
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col bg-card">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={servico.image}
                      alt={servico.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                      <servico.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {servico.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {servico.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 mb-6 italic border-l-4 border-primary pl-4">
                      {servico.details}
                    </p>
                    <a
                      href={`https://api.whatsapp.com/send?phone=552135878424&text=${encodeURIComponent(servico.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-base font-semibold">
                        Solicitar Orçamento
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>


      {/* Especialidades Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent">
            Mão de Obra Especializada Disponível
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              "Motorista",
              "Motociclista",
              "Recepcionista",
              "Porteiro/Vigia",
              "Telefonista",
              "Mensageiro",
              "Copeira",
              "Segurança Desarmada",
              "Pedreiro",
              "Bombeiro Hidráulico",
              "Jardineiro",
              "Eletricista",
              "Auxiliar de Serviços Gerais",
              "Auxiliar de Limpeza",
              "Técnico em Refrigeração"
            ].map((especialidade, index) => (
              <div 
                key={index}
                className="bg-card p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <p className="text-sm font-medium text-foreground">{especialidade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicos;
