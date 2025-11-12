import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Sparkles, Shield, Hospital, Wrench, Users, Phone as PhoneIcon, Wind, Briefcase, Construction } from "lucide-react";

const Servicos = () => {
  const servicos = [
    {
      icon: Sparkles,
      title: "Limpeza & Conservação",
      description:
        "Um ambiente limpo e organizado é fundamental para a produção da sua empresa. A fim de satisfazer essa necessidade, a Estrela Serviços se ocupa dessas funções, permitindo a você mais tempo para cuidar do seu negócio.",
    },
    {
      icon: Shield,
      title: "Portaria & Controle de Acesso",
      description:
        "Serviço de segurança patrimonial desarmada, fornecendo mão de obra nas funções de Porteiro e Vigia, que são treinados e capacitados para identificação e controle de acesso de pessoas, veículos e materiais.",
    },
    {
      icon: Hospital,
      title: "Limpeza Hospitalar",
      description:
        "Profissionais adequadamente treinados para trabalhar em ambientes hospitalares, com preocupação com a limpeza e higienização indispensável para garantir a segurança de pacientes e profissionais da saúde.",
    },
    {
      icon: Wrench,
      title: "Manutenção & Reforma",
      description:
        "Serviços de manutenção predial e pequenas reformas. Experiência em piso: azulejos, alvenaria comum, hidráulica, elétrica, lavagem e pinturas em geral.",
    },
    {
      icon: Users,
      title: "Mão de Obra Especializada",
      description:
        "Profissionais qualificados e treinados para diversas funções operacionais, garantindo eficiência e qualidade nos serviços prestados em sua empresa.",
    },
    {
      icon: PhoneIcon,
      title: "Recepção & Telefonia",
      description:
        "Serviço personalizado de acordo com os valores da sua empresa. Qualificamos nossos funcionários para desempenharem o atendimento ao público, controle de acesso e realização de chamadas telefônicas ativas e passivas.",
    },
    {
      icon: Wind,
      title: "Manutenção de Climatização",
      description:
        "Serviços relacionados a desgaste, correção de instalações mal feitas e demais serviços para ajudar na climatização e manutenção de sistemas de ar condicionado.",
    },
    {
      icon: Briefcase,
      title: "Gestão de Facilities",
      description:
        "Serviço de gestão e otimização a partir da análise das necessidades dos nossos clientes e das suas características de negócio, desenvolvendo um plano de implantação de múltiplos serviços integrados.",
    },
    {
      icon: Construction,
      title: "Limpeza Pós Obra",
      description:
        "Serviço para a construção civil onde limpeza grossa e fina garantem, junto ao cliente, a qualidade e a valorização dos imóveis após conclusão de obras e reformas.",
    },
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
              <Card key={index} className="border-border hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <servico.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center text-primary">
                    {servico.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center text-base">
                    {servico.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                    Agendar Serviço
                  </Button>
                </CardFooter>
              </Card>
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
              "Pintor",
              "Eletricista",
              "Marceneiro",
              "Serralheiro",
            ].map((funcao, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg text-center font-semibold text-primary border border-border hover:border-accent transition-colors"
              >
                {funcao}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
