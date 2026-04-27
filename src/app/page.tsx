import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Composition } from '@/components/sections/Composition'
import { Fonctionnement } from '@/components/sections/Fonctionnement'
import { Gallery } from '@/components/sections/Gallery'
import { Contact } from '@/components/sections/Contact'
import { SectionSeparator } from '@/components/ui/section-separator'

// DATA LAYER - All content for SEO and easy updates
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://phrylltechnologie.vercel.app'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Phryll | Générateur d'Énergie Vitale Universelle",
  description:
    'Technologie Phryll : générateurs basés sur la géométrie sacrée, les cristaux Vogel et les ondes scalaires pour harmoniser et revitaliser votre environnement.',
  keywords:
    "Phryll, énergie scalaire, cristal Vogel, géométrie sacrée, générateur d'énergie vitale",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Phryll | Générateur d'Énergie Vitale Universelle",
    description:
      'Technologie Phryll : générateurs basés sur la géométrie sacrée, les cristaux Vogel et les ondes scalaires.',
    url: SITE_URL,
    siteName: 'Phryll',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Phryll Energy Generator',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Phryll | Générateur d'Énergie Vitale Universelle",
    description:
      'Technologie Phryll : générateurs basés sur la géométrie sacrée et les cristaux Vogel.',
    images: ['/hero-bg.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <SectionSeparator />
        <Composition />
        <SectionSeparator />
        <Fonctionnement />
        <SectionSeparator />
        <Gallery />
        <SectionSeparator />
        <Contact />
      </main>
    </>
  )
}
