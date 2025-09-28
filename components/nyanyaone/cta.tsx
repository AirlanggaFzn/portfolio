import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <div className="rounded-xl text-primary-foreground px-6 py-12 md:py-16 text-center">
      <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto">
        {/* Headline */}
        <h3 className="text-pretty text-3xl md:text-4xl font-bold text-blue-600 text-justify">
          Temukan{" "}
          <span className="text-green-600">film</span> yang cocok untuk Anda, pilih{" "}
          <span className="text-green-600">kursi</span> terbaik, dan masuk{" "}
          <span className="text-green-600">teater</span> hanya dengan memindai{" "}
          <span className="text-green-600">QR</span>. Semua dari satu{" "}
          <span className="text-green-600">aplikasi</span>.
        </h3>

        {/* Subtext */}
        <p className="opacity-90 max-w-prose text-blue-600">
          Mulai Nonton Lebih Mudah
        </p>

        {/* Store Badges */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
