import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://stylemec.be"),
  title: {
    default: "StyleMec — Créatrice de mode & vêtements sur mesure à Bruxelles",
    template: "%s | StyleMec",
  },
  description:
    "StyleMec, modéliste et conseillère vestimentaire à Bruxelles. Découvrez nos créations wax et confections sur mesure : robes de cérémonie, tailleurs, sweats et tenues de soirée.",
  keywords: [
    "styliste Bruxelles",
    "vêtements sur mesure Bruxelles",
    "création de vêtements Bruxelles",
    "robe sur mesure Bruxelles",
    "tenue événementielle Bruxelles",
    "créatrice de mode Bruxelles",
    "mode wax Bruxelles",
  ],
  openGraph: {
    title: "StyleMec — Créatrice de mode & vêtements sur mesure à Bruxelles",
    description:
      "Découvrez les créations StyleMec : wax, cérémonie, soirée et confection sur mesure à Bruxelles.",
    locale: "fr_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col font-sans bg-cream-100 text-navy-950 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
