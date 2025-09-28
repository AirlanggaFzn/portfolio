"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"

type Feature = {
  id: string
  label: string
  title: string
  description: string
  cta?: { label: string; href: string }
  image: string
}

const FEATURES: Feature[] = [
  {
    id: "personalized-movies",
    label: "Personalisasi",
    title: "Personalisasi Film",
    description: "Rekomendasi cerdas berdasarkan genre favorit, riwayat tontonan, dan rating Anda.",
    cta: { label: "Jelajahi rekomendasi", href: "#" },
    image: "/images/features/personalized.png",
  },
  {
    id: "latest-movies",
    label: "Update Terbaru",
    title: "Update Film Terbaru",
    description: "Selalu tahu rilis dan jadwal terbaru di bioskop terdekat, lengkap dengan trailer.",
    cta: { label: "Lihat update", href: "#" },
    image: "/images/features/latest.png",
  },
  {
    id: "seat-selection",
    label: "Kursi",
    title: "Pemilihan Kursi Interaktif",
    description: "Pilih kursi terbaik secara real-time dengan denah teater yang intuitif.",
    cta: { label: "Coba pilih kursi", href: "#" },
    image: "/images/features/seat.png",
  },
  {
    id: "secure-payment",
    label: "Pembayaran",
    title: "Pembayaran Aman",
    description: "Dukungan berbagai metode pembayaran dengan enkripsi end-to-end.",
    cta: { label: "Pelajari metode", href: "#" },
    image: "/images/features/payment.png",
  },
  {
    id: "e-ticket",
    label: "Tiket Digital",
    title: "E-Ticket & QR Check-in",
    description: "Tiket digital dengan kode QR untuk masuk cepat tanpa antre panjang.",
    cta: { label: "Lihat cara check-in", href: "#" },
    image: "/images/features/eticket.png",
  },
  {
    id: "notifications",
    label: "Notifikasi",
    title: "Notifikasi & Pengingat",
    description: "Aktifkan pengingat jam tayang, promo, atau film incaran yang akan tayang.",
    cta: { label: "Atur notifikasi", href: "#" },
    image: "/images/features/notifications.png",
  },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])
  return reduced
}

export default function FeatureTabs() {
  const [active, setActive] = useState<Feature>(FEATURES[FEATURES.length - 1])
  const reduced = usePrefersReducedMotion()
  const imageRef = useRef<HTMLDivElement>(null)

  const pills = useMemo(
    () =>
      FEATURES.map((f) => ({
        ...f,
        selected: f.id === active.id,
      })),
    [active.id],
  )

  useEffect(() => {
    if (reduced) return
    imageRef.current?.animate(
      [
        { opacity: 0.6, transform: "translateY(4px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 220, easing: "ease-out" },
    )
  }, [active, reduced])

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
  {pills.map((f, i) => (
    <button
      key={f.id}
      type="button"
      onClick={() => setActive(FEATURES.find((x) => x.id === f.id)!)}
      aria-pressed={f.selected}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
        f.selected
          ? i % 2 === 0
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-green-600 text-white border-green-600"
          : "bg-card text-foreground hover:bg-muted",
      ].join(" ")}
    >
      {f.label}
    </button>
  ))}
</div>


      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{active.title}</h3>
          <p className="mt-2 text-muted-foreground">{active.description}</p>
          {active.cta && (
            <a href={active.cta.href} className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
              {active.cta.label} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
        <div ref={imageRef} className="relative overflow-hidden rounded-xl border bg-card p-2">
          <img
            src={active.image}
            alt={active.title}
            className="rounded-lg object-cover"
            width={400}
            height={300}
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-primary/10 rounded-xl" />
        </div>
      </div>
    </div>
  )
}
