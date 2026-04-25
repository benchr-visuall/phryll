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
    <div className={`fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center transition-all duration-1000 ${isFading ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      <div className={`relative w-40 h-40 flex items-center justify-center transition-all duration-1000 ${isReady ? 'scale-75 -translate-y-20' : ''}`}>
        {/* Nucleus */}
        <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#B87333]" />
        
        {/* Orbits */}
        <div className="absolute w-full h-1/2 border border-primary/20 rounded-[100%] animate-[spin_3s_linear_infinite]" />
        <div className="absolute w-full h-1/2 border border-primary/20 rounded-[100%] animate-[spin_4s_linear_infinite] rotate-[60deg]" />
        <div className="absolute w-full h-1/2 border border-primary/20 rounded-[100%] animate-[spin_5s_linear_infinite] rotate-[-60deg]" />
        
        {/* Electron */}
        <div className="absolute w-full h-1/2 rounded-[100%] animate-[spin_3s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
        </div>
      </div>

      <div className={`absolute transition-all duration-1000 flex flex-col items-center gap-8 ${isReady ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-20'}`}>
        <Button 
          onClick={handleStart}
          size="lg"
          className="h-16 px-16 rounded-full bg-white text-black hover:bg-primary hover:text-black font-black text-xl tracking-[0.3em] uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.05)] group relative overflow-hidden"
        >
          <span className="relative z-10">Entrer</span>
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Button>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Expérience Phryll</p>
      </div>
    </div>
  )
}
