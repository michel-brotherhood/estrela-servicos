import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";

const Servicos = () => {

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

      <ServicesSection />


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
