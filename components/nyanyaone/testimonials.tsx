"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Testimonial = {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Pemesanan tiket jadi super cepat, dan rekomendasi filmnya akurat banget!",
    name: "Alya N.",
    role: "Penikmat Film",
  },
  {
    quote: "UI sederhana dan informatif. Saya bisa langsung cek kursi kosong favorit.",
    name: "Rudi S.",
    role: "Moviegoer",
  },
  {
    quote: "Update film terbaru selalu ada. Bikin FOMO saya reda karena nggak ketinggalan rilis.",
    name: "Sinta P.",
    role: "Penggemar Premiere",
  },
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let raf = 0
    const speed = 0.6

    const step = () => {
      if (!paused && containerRef.current && innerRef.current) {
        const c = containerRef.current
        const contentWidth = innerRef.current.scrollWidth / 2
        c.scrollLeft += speed
        if (c.scrollLeft >= contentWidth) {
          c.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [paused])

  const dup = [...testimonials, ...testimonials]

  return (
    <div
      className="relative"
      aria-label="Testimoni pengguna berjalan"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div ref={containerRef} className="overflow-x-hidden" role="region" aria-roledescription="marquee">
        <div ref={innerRef} className="flex gap-4 py-1">
          {dup.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="min-w-[260px] md:min-w-[320px] rounded-lg border border-border bg-card p-5"
            >
              <blockquote className="text-pretty text-sm md:text-base leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback aria-label={`Foto ${t.name}`}>
                    {t.name
                      .split(" ")
                      .map((s) => s[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
