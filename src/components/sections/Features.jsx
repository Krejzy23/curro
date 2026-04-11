import React from "react";
import { features } from "../../constants";
import { FeatureBlock } from "../ui/FeatureBlock";


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
