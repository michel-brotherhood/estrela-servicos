import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroButton from "@/components/HeroButton";
import FadeInSection from "@/components/FadeInSection";
import ClientsSection from "@/components/ClientsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Building2, TrendingUp, Users, Target, Star, Quote, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import heroVideo from "@/assets/hero-video.mp4";

const Inicio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const diferenciais = [
    {
      icon: Building2,
      title: "MERCADO",
      description: "Utilizada em larga escala por grandes corporações brasileiras com foco nos resultados. Atendemos empresas de diversos segmentos em todo o Sudeste.",
    },
    {
      icon: TrendingUp,
      title: "INVESTIMENTO",
      description: "Reduzir custos e aumentar a produtividade. Nossa solução de terceirização permite economia significativa e melhor aproveitamento de recursos.",
    },
    {
      icon: Users,
      title: "FORNECEDORES",
      description: "Transferência de atividades para fornecedores especializados de acordo com o segmento. Equipe qualificada e treinada para cada tipo de serviço.",
    },
    {
      icon: Target,
      title: "PROATIVIDADE",
      description: "Permite à empresa dar maior foco às tarefas essencialmente ligadas ao negócio em que atua, enquanto cuidamos de toda a operação terceirizada.",
    },
  ];

  const avaliacoes = [
    {
      nome: "Maria Silva",
      cargo: "Gerente de Facilities",
      empresa: "TechCorp Brasil",
      avaliacao: "Profissionais extremamente capacitados! A Estrela Serviços transformou completamente nossa operação de limpeza. Equipe pontual, dedicada e com excelente custo-benefício.",
      tempo: "Há 2 meses",
      estrelas: 5,
    },
    {
      nome: "João Santos",
      cargo: "Diretor Administrativo",
      empresa: "Indústria Moderna Ltda",
      avaliacao: "Mais de 3 anos de parceria e só tenho elogios! Serviço impecável, equipe treinada e sempre disponíveis para atender nossas demandas. Recomendo fortemente!",
      tempo: "Há 1 semana",
      estrelas: 5,
    },
    {
      nome: "Ana Paula Costa",
      cargo: "Coordenadora de RH",
      empresa: "Shopping Center Plaza",
      avaliacao: "Excelente qualidade nos serviços prestados. A terceirização com a Estrela nos permitiu focar no nosso core business enquanto eles cuidam de toda operação com profissionalismo.",
      tempo: "Há 3 semanas",
      estrelas: 5,
    },
  ];

  const faqItems = [
    {
      pergunta: "Quais serviços a Estrela Serviços oferece?",
      resposta: "Oferecemos serviços de limpeza e conservação, portaria, recepção, auxiliar de serviços gerais, manutenção predial, jardinagem e outros serviços de terceirização de mão de obra especializada.",
    },
    {
      pergunta: "Em quais regiões a Estrela Serviços atua?",
      resposta: "Atuamos em toda região Sudeste do Brasil, com foco principal em São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo, atendendo empresas de diversos segmentos.",
    },
    {
      pergunta: "Como funciona o processo de contratação?",
      resposta: "O processo é simples: você solicita um orçamento, nossa equipe faz uma visita técnica para entender suas necessidades, elaboramos uma proposta personalizada e, após aprovação, iniciamos os serviços com toda documentação regularizada.",
    },
    {
      pergunta: "A equipe é treinada e qualificada?",
      resposta: "Sim! Todos os nossos colaboradores passam por treinamentos específicos, capacitação contínua e são devidamente uniformizados. Trabalhamos apenas com profissionais qualificados e com experiência comprovada.",
    },
    {
      pergunta: "Qual o diferencial da Estrela Serviços?",
      resposta: "Temos mais de 25 anos de tradição no mercado através da nossa sucessora Torino, combinando experiência com práticas modernas. Oferecemos economia de custos, equipe especializada e permitimos que sua empresa foque no seu core business.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        {!videoLoaded && (
          <div className="absolute inset-0 z-10">
            <Skeleton className="w-full h-full" />
          </div>
        )}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
              Soluções Brilhantes para o seu Negócio!
            </h1>
            <p className="text-lg md:text-2xl mb-6 md:mb-8">
              Há 13 anos sendo referência no mercado com profissionais qualificados.
            </p>
            <div className="flex justify-center">
              <HeroButton className="text-base md:text-2xl px-5 py-2 md:px-7 md:py-3">
                SOLICITAR ORÇAMENTO
              </HeroButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-primary">QUEM SOMOS</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
            
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  A <strong className="text-accent">Estrela Serviços</strong> apresenta-se como uma{" "}
                  <strong className="text-primary">nova geração de empresas</strong> voltada
                  para terceirização de mão de obra, atuante no mercado desde{" "}
                  <strong className="text-accent">2009</strong>.
                </p>
                <p className="text-muted-foreground">
                  A empresa é sucessora da <strong className="text-foreground">Torino Conservação e Limpeza Ltda</strong>, 
                  que possui mais de <strong className="text-primary">25 anos de experiência no mercado</strong>, 
                  combinando experiência consolidada com práticas modernas de gerenciamento.
                </p>
                
                <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg mt-8">
                  <p className="text-primary font-semibold text-xl">
                    💫 Há 13 anos sendo referência no mercado com profissionais qualificados
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">13+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">25+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Anos de Tradição</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Comprometimento</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-accent">
              NOSSOS SERVIÇOS
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeInSection delay={0}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Limpeza e Conservação</h3>
                  <p className="text-muted-foreground">Serviços especializados de limpeza e conservação predial com equipe qualificada e produtos de alta qualidade.</p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={100}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Portaria e Recepção</h3>
                  <p className="text-muted-foreground">Profissionais treinados para atendimento e controle de acesso, garantindo segurança e boa impressão.</p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={200}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Serviços Gerais</h3>
                  <p className="text-muted-foreground">Auxiliares de serviços gerais capacitados para manter seu ambiente sempre organizado e funcional.</p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={300}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Manutenção Predial</h3>
                  <p className="text-muted-foreground">Equipe técnica especializada em manutenção preventiva e corretiva de edificações.</p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={400}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Jardinagem</h3>
                  <p className="text-muted-foreground">Cuidado profissional de áreas verdes e jardins, mantendo a beleza do seu espaço.</p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={500}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Terceirização Especializada</h3>
                  <p className="text-muted-foreground">Soluções personalizadas de terceirização de mão de obra para diversos segmentos.</p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-accent">
              NOSSOS DIFERENCIAIS
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <item.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Nossos <span className="text-accent">Clientes Dizem</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Avaliações reais de clientes satisfeitos com nossos serviços de terceirização
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {avaliacoes.map((avaliacao, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="border-border shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                        <Building2 className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground">{avaliacao.nome}</h3>
                        <p className="text-sm text-muted-foreground">{avaliacao.cargo}</p>
                        <p className="text-xs text-muted-foreground">{avaliacao.empresa}</p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(avaliacao.estrelas)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{avaliacao.tempo}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-12 w-12 text-muted-foreground/20" />
                      <p className="text-muted-foreground relative z-10 pl-6">
                        {avaliacao.avaliacao}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de terceirização
            </p>
          </FadeInSection>

          <FadeInSection className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <FadeInSection className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe é especializada e treinada para ajudar a sua empresa nas melhores
            soluções que o mercado pode oferecer.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6"
          >
            <Phone className="mr-2 h-5 w-5" />
            ENTRE EM CONTATO
          </Button>
        </FadeInSection>
      </section>

      {/* Nossos Clientes Section */}
      <ClientsSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Inicio;
