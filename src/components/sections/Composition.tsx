import Image from 'next/image'

const items = [
  {
    title: 'Cristal de quartz biterminé',
    description: 'De préférence Vogel (6 à 24 faces). Ce cristal agit comme un amplificateur et focaliseur d’énergie précis.',
    color: 'text-accent',
  },
  {
    title: 'Double bobine',
    description: 'Une bobine en cuivre (Champ EM) et une bobine en argent (Champ éthérique). Enroulement toroïdal créant un vortex.',
    color: 'text-primary',
  },
  {
    title: 'Générateur d’impulsions',
    description: 'Signaux à 4096 Hz, 30 V en opposition de phase. Duty cycle optimisé à 7%.',
    color: 'text-secondary',
  },
  {
    title: 'Accessoire optionnel',
    description: 'Forme pyramidale à 52° (Gizeh) disposée au sommet du quartz.',
    color: 'text-white',
  },
]

export function Composition() {
  return (
    <section id="composition" className="py-32 bg-[#0a0a0f] relative overflow-hidden text-center md:text-left border-y border-white/5">
      {/* Background depth effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 text-white text-center">
            Composition <span className="text-primary italic">principale</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-8">
            {items.map((item) => (
              <div key={item.title} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                <h3 className={`text-xl font-black mb-3 ${item.color} uppercase tracking-tight`}>
                  {item.title}
                </h3>
                <p className="text-sm text-white leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
            
            <div className="sm:col-span-2 p-8 rounded-3xl bg-primary text-black italic font-medium leading-relaxed">
              « Le tore est une structure énergétique universelle qui permet à l’énergie de circuler en continu entre l’intérieur et l’extérieur, en se régénérant sans cesse. »
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden bg-black border border-white/10 group">
              <Image
                src="/composition.jpg"
                alt="Générateur de Phryll"
                fill
                className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
