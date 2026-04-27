import { Atom } from 'lucide-react'

export function Fonctionnement() {
  const steps = [
    {
      num: '01',
      title: 'Stimulation électrique',
      text: 'Le générateur d’impulsions envoie des pulsations alternées dans les deux bobines. Cela crée un champ de torsion (champ scalaire ou ondes scalaires) à l’intérieur de la structure cristalline du quartz.',
      accent: 'bg-primary',
      textColor: 'text-primary',
    },
    {
      num: '02',
      title: 'Activation du réseau cristallin',
      text: 'La fréquence de 4096 Hz résonne avec la géométrie du réseau de quartz. Combinée au champ de torsion, elle « active » le cristal et provoque un phénomène de résonance qui libère ou concentre le Phryll.',
      accent: 'bg-white',
      textColor: 'text-white',
    },
    {
      num: '03',
      title: 'Émission du Phryll',
      text: 'L’énergie Phryll est émise principalement par la pointe supérieure du cristal (la pointe la plus fine). Cela produit un rayonnement bénéfique qui peut :\n\n· Améliorer le bien-être, la vitalité et la récupération énergétique (usage « thérapeutique » ou de santé).\n· Dans des configurations plus poussées, être utilisé comme source d’énergie libre.',
      accent: 'bg-accent',
      textColor: 'text-accent',
    },
  ]

  return (
    <section
      id="fonctionnement"
      className="relative overflow-hidden border-b border-white/5 bg-[#0d0a0d] py-32"
    >
      <div className="relative z-10 container mx-auto max-w-6xl px-6 text-center">
        <h2 className="from-primary to-accent animate-gradient bg-300% mb-24 bg-gradient-to-r via-white bg-clip-text text-center text-5xl font-black tracking-tighter text-transparent uppercase md:text-7xl">
          Comment ça fonctionne
        </h2>

        <div className="mx-auto flex max-w-4xl flex-col gap-16">
          {steps.map((step, index) => (
            <div key={step.num} className="relative">
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="from-primary/30 absolute top-full left-1/2 z-0 h-16 w-px -translate-x-1/2 bg-gradient-to-b to-transparent" />
              )}

              <div className="group relative z-10 flex min-h-[250px] items-center overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-12 transition-all hover:border-white/20">
                <div className="pointer-events-none absolute top-5 right-12 text-9xl font-black text-white/[0.02] transition-colors group-hover:text-white/[0.05]">
                  {step.num}
                </div>

                <div className="relative z-10 flex w-full flex-col gap-10 md:flex-row md:items-center">
                  <div
                    className={`h-16 w-16 shrink-0 rounded-2xl ${step.accent} flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Atom size={28} className="animate-pulse text-black" />
                  </div>

                  <div className="space-y-4 text-left">
                    <h3
                      className={`text-3xl font-black ${step.textColor} leading-tight tracking-tight uppercase`}
                    >
                      {step.title}
                    </h3>
                    <p className="max-w-3xl text-xl leading-relaxed font-light whitespace-pre-line text-white opacity-90">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background large text accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black tracking-tighter text-white/[0.01] uppercase select-none">
        Vortex
      </div>
    </section>
  )
}
