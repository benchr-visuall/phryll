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
          ? 'border-b border-white/5 bg-black/80 py-4 backdrop-blur-2xl'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-4 transition-transform hover:scale-105"
        >
          <div className="group-hover:border-primary/50 relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-1 transition-colors">
            <Image
              src="/logo.png"
              alt="Phryll Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl leading-none font-black tracking-tighter text-white uppercase">
              Phryll
            </span>
            <span className="text-primary mt-1 text-[8px] leading-none font-bold tracking-[0.4em] uppercase">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-primary group/nav relative px-6 py-3 text-sm font-black tracking-[0.2em] text-white uppercase transition-colors"
            >
              {item.label}
              <span className="bg-primary absolute bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover/nav:w-4" />
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full text-white hover:bg-white/10"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh] border-t border-white/10 bg-black/98 backdrop-blur-3xl">
              <DrawerHeader className="border-b border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="text-primary text-xl font-black tracking-tighter uppercase">
                    Phryll Menu
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/5 text-white"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="mt-4 flex flex-col gap-12 p-12 text-center">
                {navItems.map((item) => (
                  <DrawerClose key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="hover:text-primary text-5xl font-black tracking-tighter text-white transition-all active:scale-95"
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
