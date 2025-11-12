import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Users, Target, Award } from "lucide-react";
import { toast } from "sonner";

const TrabalheConosco = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Currículo enviado com sucesso! Entraremos em contato em breve.");
  };

  const beneficios = [
    {
      icon: Users,
      title: "Equipe Diversa",
      description: "Valorizamos a diversidade e inclusão em nosso time",
    },
    {
      icon: Target,
      title: "Crescimento Profissional",
      description: "Oportunidades reais de desenvolvimento de carreira",
    },
    {
      icon: Award,
      title: "Ambiente Profissional",
      description: "Trabalhe em um ambiente que valoriza seus talentos",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">TRABALHE CONOSCO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trabalhamos para formar times com colaboradores diversos e apaixonados pelo que fazem!
          </p>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl font-semibold mb-6 text-foreground leading-relaxed">
              Trabalhamos para formar times com colaboradores diversos e apaixonados pelo que fazem!
            </p>
            <h2 className="text-3xl font-bold mb-6 text-accent">
              Quer fazer parte da Estrela e desenvolver a carreira dos seus sonhos?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Aqui é o seu lugar!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {beneficios.map((beneficio, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-accent/10 p-4 rounded-full">
                        <beneficio.icon className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {beneficio.title}
                    </h3>
                    <p className="text-muted-foreground">{beneficio.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-accent text-center">
              FAÇA PARTE DA ESTRELA
            </h2>
            <Card className="border-border">
              <CardContent className="p-8">
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
                    <Label htmlFor="curriculo">Anexar Currículo</Label>
                    <div className="mt-2">
                      <label
                        htmlFor="curriculo"
                        className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent transition-colors"
                      >
                        <Upload className="mr-2 h-5 w-5 text-accent" />
                        <span className="text-accent font-medium">Carregar Arquivo</span>
                        <input
                          id="curriculo"
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          required
                        />
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Formatos aceitos: PDF, DOC, DOCX
                    </p>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                  >
                    Enviar Formulário
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">33+</div>
              <div className="text-xl">Anos de Mercado</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">4</div>
              <div className="text-xl">Unidades de Atendimento</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">3</div>
              <div className="text-xl">Estados de Atuação</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrabalheConosco;
