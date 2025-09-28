import Image from "next/image"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[color:var(--brand-blue)]">
          Airlangga Fauzan
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          {'"Technology without limits, dreams without end."'}
        </p>
      </section>

      {/* About Me */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-pretty leading-relaxed text-sm sm:text-base text-foreground/90">
              I am a Data Specialist and Backend & System Developer focusing on data processing, system design, and
              building reliable applications. With expertise in Python, Rust, and Java, I deliver efficient and scalable
              solutions. I turn data into stories that support better decisions.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-blue)] px-4 py-2 text-sm font-medium text-background hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-blue)]/60 focus:ring-offset-2 focus:ring-offset-background transition"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Image
              src="/abstract-rounded-portrait.jpg"
              width={640}
              height={640}
              alt="Abstract rounded portrait"
              className="w-full aspect-square rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects (sample) */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10">My Project Website</h2>

        <div className="space-y-8">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center rounded-2xl bg-card/50 p-6 ring-1 ring-border">
            <div className="order-2 md:order-1">
              <h3 className="text-lg font-semibold">Analytics Pipeline Orchestrator</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                ETL/ELT pipeline with scheduling, retries, and lineage for multi-source analytics.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-[color:var(--brand-blue)]/15 px-2 py-1 text-xs text-[color:var(--brand-blue)]">
                  Python
                </span>
                <span className="inline-flex items-center rounded-md bg-[color:var(--brand-blue)]/15 px-2 py-1 text-xs text-[color:var(--brand-blue)]">
                  Airflow
                </span>
                <span className="inline-flex items-center rounded-md bg-[color:var(--brand-blue)]/15 px-2 py-1 text-xs text-[color:var(--brand-blue)]">
                  PostgreSQL
                </span>
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-[color:var(--brand-green)] hover:underline">
                  Lihat Project →
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/project-management-dashboard.png"
                width={960}
                height={640}
                alt="Project 1 screenshot"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center rounded-2xl bg-card/50 p-6 ring-1 ring-border">
            <div>
              <Image
                src="/project-management-dashboard.png"
                width={960}
                height={640}
                alt="Project 2 screenshot"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">High-throughput API Backend</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scalable REST API with rate-limiting, caching, and observability for B2B integrations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-[color:var(--brand-blue)]/15 px-2 py-1 text-xs text-[color:var(--brand-blue)]">
                  Rust
                </span>
                <span className="inline-flex items-center rounded-md bg-[color:var(--brand-blue)]/15 px-2 py-1 text-xs text-[color:var(--brand-blue)]">
                  Redis
                </span>
                <span className="inline-flex items-center rounded-md bg-[color:var(--brand-blue)]/15 px-2 py-1 text-xs text-[color:var(--brand-blue)]">
                  Docker
                </span>
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-[color:var(--brand-green)] hover:underline">
                  Lihat Project →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Skills & Stack (static chips version) */}
      <section aria-label="Skills & Stack" className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10">Skills And Stack</h2>
        <div className="space-y-6">
          <div className="rounded-2xl bg-white/5 p-3">
            <div className="text-xs mb-2 text-[color:var(--brand-green)]">Programming & Development</div>
            <div className="flex flex-wrap gap-2">
              {["Python", "Rust", "Java", "SQL", "Bash/Shell"].map((s) => (
                <span
                  key={s}
                  className="chip inline-flex items-center rounded-md bg-[color:var(--brand-blue)]/10 px-3 py-1.5 text-xs font-medium text-[color:var(--brand-blue)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
