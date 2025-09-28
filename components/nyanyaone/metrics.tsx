"use client"

import { useEffect, useRef, useState } from "react"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])
  return reduced
}

function abbreviate(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M+`
  if (value >= 1_000) return `${Math.round(value / 1_000)}K+`
  return `${value}+`
}

function MetricCard({
  value,
  label,
  decimals = 0,
  suffix = "",
}: {
  value: number
  label: string
  decimals?: number
  suffix?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [display, setDisplay] = useState(0)
  const [visible, setVisible] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    if (reduced) {
      setDisplay(value)
      return
    }
    let raf = 0
    const duration = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, reduced, value])

  const formatted =
    decimals > 0 ? `${display.toFixed(decimals)}${suffix}` : `${abbreviate(Math.round(display))}${suffix}`

  return (
    <div
      ref={ref}
      role="listitem"
      className="rounded-lg border border-border bg-card p-4 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <p className="text-3xl md:text-4xl font-bold" aria-live="polite">
        {formatted}
      </p>
      <p className="mt-1 text-muted-foreground">{label}</p>
    </div>
  )
}

export default function Metrics() {
  const items = [
    { value: 120_000, label: "Pengguna Aktif" },
    { value: 1_200_000, label: "Tiket Terjual" },
    { value: 4.8, label: "Rata-rata Rating", decimals: 1, suffix: "/5" },
    { value: 85, label: "Kota Terjangkau" },
  ] as const

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list" aria-label="Statistik Nyanyaone Ticket">
      {items.map((it) => (
        <MetricCard
          key={it.label}
          value={it.value}
          label={it.label}
          decimals={(it as any).decimals}
          suffix={(it as any).suffix || ""}
        />
      ))}
    </div>
  )
}
