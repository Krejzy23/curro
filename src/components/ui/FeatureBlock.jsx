import { runTypeAccent } from "../../constants/index";

export const FeatureBlock = ({ feature, reverse = false }) => {
  const Icon = feature.icon;

  return (
    <div
      className={`grid items-center gap-10 lg:gap-16 ${
        reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
      }`}
    >
      <div className={`${reverse ? "lg:order-2" : ""} max-w-xl`}>
        <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
          <Icon size={16} />
          {feature.eyebrow}
        </div>

        <h3 className="mt-6 text-2xl font-black tracking-tight text-white md:text-4xl">
          {feature.title}
        </h3>

        <p className="mt-5 max-w-2xl text-sm leading-5 text-zinc-400 md:text-lg">
          {feature.description}
        </p>

        <div className="mt-6 space-y-3">
          {feature.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.35)]" />
              <p className="text-sm leading-6 text-zinc-300 md:text-base">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {feature.tags && (
          <div className="mt-7 flex flex-wrap justify-center gap-3">
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
        <div className="group relative mx-auto max-w-md">
          <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-lime-400/5 blur-2xl" />

          <div className="relative rounded-4xl border border-white/10 bg-zinc-950/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm shadow-red-500/30" />
                <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/30" />
                <span className="h-3 w-3 rounded-full bg-green-500 shadow-sm shadow-green-500/30" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[2px] text-zinc-500">
                {feature.previewLabel || "App Preview"}
              </span>
            </div>

            <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70">
              <img
                src={feature.image}
                alt={feature.title}
                className="block w-full object-cover transition duration-500 group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};