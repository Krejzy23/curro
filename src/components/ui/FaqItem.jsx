import { ChevronDown } from "lucide-react";

export const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-zinc-900/60">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
      >
        <span className="text-base font-bold text-white md:text-lg">
          {item.question}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition ${
            isOpen
              ? "border-lime-400/30 bg-lime-400/10 text-lime-300"
              : "border-white/10 bg-white/5 text-zinc-300"
          }`}
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 md:px-6 md:pb-6">
            <div className="h-px w-full bg-white/10" />
            <p className="pt-4 text-sm leading-7 text-zinc-400 md:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
