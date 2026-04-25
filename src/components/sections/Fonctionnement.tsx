export function Fonctionnement() {
  const steps = [
    {
      num: '01',
      title: 'Stimulation électrique',
      text: 'Le générateur d’impulsions envoie des pulsations alternées dans les deux bobines, créant un champ de torsion à l’intérieur du quartz.',
      accent: 'bg-primary'
    },
    {
      num: '02',
      title: 'Activation du réseau cristallin',
      text: 'La fréquence de 4096 Hz résonne avec la géométrie du réseau de quartz, libérant ou concentrent le Phryll.',
      accent: 'bg-white'
    },
    {
      num: '03',
      title: 'Émission du Phryll',
      text: 'L’énergie est émise par la pointe la plus fine du cristal, produisant un rayonnement bénéfique pour la vitalité.',
      accent: 'bg-accent'
    },
  ]

  return (
    <section id="fonctionnement" className="py-32 bg-[#0d0a0d] relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24 text-white text-center">
            Comment ça <span className="text-accent underline decoration-accent/20 underline-offset-[1rem]">fonctionne</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="group relative p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all">
              <div className="absolute top-0 right-12 -translate-y-1/2 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors">{step.num}</div>
              
              <div className={`w-12 h-12 rounded-2xl ${step.accent} mb-8 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
              </div>

              <h3 className="text-2xl font-black text-white mb-6 leading-tight uppercase tracking-tight">{step.title}</h3>
              <p className="text-white text-lg leading-relaxed font-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background large text accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        Vortex
      </div>
    </section>
  )
}
