import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coupe du Monde 2026 - Guide Ultime",
  description: "Toutes les infos sur les équipes, groupes, joueurs et matchs de la Coupe du Monde 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="bg-primary text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              CDM 2026 🏆
            </Link>
            <nav className="flex gap-6">
              <Link href="/teams" className="hover:underline">Équipes</Link>
              <Link href="/groups" className="hover:underline">Groupes</Link>
              <Link href="/schedule" className="hover:underline">Calendrier</Link>
              <Link href="/palmares" className="hover:underline">Palmarès</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-primary text-white p-4 mt-8 text-center">
          <p>© 2026 - Coupe du Monde FIFA 2026</p>
        </footer>
      </body>
    </html>
  );
}
