'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const navItems = [
  { label: 'Composition', href: '#composition' },
  { label: 'Fonctionnement', href: '#fonctionnement' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        isScrolled
          ? 'bg-black/80 py-4 backdrop-blur-2xl border-b border-white/5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-4 group transition-transform hover:scale-105">
          <div className="relative w-12 h-12 flex items-center justify-center p-1 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-colors">
             <Image src="/logo.png" alt="Phryll Logo" width={40} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter uppercase text-white leading-none">Phryll</span>
            <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-primary leading-none mt-1">Technologies</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors group/nav"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover/nav:w-4" />
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-12 h-12">
                <Menu className="h-7 w-7" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-black/98 backdrop-blur-3xl border-t border-white/10 h-[85vh]">
              <DrawerHeader className="border-b border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="text-xl font-black tracking-tighter uppercase text-primary">Phryll Menu</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="text-white bg-white/5 rounded-full">
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="flex flex-col gap-12 p-12 mt-4 text-center">
                {navItems.map((item) => (
                  <DrawerClose key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="text-5xl font-black tracking-tighter text-white hover:text-primary transition-all active:scale-95"
                    >
                      {item.label}
                    </Link>
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
