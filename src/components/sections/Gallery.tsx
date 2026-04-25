import Image from 'next/image'

const items = [
  { id: '1', src: '/gallery-1.jpg' },
  { id: '2', src: '/gallery-2.png' },
  { id: '3', src: '/gallery-3.jpg' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-black py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="from-primary to-accent animate-gradient bg-300% mb-20 bg-gradient-to-r via-white bg-clip-text text-center text-5xl font-black tracking-tighter text-transparent uppercase md:text-7xl">
          Nos générateurs
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl transition-transform hover:scale-[1.02]"
            >
              <Image
                src={item.src}
                alt="Générateur"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-bold tracking-[0.5em] text-white uppercase">
            Pour toutes demandes, nous contacter.
          </p>
        </div>
      </div>
    </section>
  )
}
