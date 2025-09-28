import Hero from "@/components/nyanyaone/hero"
import FeatureTabs from "@/components/nyanyaone/feature-tabs"
import Metrics from "@/components/nyanyaone/metrics"
import Testimonials from "@/components/nyanyaone/testimonials"
import AboutUsSection from "@/components/nyanyaone/about-us"
import ServicesSection from "@/components/nyanyaone/services"
import Cta from "@/components/nyanyaone/cta"
import Footer from "@/components/nyanyaone/footer"

export const metadata = {
  title: "Tentang | Nyanyaone Ticket",
  description:
    "Nyanyaone Ticket adalah aplikasi tiket bioskop online dengan personalisasi film, update film terbaru, dan akses di Web & Android.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero tetap full screen */}
      <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-b from-pink-100 to-white">
        <Hero />
      </section>

      {/* Section 1 - putih */}
      <section
        id="fitur"
        aria-labelledby="fitur"
        className="min-h-screen snap-start bg-white flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 text-center py-16">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">
            Fitur Utama Nyanyaone
          </h2>
          <div className="mt-8">
            <FeatureTabs />
          </div>
        </div>
      </section>

      {/* Section 2 - abu */}
      <section
        id="tentang-kami"
        aria-labelledby="tentang-kami"
        className="min-h-screen snap-start bg-gray-50 flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 text-center py-16">
          <AboutUsSection />
        </div>
      </section>

      {/* Section 3 - putih */}
      <section
        id="statistik"
        aria-labelledby="statistik"
        className="min-h-screen snap-start bg-white flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 text-center py-16">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">
            Nyanyaone Milestone
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Beberapa capaian yang kami raih sejauh ini.
          </p>
          <div className="mt-8">
            <Metrics />
          </div>
        </div>
      </section>

      {/* Section 4 - abu */}
      <section
        id="testimoni"
        aria-labelledby="testimoni"
        className="min-h-screen snap-start bg-gray-50 flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 text-center py-16">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">
            Apa Kata Pengguna
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari para pengguna setia Nyanyaone Ticket.
          </p>
          <div className="mt-8">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Section 5 - putih */}
      <section
        id="layanan"
        aria-labelledby="layanan"
        className="min-h-screen snap-start bg-white flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 text-center py-16">
          <ServicesSection />
        </div>
      </section>

      {/* Section 6 - abu (tanpa snap, biar scroll normal ke bawah) */}
      <section
        id="aksi"
        aria-labelledby="aksi"
        className="min-h-screen bg-gray-50 flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 text-center py-16">
          <Cta />
        </div>
      </section>

      {/* Footer normal (tanpa snap) */}
      <Footer />
    </main>
  )
}
