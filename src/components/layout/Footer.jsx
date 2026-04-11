import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative px-6 pt-16 pb-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 lg:grid-cols-4">
          
          {/* BRAND */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-400 font-black text-black">
                C
              </div>
              <span className="text-lg font-black text-white">CURRO</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
              Běžecká aplikace pro sledování výkonu, budování konzistence a
              sdílení aktivit s komunitou.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-zinc-500">
              Navigace
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="/#features" className="text-zinc-400 hover:text-white">
                Funkce
              </a>
              <a href="/#statistics" className="text-zinc-400 hover:text-white">
                Statistiky
              </a>
              <a href="/#screenshots" className="text-zinc-400 hover:text-white">
                Jak funguje
              </a>
              <a href="/#faq" className="text-zinc-400 hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-zinc-500">
              Právní informace
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link
                to="/privacy"
                className="text-zinc-400 hover:text-white"
              >
                Zásady ochrany osobních údajů
              </Link>

              <Link
                to="/terms"
                className="text-zinc-400 hover:text-white"
              >
                Podmínky použití
              </Link>
            </div>
          </div>

          {/* CTA / NOTE */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-zinc-500">
              CURRO
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Sleduj své běhy, analyzuj výkon a zůstaň motivovaný každý den.
            </p>

            <a
              href="/#download"
              className="mt-4 inline-flex items-center justify-center rounded-2xl bg-lime-400 px-4 py-2 text-sm font-bold text-black transition hover:scale-[1.03]"
            >
              Stáhnout appku
            </a>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} CURRO. Všechna práva vyhrazena.</p>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;