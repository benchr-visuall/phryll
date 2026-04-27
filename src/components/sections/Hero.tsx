import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// DATA
const HERO_CONTENT = {
  title: {
    main: 'Le générateur',
    highlight: 'de Phryll',
  },
  description:
    "Le Phryll est une énergie vitale universelle (similaire à l'éther), une force de vie omniprésente dans l’univers que l’on peut concentrer et émettre de manière bénéfique grâce à un cristal stimulé.",
  buttons: {
    primary: 'Explorer la technologie',
    secondary: 'Nous contacter',
  },
} as const

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
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

      <div className="relative z-10 container mx-auto max-w-5xl">
        <div className="space-y-10">
          <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-white sm:text-6xl md:text-9xl">
            {HERO_CONTENT.title.main} <br />
            <span className="from-primary to-accent animate-gradient bg-300% bg-gradient-to-r via-white bg-clip-text text-transparent">
              {HERO_CONTENT.title.highlight}
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-tight font-light text-white transition-opacity hover:opacity-100 md:text-3xl">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-6 pt-10 sm:flex-row">
            <Link href="#composition" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="hover:bg-primary group h-14 w-full rounded-full bg-white px-10 text-[10px] font-bold tracking-[0.2em] text-black uppercase shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:text-black"
              >
                {HERO_CONTENT.buttons.primary}
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="h-14 w-full rounded-full border-white/10 bg-white/5 px-10 text-[10px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
              >
                {HERO_CONTENT.buttons.secondary}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4">
        <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase select-none">
          Scroll
        </span>
        <div className="relative h-16 w-[1px] overflow-hidden bg-white/10">
          <div className="via-primary animate-scrolldown absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
