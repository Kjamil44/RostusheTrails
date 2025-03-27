"use client";

import Link from "next/link";
import Image from "next/image";
import logoPic from "../../../assets/images/logo.jpg";
import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";
import router from "next/router";
import { usePathname } from "next/navigation";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("menu");
  const pathname = usePathname();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    debugger;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Logo */}
      <div className="flex justify-center py-4">
        <Image
          src={logoPic}
          alt="Logo"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 py-4 shadow-sm">
        <ul className="flex justify-center space-x-8 text-gray-700 font-medium relative">
          <li>
            <Link href={`/${locale}/`} className="hover:text-blue-500">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/about-us`} className="hover:text-blue-500">
              {t("about-us")}
            </Link>
          </li>
          <li className="relative group">
            {/* Parent Menu */}
            <span className="cursor-pointer hover:text-blue-500">
              {t("trails")}
            </span>
            {/* Dropdown Menu */}
            <ul className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg text-sm z-10 hidden group-hover:flex flex-col">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href={`/${locale}/trails/ten-km`}>10 km</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href={`/${locale}/trails/twentyfour-km`}>24 km</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href={`/${locale}/trails/trails/guide`}>{t("guide")}</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href={`/${locale}/trails/registered-runners`}>
                  {t("registered-runners")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={`/${locale}/contact`} className="hover:text-blue-500">
              {t("contact")}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/accommodation`} className="hover:text-blue-500">
              {t("accommodation")}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/sponsors`} className="hover:text-blue-500">
              {t("sponsors")}
            </Link>
          </li>
        </ul>
        <select
          value={locale}
          onChange={handleLanguageChange}
          className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="mk">MK</option>
        </select>
      </nav>
    </header>
  );
}
