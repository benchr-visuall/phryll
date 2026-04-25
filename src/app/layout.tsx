import { Inter } from 'next/font/google'
import './globals.css'
import { AudioPlayer } from '@/components/ui/AudioPlayer'
import { Loader } from '@/components/ui/Loader'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} selection:bg-primary selection:text-primary-foreground font-sans antialiased`}
      >
        <Loader />
        {children}
        <AudioPlayer />
      </body>
    </html>
  )
}
