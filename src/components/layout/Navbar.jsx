import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../../constants";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${id}`);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-2 md:px-6 lg:px-8">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-3xl border px-4 py-3 transition md:px-5 ${
            scrolled
              ? "border-white/10 bg-zinc-950/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-white/10 bg-zinc-950/60 backdrop-blur-lg"
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-400 font-black text-black">
              C
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-lime-400">
                Běžecká aplikace
              </p>
              <p className="text-lg font-black tracking-tight text-white">
                CURRO
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.label}
                  href={`/#${item.id}`}
                  onClick={handleSectionClick(item.id)}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "text-lime-300 after:mt-1 after:block after:h-0.5 after:bg-lime-400"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/#download"
              onClick={handleSectionClick("download")}
              className="inline-flex items-center justify-center rounded-2xl bg-lime-400 px-5 py-3 text-sm font-extrabold text-black transition hover:scale-[1.02]"
            >
              Stáhnout appku
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-zinc-950/70 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`/#${item.id}`}
                  onClick={handleSectionClick(item.id)}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-lime-400/20"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#download"
                onClick={handleSectionClick("download")}
                className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-lime-400/70 px-5 py-3 text-sm font-extrabold text-black transition hover:scale-[1.01]"
              >
                Stáhnout appku
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="h-24 md:h-28" />
    </>
  );
};

export default Navbar;
