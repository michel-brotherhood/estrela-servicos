import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroButton from "@/components/HeroButton";
import FadeInSection from "@/components/FadeInSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Target, Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";

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
    {
      nome: "Carlos Mendes",
      cargo: "Gerente de Operações",
      empresa: "Hospital São Lucas",
      avaliacao: "Trabalho impecável na limpeza hospitalar! A equipe é extremamente treinada e segue todos os protocolos de segurança. Recomendamos sem dúvidas.",
      tempo: "Há 1 mês",
      estrelas: 5,
    },
    {
      nome: "Fernanda Oliveira",
      cargo: "Diretora Administrativa",
      empresa: "Condomínio Residencial Vista Verde",
      avaliacao: "Serviço de portaria e limpeza excepcional. Os profissionais são educados, pontuais e sempre dispostos a ajudar. O condomínio nunca esteve tão bem cuidado!",
      tempo: "Há 2 semanas",
      estrelas: 5,
    },
    {
      nome: "Ricardo Almeida",
      cargo: "Gerente de Manutenção",
      empresa: "Edifício Comercial Prime",
      avaliacao: "Contratamos para manutenção predial e climatização. Excelente resposta, técnicos qualificados e sempre atendem com urgência quando necessário. Muito satisfeitos!",
      tempo: "Há 5 dias",
      estrelas: 5,
    },
    {
      nome: "Juliana Rodrigues",
      cargo: "Coordenadora de Facilities",
      empresa: "Grupo Empresarial JK",
      avaliacao: "A gestão de facilities da Estrela otimizou todos os nossos processos. Reduzimos custos e melhoramos a qualidade dos serviços. Parceria que faz diferença!",
      tempo: "Há 3 meses",
      estrelas: 5,
    },
    {
      nome: "Paulo Henrique",
      cargo: "Síndico",
      empresa: "Condomínio Solar do Atlântico",
      avaliacao: "Profissionais de recepção e limpeza muito bem treinados. O atendimento aos moradores melhorou significativamente. Equipe sempre educada e prestativa.",
      tempo: "Há 1 mês",
      estrelas: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
              Soluções Brilhantes para o seu Negócio!
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 px-4">
              Há 13 anos sendo referência no mercado com profissionais qualificados.
            </p>
            <div className="flex justify-center px-4">
              <HeroButton 
                className="text-base md:text-xl lg:text-2xl px-5 py-2 md:px-7 md:py-3"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=552135878424&text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
              >
                SOLICITAR ORÇAMENTO
              </HeroButton>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
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
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-accent">
              NOSSOS DIFERENCIAIS
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {diferenciais.map((item, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted overflow-hidden">
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

          <div className="max-w-7xl mx-auto overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-1 pr-1">
                {avaliacoes.map((avaliacao, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-12" />
              <CarouselNext className="right-0 md:-right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Nossos Clientes Section */}
      <ClientsSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Inicio;
