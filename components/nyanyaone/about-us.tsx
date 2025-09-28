import type React from "react"

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

export default function AboutUsSection() {
  return (
    <section aria-labelledby="about-title" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-8 text-center">
          <h2 id="about-title" className="text-2xl md:text-3xl font-semibold">
            Tentang Kami
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-justify">
            Nyanyaone adalah platform pemesanan tiket bioskop online yang lahir dari semangat komunitas
            pecinta film. Kami berkomitmen menghadirkan pengalaman menonton yang lebih mudah, cepat, dan
            menyenangkan bagi setiap orang. Dengan visi yang jelas dan misi yang kuat, kami terus
            berinovasi untuk memberikan layanan terbaik.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Sejarah */}
          <article className="group relative rounded-xl p-[1px] h-full">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col h-full rounded-xl border bg-card p-5">
              <h3 className="font-semibold">Sejarah</h3>
              <p className="mt-2 text-muted-foreground text-justify">
                Dimulai sebagai forum kecil para penikmat film, Nyanyaone berkembang menjadi solusi tiket
                online tepercaya. Berawal dari kebutuhan sederhana, kini kami telah menjangkau berbagai
                bioskop di Indonesia dengan sistem pemesanan modern dan efisien.
              </p>
            </div>
          </article>

          {/* Visi */}
          <article className="group relative rounded-xl p-[1px] h-full">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col h-full rounded-xl border bg-card p-5">
              <h3 className="font-semibold">Visi</h3>
              <p className="mt-2 text-muted-foreground text-justify">
                Menjadi platform tiket online yang tidak hanya efisien, tetapi juga transparan, nyaman,
                inklusif, serta mampu membangun ekosistem hiburan digital yang lebih baik untuk seluruh
                lapisan masyarakat.
              </p>
            </div>
          </article>

          {/* Misi */}
          <article className="group relative rounded-xl p-[1px] h-full">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col h-full rounded-xl border bg-card p-5">
              <h3 className="font-semibold">Misi</h3>
              <ul className="mt-2 space-y-2 text-muted-foreground text-justify">
                <li className="flex items-start gap-2">
                  <span className="text-primary">
                    <PawIcon />
                  </span>
                  Memberikan pengalaman menonton terbaik dengan layanan yang cepat, aman, dan nyaman.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">
                    <PawIcon />
                  </span>
                  Menyediakan proses pemesanan tiket yang transparan, tanpa biaya tersembunyi.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">
                    <PawIcon />
                  </span>
                  Menjalin kolaborasi dengan bioskop dan mitra strategis untuk memperkaya fasilitas dan
                  promosi menarik.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
