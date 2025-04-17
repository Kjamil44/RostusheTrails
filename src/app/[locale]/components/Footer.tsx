"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Locale, usePathname, useRouter } from "../../../../i18n/routing";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer({
    locale,
    params,
}: {
    locale: string;
    params: { locale: Locale };
}) {
    const t = useTranslations("footer");
    const pathname = usePathname();
    const router = useRouter();

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-6">
                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t("navigation")}</h3>
                    <ul className="space-y-2">
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
                            <Link href={`/${locale}/trails/ten-km`} className="hover:text-green-500">
                                {t("10km")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/trails/twentyfour-km`} className="hover:text-green-500">
                                {t("24km")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/trails/registered-runners`} className="hover:text-green-500">
                                {t("registered-runners")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/trails/guide`} className="hover:text-green-500">
                                {t("guide")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/contact`} className="hover:text-green-500">
                                {t("contact")}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t("contact")}</h3>
                    <p>📍 Rostuše, Macedonia</p>
                    <p>📧 contact@rostushetrails.com</p>
                    <p>📞 +389 70 123 456</p>
                </div>

                {/* Social & Language Switch */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t("follow_us")}</h3>
                    <div className="flex space-x-4 mb-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=61568806610676"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 text-xl"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/rostushe_trail_run__/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 text-xl"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 text-gray-400">
                © {new Date().getFullYear()} Rostushe Trails. {t("rights_reserved")}
            </div>
        </footer>
    );
}
