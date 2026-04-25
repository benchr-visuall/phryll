'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'

export function Loader() {
  const [isVisible, setIsVisible] = React.useState(true)
  const [isReady, setIsReady] = React.useState(false) // Show button after animation
  const [isFading, setIsFading] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleStart = () => {
    setIsFading(true)
    // Dispatch custom event to start music in AudioPlayer
    window.dispatchEvent(new CustomEvent('start-phryll-experience'))

    setTimeout(() => {
      setIsVisible(false)
    }, 1000)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-center bg-black transition-all duration-1000 ${isFading ? 'pointer-events-none scale-110 opacity-0' : 'opacity-100'}`}
    >
      <div
        className={`relative flex h-40 w-40 items-center justify-center transition-all duration-1000 ${isReady ? '-translate-y-20 scale-75' : ''}`}
      >
        {/* Nucleus */}
        <div className="bg-primary h-4 w-4 rounded-full shadow-[0_0_15px_#B87333]" />

        {/* Orbits */}
        <div className="border-primary/20 absolute h-1/2 w-full animate-[spin_3s_linear_infinite] rounded-[100%] border" />
        <div className="border-primary/20 absolute h-1/2 w-full rotate-[60deg] animate-[spin_4s_linear_infinite] rounded-[100%] border" />
        <div className="border-primary/20 absolute h-1/2 w-full rotate-[-60deg] animate-[spin_5s_linear_infinite] rounded-[100%] border" />

        {/* Electron */}
        <div className="absolute h-1/2 w-full animate-[spin_3s_linear_infinite] rounded-[100%]">
          <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_white]" />
        </div>
      </div>

      <div
        className={`absolute flex flex-col items-center gap-8 transition-all duration-1000 ${isReady ? 'translate-y-10 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <Button
          onClick={handleStart}
          size="lg"
          className="hover:bg-primary group relative h-16 overflow-hidden rounded-full bg-white px-16 text-xl font-black tracking-[0.3em] text-black uppercase shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all hover:text-black"
        >
          <span className="relative z-10">Entrer</span>
          <div className="bg-primary absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
        </Button>
        <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">
          Expérience Phryll
        </p>
      </div>
    </div>
  )
}
