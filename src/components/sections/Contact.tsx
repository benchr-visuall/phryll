import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0d] py-40"
    >
      {/* Background glow shadow */}
      <div className="bg-primary/10 pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]" />

      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-10 text-5xl font-black tracking-tighter text-white md:text-8xl">
          Contactez <span className="text-primary italic">nous</span>
        </h2>

        <p className="mb-16 text-xl leading-relaxed font-light text-white md:text-2xl">
          Une question sur notre technologie ? <br /> Contactez-nous à l&apos;adresse suivante :
        </p>

        <div className="group relative inline-block">
          <div className="bg-primary/20 absolute -inset-4 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
          <a
            href="mailto:genphryll@gmail.com"
            className="hover:text-primary relative inline-flex items-center gap-6 text-3xl font-black tracking-tighter text-white transition-all duration-500 md:text-6xl"
          >
            <Mail className="text-primary h-10 w-10 md:h-16 md:w-16" />
            genphryll@gmail.com
            <ArrowRight className="h-8 w-8 translate-x-[-20px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 md:h-12 md:w-12" />
          </a>
        </div>

        <div className="mt-48 flex items-center justify-center gap-12 text-[10px] font-black tracking-[0.5em] text-white/10 uppercase">
          <span className="hover:text-primary cursor-default transition-colors">Vortex</span>
          <span className="h-2 w-2 rounded-full bg-white/5" />
          <span className="hover:text-accent cursor-default transition-colors">Torsion</span>
          <span className="h-2 w-2 rounded-full bg-white/5" />
          <span className="hover:text-primary cursor-default transition-colors">Source</span>
        </div>
      </div>
    </section>
  )
}
