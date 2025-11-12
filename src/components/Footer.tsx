import { NavLink } from "./NavLink";
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const navItems = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/servicos", label: "Nossos Serviços" },
    { to: "/contato", label: "Contato" },
    { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  ];

  return (
    <footer className="bg-muted text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div>
            <img src={logo} alt="Estrela Services" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              Estrela Serviços Técnicos e Profissionais Ltda
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 37.540.316/0001-86
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Fale Conosco</h3>
            <div className="space-y-2">
              <a href="tel:2135878424" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>(21) 3587-8424 - Administrativo</span>
              </a>
              <a href="tel:2139003056" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>(21) 3900-3056 - Comercial</span>
              </a>
              <a href="mailto:contato@estrelaservicos.com.br" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span>contato@estrelaservicos.com.br</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="mailto:contato@estrelaservicos.com.br" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2009 Estrela Serviços - Desenvolvido por IdLab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
