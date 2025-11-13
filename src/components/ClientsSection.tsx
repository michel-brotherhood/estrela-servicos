import FadeInSection from "./FadeInSection";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import montrealLogo from "@/assets/clients/montreal.webp";
import bioManguinhosLogo from "@/assets/clients/bio-manguinhos.webp";
import sgaLogo from "@/assets/clients/sga.webp";
import governoLogo from "@/assets/clients/governo.webp";
import ecopetrolLogo from "@/assets/clients/ecopetrol.webp";
import ecorodroviasLogo from "@/assets/clients/ecorodovias.webp";
import ambevLogo from "@/assets/clients/ambev.webp";
import nissanLogo from "@/assets/clients/nissan-dinisa.webp";
import hondaLogo from "@/assets/clients/honda-hayasa.webp";
import mercedesLogo from "@/assets/clients/mercedes-ago.webp";

const ClientsSection = () => {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
            Nossos Clientes
          </h2>
        </FadeInSection>
        <FadeInSection>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto overflow-hidden"
          >
            <CarouselContent className="-ml-2 md:-ml-4 pr-2 md:pr-4">
              {[
                { src: montrealLogo, alt: "Montreal" },
                { src: bioManguinhosLogo, alt: "Bio-Manguinhos" },
                { src: sgaLogo, alt: "SGA Segurança" },
                { src: governoLogo, alt: "Governo do Estado do Rio de Janeiro" },
                { src: ecopetrolLogo, alt: "Ecopetrol" },
                { src: ecorodroviasLogo, alt: "Ecorodovias" },
                { src: ambevLogo, alt: "Ambev" },
                { src: nissanLogo, alt: "Nissan Dinisa" },
                { src: hondaLogo, alt: "Honda Hayasa" },
                { src: mercedesLogo, alt: "Mercedes-Benz AGO" },
              ].map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="flex items-center justify-center h-24 p-4">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ClientsSection;
