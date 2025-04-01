"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";
import { Locale, usePathname, useRouter } from "../../../../i18n/routing";

export default function Footer({ locale, params }: { locale: string; params: { locale: Locale } }) {
    const t = useTranslations("footer");
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;

        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: newLocale as Locale }
        );
    };

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
                {/* Navigation Links */}
                <ul className="flex space-x-6 mb-4 md:mb-0">
                    <li>
                        <Link href={`/${locale}/`} className="hover:text-green-500">
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/about-us`} className="hover:text-green-500">
                            {t("about-us")}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/trails`} className="hover:text-green-500">
                            {t("trails")}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/contact`} className="hover:text-green-500">
                            {t("contact")}
                        </Link>
                    </li>
                </ul>

                {/* Language Switcher */}
                <select
                    value={locale}
                    onChange={handleLanguageChange}
                    className="rounded-md px-4 py-2 bg-gray-700 border border-gray-600 text-white hover:outline-none focus:outline-none"
                >
                    <option value="en">EN</option>
                    <option value="mk">MK</option>
                </select>
            </div>

            {/* Copyright */}
            <div className="text-center mt-4 text-gray-400">
                © {new Date().getFullYear()} Rostushe Trails. {t("rights_reserved")}
            </div>
        </footer>
    );
}