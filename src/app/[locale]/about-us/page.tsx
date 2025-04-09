"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import rostushepic from "../../../assets/images/rostushe-od-planina.jpg";
import associationpic from "../../../assets/images/logo-detailed.jpg";

export default function Page() {
  const t = useTranslations("about-us");

  const teamMembers = [
    {
      name: t("team.hariz"),
      achievements: [
        "Искуство повеќе од 10 години активно планинарење, 5 години учесник на трки во нашата држава и на меѓународни трки",
        "Ohrid Ultra Trail – 2021 y – 20 km",
        "Ohrid Ultra Trail – 2022 – 20 km",
        "Pelister Unique Trail Marathon – 06.2022",
        "Еверестинг Ростуше – 91,5 км Uphill / Downhill (прв во нашата држава кој што има направено Еверестинг, втор во Балканот, 613 во свет)",
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
  ];

  return (
    <div className="bg-gray-50 p-6">
      {/* Section: За Росуше */}
      <section className="flex flex-col lg:flex-row items-center mb-16">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:mr-6">
          <div className="h-64 flex items-center justify-center">
            <Image
              src={rostushepic}
              alt={t("rostushe_image")}
              width={600}
              height={200}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">{t("rostushe")}</h2>
          <p className="text-gray-700 leading-relaxed">{t("rostushe_description")}</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>{t("landmark_1")}</li>
            <li>{t("landmark_2")}</li>
            <li>{t("landmark_3")}</li>
            <li>{t("landmark_4")}</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse items-center mb-16">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:ml-6">
          <div className=" h-64 flex items-center justify-center">
            <Image
              src={associationpic}
              alt={t("association_image")}
              width={300}
              height={100}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">{t("association")}</h2>
          <p className="text-gray-700 leading-relaxed">{t("association_description")}</p>
        </div>
      </section>

      {/* Section: За Team Rostushe */}
      <section className="flex flex-col lg:flex-row items-center">
        {/* Image Placeholder */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-8">
            Team Rostushe
          </h2>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-6 mb-6 last:border-none last:pb-0 last:mb-0"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {member.name}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {member.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
