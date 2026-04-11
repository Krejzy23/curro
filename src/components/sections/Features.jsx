import React from "react";
import { runTypeAccent } from "../../constants";
import { features } from "../../constants";


const FeatureBlock = ({ feature, reverse = false }) => {
  const Icon = feature.icon;

  return (
    <div
      className={`grid items-center gap-10 lg:gap-16 ${
        reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
          <Icon size={16} />
          {feature.eyebrow}
        </div>

        <h3 className="mt-6 text-3xl font-black tracking-tight text-white md:text-4xl">
          {feature.title}
        </h3>

        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          {feature.description}
        </p>

        <div className="mt-6 space-y-3">
          {feature.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-lime-400" />
              <p className="text-sm leading-6 text-zinc-300 md:text-base">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {feature.tags && (
          <div className="mt-7 flex flex-wrap gap-3">
            {feature.tags.map((tag) => (
              <span
                key={tag.label}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:scale-105 ${
                  runTypeAccent[tag.type]
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-current opacity-80" />
                {tag.label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="relative mx-auto max-w-105">
          <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-lime-400/5 blur-2xl" />

          <div className="relative rounded-4xl border border-white/10 bg-zinc-950/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm transition hover:scale-110 shadow-red-500/30" />
                <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm transition hover:scale-110 shadow-yellow-500/30" />
                <span className="h-3 w-3 rounded-full bg-green-500 shadow-sm transition hover:scale-110 shadow-green-500/30" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[2px] text-zinc-500">
                App Preview
              </span>
            </div>

            <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 max-w-lg">
              <img
                src={feature.image}
                alt={feature.title}
                className="block w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section
      id="features"
      className="relative px-6 py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            Funkce aplikace
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Všechno, co potřebuješ pro lepší běhání
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            CURRO spojuje přehledný tracking běhů, motivaci k pravidelnosti a
            komunitní funkce do jednoho prostoru, který tě udrží v pohybu.
          </p>
        </div>

        <div className="mt-16 space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock
              key={feature.id}
              feature={feature}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
