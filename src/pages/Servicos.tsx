import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeInSection from "@/components/FadeInSection";
import ClientsSection from "@/components/ClientsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Sparkles, Shield, Hospital, Wrench, Phone as PhoneIcon, Wind, Briefcase } from "lucide-react";

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
      <section className="bg-primary text-white py-20">
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
                <Card className="border-border hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-2 hover:scale-105 transform-gpu perspective-1000 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={servico.image} 
                    alt={servico.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-accent/90 p-3 rounded-full">
                      <servico.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-center text-primary">
                    {servico.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <CardDescription className="text-base leading-relaxed">
                    {servico.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground italic">
                    {servico.details}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-white w-full transition-all duration-300 group-hover:shadow-lg"
                    onClick={() => {
                      const whatsappUrl = `https://api.whatsapp.com/send?phone=552135878424&text=${encodeURIComponent(servico.whatsappMessage)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SOLICITE O SEU ORÇAMENTO
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe é especializada e treinada para ajudar a sua empresa nas melhores
            soluções que o mercado pode oferecer.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6"
            onClick={() => window.open('https://api.whatsapp.com/send?phone=552135878424&text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
          >
            <Phone className="mr-2 h-5 w-5" />
            SOLICITAR ORÇAMENTO
          </Button>
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
