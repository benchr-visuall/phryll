import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-center px-6">
      {/* Background Image with sophisticated blend */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-2.png"
          alt="Phryll Ethereal Energy"
          fill
          className="object-cover opacity-60 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05),transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="space-y-10">

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white">
            Le générateur <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent animate-gradient bg-300%">
              de Phryll
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-3xl text-white leading-tight font-light transition-opacity hover:opacity-100">
            Le Phryll est une énergie vitale universelle, une force fondamentale que l&apos;on peut concentrer grâce à la géométrie sacrée.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link href="#composition" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 px-10 w-full rounded-full bg-white text-black hover:bg-primary hover:text-black transition-all duration-300 font-bold text-[10px] tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
                Explorer la technologie
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <Button variant="outline" className="h-14 px-10 w-full rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/20 transition-all">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 select-none">Scroll</span>
        <div className="h-16 w-[1px] bg-white/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scrolldown" />
        </div>
      </div>
    </section>
  )
}
