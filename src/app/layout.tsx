import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valescapanichi.com.br"),
  title: {
    default: "Valesca Panichi | Psicóloga em Novo Hamburgo",
    template: "%s | Valesca Panichi",
  },
  description:
    "Psicóloga clínica em Novo Hamburgo, RS. Atendimento psicoterapêutico para adultos, presencial ou online. Espaço de escuta, acolhimento e cuidado com abordagem TFE e ACP.",
  keywords: [
    "psicóloga em Novo Hamburgo",
    "psicóloga clínica Novo Hamburgo",
    "terapia online Brasil",
    "TFE",
    "ACP",
    "Valesca Panichi",
  ],
  authors: [{ name: "Valesca Panichi" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://valescapanichi.com.br",
    siteName: "Valesca Panichi Psicologia",
    title: "Valesca Panichi | Psicóloga em Novo Hamburgo",
    description:
      "Atendimento psicoterapêutico para adultos em Novo Hamburgo e online para todo o Brasil. Um espaço seguro de escuta e acolhimento.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valesca Panichi | Psicóloga em Novo Hamburgo",
    description:
      "Atendimento psicoterapêutico para adultos em Novo Hamburgo e online para todo o Brasil.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="page-atmosphere min-h-full font-sans text-charcoal">
        {children}
      </body>
    </html>
  );
}
