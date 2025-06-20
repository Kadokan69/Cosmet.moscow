import type { Metadata } from "next";
import { Tenor_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { ModalProvider } from "@/app/context/ModalProvider";



const nunitoSans = Nunito({
  weight: ["300", "400", "500"],
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
});

const tenorSans = Tenor_Sans({
  weight: "400",
  variable: "--font-tenor-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Врач-косметолог Даниелян Гаянэ — увеличение и коррекция губ в Москве",
  description:
    "Профессиональное увеличение и коррекция губ гиалуроновой кислотой. Сертифицированный врач-косметолог с 8-летним опытом. Безопасные процедуры, индивидуальный подход, только сертифицированные препараты. Запишитесь на консультацию!",
  keywords: [
    "врач-косметолог",
    "увеличение губ",
    "коррекция губ",
    "контурная пластика губ",
    "гиалуроновая кислота",
    "инъекционная косметология",
    "Москва",
    "Даниелян Гаянэ",
    "записаться на прием"
  ],
  authors: [{ name: "Даниелян Гаянэ" }],
  openGraph: {
    title: "Врач-косметолог Даниелян Гаянэ — увеличение и коррекция губ в Москве",
    description:
      "Профессиональное увеличение и коррекция губ гиалуроновой кислотой. Сертифицированный врач-косметолог с 8-летним опытом. Безопасные процедуры, индивидуальный подход, только сертифицированные препараты.",
    siteName: "Врач-косметолог Даниелян Гаянэ",
    locale: "ru_RU",
    type: "website"
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${tenorSans.className} ${nunitoSans.className} antialiased`}>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
