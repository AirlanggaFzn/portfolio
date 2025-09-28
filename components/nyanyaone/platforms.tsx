import { Button } from "@/components/ui/button"

export default function Platforms() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="text-lg font-semibold">Web</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Buka dari browser apa pun. Tidak perlu instal—cukup masuk dan pesan tiket.
        </p>
        <div className="mt-4">
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
            <a href="/" aria-label="Buka Nyanyaone di Web">
              Buka di Web
            </a>
          </Button>
        </div>
      </div>
      <div id="get-android" className="rounded-lg border border-border bg-card p-6">
        <h3 className="text-lg font-semibold">Android</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Instal di Android untuk akses cepat, notifikasi, dan pengalaman maksimal.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
            <a href="#" aria-label="Get it on Android">
              Get it on Android
            </a>
          </Button>
          <span className="text-xs text-muted-foreground">Akan tersedia di Play Store.</span>
        </div>
      </div>
    </div>
  )
}
