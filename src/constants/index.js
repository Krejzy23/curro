import {
  BarChart3,
  CalendarDays,
  Footprints,
  LayoutDashboard,
  User,
  SportShoe,
  Target,
  Users,
  LineChart,
  Flame,
  PieChart,
} from "lucide-react";

import trackingImage from "../assets/image/tracking-collage.png";
import progressImage from "../assets/image/progress-collage.png";
import communityImage from "../assets/image/community-collage.png";

import overviewVideo from "../assets/videos/overview.mp4";
import runsVideo from "../assets/videos/runs.mp4";
import calendarVideo from "../assets/videos/calendar.mp4";
import statsVideo from "../assets/videos/stats.mp4";
import profileVideo from "../assets/videos/profile.mp4";

export const navItems = [
  { label: "Funkce", id: "features" },
  { label: "Statistiky", id: "statistics" },
  { label: "Jak funguje", id: "screenshots" },
  { label: "FAQ", id: "faq" },
];

//Features page
export const features = [
  {
    id: "tracking",
    eyebrow: "Tracking běhů",
    title: "Měj každý běh pod kontrolou",
    description:
      "Zaznamenávej všechny své běhy během dne, sleduj tempo, vzdálenost i čas a měj svou aktivitu vždy přehledně uspořádanou.",
    bullets: [
      "Více běhů za den bez omezení",
      "Přesné sledování času, vzdálenosti a tempa",
      "Filtrování podle typu běhu",
    ],
    tags: [
      { label: "Easy", type: "easy" },
      { label: "Long", type: "long" },
      { label: "Recovery", type: "recovery" },
      { label: "Intervals", type: "interval" },
      { label: "Tempo", type: "tempo" },
    ],
    icon: SportShoe,
    image: trackingImage,
  },
  {
    id: "progress",
    eyebrow: "Progres a konzistence",
    title: "Buduj konzistenci a progres",
    description:
      "Měj rychlý přehled o svém běhání, sleduj měsíční aktivitu a plň cíle, které tě udrží v tempu i dlouhodobě.",
    bullets: [
      "Týdenní cíle a streaky",
      "Měsíční přehled běhů a kilometrů",
      "Rychlý souhrn výkonu na jednom místě",
    ],
    icon: Target,
    image: progressImage,
  },
  {
    id: "community",
    eyebrow: "Komunita",
    title: "Běhej s komunitou",
    description:
      "Sleduj ostatní běžce, sdílej své běhy a získej motivaci z aktivit, komentářů a podpory lidí kolem sebe.",
    bullets: [
      "Vyhledávání uživatelů a follow systém",
      "Sdílené běhy, komentáře a lajky",
      "Vlastní profil s bio a aktivitou",
    ],
    icon: Users,
    image: communityImage,
  },
];

export const runTypeAccent = {
  easy: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  tempo: "bg-orange-400/15 text-orange-300 border-orange-400/30",
  interval: "bg-violet-400/15 text-violet-300 border-violet-400/30",
  long: "bg-cyan-400/15 text-cyan-300 border-cyan-400/30",
  recovery: "bg-lime-400/15 text-lime-300 border-lime-400/30",
};

//Statistic page

export const statisticsItems = [
  {
    icon: LineChart,
    title: "Tempo v čase",
    text: "Sleduj vývoj průměrného tempa napříč měsíci a odhaluj skutečný progres.",
  },
  {
    icon: Flame,
    title: "Konzistence běhání",
    text: "Heatmapa i přehled aktivit pomáhají budovat pravidelnost a udržet si návyk.",
  },
  {
    icon: PieChart,
    title: "Rozložení tréninku",
    text: "Získej rychlý přehled o typech běhů a udržuj lepší rovnováhu v tréninku.",
  },
];

// Screenshots page
export const tourItems = [
  {
    id: "overview",
    title: "Přehled",
    description:
      "Rychlý souhrn aktivit, měsíčních statistik a aktuální formy na jednom místě.",
    icon: LayoutDashboard,
    video: overviewVideo,
  },
  {
    id: "runs",
    title: "Běhy",
    description:
      "Zapisuj, filtruj a spravuj své běhy podle typu, času, vzdálenosti i tempa.",
    icon: Footprints,
    video: runsVideo,
  },
  {
    id: "calendar",
    title: "Kalendář",
    description:
      "Sleduj své běhání v čase a měj lepší přehled o pravidelnosti i aktivitě.",
    icon: CalendarDays,
    video: calendarVideo,
  },
  {
    id: "stats",
    title: "Statistiky",
    description:
      "Analyzuj tempo, objem, typy běhů i dlouhodobý trend svého tréninku.",
    icon: BarChart3,
    video: statsVideo,
  },
  {
    id: "profile",
    title: "Profil",
    description:
      "Spravuj svůj profil, bio, vazby na komunitu a veřejnou prezentaci běhání.",
    icon: User,
    video: profileVideo,
  },
];

// FAQ

export const faqItems = [
  {
    question: "Co všechno si v CURRO můžu u běhu sledovat?",
    answer:
      "CURRO ti umožní zaznamenávat čas, vzdálenost a tempo každého běhu. Zároveň si můžeš ukládat více běhů za jeden den a mít přehled o celé své aktivitě na jednom místě.",
  },
  {
    question: "Můžu si běhy filtrovat podle typu tréninku?",
    answer:
      "Ano. Běhy si můžeš rozdělovat a filtrovat podle typu, například na easy, long, recovery, interval nebo tempo. Díky tomu se v historii aktivit rychle zorientuješ.",
  },
  {
    question: "Jak fungují statistiky v aplikaci?",
    answer:
      "V části Statistiky najdeš přehled tempa, objemu běhání, rozložení typů běhů, měsíčních trendů i heatmapu pravidelnosti. Statistiky ti pomohou lépe pochopit, jak se tvoje běhání vyvíjí v čase.",
  },
  {
    question: "Je CURRO vhodné i pro začátečníky?",
    answer:
      "Ano. Aplikace je navržená tak, aby byla přehledná a užitečná jak pro začínající běžce, tak pro ty, kteří chtějí sledovat svůj výkon detailněji a dlouhodobě.",
  },
  {
    question: "Má aplikace i komunitní funkce?",
    answer:
      "Ano. Můžeš vyhledávat uživatele, sledovat jejich aktivitu, sdílet své běhy, komentovat a dávat lajky. Součástí aplikace je také vlastní profil s bio a dalšími informacemi.",
  },
  {
    question: "Proč používat CURRO místo obyčejného běžeckého deníku?",
    answer:
      "CURRO spojuje tracking běhů, přehledné statistiky a komunitní prvky do jedné aplikace. Nejde jen o zapisování aktivit, ale o nástroj, který ti pomůže budovat konzistenci a udržet motivaci.",
  },
];
