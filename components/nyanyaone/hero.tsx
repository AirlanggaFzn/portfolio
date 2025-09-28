import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <header className="bg-background w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">

          <h1 className="mt-3 text-pretty text-3xl md:text-5xl font-bold leading-tight">
            Tiket Bioskop Online yang Personal dan Selalu Update
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground hover:opacity-90">
              Jelajahi Film
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <a href="#get-android" aria-label="Get it on Android">
                Get it on Android
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img
            src="/logo-nyanyaone.png?height=300&width=520"
            alt="Ilustrasi layar aplikasi Nyanyaone Ticket"
            className="w-full h-auto"
          />
        </div>
      </div>
    </header>
  )
}
