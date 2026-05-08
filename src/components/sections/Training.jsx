import React from "react";
import trainingBase from "../../assets/image/training-base.png";
import trainingHills from "../../assets/image/training-hills.png";
import trainingSpeed from "../../assets/image/training-speed.png";

export default function Training() {
  return (
    <section
      id="training"
      className="relative px-6 py-10 md:py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative z-10">
          <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            Tréninkový plán
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
            Závodní plán podle tréninkové pyramidy{" "}
            <span className="text-lime-400">Jeffa Gallowaye</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
            Aplikace vytvoří personalizovaný běžecký plán pro 5 km, 10 km,
            půlmaraton i maraton. Uživatel si zvolí délku přípravy, datum startu
            a svou výchozí úroveň podle prvního dlouhého běhu. Výsledkem je
            přehledný plán rozdělený do 3 navazujících fází, které vedou od
            budování základu až k závodní připravenosti.
          </p>
        </div>

        <div className="grid md:mt-44 gap-3 md:grid-cols-2">
          <div className="rounded-[22px] border border-lime-400/20 bg-lime-400/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[2px] text-lime-300">
              Co si uživatel nastaví
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-100">
              <li>• Typ závodu: 5 km, 10 km, půlmaraton nebo maraton</li>
              <li>• Délku plánu: 16, 20 nebo 24 týdnů</li>
              <li>• Datum začátku přípravy</li>
              <li>• Výchozí délku prvního dlouhého běhu</li>
            </ul>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-zinc-900/70 p-4">
            <p className="text-xs font-bold uppercase tracking-[2px] text-zinc-500">
              Co z toho získá
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Jasný týdenní fokus</li>
              <li>• Přehled aktuální fáze plánu</li>
              <li>• Kontrolu splnění jednotlivých tréninků</li>
              <li>• Viditelný progres směrem k závodu</li>
            </ul>
          </div>
        </div>
      </div>


        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[2px] text-lime-300">
              1. Základ
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Postupné budování objemu, pravidelnosti a běžecké jistoty.
            </p>
            <div className="mt-4 w-64 mx-auto overflow-hidden">
              <img
                src={trainingBase}
                alt="Plán Základ"
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[2px] text-lime-300">
              2. Síla
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Zařazení kopců, delších běhů a práce na odolnosti.
            </p>
            <div className="mt-4 w-64 mx-auto overflow-hidden">
              <img
                src={trainingHills}
                alt="Plán Základ"
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[2px] text-lime-300">
              3. Rychlost
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Finální vyladění formy maximální výsledky pro závod.
            </p>
            <div className="mt-4 w-64 mx-auto overflow-hidden">
              <img
                src={trainingSpeed}
                alt="Plán Základ"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
    </section>
  );
}
