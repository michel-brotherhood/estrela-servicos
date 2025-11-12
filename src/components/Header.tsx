import { NavLink } from "./NavLink";
import { Menu, X, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/servicos", label: "Nossos Serviços" },
    { to: "/contato", label: "Contato" },
    { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  ];

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-accent">ESTRELA</span>
              <span className="text-white"> SERVICES</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-white/90 hover:text-accent transition-colors font-medium"
                activeClassName="text-accent border-b-2 border-accent"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="mailto:contato@estrelaservicos.com.br" className="text-white/90 hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-white/90 hover:text-accent transition-colors"
                activeClassName="text-accent font-semibold"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex space-x-4 mt-4 pt-4 border-t border-white/10">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contato@estrelaservicos.com.br" className="text-white/90 hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
