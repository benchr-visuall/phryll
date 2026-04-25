'use client'

import * as React from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  React.useEffect(() => {
    // Listen for the entry event from the Loader
    const handleStartExperience = () => {
      if (audioRef.current) {
        audioRef.current.muted = false
        setIsMuted(false)
        audioRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch((err) => {
          console.error("Playback failed even after interaction:", err)
        })
      }
    }

    window.addEventListener('start-phryll-experience', handleStartExperience)
    
    // Aggressive attempt at muted autoplay if event hasn't happened
    if (audioRef.current) {
      audioRef.current.muted = true
      setIsMuted(true)
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }

    return () => {
      window.removeEventListener('start-phryll-experience', handleStartExperience)
    }
  }, [])

  const toggleMute = () => {
    if (!audioRef.current) return
    const newMuted = !audioRef.current.muted
    audioRef.current.muted = newMuted
    setIsMuted(newMuted)
    if (!isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true))
    }
  }

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <audio 
        ref={audioRef} 
        src="/anahita.mp3" 
        loop 
        autoPlay
        preload="auto"
      />
      
      <Button
        onClick={toggleMute}
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 hover:border-primary/50 transition-all group overflow-hidden"
      >
        {isPlaying && !isMuted ? (
          <div className="flex items-center gap-0.5">
            <span className="w-0.5 h-3 bg-primary animate-[bounce_1s_infinite_0s]" />
            <span className="w-0.5 h-5 bg-primary animate-[bounce_1s_infinite_0.2s]" />
            <span className="w-0.5 h-4 bg-primary animate-[bounce_1s_infinite_0.4s]" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
        )}
      </Button>
    </div>
  )
}
