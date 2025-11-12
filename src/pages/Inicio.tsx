import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GradientButton from "@/components/GradientButton";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Building2, TrendingUp, Users, Target } from "lucide-react";

import heroVideo from "@/assets/hero-video.mp4";
import { useState, useEffect } from "react";

const Inicio = () => {
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
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
              <GradientButton className="text-base md:text-2xl px-5 py-2 md:px-7 md:py-3">
                SOLICITAR ORÇAMENTO
              </GradientButton>
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Inicio;
