import Image from 'next/image'
import { Atom } from 'lucide-react'

// DATA
const COMPOSITION_CONTENT = {
  title: 'Composition principale d’un générateur de Phryll',
  intro: 'Un générateur typique se compose de :',
  items: [
    {
      id: 'quartz',
      title: '· Un cristal de quartz biterminé :',
      subtitle:
        "(De préférence Vogel pour un meilleur résultat mais n'importe quel biterminé fonctionne )",
      description:
        'Le cristal Vogel est un cristal de quartz taillé selon une géométrie précise (généralement de 6 à 24 faces, avec des angles spécifiques alignés on l’axe du quartz et la structure hexagonale). La taille courante du Vogel va de 10 à 15 cm environ. Ce cristal agit comme un amplificateur et focaliseur d’énergie grâce à sa structure cristalline.',
      color: 'text-accent',
      markerColor: 'text-accent',
    },
    {
      id: 'bobines',
      title: '· Deux bobines :',
      subitems: [
        'Une bobine en cuivre ( Champ électromagnétique )',
        'Une bobine en argent ( Champ éthérique / torsionnel )',
      ],
      description:
        'Les bobines sont enroulées selon une forme toroïdale précise afin de créer un vortex. Le tore est une structure énergétique universelle qui suit un mouvement circulaire et auto-entretenu. Il est présent partout dans la nature et représente le fonctionnement de la conscience à travers la géométrie sacrée. Cette forme dynamique, semblable à un beignet, permet à l’énergie de circuler en continu entre l’intérieur et l’extérieur, en se régénérant sans cesse.',
      color: 'text-primary',
      markerColor: 'text-primary',
    },
    {
      id: 'generateur',
      title: '· Un générateur d’impulsions électriques :',
      description:
        'Il envoie des font signaux pulsés alternés à une fréquence précise de 4096 Hz, avec un faible duty cycle de 7%. La tension envoyée se situe à 30 V. Les deux bobines sont alimentées en opposition de phase (180°)',
      color: 'text-accent',
      markerColor: 'text-accent',
    },
    {
      id: 'accessoire',
      title: '· Accessoire optionnel :',
      description:
        'Une forme pyramidale disposée au sommet du quartz (52° comme la pyramide de Gizeh).',
      color: 'text-primary',
      markerColor: 'text-primary',
    },
  ],
} as const

export function Composition() {
  return (
    <section
      id="composition"
      className="relative overflow-hidden border-y border-white/5 bg-black py-24"
    >
      {/* Background ambient elements */}
      <div className="bg-primary/5 pointer-events-none absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <div className="relative mb-16 inline-block">
          <h2 className="from-primary to-accent animate-gradient bg-300% mb-4 bg-gradient-to-r via-white bg-clip-text text-4xl leading-none font-black tracking-tighter text-transparent uppercase md:text-6xl">
            {COMPOSITION_CONTENT.title}
          </h2>
          <p className="decoration-primary/30 text-lg font-light tracking-tight text-white italic underline underline-offset-8 opacity-70">
            {COMPOSITION_CONTENT.intro}
          </p>
        </div>

        {/* The Connection Thread (Fil Conducteur) */}
        <div className="relative pb-16">
          <div className="from-primary/20 via-accent/20 absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b to-transparent" />

          <div className="space-y-16">
            {COMPOSITION_CONTENT.items.map((item) => (
              <div key={item.id} className="group relative">
                {/* Central Atom Icon */}
                <div
                  className={`absolute top-0 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-black p-2 transition-transform duration-500 group-hover:scale-125`}
                >
                  <Atom
                    size={28}
                    className={`${item.markerColor} animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                  />
                </div>

                <div className="space-y-4 pt-8">
                  <h3
                    className={`text-2xl font-black md:text-3xl ${item.color} tracking-tighter uppercase transition-all duration-500`}
                  >
                    {item.title}
                  </h3>

                  <div className="mx-auto max-w-2xl space-y-4">
                    {'subtitle' in item && (
                      <p className="block text-lg leading-relaxed font-medium text-white italic opacity-90">
                        {item.subtitle}
                      </p>
                    )}

                    {'subitems' in item && (
                      <div className="flex flex-col items-center gap-2 py-1">
                        {item.subitems.map((sub, i) => (
                          <p
                            key={i}
                            className="text-primary w-fit text-lg font-black tracking-tighter uppercase md:text-xl"
                          >
                            {sub}
                          </p>
                        ))}
                      </div>
                    )}

                    <p className="text-xl leading-relaxed font-light text-white opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-24">
            <div className="group/img relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,242,255,0.05)]">
              <Image
                src="/composition.jpg"
                alt="Architecture technique unifiée"
                fill
                className="object-cover transition-all duration-1000 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
