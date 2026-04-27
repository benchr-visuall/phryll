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
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => {
            console.error('Playback failed even after interaction:', err)
          })
      }
    }

    window.addEventListener('start-phryll-experience', handleStartExperience)
    
    // Stop audio when page is hidden (phone screen off or tab switch)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isPlaying && !isMuted) {
          audioRef.current?.pause()
        }
      } else {
        if (isPlaying && !isMuted) {
          audioRef.current?.play().catch(() => {})
        }
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Aggressive attempt at muted autoplay if event hasn't happened
    if (audioRef.current) {
      audioRef.current.muted = true
      setIsMuted(true)
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }

    return () => {
      window.removeEventListener('start-phryll-experience', handleStartExperience)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isPlaying, isMuted])

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
    <div className="fixed right-10 bottom-10 z-[100]">
      <audio ref={audioRef} src="/anahita.mp3" loop autoPlay preload="auto" />

      <Button
        onClick={toggleMute}
        variant="outline"
        size="icon"
        className="hover:border-primary/50 group h-12 w-12 overflow-hidden rounded-full border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all hover:bg-white/10"
      >
        {isPlaying && !isMuted ? (
          <div className="flex items-center gap-0.5">
            <span className="bg-primary h-3 w-0.5 animate-[bounce_1s_infinite_0s]" />
            <span className="bg-primary h-5 w-0.5 animate-[bounce_1s_infinite_0.2s]" />
            <span className="bg-primary h-4 w-0.5 animate-[bounce_1s_infinite_0.4s]" />
          </div>
        ) : (
          <VolumeX className="h-5 w-5 opacity-40 transition-opacity group-hover:opacity-100" />
        )}
      </Button>
    </div>
  )
}
