"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Locale, usePathname, useRouter } from "../../../../i18n/routing";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import creatorLogo from "../../../assets/images/Logo-WZL.png";
import federationLogo from "../../../assets/images/fpsm-logo.png";
import skyrunningLogo from "../../../assets/images/skyrunning-logo.png";


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
        <footer className="bg-gray-900 text-white">
            {/* top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-green-600 via-emerald-500 to-green-700" />

            <div className="container mx-auto px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("navigation")}</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href={`/${locale}/`} className="hover:text-green-400 transition">{t("home")}</Link></li>
                            <li><Link href={`/${locale}/about-us`} className="hover:text-green-400 transition">{t("about-us")}</Link></li>
                            <li><Link href={`/${locale}/trails/eleven-km`} className="hover:text-green-400 transition">{t("11km")}</Link></li>
                            <li><Link href={`/${locale}/trails/twentyseven-km`} className="hover:text-green-400 transition">{t("27Km")}</Link></li>
                            <li><Link href={`/${locale}/trails/registered-runners`} className="hover:text-green-400 transition">{t("registered-runners")}</Link></li>
                            <li><Link href={`/${locale}/trails/guide`} className="hover:text-green-400 transition">{t("guide")}</Link></li>
                            <li><Link href={`/${locale}/results`} className="hover:text-green-400 transition">{t("results")}</Link></li>
                            <li><Link href={`/${locale}/gallery`} className="hover:text-green-400 transition">{t("gallery")}</Link></li>
                            <li><Link href={`/${locale}/accommodation`} className="hover:text-green-400 transition">{t("accommodation")}</Link></li>
                            <li><Link href={`/${locale}/contact`} className="hover:text-green-400 transition">{t("contact")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>📍 Rostuše, Macedonia</p>
                            <p>📧 contact@rostushetrails.com</p>
                            <p>📞 +389 78 394 477</p>
                        </div>
                    </div>

                    {/* Right column: Social + Federation */}
                    <div className="md:text-right">
                        <h3 className="text-lg font-semibold mb-4">{t("follow_us")}</h3>

                        <div className="flex md:justify-end items-center gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61568806610676"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl
                           hover:bg-green-600/20 hover:text-green-300 transition"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.instagram.com/rostushe_trail_run__/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl
                           hover:bg-green-600/20 hover:text-green-300 transition"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>

                        {/* Federation block */}
                        <div className="mt-8 flex flex-col items-start md:items-end">
                            <p className="text-sm font-semibold text-green-300 mb-3">
                                {t("federation_intro")}
                            </p>

                            <div className="flex items-center gap-5 md:justify-end flex-wrap">
                                <a
                                    href="https://www.fpsm.org.mk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                    aria-label="National Federation"
                                >
                                    <Image
                                        src={federationLogo}
                                        alt="National Federation"
                                        width={280}
                                        height={120}
                                        className="h-16 md:h-20 w-auto filter grayscale hover:grayscale-0 transition duration-300 ease-in-out opacity-90 hover:opacity-100"
                                    />
                                </a>

                                <a
                                    href="https://www.facebook.com/skyrunningmk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                    aria-label="Skyrunning Commission"
                                >
                                    <Image
                                        src={skyrunningLogo}
                                        alt="Skyrunning Commission"
                                        width={280}
                                        height={120}
                                        className="h-16 md:h-20 w-auto filter grayscale hover:grayscale-0 transition duration-300 ease-in-out opacity-90 hover:opacity-100"
                                    />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-10 pt-6 border-t border-white/10">
                    <div className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Rostushe Trails. {t("rights_reserved")}
                    </div>

                    <div className="flex justify-center mt-4 mb-2">
                        <a
                            href="https://www.linkedin.com/company/wzlio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={creatorLogo}
                                alt="WZL"
                                width={200}
                                height={80}
                                className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
