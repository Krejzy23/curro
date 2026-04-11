import React, { useState } from "react";
import { faqItems } from "../../constants";
import { FaqItem } from "../ui/FaqItem";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative px-6 py-10 md:py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            FAQ
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
            Často kladené otázky
          </h2>

          <p className="mt-5 max-w-xl text-base leading-6 text-zinc-400 md:text-lg">
            Všechno důležité o aplikaci CURRO na jednom místě. Rychle zjistíš,
            jak funguje tracking, statistiky i komunitní část aplikace.
          </p>

          <div className="mt-8 rounded-[28px] border border-lime-400/20 bg-lime-400/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[2px] text-lime-300">
              Ještě váháš?
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-200 md:text-base">
              Projdi si odpovědi níže a potom si CURRO rovnou vyzkoušej. Landing
              page ti ukáže funkce, ale aplikace nejlépe vynikne při reálném
              používání.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;