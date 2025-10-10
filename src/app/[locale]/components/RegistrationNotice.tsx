// ./components/RegistrationNotice.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const STORAGE_KEY = "rt26RegPopupSeen";
const DAYS_TO_SUPPRESS = 30;

export default function RegistrationNotice() {
    const [open, setOpen] = useState(false);
    const locale = useLocale();
    const t = useTranslations("home.popup");

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const { ts } = JSON.parse(raw);
                const diffDays = (Date.now() - ts) / (1000 * 60 * 60 * 24);
                if (diffDays < DAYS_TO_SUPPRESS) return; // still suppressed
            }
        } catch {
            // ignore
        }
        // open on first load / after suppression expires
        setOpen(true);
    }, []);

    const close = () => {
        setOpen(false);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
        } catch {
            // ignore
        }
    };

    if (!open) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reg-popup-title"
            className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-4"
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40" onClick={close} />

            {/* Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-7 animate-in fade-in zoom-in duration-200">
                <button
                    onClick={close}
                    aria-label={t("close")}
                    className="absolute top-3 right-3 rounded-full p-2 text-gray-500 hover:bg-gray-100"
                >
                    ✕
                </button>

                <div className="mb-3 inline-flex items-center gap-2 bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full">
                    <span aria-hidden>✔</span>
                    <span>{t("badge", { defaultValue: "Registration Open" })}</span>
                </div>

                <h3 id="reg-popup-title" className="text-xl font-extrabold text-green-700 mb-2">
                    {t("title", { defaultValue: "Registrations for 2026 are open!" })}
                </h3>

                <p className="text-gray-700 mb-5">
                    {t("message", {
                        defaultValue:
                            "Choose your trail and secure your spot for the 2026 edition.",
                    })}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href={`/${locale}/trails/eleven-km`}
                        className="flex-1 text-center text-white font-bold py-3 px-4 rounded-xl shadow-lg transition
                       bg-gradient-to-r from-green-600 via-green-700 to-emerald-700
                       hover:from-green-700 hover:via-emerald-800 hover:to-green-900 hover:scale-[1.02]"
                        onClick={close}
                    >
                        {t("cta_bagrem", { defaultValue: "Bagrem 11K" })}
                    </Link>
                    <Link
                        href={`/${locale}/trails/twentyseven-km`}
                        className="flex-1 text-center text-white font-bold py-3 px-4 rounded-xl shadow-lg transition
                       bg-gradient-to-r from-emerald-600 via-green-700 to-green-800
                       hover:from-emerald-700 hover:via-green-800 hover:to-green-900 hover:scale-[1.02]"
                        onClick={close}
                    >
                        {t("cta_krchin", { defaultValue: "Krchin 27K" })}
                    </Link>
                </div>
            </div>
        </div>
    );
}
