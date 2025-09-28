const features = [
  {
    title: "Personalisasi Film",
    desc: "Rekomendasi cerdas berdasarkan genre favorit, riwayat tontonan, dan rating Anda.",
  },
  {
    title: "Update Film Terbaru",
    desc: "Selalu tahu rilis dan jadwal terbaru di bioskop terdekat, lengkap dengan trailer.",
  },
  {
    title: "Pemilihan Kursi Interaktif",
    desc: "Pilih kursi terbaik secara real-time dengan denah teater yang intuitif.",
  },
  {
    title: "Pembayaran Aman",
    desc: "Dukungan berbagai metode pembayaran dengan enkripsi end-to-end.",
  },
  {
    title: "E‑Ticket & QR Check‑in",
    desc: "Tiket digital dengan kode QR untuk masuk cepat tanpa antre panjang.",
  },
  {
    title: "Notifikasi & Pengingat",
    desc: "Aktifkan pengingat jam tayang, promo, atau film incaran yang akan tayang.",
  },
]

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {features.map((f) => (
        <article key={f.title} className="rounded-lg border border-border bg-card p-5" aria-labelledby={f.title}>
          <h3 className="text-lg font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
        </article>
      ))}
    </div>
  )
}
