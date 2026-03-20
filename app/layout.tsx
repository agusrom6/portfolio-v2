import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/common/layout/Navbar";
import { Footer } from "@/common/layout/Footer";
import { TranslationProvider } from "@/common/context/translation-context";
import { HtmlWrapper } from "@/common/ui/HtmlWrapper";

export const metadata: Metadata = {
  title: "Agustina Romer | Frontend Developer",
  description:
    "Frontend Developer especializada en React y Next.js. Construyo aplicaciones web modernas con foco en UX, rendimiento y código limpio.",

  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: "Agustina Romer" }],
  metadataBase: new URL("https://portfolio-agusrom6s-projects.vercel.app/"),

  openGraph: {
    title: "Agustina Romer | Frontend Developer",
    description:
      "Portfolio de Agustina Romer. Desarrollo de aplicaciones web modernas con React y Next.js.",
    url: "https://portfolio-agusrom6s-projects.vercel.app/",
    siteName: "Agustina Romer Portfolio",
    locale: "alternateLocale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HtmlWrapper>
      <body>
        <TranslationProvider>
          <Navbar />
          {children}
          <Footer />
        </TranslationProvider>
      </body>
    </HtmlWrapper>
  );
}
