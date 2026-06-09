import { ChefHat, Soup , Flame, Drumstick, CakeSlice, IceCreamCone } from "lucide-react";

const highlights = [
  {
    icon: ChefHat,
    title: "Chef",
    description:
      "Reinventamos los sabores clásicos con un toque contemporáneo.",
  },
  {
    icon: Flame,
    title: "Cocina",
    description:
      "Rescatamos los sabores de siempre con recetas llenas de historia.",
  },
  {
    icon: Drumstick,
    title: "Platillos",
    description: "“Cocinamos como para la familia.”.",
  },
  {
    icon: Soup,
    title: "Comida",
    description:
      "Sabores auténticos en un ambiente que te hará sentir como en casa.",
  },
  {
    icon: CakeSlice,
    title: "Postres",
    description:
      "Ingredientes frescos, momentos inolvidables.",
  },
  {
    icon: IceCreamCone,
    title: "Helados",
    description:
      "Una selección deliciosa de helados artesanales.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre nosotros
                {/* Restaurante */}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Aqui no solo comes,
              <span className="font-serif text-primary italic font-normal text-black">
                {" "}
                vives una experiencia.
              </span>
            </h2>

            <div className="space-y-4 text-black animate-fade-in animation-delay-200 font">
              <p>
                En nuestro restaurante creemos que la buena comida une a las personas. 
                Cada receta está elaborada con ingredientes frescos, pasión por la cocina y atención a cada detalle. 
              </p>
              <p>
                Queremos ofrecerte mucho más que una comida: una experiencia cálida, auténtica e inolvidable
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-gray-700">
                "En nuestro restaurante trabajamos cada día para ofrecer una experiencia única, 
                combinando ingredientes frescos, recetas auténticas y un ambiente acogedor."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm  text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};