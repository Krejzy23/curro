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

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Statistiky, které dávají běhání směr
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Sleduj tempo, objem, typy běhů i dlouhodobý trend. CURRO ti pomůže
            vidět souvislosti, které v samotných číslech snadno zaniknou.
          </p>
        </div>

        <div className="mt-14">
          <div className="relative mx-auto max-w-6xl">
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-lime-400/5 blur-3xl" />

            <div className="relative rounded-4xl border border-white/10 bg-zinc-900/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
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

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {statisticsItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-zinc-900/60 p-5"
              >
                <div className="flex flex-row lg:flex-col justify-between text-black ">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-lime-400 p-3">
                    <Icon />
                  </div>
                <div className="flex flex-col px-4 lg:px-0 lg:mt-3">
                  <h3 className="text-sm lg:text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-4 text-zinc-400 md:text-base">
                    {item.text}
                  </p>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
