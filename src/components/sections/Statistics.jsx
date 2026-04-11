import React from "react";
import statsPreview from "../../assets/image/stats-preview.png";
import { statisticsItems } from "../../constants";

const Statistics = () => {
  return (
    <section
      id="statistics"
      className="relative px-6 py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            Analýza výkonu
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
            <span className="text-lime-400">Statistiky</span>
            , které dávají běhání směr
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-lg">
            Sleduj tempo, objem, typy běhů i dlouhodobý trend. CURRO ti pomůže
            vidět souvislosti, které v samotných číslech snadno zaniknou.
          </p>
        </div>

        <div className="mt-14">
          <div className="relative mx-auto max-w-6xl">
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-lime-400/5 blur-3xl" />

            <div className="relative rounded-4xl border border-white/10 bg-zinc-950/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm shadow-red-500/30" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/30" />
                  <span className="h-3 w-3 rounded-full bg-green-500 shadow-sm shadow-green-500/30" />
                </div>

                <span className="text-xs font-medium uppercase tracking-[2px] text-zinc-500">
                  Statistics Preview
                </span>
              </div>

              <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
                <img
                  src={statsPreview}
                  alt="Statistiky aplikace CURRO"
                  className="block w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          {/* velká karta vlevo */}
          <div className="group rounded-4xl border border-white/10 bg-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-lime-400/20 hover:bg-zinc-900/80 lg:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-lime-400">
                  {statisticsItems[0].eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-white md:text-3xl">
                  {statisticsItems[0].title}
                </h3>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-lime-400 text-black shadow-lg shadow-lime-400/10">
                {React.createElement(statisticsItems[0].icon, { size: 24 })}
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              {statisticsItems[0].text}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-zinc-500">
                  Co díky tomu zjistíš
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Jestli tvoje běhání vede ke skutečnému zlepšení, nebo jen k
                  vyššímu objemu bez posunu výkonu.
                </p>
              </div>

              <div className="rounded-3xl border border-lime-400/20 bg-lime-400/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-lime-400">
                  V kontextu
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Tempo, objem i měsíční vývoj dostávají jasnější souvislosti a
                  lépe se porovnávají v čase.
                </p>
              </div>
            </div>
          </div>

          {/* dvě menší karty vpravo */}
          <div className="grid gap-5">
            {statisticsItems.slice(1).map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-4xl border border-white/10 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-lime-400/20 hover:bg-zinc-900/80"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[2px] text-lime-400">
                        {item.eyebrow}
                      </p>

                      <h3 className="mt-3 text-xl font-black leading-tight text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-lime-400 text-black shadow-lg shadow-lime-400/10">
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
