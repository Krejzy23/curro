import React from "react";
import appScreenshot from "../../assets/homescreenHero.png"
import {
  Activity,
  Timer,
  Users,
  Heart,
  MessageCircle,
  Target,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 md:px-10 lg:px-16 lg:pt-32 lg:pb-28">
      {/* glow */}
      <div className="pointer-events-none absolute -top-24 right-[-120px] h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Běžecká aplikace pro výkon i motivaci
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-white md:text-6xl xl:text-7xl">
            Sleduj své běhy.
            <br />
            Buduj <span className="text-lime-400">konzistenci</span>.
            <br />
            Sdílej <span className="text-lime-400">progres</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            CURRO spojuje tracking vzdálenosti, času a tempa s přehlednými
            statistikami, týdenními cíli a komunitním feedem, který tě udrží v
            pohybu.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-2xl bg-lime-400 px-6 py-4 text-base font-extrabold text-black transition hover:scale-[1.02]"
            >
              Stáhnout aplikaci
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Prozkoumat funkce
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-4">
              <div className="mb-3 inline-flex rounded-2xl bg-lime-400 p-2 text-black">
                <Timer size={18} />
              </div>
              <p className="text-sm font-semibold text-white">
                Tempo, čas, vzdálenost
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Každý běh přehledně zaznamenaný.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-4">
              <div className="mb-3 inline-flex rounded-2xl bg-lime-400 p-2 text-black">
                <Target size={18} />
              </div>
              <p className="text-sm font-semibold text-white">
                Cíle a statistiky
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Sleduj progres a drž si streak.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-zinc-900/70 p-4">
              <div className="mb-3 inline-flex rounded-2xl bg-lime-400 p-2 text-black">
                <Users size={18} />
              </div>
              <p className="text-sm font-semibold text-white">Komunita běžců</p>
              <p className="mt-1 text-sm text-zinc-500">
                Sdílej aktivity, lajkuj a komentuj.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px]">
            {/* floating card top */}
            <div className="absolute left-0 top-10 z-20 hidden w-52 rounded-[28px] border border-lime-400/30 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur md:block">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-lime-400">
                  Tempo
                </p>
                <Activity size={18} className="text-lime-400" />
              </div>
              <p className="mt-4 text-3xl font-black text-white">4:52</p>
              <p className="text-sm text-zinc-500">min / km</p>
            </div>

            {/* screenshot / mockup */}
            <div className="relative mx-auto w-[300px] md:w-[340px]">
              <div className="rounded-[42px] border border-white/10 bg-zinc-950 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                <div className="overflow-hidden rounded-[34px] border border-white/10 bg-zinc-900">
                  <img
                    src={appScreenshot}
                    alt="Ukázka aplikace CURRO"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* floating card right */}
            <div className="absolute -right-2 bottom-16 z-20 hidden w-56 rounded-[28px] border border-white/10 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur md:block">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-lime-400">
                Aktivita přátel
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-400 text-black">
                  <Heart size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">+12 lajků</p>
                  <p className="text-sm text-zinc-500">u posledního běhu</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">3 komentáře</p>
                  <p className="text-sm text-zinc-500">od komunity</p>
                </div>
              </div>
            </div>

            {/* floating card bottom left */}
            <div className="absolute bottom-0 left-4 z-20 hidden w-52 rounded-[28px] border border-white/10 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur md:block">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-lime-400">
                Týdenní cíl
              </p>
              <p className="mt-3 text-3xl font-black text-white">18 / 25 km</p>
              <div className="mt-4 h-2.5 rounded-full bg-white/10">
                <div className="h-2.5 w-[72%] rounded-full bg-lime-400" />
              </div>
              <p className="mt-2 text-sm text-zinc-500">
                Jsi blízko splnění cíle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
