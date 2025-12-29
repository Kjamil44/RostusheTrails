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
        title={locale === "mk" ? "За нас | Ростуше Треилс" : "About Us | Rostushe Trails"}
        description={
          locale === "mk"
            ? "Запознајте го тимот зад трките Ростуше Треилс и нашата мисија во планинското трчање."
            : "Meet the team behind Rostushe Trails and our mission in mountain running."
        }
        openGraph={{
          url: `https://rostushetrails.com/${locale}/about-us`,
          title: locale === "mk" ? "За нас | Ростуше Треилс" : "About Us | Rostushe Trails",
          description:
            locale === "mk"
              ? "Нашата приказна, здружението, и тимот кој стои зад трките во Националниот Парк Маврово."
              : "Our story, the association, and the team behind the races in Mavrovo National Park.",
          images: [
            {
              url: "https://rostushetrails.com/logo-detailed.jpg",
              width: 1200,
              height: 630,
              alt: "Rostushe Trails Team"
            }
          ],
          siteName: "Rostushe Trails",
          type: "website",
          locale: locale === "mk" ? "mk_MK" : "en_US"
        }}
        twitter={{ cardType: "summary_large_image" }}
      />

      <div className="px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Rostushe Section */}
          <section className="flex flex-col md:flex-col lg:flex-row items-start gap-8 mb-20 mt-20">
            <div className="w-full lg:w-1/2">
              <Image
                src={rostushepic}
                alt={t("rostushe_image")}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-green-700 mb-6">{t("rostushe")}</h2>
              <p className="text-gray-800 leading-relaxed font-sans mb-6">
                {t("rostushe_description")}
              </p>
              <ul className="list-disc list-inside text-gray-800 font-sans space-y-2">
                <li>{t("landmark_1")}</li>
                <li>{t("landmark_2")}</li>
                <li>{t("landmark_3")}</li>
                <li>{t("landmark_4")}</li>
              </ul>
            </div>
          </section>

          {/* Everesting Rostushe Club Section (new text, same photo) */}
          <section className="flex flex-col lg:flex-row-reverse items-start gap-10 mb-20">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src={associationpic}
                alt={t("association_image")}
                width={450}
                height={300}
                className="w-full max-w-[400px] h-auto object-contain rounded-2xl shadow-2xl bg-white"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-green-700 mb-4">
                {t("association")}
              </h2>
              <p className="text-gray-800 leading-relaxed font-sans mb-4">
                {t("association_intro")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.fpsm.org.mk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition p-5"
                  aria-label={t("federation_link_label")}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={federationLogo}
                      alt={t("federation_logo_alt")}
                      width={260}
                      height={120}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>

                  <p className="mt-4 text-center text-sm font-semibold text-gray-800">
                    {t("federation_name")}
                  </p>
                </a>

                <a
                  href="https://www.facebook.com/skyrunningmk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition p-5"
                  aria-label={t("skyrunning_link_label")}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={skyrunningLogo}
                      alt={t("skyrunning_logo_alt")}
                      width={260}
                      height={120}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>

                  <p className="mt-4 text-center text-sm font-semibold text-gray-800">
                    {t("skyrunning_name")}
                  </p>
                </a>
              </div>

              {/* Mission */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {t("association_mission_title")}
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>{t("association_mission_1")}</li>
                  <li>{t("association_mission_2")}</li>
                  <li>{t("association_mission_3")}</li>
                  <li>{t("association_mission_4")}</li>
                </ul>
              </div>

              {/* Activities */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {t("association_activities_title")}
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>{t("association_activity_1")}</li>
                  <li>{t("association_activity_2")}</li>
                  <li>{t("association_activity_3")}</li>
                  <li>{t("association_activity_4")}</li>
                  <li>{t("association_activity_5")}</li>
                </ul>
              </div>

              {/* Goals */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {t("association_goals_title")}
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>{t("association_goal_1")}</li>
                  <li>{t("association_goal_2")}</li>
                  <li>{t("association_goal_3")}</li>
                  <li>{t("association_goal_4")}</li>
                </ul>
              </div>

              {/* Membership */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {t("association_members_title")}
                </h3>
                <p className="text-gray-800 mb-2">
                  {t("association_members_intro")}
                </p>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>{t("association_member_1")}</li>
                  <li>{t("association_member_2")}</li>
                  <li>{t("association_member_3")}</li>
                </ul>
                <p className="text-gray-800 mt-2">
                  {t("association_members_benefits")}
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-green-700 mb-10 text-center">
              {t("team_title")}
            </h2>

            <div className="flex justify-center mb-12">
              <Image
                src={teamPic}
                alt="Team Rostushe"
                width={900}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] max-w-4xl"
              />
            </div>

            {/* Modern grid of team cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <article
                  key={index}
                  className="relative bg-white/90 border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-700" />

                  <div className="p-5 pt-6 flex flex-col h-full">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <span className="text-xs uppercase tracking-wide text-green-700 bg-green-50 px-2 py-1 rounded-full">
                        {index === 0
                          ? t("team.badge_lead")
                          : index <= 4
                            ? t("team.badge_core")
                            : t("team.badge_member")}
                      </span>
                    </div>

                    {member.highlight && (
                      <p className="text-sm text-green-800 font-medium mb-3">
                        {member.highlight}
                      </p>
                    )}

                    <div className="mt-1">
                      <p className="text-xs font-semibold text-gray-500 mb-2">
                        {t("team.achievements_label")}
                      </p>
                      {/* Scrollable achievements list, to keep card compact */}
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                        {member.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
