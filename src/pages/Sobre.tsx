import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeInSection from "@/components/FadeInSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Briefcase } from "lucide-react";

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

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">SOBRE NÓS</h1>
          <p className="text-xl max-w-3xl mx-auto">
            33 anos de experiência no mercado de terceirização de mão de obra
          </p>
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
                A Estrela Serviços apresenta-se como uma <strong>nova geração de empresas</strong> voltada
                para terceirização de mão de obra, atuante no mercado desde <strong>2009</strong>. A empresa
                é sucessora da Torino Conservação e Limpeza Ltda, que possui mais de <strong>25 anos de
                experiência no mercado</strong>, combinando experiência consolidada com práticas modernas
                de gerenciamento.
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

      {/* Clientes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-accent">
              NOSSOS CLIENTES
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Temos orgulho de atender algumas das maiores e mais respeitadas empresas do Brasil
            </p>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {clientes.map((cliente, index) => (
              <FadeInSection key={index} delay={index * 50}>
                <Card className="border-border hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex items-center justify-center min-h-[100px]">
                  <p className="text-center font-semibold text-primary">{cliente}</p>
                </CardContent>
              </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection />

      <ClientsSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
