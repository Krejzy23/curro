import React from "react";
import { ArrowRight, Apple, Play } from "lucide-react";

const Download = () => {
  return (
    <section
      id="download"
      className="relative px-6 py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-zinc-900/80 px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur md:px-10 md:py-14 lg:px-14 lg:py-16">
          {/* background glow */}
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-25 -left-15 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

          {/* subtle grid accent */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.08),transparent_30%)]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* left */}
            <div>
              <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
                Stáhni si CURRO
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Připravený posunout své běhání dál?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
                Měj vzdálenost, čas, tempo, statistiky i komunitu na jednom
                místě. CURRO ti pomůže sledovat každý běh a udržet si motivaci
                dlouhodobě.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-lime-400 px-6 py-4 text-base font-extrabold text-black transition hover:scale-[1.02]"
                >
                  <Apple size={20} />
                  Stáhnout pro iPhone
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
                >
                  <Play size={18} />
                  Stáhnout pro Android
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Tracking běhů
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Statistiky a progres
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Komunita běžců
                </span>
              </div>
            </div>

            {/* right */}
            <div className="relative">
              <div className="rounded-4xl border border-lime-400/20 bg-zinc-950/80 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-lime-400">
                      CURRO
                    </p>
                    <p className="mt-3 text-3xl font-black text-white">
                      Všechno pro tvoje běhání
                    </p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      Od prvního běhu až po detailní statistiky a komunitní
                      motivaci.
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[22px] bg-lime-400">
                    <ArrowRight size={24} className="text-black" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">
                      Sleduj každý běh
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Čas, vzdálenost, tempo i typ tréninku přehledně na jednom
                      místě.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">
                      Buduj konzistenci
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Týdenní cíle, streaky a přehled aktivit ti pomůžou držet
                      pravidelnost.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">
                      Zůstaň ve spojení
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Sdílej běhy, sleduj přátele a získej další motivaci z
                      komunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Dostupnost odkazů do App Store a Google Play doplníš podle aktuálního
          vydání aplikace.
        </p>
      </div>
    </section>
  );
};

export default Download;