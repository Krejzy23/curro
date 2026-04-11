import React, { useMemo, useState } from "react";
import { tourItems } from "../../constants";

// import overviewVideo from "../../assets/videos/overview.mp4";
// import runsVideo from "../../assets/videos/runs.mp4";
// import calendarVideo from "../../assets/videos/calendar.mp4";
// import statsVideo from "../../assets/videos/stats.mp4";
// import profileVideo from "../../assets/videos/profile.mp4";

const Screenshots = () => {
  const [activeId, setActiveId] = useState("overview");

  const activeItem = useMemo(
    () => tourItems.find((item) => item.id === activeId) ?? tourItems[0],
    [activeId]
  );

  return (
    <section
      id="screenshots"
      className="relative px-6 py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            Product tour
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Podívej se, jak CURRO funguje
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Projdi si klíčové části aplikace a zjisti, jak vypadá tracking,
            statistiky i komunita v reálném používání.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* phone / video */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[300px] md:w-[340px]">
              <div className="pointer-events-none absolute -inset-8 rounded-[60px] bg-lime-400/10 blur-3xl" />

              <div className="relative rounded-[42px] border border-white/10 bg-zinc-950 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                <div className="rounded-[34px] border border-white/10 bg-black p-2">
                  <div className="relative overflow-hidden rounded-[28px] bg-zinc-900">
                    <video
                      key={activeItem.id}
                      src={activeItem.video}
                      className="block h-auto w-full"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className="space-y-4">
            {tourItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeItem.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`w-full rounded-[28px] border p-5 text-left transition ${
                    isActive
                      ? "border-lime-400/40 bg-lime-400/10 shadow-[0_0_0_1px_rgba(163,230,53,0.12)]"
                      : "border-white/10 bg-zinc-900/60 hover:bg-zinc-900/90"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        isActive
                          ? "bg-lime-400 text-black"
                          : "bg-white/5 text-white"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>

                        {isActive && (
                          <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[1.5px] text-lime-300">
                            Aktivní
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm leading-6 text-zinc-400 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;