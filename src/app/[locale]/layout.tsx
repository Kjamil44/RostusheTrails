import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "./components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Locale, routing } from "../../../i18n/routing";
import { notFound } from "next/navigation";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import bgpic from "../../.././public/background.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rostushe Trails",
  description: "Discover the beauty of nature and the excitement of our trails.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} className="min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative bg-white`}
      >
        {/* Background Design */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Green outer border */}
          <div className="absolute top-0 left-0 w-full h-[6px] bg-green-700" />
          <div className="absolute bottom-0 left-0 w-full h-[6px] bg-green-700" />
          <div className="absolute top-0 left-0 h-full w-[6px] bg-green-700" />
          <div className="absolute top-0 right-0 h-full w-[6px] bg-green-700" />

          {/* Black thin border inside green */}
          <div className="absolute top-[6px] left-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] border border-black pointer-events-none" />

          {/* Mountain SVG in center */}
          <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
            <Image
              src="/background.svg"
              alt="Mountain line"
              width={800}
              height={200}
              className="w-[80%] h-auto max-w-4xl"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <NextIntlClientProvider messages={messages}>
            <Toaster
              position="top-center"
              toastOptions={{
                success: {
                  style: {
                    background: "#d4edda",
                    color: "#155724",
                  },
                },
                error: {
                  style: {
                    background: "#f8d7da",
                    color: "#721c24",
                  },
                },
              }}
            />
            <Header locale={locale} params={params} />
            {children}
            <Footer locale={locale} params={params} />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
