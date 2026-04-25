import Image from 'next/image'

const items = [
  { id: '1', src: '/gallery-1.jpg' },
  { id: '2', src: '/gallery-2.png' },
  { id: '3', src: '/gallery-3.jpg' },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 text-white text-center">
            Galerie <span className="opacity-30">Photos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.id} className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 group shadow-2xl transition-transform hover:scale-[1.02]">
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
          <p className="text-white text-sm font-bold uppercase tracking-[0.5em]">Pour toutes demandes, nous contacter.</p>
        </div>
      </div>
    </section>
  )
}
