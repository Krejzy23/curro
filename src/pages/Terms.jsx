import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "Podmínky použití | CURRO";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Podmínky použití aplikace CURRO."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-300 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black text-white">Podmínky použití</h1>

        <p className="mt-4 text-sm text-zinc-500">
          Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7">
          <section>
            <h2 className="text-xl font-bold text-white">1. Úvod</h2>
            <p className="mt-2">
              Tyto podmínky použití upravují používání aplikace CURRO
              ("aplikace"). Používáním aplikace souhlasíte s těmito podmínkami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              2. Používání aplikace
            </h2>
            <p className="mt-2">
              Aplikace slouží k zaznamenávání běhů, sledování statistik a
              sdílení aktivit s ostatními uživateli. Zavazujete se používat
              aplikaci v souladu s platnými zákony a těmito podmínkami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              3. Uživatelský účet
            </h2>
            <p className="mt-2">
              Pro využívání některých funkcí je nutné vytvořit uživatelský účet.
              Jste odpovědní za zabezpečení svého účtu a za všechny aktivity,
              které pod ním probíhají.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              4. Uživatelský obsah
            </h2>
            <p className="mt-2">
              Uživatelé mohou do aplikace vkládat obsah, jako jsou běhy,
              komentáře nebo profilové informace. Zavazujete se nevkládat obsah,
              který je nezákonný, urážlivý nebo porušuje práva třetích stran.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              5. Dostupnost služby
            </h2>
            <p className="mt-2">
              Snažíme se zajistit nepřetržitou dostupnost aplikace, ale
              nezaručujeme, že aplikace bude vždy dostupná bez přerušení nebo
              chyb.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              6. Omezení odpovědnosti
            </h2>
            <p className="mt-2">
              Aplikace je poskytována „tak jak je“. Neodpovídáme za případné
              škody vzniklé používáním aplikace, včetně ztráty dat nebo
              nepřesností ve statistikách.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. Ukončení účtu</h2>
            <p className="mt-2">
              Vyhrazujeme si právo pozastavit nebo zrušit účet uživatele v
              případě porušení těchto podmínek.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">8. Změny podmínek</h2>
            <p className="mt-2">
              Tyto podmínky můžeme čas od času aktualizovat. Aktualizované
              podmínky budou zveřejněny na této stránce.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">9. Kontakt</h2>
            <p className="mt-2">V případě dotazů nás můžete kontaktovat na:</p>
            <p className="mt-2 font-semibold text-white">ales.krejzl@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
