import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-40 bg-[#0a0a0d] relative overflow-hidden border-t border-white/5">
      {/* Background glow shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-white">
          Contactez <span className="text-primary italic">nous</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white mb-16 font-light leading-relaxed">
          Une question sur notre technologie ? <br /> Contactez-nous à l&apos;adresse suivante :
        </p>

        <div className="group relative inline-block">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <a 
            href="mailto:genphryll@gmail.com" 
            className="relative inline-flex items-center gap-6 text-3xl md:text-6xl font-black tracking-tighter text-white hover:text-primary transition-all duration-500"
          >
            <Mail className="w-10 h-10 md:w-16 md:h-16 text-primary" />
            genphryll@gmail.com
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 transition-all translate-x-[-20px] group-hover:translate-x-0" />
          </a>
        </div>

        <div className="mt-48 flex items-center justify-center gap-12 text-[10px] uppercase font-black tracking-[0.5em] text-white/10">
          <span className="hover:text-primary cursor-default transition-colors">Vortex</span>
          <span className="w-2 h-2 rounded-full bg-white/5" />
          <span className="hover:text-accent cursor-default transition-colors">Torsion</span>
          <span className="w-2 h-2 rounded-full bg-white/5" />
          <span className="hover:text-primary cursor-default transition-colors">Source</span>
        </div>
      </div>
    </section>
  )
}
