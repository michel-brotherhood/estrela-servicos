import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeInSection from "@/components/FadeInSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Briefcase } from "lucide-react";
import teamPhoto from "@/assets/team-photo.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import limpezaVidros from "@/assets/gallery/limpeza-vidros.webp";
import equipeTrabalho from "@/assets/gallery/equipe-trabalho.webp";
import uniforme from "@/assets/gallery/uniforme.webp";

const Sobre = () => {
  const valores = [
    {
      icon: Eye,
      title: "VISÃO",
      description:
        "Fixar-se no segmento de terceirização de mão de obra e gestão de facilities no Sudeste, proporcionando constante excelência no serviço prestado e assim atingir solidez e competitividade no mercado.",
    },
    {
      icon: Target,
      title: "MISSÃO",
      description:
        "Satisfazer cada necessidade dos nossos clientes, a fim de trazer uma boa relação de Custo x Benefício.",
    },
    {
      icon: Briefcase,
      title: "SOBRE A TERCEIRIZAÇÃO",
      description:
        "Serviço que estabelece uma relação de parceria, reduzindo custos e aumentando a produtividade, permitindo à empresa dar maior foco às tarefas essencialmente ligadas ao negócio em que atua.",
    },
  ];

  const clientes = [
    "Ambev", 
    "Econovilas", 
    "Cyrela Brazil Realty", 
    "Honda Hayasa",
    "AGO Mercedes-Benz", 
    "Ecopetrol", 
    "Governo do Estado do Rio de Janeiro",
    "Fundação Oswaldo Cruz (Fiocruz)",
    "Instituto de Biologia do Exército", 
    "Instituto Rio Metrópole", 
    "Mundivox Comunicações",
    "Fernandes Racel Engenharia", 
    "Instituto Infnet", 
    "Pinto de Almeida",
    "Montreal Engenharia", 
    "RAC Engenharia",
    "CRT - Companhia Rio Trens",
    "SGA Segurança"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Team Photo */}
      <section className="relative text-white py-20 pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={teamPhoto} 
            alt="Equipe Estrela Serviços" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradiente para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/90" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">SOBRE NÓS</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            33 anos de experiência no mercado de terceirização de mão de obra
          </p>
          <div className="mt-8 inline-block">
            <div className="flex items-center justify-center gap-2 text-sm md:text-base opacity-90">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="font-semibold">Nossa Equipe Dedicada</span>
              <div className="w-12 h-0.5 bg-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações da Empresa */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-accent text-center">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                O Grupo Estrela Serviços dedica-se na prestação de serviços de <strong>terceirização de mão de obra e gestão de facilities</strong>. Atuamos no mercado há <strong>33 anos</strong> e estamos presentes nos estados do <strong>Rio, São Paulo e Minas</strong>.
              </p>
              <p>
                A sede da Estrela Services está localizada em <strong>Niterói/RJ</strong>, na Av. Rui
                Barbosa, nº 139 - São Francisco. Além da sede, a empresa possui{" "}
                <strong>estações de trabalho em sistema de coworking</strong> para o time operacional
                em três importantes centros urbanos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Centro do Rio de Janeiro/RJ</strong> - Rua México, 168</li>
                <li><strong>Faria Lima em São Paulo/SP</strong> - Av. Brigadeiro Faria Lima</li>
                <li><strong>Bairro Funcionários em Belo Horizonte/MG</strong> - Rua Paraíba, 330</li>
              </ul>
              <p>
                A empresa atua nos estados do <strong>Rio de Janeiro, São Paulo e Minas Gerais</strong>,
                com presença consolidada há <strong>33 anos</strong> no mercado (considerando a empresa predecessora).
              </p>
            </div>
          </FadeInSection>

          {/* Gallery Carousel */}
          <FadeInSection delay={200} className="mt-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-none overflow-hidden">
                      <img
                        src={limpezaVidros}
                        alt="Profissional realizando limpeza de vidros"
                        className="w-full h-80 object-cover"
                      />
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-none overflow-hidden">
                      <img
                        src={teamPhoto}
                        alt="Equipe Estrela Serviços"
                        className="w-full h-80 object-cover"
                      />
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-none overflow-hidden">
                      <img
                        src={equipeTrabalho}
                        alt="Equipe trabalhando em manutenção"
                        className="w-full h-80 object-cover"
                      />
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-none overflow-hidden">
                      <img
                        src={uniforme}
                        alt="Uniforme Estrela Serviços"
                        className="w-full h-80 object-cover"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </FadeInSection>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-accent">
              NOSSOS VALORES
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((item, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <item.icon className="h-12 w-12 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary text-center">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />

      <FAQSection />

      <CTASection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
