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
import linesPic from "../../.././public/lines.svg";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative bg-gradient-to-b from-green-50 via-white to-white`}
      >
        {/* Background Design */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Green gradient glow */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-100 via-transparent to-transparent opacity-80 blur-2xl pointer-events-none" />

          {/* Lines SVG Layer */}
          <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
            <Image
              src={linesPic}
              alt="Background Lines"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Mountain SVG Layer */}
          <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
            <Image
              src={bgpic} // <-- you should use a lighter version here
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
            <ScrollToTopButton />
            <Footer locale={locale} params={params} />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
