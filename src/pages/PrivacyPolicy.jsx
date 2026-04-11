import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Zásady ochrany osobních údajů | CURRO";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Zásady ochrany osobních údajů aplikace CURRO."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-300 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black text-white">
          Zásady ochrany osobních údajů
        </h1>

        <p className="mt-4 text-sm text-zinc-500">
          Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7">
          <section>
            <h2 className="text-xl font-bold text-white">1. Úvod</h2>
            <p className="mt-2">
              Tyto zásady ochrany osobních údajů popisují, jak aplikace CURRO
              ("aplikace") shromažďuje, používá a chrání vaše osobní údaje.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              2. Jaké údaje shromažďujeme
            </h2>
            <p className="mt-2">
              Při používání aplikace můžeme shromažďovat následující údaje:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Emailová adresa (pro přihlášení)</li>
              <li>Údaje o bězích (vzdálenost, čas, tempo)</li>
              <li>Typy běhů (např. easy, tempo, interval)</li>
              <li>Profilové informace (např. bio, věk, pohlaví)</li>
              <li>Interakce s komunitou (lajky, komentáře)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              3. Jak údaje používáme
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Pro poskytování funkcí aplikace</li>
              <li>Pro zobrazování statistik a přehledů</li>
              <li>Pro zlepšování aplikace</li>
              <li>Pro umožnění komunitních funkcí</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Sdílení údajů</h2>
            <p className="mt-2">
              Vaše údaje nesdílíme s třetími stranami, s výjimkou případů, kdy
              je to nutné pro fungování aplikace (např. poskytovatelé
              backendových služeb jako Firebase).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">
              5. Ukládání a zabezpečení dat
            </h2>
            <p className="mt-2">
              Vaše data jsou ukládána bezpečně a používáme standardní opatření k
              jejich ochraně před ztrátou, zneužitím nebo neoprávněným
              přístupem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">6. Vaše práva</h2>
            <p className="mt-2">
              Máte právo požádat o přístup ke svým údajům, jejich opravu nebo
              smazání. V případě dotazů nás můžete kontaktovat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. Kontakt</h2>
            <p className="mt-2">
              Pokud máte jakékoliv dotazy ohledně těchto zásad, kontaktujte nás
              na emailu:
            </p>
            <p className="mt-2 font-semibold text-white">ales.krejzl@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
