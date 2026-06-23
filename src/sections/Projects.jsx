export const Projects = () => {
  const projects = {
    title: 'Menú',
    subtitle: 'Cocina tradicional mexicana',
    categorias: [
      {
        nombre: 'Entradas',
        platillos: [
          {
            nombre: 'Guacamole',
            precio: 60,
            descripcion: 'Aguacate fresco acompañado de totopos crujientes.',
            imagen: '/team-portfolio/images/guacamole.jpg',
          },
          {
            nombre: 'Queso fundido',
            precio: 75,
            descripcion: 'Queso derretido con chorizo y tortillas.',
            imagen: '/team-portfolio/images/queso.jpg',
          },
          {
            nombre: 'Sopa de lima',
            precio: 70,
            descripcion: 'Caldo yucateco con tiras de tortilla y lima.',
            imagen: '/team-portfolio/images/sopa-lima.jpg',
          },
          {
            nombre: 'Elotes asados',
            precio: 50,
            descripcion: 'Elote a la parrilla con mayonesa, queso y chile.',
            imagen: '/team-portfolio/images/elotes.webp',
          },
        ],
      },
      {
        nombre: 'Platos fuertes',
        platillos: [
          {
            nombre: 'Mole poblano',
            precio: 160,
            descripcion: 'Pollo bañado en mole tradicional con ajonjolí.',
            imagen: '/team-portfolio/images/mole.webp',
          },
          {
            nombre: 'Carnitas',
            precio: 140,
            descripcion: 'Cerdo estilo Michoacán acompañado de guarniciones.',
            imagen: '/team-portfolio/images/carnitas.jpg',
          },
          {
            nombre: 'Enchiladas verdes',
            precio: 120,
            descripcion: 'Tortillas rellenas de pollo con salsa verde y crema.',
            imagen: '/team-portfolio/images/enchiladas.jpg',
          },
          {
            nombre: 'Chiles en nogada',
            precio: 185,
            descripcion: 'Chile poblano relleno con nogada y granada.',
            imagen: '/team-portfolio/images/chiles-nogada.jpg',
          },
        ],
      },
      {
        nombre: 'Postres y helados',
        platillos: [
          {
            nombre: 'Churros',
            precio: 65,
            descripcion: 'Churros crujientes con cajeta y chocolate caliente.',
            imagen: '/team-portfolio/images/churros.webp',
          },
          {
            nombre: 'Flan napolitano',
            precio: 55,
            descripcion: 'Flan cremoso bañado en caramelo dorado.',
            imagen: '/team-portfolio/images/flan.webp',
          },
          {
            nombre: 'Helado de elote',
            precio: 50,
            descripcion: 'Helado artesanal de elote con canela.',
            imagen: '/team-portfolio/images/helado-canela.jpg',
          },
          {
            nombre: 'Nieve de limón',
            precio: 45,
            descripcion: 'Nieve artesanal de limón con chile piquín.',
            imagen: '/team-portfolio/images/nieve-limon.jpg',
          },
        ],
      },
    ],
  };

  return (
    <section id="menu" className="py-8 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-medium text-center text-gray-900 mb-1">
        {projects.title}
      </h1>
      <p className="text-sm text-center text-gray-500 mb-10">
        {projects.subtitle}
      </p>

      {projects.categorias.map((categoria, index) => (
        <div key={index}>
          {index !== 0 && <hr className="border-t border-gray-200 my-8" />}

          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            {categoria.nombre}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoria.platillos.map((platillo, i) => (
              <div
                key={i}
                className="relative h-52 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url(${platillo.imagen})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#c8b89a', // fallback si no carga la imagen
                }}
              >
                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Contenido */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-sm">
                    {platillo.nombre}
                  </p>
                  <p className="text-white/70 text-xs leading-relaxed mt-0.5">
                    {platillo.descripcion}
                  </p>
                  <span className="mt-2 inline-block text-xs font-medium text-white bg-white/20 border border-white/30 rounded-md px-2 py-1">
                    ${platillo.precio}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};