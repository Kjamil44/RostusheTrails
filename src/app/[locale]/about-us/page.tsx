"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import rostushepic from "../../../assets/images/rostushe-od-planina.jpg";
import associationpic from "../../../assets/images/logo-detailed.jpg";
import teamPic from "../../../assets/images/everesting-team-photo.jpg";

export default function Page() {
  const t = useTranslations("about-us");

  const teamMembers = [
    {
      name: t("team.haris"),
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
      ],
    },
    {
      name: t("team.oktay"),
      achievements: [
        "Pelister Ultra Trail – 20 km – 09.2022 (1 место)",
        "High Scardus – 23 km – 09.2022",
        "Rocky Trail Nish – 23 km – 11.2022",
        "Pelister Unique Trail Marathon – 22 km – 06.2023",
        "High Scardus Ultra – 23 km (3 место) – 09.2023",
        "Ростушко – Корабска трансверзала – 51,5 км – 10.09.2023",
        "High Scardus Ultra – 20 km – 09.2024 (5 место)",
      ],
    },
    {
      name: t("team.bilal"),
      achievements: [
        "Rocky Trail Nish – 10 km – 11.2022",
        "Pelister Unique Marathon – 22 km – 06.2023",
        "High Scardus – 23 km – 09.2023",
        "Ohrid Kids Race – 10 km – 05.2024",
      ],
    },
    {
      name: t("team.ahmed"),
      achievements: [
        "Pelister Ultra Trail – 19 km – 09.2022",
        "Rocky Trail Nish – 10 km – 11.2022",
        "High Scardus – 22 km – 09.2023",
      ],
    },
    {
      name: t("team.kebir"),
      achievements: [
        "Pelister Ultra Trail – 19 km – 09.2022",
        "Rocky Trail Nish – 10 km – 11.2022",
        "High Scardus – 22 km – 09.2023",
        "Pelister Unique Ultra Trail – 23 km – DNF",
      ],
    },
    {
      name: t("team.harun"),
      achievements: ["High Scardus – 22 km – 09.2023"],
    },
    {
      name: t("team.edah"),
      achievements: ["Ohrid Kids Race – 10 km – 05.2024"],
    },
    {
      name: t("team.sunaj"),
      achievements: ["Ohrid Kids Race – 10 km – 05.2024"],
    },
    {
      name: t("team.imran"),
      achievements: ["Ohrid Kids Race – 10 km – 05.2024"],
    },
    {
      name: t("team.mustafa"),
      achievements: ["Rocky Trail Nish – 10 km – 11.2022"],
    },
    {
      name: t("team.semih"),
      achievements: ["Ohrid Kids Race – 05.2024"],
    },
    {
      name: t("team.berin"),
      achievements: ["Pelister Ultra Trail – 20 km – 09.2022"],
    },
    {
      name: t("team.nermin"),
      achievements: ["High Scardus – 20 km – 09.2022"],
    },
    {
      name: t("team.seval"),
      achievements: [
        "Pelister Ultra Trail – 20 км – 09.2022 (1 место)",
        "High Scardus – 20 km – 09.2022",
        "Rocky Trail Nish – 20 км – 11.2022",
        "Ростушко – Корабска трансверзала – 51,5 км – 10.09.2023",
      ],
    },
    {
      name: t("team.mirnes"),
      achievements: [
        "Pelister Ultra Trail – 20 км – 09.2022",
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section: За Росуше */}
        <section className="flex flex-col md:flex-col lg:flex-row items-start gap-8 mb-20 mt-20">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto mb-4">
              <Image
                src={rostushepic}
                alt={t("rostushe_image")}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-green-700 mb-6">{t("rostushe")}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t("rostushe_description")}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t("landmark_1")}</li>
              <li>{t("landmark_2")}</li>
              <li>{t("landmark_3")}</li>
              <li>{t("landmark_4")}</li>
            </ul>
          </div>
        </section>

        {/* Section: За здружението */}
        <section className="flex flex-col lg:flex-row-reverse items-start gap-8 mb-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px]">
              <Image
                src={associationpic}
                alt={t("association_image")}
                width={450}
                height={300}
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-green-700 mb-6">{t("association")}</h2>
            <p className="text-gray-700 leading-relaxed">{t("association_description")}</p>
          </div>
        </section>

        {/* Section: Team Rostushe */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-green-700 mb-10 text-center">
            {t("team_title")}
          </h2>

          {/* Team Image */}
          <div className="flex justify-center mb-12">
            <Image
              src={teamPic}
              alt="Team Rostushe"
              width={900}
              height={600}
              className="rounded-2xl shadow-2xl object-cover w-full h-[400px] max-w-4xl"
            />
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? "bg-green-100" : "bg-white"
                  } rounded-2xl shadow-md p-6 flex flex-col`}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {member.name}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                  {member.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
