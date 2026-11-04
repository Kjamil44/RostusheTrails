"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import rostushepic from "../../../assets/images/rostushe-od-planina.jpg";
import associationpic from "../../../assets/images/logo-detailed.jpg";
import teamPic from "../../../assets/images/everesting-team-photo.jpg";
import federationLogo from "../../../assets/images/fpsm-logo.png";
import skyrunningLogo from "../../../assets/images/skyrunning-logo.png";
import { NextSeo } from "next-seo";

export default function Page() {
  const locale = useLocale();
  const t = useTranslations("about-us");
  const mk = locale === "mk";
  // New editorial UI labels are bilingual here; all existing copy stays in next-intl.
  const ui = {
    eyebrow: mk ? "ПРИКАЗНАТА ЗАД ПАТЕКИТЕ" : "THE STORY BEHIND THE TRAILS",
    pageTitle: mk ? "Повеќе од трка." : "More than a race.",
    pageSubtitle: mk ? "Место. Заедница. Љубов кон планината." : "A place. A community. A love for the mountains.",
    discover: mk ? "Откриј ја нашата приказна" : "Discover our story",
    homeLabel: mk ? "01 / НАШИОТ ДОМ" : "01 / OUR HOME",
    clubLabel: mk ? "02 / ЗАД ПАТЕКИТЕ" : "02 / BEHIND THE TRAILS",
    teamLabel: mk ? "03 / ЛУЃЕТО" : "03 / THE PEOPLE",
    landscape: mk ? "Природата е нашата почетна линија." : "Nature is our starting line.",
    roots: mk ? "Вкоренети во Ростуше" : "Rooted in Rostushe",
    whatWeDo: mk ? "ШТО НÈ ВОДИ" : "WHAT DRIVES US",
    community: mk ? "Заедницата зад секој километар." : "The community behind every kilometer.",
    communitySub: mk ? "Запознај ги луѓето што ја движат нашата приказна." : "Meet the people who keep our story moving.",
    records: mk ? "УЧЕСТВА И ПОСТИГНУВАЊА" : "RACES & ACHIEVEMENTS",
    races: mk ? "записи" : "entries",
    connections: mk ? "ПОВРЗАНИ ОРГАНИЗАЦИИ" : "AFFILIATED ORGANIZATIONS",
    explore: mk ? "Посети ја страницата" : "Visit website",
    mission: mk ? "01 / Мисија" : "01 / Mission",
    activities: mk ? "02 / Активности" : "02 / Activities",
    goals: mk ? "03 / Цели" : "03 / Goals",
    membership: mk ? "04 / Членство" : "04 / Membership",
  };

  const teamMembers = [

    {

      name: t("team.haris"),

      highlight: t("team.haris_highlight"),

      achievements: [

        t("team.haris_achievment1"),

        "Ohrid Ultra Trail – 2021  – 20 km",

        "Ohrid Ultra Trail – 2022 – 20 km",

        "Pelister Unique Trail Marathon – 06.2022",

        `Everesting Rostushe – 91,5 км Uphill / Downhill (${t("team.haris_achievment2")}`,

        "High Scardus Ultra Trail – 54 km – 09.2022",

        "Pelister Ultra Trail – 47 km – 09.2022",

        "Rocky Trails – Nis – Serbia – 11.2022",

        "Tantalos Ultra Trail – Izmir, Turkey – 50km – 11.2022",

        "Pelister Unique Trail Marathon – 32 km – 06.2023",

        "Uludag Ultra Trail – 66 km – 07.2023 (3 место)",

        "High Scardus Ultra Trail – 76,5 km – 09.2023",

        "Ростушко – Корабска трансверзала – 51,5 км – 10.09.2023",

        "Ljuboten Sky Race – 23,5 km – 09.2023",

        "Momata Rock Trail – 20km – 10.2023",

        "Vrajnski Полумаратон – 21,09 km – 11.2023",

        "Beljanica Trails – 19 km – 09.2024",

        "High Scardus Ultra – 65 km – 09.2024",

        "Skopje Wizz Air Marathon – 21,09 km – 10.2024",

        "Svilajnac Half Marathon – 21,09 km – 10.2024",

        "Salomon Cappadocia Ultra Trail – 60km – 10.2024",

        "Strumina Trails – 19 km – 11.2024",

        "Ephesus Ultra trails – 61 km Finisher",

        "High Scardus Ultra – Oshlak Sky Race – 35 km – 2200 D+ - Finisher",

        "Galicnik trail run – 20 km – 3 place",

        "Wizzair Skopje Marathon – 42,2 km Full Marathon – Finisher",

        "Tirana Marathon – 21,1 km – Finisher",

        "Manavgat Backyard ultra – 11 loops – 75 km –DNF",

        "Momata Rock Trails – 20 km – Finisher",

        "Strumina Trails – 18 km – Finisher"

      ],

    },

    {

      name: t("team.oktay"),

      highlight: t("team.oktay_highlight"),

      achievements: [

        "Pelister Ultra Trail – 20 km – 09.2022 (1 место)",

        "High Scardus – 23 km – 09.2022",

        "Rocky Trail Nish – 23 km – 11.2022",

        "Pelister Unique Trail Marathon – 22 km – 06.2023",

        "High Scardus Ultra – 23 km (3 место) – 09.2023",

        "Ростушко – Корабска трансверзала – 51,5 км – 10.09.2023",

        "High Scardus Ultra – 20 km – 09.2024 (5 место)",

        "High Scardus Ultra – Oshlak Sky Race – 35 km – 2200 D+ - Finisher",

        "Galicnik trail run – 20 km – 2 place",

        "Tirana Marathon – 21,1 km – Finisher",

        "Momata Rock Trails – 20 km – Finisher"

      ],

    },

    {

      name: t("team.bilal"),

      highlight: "",

      achievements: [

        "Rocky Trail Nish – 11 km – 11.2022",

        "Pelister Unique Marathon – 22 km – 06.2023",

        "High Scardus – 23 km – 09.2023",

        "Ohrid Kids Race – 11 km – 05.2024",

      ],

    },

    {

      name: t("team.ahmed"),

      highlight: "",

      achievements: [

        "Pelister Ultra Trail – 19 km – 09.2022",

        "Rocky Trail Nish – 11 km – 11.2022",

        "High Scardus – 22 km – 09.2023",

      ],

    },

    {

      name: t("team.kebir"),

      highlight: "",

      achievements: [

        "Pelister Ultra Trail – 19 km – 09.2022",

        "Rocky Trail Nish – 11 km – 11.2022",

        "High Scardus – 22 km – 09.2023",

        "Pelister Unique Ultra Trail – 23 km – DNF",

      ],

    },

    {

      name: t("team.harun"),

      highlight: "",

      achievements: ["High Scardus – 22 km – 09.2023"],

    },

    {

      name: t("team.edah"),

      highlight: t("team.kids_highlight"),

      achievements: ["Ohrid Kids Race – 11 km – 05.2024"],

    },

    {

      name: t("team.sunaj"),

      highlight: t("team.kids_highlight"),

      achievements: ["Ohrid Kids Race – 11 km – 05.2024"],

    },

    {

      name: t("team.imran"),

      highlight: t("team.kids_highlight"),

      achievements: ["Ohrid Kids Race – 11 km – 05.2024"],

    },

    {

      name: t("team.mustafa"),

      highlight: "",

      achievements: ["Rocky Trail Nish – 11 km – 11.2022"],

    },

    {

      name: t("team.semih"),

      highlight: t("team.kids_highlight"),

      achievements: ["Ohrid Kids Race – 05.2024"],

    },

    {

      name: t("team.berin"),

      highlight: "",

      achievements: ["Pelister Ultra Trail – 20 km – 09.2022"],

    },

    {

      name: t("team.nermin"),

      highlight: "",

      achievements: ["High Scardus – 20 km – 09.2022"],

    },

    {

      name: t("team.seval"),

      highlight: "",

      achievements: [

        "Pelister Ultra Trail – 20 км – 09.2022 (1 место)",

        "High Scardus – 20 km – 09.2022",

        "Rocky Trail Nish – 20 км – 11.2022",

        "Ростушко – Корабска трансверзала – 51,5 км – 10.09.2023",

      ],

    },

    {

      name: t("team.mirnes"),

      highlight: "",

      achievements: [

        "Pelister Ultra Trail – 20 км – 09.2022",

      ],

    },

    {

      name: t("team.lejs"),

      highlight: "",

      achievements: [

        "Rostushe trails – 11 km Finisher",

        "Galicnik Trail Run  - 8 km Finisher",

        "Momata Rock Trails – 10 km Finisher"

      ],

    },

    {

      name: t("team.halil"),

      highlight: "",

      achievements: [

        "Rostushe trails – 11 km Finisher",

        "Galicnik Trail Run  - 8 km Finisher",

        "Momata Rock Trails – 10 km Finisher"

      ],

    },

  ];

  return (
    <>
      <NextSeo
        title={mk ? "За нас | Ростуше Треилс" : "About Us | Rostushe Trails"}
        description={mk ? "Запознајте го тимот зад трките Ростуше Треилс и нашата мисија во планинското трчање." : "Meet the team behind Rostushe Trails and our mission in mountain running."}
        openGraph={{
          url: `https://rostushetrails.com/${locale}/about-us`,
          title: mk ? "За нас | Ростуше Треилс" : "About Us | Rostushe Trails",
          description: mk ? "Нашата приказна, здружението, и тимот кој стои зад трките во Националниот Парк Маврово." : "Our story, the association, and the team behind the races in Mavrovo National Park.",
          images: [{ url: "https://rostushetrails.com/logo-detailed.jpg", width: 1200, height: 630, alt: "Rostushe Trails Team" }],
          siteName: "Rostushe Trails", type: "website", locale: mk ? "mk_MK" : "en_US",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />

      <main className="overflow-hidden bg-white text-gray-900">
        {/* A photographic, asymmetrical opening unique to About Us */}
        <header className="relative isolate min-h-[340px] overflow-hidden bg-[#173427] sm:min-h-[380px] lg:min-h-[420px]">
          <Image src={rostushepic} alt={t("rostushe_image")} fill priority sizes="100vw" className="object-cover object-[center_65%] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10271d]/85 via-[#10271d]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10271d]/25 via-transparent to-transparent" />
          <div className="relative mx-auto flex min-h-[340px] max-w-7xl flex-col justify-center px-6 py-14 sm:min-h-[380px] sm:px-8 lg:min-h-[420px] lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-green-100">
                <span className="h-px w-10 bg-green-300" />{ui.eyebrow}
              </div>
              <h1 className="max-w-[740px] text-4xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">{ui.pageTitle}</h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">{ui.pageSubtitle}</p>
              <a href="#our-home" className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#10271d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {ui.discover}<span aria-hidden="true">↘</span>
              </a>
            </div>
            <div className="absolute bottom-5 right-6 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 sm:flex lg:right-12">
              <span className="h-px w-10 bg-white/60" /> ROSTUSHE · MAVROVO
            </div>
          </div>
        </header>

        {/* Location: open editorial layout and original landmarks */}
        <section id="our-home" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="lg:sticky lg:top-20 lg:self-start">
              <p className="mb-4 text-xs font-bold tracking-[0.17em] text-green-700">{ui.homeLabel}</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("rostushe")}</h2>
              <div className="mt-5 h-1 w-12 rounded-full bg-green-600" />
              <p className="mt-5 text-base font-medium leading-relaxed text-gray-600">{ui.landscape}</p>
            </div>
            <div>
              <p className="text-base leading-7 text-gray-700">{t("rostushe_description")}</p>
              <div className="mt-7 rounded-3xl border border-gray-100 bg-gray-50/70 p-6 shadow-sm sm:p-8">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-green-700">{ui.roots}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {["landmark_1", "landmark_2", "landmark_3", "landmark_4"].map((key, i) => (
                    <div key={key} className="flex items-start gap-4 border-t border-gray-200 py-4">
                      <span className="shrink-0 font-mono text-xs font-bold text-green-700">0{i + 1}</span>
                      <span className="text-sm font-semibold leading-relaxed text-gray-800">{t(key as Parameters<typeof t>[0])}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Association: distinct dark feature followed by readable content cards */}
        <section className="bg-[#1c392b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="mb-5 text-xs font-bold tracking-[0.17em] text-[#b9dda6]">{ui.clubLabel}</p>
            <div className="grid items-center gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("association")}</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">{t("association_intro")}</p>
              </div>
              <div className="relative mx-auto w-full max-w-[390px]">
                <div className="absolute -inset-3 rotate-[5deg] rounded-[42px] border border-[#a8c89a]/50" />
                <div className="relative -rotate-[2deg] rounded-[30px_52px_30px_52px] border border-white/80 bg-white p-7 shadow-xl sm:p-9">
                  <Image src={associationpic} alt={t("association_image")} width={450} height={300} className="h-auto w-full object-contain" />
                </div>
              </div>
            </div>

            <p className="mb-5 mt-12 text-xs font-bold uppercase tracking-[0.17em] text-[#b9dda6]">{ui.whatWeDo}</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { number: ui.mission, title: t("association_mission_title"), items: ["association_mission_1", "association_mission_2", "association_mission_3", "association_mission_4"] },
                { number: ui.activities, title: t("association_activities_title"), items: ["association_activity_1", "association_activity_2", "association_activity_3", "association_activity_4", "association_activity_5"] },
                { number: ui.goals, title: t("association_goals_title"), items: ["association_goal_1", "association_goal_2", "association_goal_3", "association_goal_4"] },
                { number: ui.membership, title: t("association_members_title"), intro: t("association_members_intro"), items: ["association_member_1", "association_member_2", "association_member_3"], footer: t("association_members_benefits") },
              ].map((group) => (
                <article key={group.number} className="rounded-2xl border border-white/10 bg-white p-6 text-gray-900 shadow-sm transition hover:shadow-lg sm:p-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-green-700">{group.number}</p>
                  <h3 className="mb-4 text-xl font-bold tracking-tight text-gray-900">{group.title}</h3>
                  {group.intro && <p className="mb-5 text-sm leading-7 text-gray-700">{group.intro}</p>}
                  <ul className="space-y-3">
                    {group.items.map((key) => <li key={key} className="flex gap-3 text-sm leading-7 text-gray-700"><span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />{t(key as Parameters<typeof t>[0])}</li>)}
                  </ul>
                  {group.footer && <p className="mt-5 border-t border-gray-100 pt-5 text-sm leading-7 text-gray-700">{group.footer}</p>}
                </article>
              ))}
            </div>
            <div className="mt-10">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-[#b9dda6]">{ui.connections}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { href: "https://www.fpsm.org.mk/", img: federationLogo, alt: t("federation_logo_alt"), label: t("federation_name"), aria: t("federation_link_label") },
                  { href: "https://www.facebook.com/skyrunningmk", img: skyrunningLogo, alt: t("skyrunning_logo_alt"), label: t("skyrunning_name"), aria: t("skyrunning_link_label") },
                ].map((org) => (
                  <a key={org.href} href={org.href} target="_blank" rel="noopener noreferrer" aria-label={org.aria} className="group flex min-h-[115px] items-center gap-5 rounded-2xl border border-white/10 bg-white p-5 text-gray-900 shadow-sm transition hover:shadow-lg">
                    <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2 sm:w-32"><Image src={org.img} alt={org.alt} width={130} height={80} className="max-h-16 w-auto object-contain" /></div>
                    <div className="min-w-0"><p className="font-bold leading-snug">{org.label}</p><p className="mt-2 text-xs font-semibold text-green-700">{ui.explore} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">↗</span></p></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team: the same complete grid, refreshed and more legible */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-bold tracking-[0.17em] text-green-700">{ui.teamLabel}</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("team_title")}</h2>
            <p className="mt-3 text-base leading-7 text-gray-600">{ui.communitySub}</p>
          </div>
          <div className="relative mb-10 overflow-hidden rounded-3xl bg-gray-100">
            <div className="relative h-[240px] sm:h-[320px] lg:h-[380px]">
              <Image src={teamPic} alt="Team Rostushe" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8"><p className="max-w-xl text-xl font-bold tracking-tight sm:text-2xl">{ui.community}</p></div>
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-extrabold uppercase tracking-[0.19em] text-green-700">{ui.records}</p>
            <span className="rounded-full border border-green-100 bg-white px-4 py-2 text-xs font-bold text-green-700">{teamMembers.length} {mk ? "членови" : "members"}</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article key={`${member.name}-${index}`} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:border-green-100 hover:shadow-md">
                <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-6 pb-5 pt-6">
                  <div className="min-w-0"><p className="mb-2 font-mono text-[11px] font-bold tracking-[0.16em] text-gray-500">{String(index + 1).padStart(2, "0")} / TEAM</p><h3 className="break-words text-xl font-extrabold tracking-tight text-gray-900">{member.name}</h3></div>
                  <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-green-700">{index === 0 ? t("team.badge_lead") : index <= 4 ? t("team.badge_core") : t("team.badge_member")}</span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  {member.highlight && <p className="mb-4 rounded-xl bg-green-50 px-3 py-2 text-sm font-semibold leading-relaxed text-green-800">{member.highlight}</p>}
                  <div className="mb-4 flex items-center justify-between gap-3"><p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-gray-500">{t("team.achievements_label")}</p><span className="font-mono text-xs font-semibold text-gray-500">{member.achievements.length} {ui.races}</span></div>
                  <ul className="max-h-52 min-h-[68px] space-y-3 overflow-y-auto pr-2 text-sm leading-6 text-gray-700 [scrollbar-color:#b8cead_transparent] [scrollbar-width:thin]">
                    {member.achievements.map((achievement, i) => <li key={i} className="flex items-start gap-3"><span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" /><span>{achievement}</span></li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
