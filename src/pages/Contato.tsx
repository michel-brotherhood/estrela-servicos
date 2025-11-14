import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeInSection from "@/components/FadeInSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  const unidades = [
    {
      nome: "Niterói (Sede)",
      endereco: "Avenida Rui Barbosa 139, São Francisco",
      cidade: "Niterói - RJ",
      cep: "24360-440",
      mapUrl: "Avenida+Rui+Barbosa+139+São+Francisco+Niterói+RJ",
    },
    {
      nome: "Rio de Janeiro",
      endereco: "Rua Visconde De Pirajá, nº 495 grupo 201 - Ipanema",
      cidade: "Rio de Janeiro - RJ",
      cep: "22.410-003",
      mapUrl: "Rua+Visconde+De+Pirajá+495+Ipanema+Rio+de+Janeiro+RJ",
    },
    {
      nome: "São Paulo",
      endereco: "Avenida Brigadeiro Faria Lima, Jardim Paulistano",
      cidade: "São Paulo - SP",
      cep: "01452-001",
      mapUrl: "Avenida+Brigadeiro+Faria+Lima+Jardim+Paulistano+São+Paulo+SP",
    },
    {
      nome: "Belo Horizonte",
      endereco: "Rua Paraíba 330, Funcionários",
      cidade: "Belo Horizonte - MG",
      cep: "30130-142",
      mapUrl: "Rua+Paraíba+330+Funcionários+Belo+Horizonte+MG",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">CONTATO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
          </p>
          <div className="mt-8">
            <a
              href="tel:2139003056"
              className="inline-flex items-center text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
            >
              <Phone className="mr-3 h-8 w-8" />
              (21) 3900-3056
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <FadeInSection>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-accent">
                  SEJA UM CLIENTE DA ESTRELA SERVIÇOS
                </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" type="tel" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="servico">Serviço de Interesse</Label>
                  <select 
                    id="servico" 
                    required 
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="limpeza-conservacao">Limpeza & Conservação</option>
                    <option value="portaria">Portaria & Controle de Acesso</option>
                    <option value="limpeza-hospitalar">Limpeza Hospitalar</option>
                    <option value="manutencao">Manutenção & Reforma</option>
                    <option value="auxiliar">Auxiliar de Serviços Gerais</option>
                    <option value="recepcao">Recepção & Telefonia</option>
                    <option value="climatizacao">Manutenção de Climatização</option>
                    <option value="facilities">Gestão de Facilities</option>
                    <option value="pos-obra">Limpeza Pós Obra</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" rows={5} required className="mt-2" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  Enviar
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="mr-3 h-6 w-6 text-accent" />
                    Telefones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="tel:2135878424" className="block text-muted-foreground hover:text-accent transition-colors">
                    (21) 3587-8424 - Administrativo
                  </a>
                  <a href="tel:2139003056" className="block text-muted-foreground hover:text-accent transition-colors">
                    (21) 3900-3056 - Comercial
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Mail className="mr-3 h-6 w-6 text-accent" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:contato@estrelaservicos.com.br"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contato@estrelaservicos.com.br
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <MapPin className="mr-3 h-6 w-6 text-accent" />
                    Empresa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-muted-foreground">
                  <p className="font-semibold">Estrela Serviços Técnicos e Profissionais Ltda</p>
                  <p>CNPJ: 37.540.316/0001-86</p>
                </CardContent>
                </Card>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Unidades Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-accent">
              ONDE ESTAMOS
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {unidades.map((unidade, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="border-border/40 hover:border-primary/50 transition-all h-full overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-accent">
                      <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                      <span>{unidade.nome}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-muted-foreground">
                      <p>{unidade.endereco}</p>
                      <p>{unidade.cidade}</p>
                      <p>CEP: {unidade.cep}</p>
                    </div>
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-border/40">
                      <iframe
                        src={`https://maps.google.com/maps?q=${unidade.mapUrl}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa da unidade ${unidade.nome}`}
                      />
                    </div>
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

export default Contato;
