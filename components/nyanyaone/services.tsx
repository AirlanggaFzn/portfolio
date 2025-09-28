"use client"

import type React from "react"
import { useState } from "react"

type Tab = "studios" | "facilities" | "promos"

function PawIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7.5 8.2c0 1.1-.7 2-1.6 2S4.3 9.3 4.3 8.2 5 6.2 5.9 6.2 7.5 7.1 7.5 8.2Zm4.9-2.2c0 1.2-.9 2.1-2 2.1s-2-.9-2-2.1S9.3 3.9 10.4 3.9s2 1 2 2.1Zm6.3 2.2c0 1.1-.7 2-1.6 2s-1.6-.9-1.6-2 .7-2 1.6-2 1.6.9 1.6 2ZM12 11.3c2.8 0 5 2.6 5 5.2 0 .9-.6 1.3-1.3 1.3-.9 0-2.3-.8-3.7-.8s-2.9.8-3.8.8c-.7 0-1.2-.4-1.2-1.3 0-2.6 2.2-5.2 5-5.2Z"
      />
    </svg>
  )
}

type CardData = {
  title: string
  desc: string
  img?: string
}

export default function ServicesSection() {
  const [tab, setTab] = useState<Tab>("studios")

  const studios: CardData[] = [
    { title: "REGULAR", desc: "Studio standar, nyaman & hemat.", img: "/images/studio/regular.jpg" },
    { title: "GOLD CLASS", desc: "Premium, kursi luas & eksklusif.", img: "/images/studio/gold.jpg" },
    { title: "SATIN", desc: "Elegan & stylish, harga terjangkau.", img: "/images/studio/satin.jpg" },
    { title: "VELVET", desc: "Sofa bed romantis & santai.", img: "/images/studio/velvet.jpg" },
    { title: "SATIN SUITE", desc: "Eksklusif, privat & nyaman.", img: "/images/studio/satin-suite.jpg" },
    { title: "4DX", desc: "Efek gerak, angin, air & aroma.", img: "/images/studio/4dx.jpg" },
    { title: "STARIUM", desc: "Layar raksasa & audio imersif.", img: "/images/studio/starium.jpg" },
    { title: "SPHEREX", desc: "Layar 270° membungkus pandangan.", img: "/images/studio/spherex.jpg" },
    { title: "SCREENX", desc: "Layar panorama 270°.", img: "/images/studio/screenx.jpg" },
  ]

  const facilities: CardData[] = [
    { title: "Kursi Nyaman", desc: "Ergonomis & lega.", img: "/images/facilities/seat.jpg" },
    { title: "Makanan & Minuman", desc: "Popcorn & minuman segar.", img: "/images/facilities/food.jpg" },
    { title: "VIP Lounge", desc: "Ruang tunggu eksklusif.", img: "/images/facilities/lounge.jpg" },
    { title: "Parkir Luas", desc: "Akses mudah & aman.", img: "/images/facilities/parking.jpg" },
    { title: "Toilet Bersih", desc: "Higienis & nyaman.", img: "/images/facilities/toilet.jpg" },
    { title: "Ruang Ibadah", desc: "Mushola nyaman tersedia.", img: "/images/facilities/pray.jpg" },
    { title: "Wifi Gratis", desc: "Internet cepat di lobby.", img: "/images/facilities/wifi.jpg" },
    { title: "Akses Difabel", desc: "Fasilitas ramah difabel.", img: "/images/facilities/disable.jpg" },
    { title: "Keamanan 24 Jam", desc: "CCTV & petugas standby.", img: "/images/facilities/security.jpg" },
  ]

  const promos: CardData[] = [
    { title: "Diskon Weekday", desc: "Hingga 20% semua studio.", img: "/images/promo/weekday.jpg" },
    { title: "Bundling Snack", desc: "Tiket + snack hemat.", img: "/images/promo/bundle.jpg" },
    { title: "Member Card", desc: "Poin reward eksklusif.", img: "/images/promo/member.jpg" },
    { title: "Promo Pelajar", desc: "Harga spesial pelajar.", img: "/images/promo/student.jpg" },
    { title: "Buy 1 Get 1", desc: "Khusus film pilihan.", img: "/images/promo/bogo.jpg" },
    { title: "Early Bird", desc: "Harga lebih murah pagi.", img: "/images/promo/early.jpg" },
    { title: "Family Pack", desc: "Bundling keluarga hemat.", img: "/images/promo/family.jpg" },
    { title: "Cashback", desc: "Cashback e-wallet tertentu.", img: "/images/promo/cashback.jpg" },
    { title: "Midnight Sale", desc: "Diskon jam malam.", img: "/images/promo/midnight.jpg" },
  ]

  const data = tab === "studios" ? studios : tab === "facilities" ? facilities : promos

  return (
    <section aria-labelledby="services-title" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-6 md:mb-8">
          <h2 id="services-title" className="text-2xl md:text-3xl font-semibold">
            Layanan / Produk
          </h2>
          <p className="mt-2 text-muted-foreground">Jenis studio, fasilitas, dan promo menarik.</p>
        </header>

{/* Tab filter */}
<div className="flex flex-wrap gap-2 mb-6 justify-center">
  {[
    { key: "studios", label: "Jenis Studio" },
    { key: "facilities", label: "Fasilitas" },
    { key: "promos", label: "Promo" },
  ].map(({ key, label }) => {
    const selected = key === tab
    return (
      <button
        key={key}
        type="button"
        onClick={() => setTab(key as Tab)}
        aria-pressed={selected}
        className={[
          "inline-flex items-center rounded-full border px-4 py-2 text-sm transition-colors",
          selected ? "bg-accent text-accent-foreground border-accent" : "bg-card hover:bg-muted",
        ].join(" ")}
      >
        {label}
      </button>
    )
  })}
</div>


        {/* Grid 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-card p-4 flex flex-col items-center text-center"
            >
              <span className="text-primary mb-2">
                <PawIcon />
              </span>
              <h3 className="font-semibold">{item.title}</h3>
<img
  src={item.img || "/placeholder.svg"}
  alt={item.title}
  className="mt-2 h-32 w-full object-cover rounded-md"
/>

              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
