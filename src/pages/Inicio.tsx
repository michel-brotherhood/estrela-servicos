import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GradientButton from "@/components/GradientButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Building2, TrendingUp, Users, Target } from "lucide-react";

import heroVideo from "@/assets/hero-video.mp4";

const Inicio = () => {

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
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções Brilhantes para o seu Negócio!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Há 13 anos sendo referência no mercado com profissionais qualificados.
            </p>
            <GradientButton>
              SOLICITAR ORÇAMENTO
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-accent">QUEM SOMOS</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                A Estrela Serviços apresenta-se como uma <strong>nova geração de empresas</strong> voltada
                para terceirização de mão de obra, atuante no mercado desde <strong>2009</strong>.
              </p>
              <p>
                A empresa é sucessora da Torino Conservação e Limpeza Ltda, que possui mais de <strong>25 anos de
                experiência no mercado</strong>, combinando experiência consolidada com práticas modernas
                de gerenciamento.
              </p>
              <p className="text-primary font-semibold text-xl pt-4">
                Há 13 anos sendo referência no mercado com profissionais qualificados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent">
            NOSSOS DIFERENCIAIS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
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
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Inicio;
