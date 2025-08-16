import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tolarys | Conformité RGAA & EN 301 549 - Audit d'accessibilité gratuit",
  description: "Vérifiez si votre site respecte les réglementations d'accessibilité RGAA et EN 301 549. Audit gratuit et conformité garantie ou remboursé. Évitez les sanctions légales.",
  keywords: "conformité RGAA, conformité EN 301 549, audit accessibilité, réglementation site web, accessibilité numérique obligatoire, loi accessibilité web, vérification conformité site, éviter sanctions accessibilité",
  openGraph: {
    title: "Votre site respecte-t-il les réglementations d'accessibilité ? Audit gratuit",
    description: "82% des sites français ne respectent pas la législation sur l'accessibilité numérique. Vérifiez votre conformité RGAA et EN 301 549 avec un audit gratuit.",
    images: ['/og-image.jpg'],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Conformité RGAA & EN 301 549 - Audit gratuit de votre site web",
    description: "Vérifiez si votre site respecte les réglementations d'accessibilité. Évitez les sanctions avec notre expertise.",
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://tolarys.fr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-[#1D1D1F]`}
      >
        {children}
      </body>
    </html>
  );
}
