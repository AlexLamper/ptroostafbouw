import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import styles from "@/styles/layout.module.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "P. Troost afbouwbedrijf",
    template: "%s | P. Troost afbouwbedrijf"
  },
  description: "P. Troost afbouwbedrijf is een afbouwbedrijf gespecialiseerd in het afbouwen van woningen en is gevestigd in Sommelsdijk.",
  keywords: ["afbouwbedrijf", "afbouw", "woningen", "Sommelsdijk", "P. Troost", "Peter Troost", "Peter Troost afbouwbedrijf", "afbouwbedrijf Sommelsdijk", "afbouwbedrijf Goeree-Overflakkee", "afbouwbedrijf Zuid-Holland", "P. Troost afbouwbedrijf"],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "P. Troost afbouwbedrijf",
    description: "P. Troost afbouwbedrijf is een afbouwbedrijf gespecialiseerd in het afbouwen van woningen en is gevestigd in Sommelsdijk.",
    url: "https://ptroostafbouwbedrijf.nl",
    siteName: "P. Troost afbouwbedrijf",
    type: "website",
    locale: "nl_NL",
  },
  metadataBase: new URL("https://ptroostafbouwbedrijf.nl"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <Navigation />
  );

  const footer = (
    <Footer />
  );

  return (
    <html>
      <body>
        <div className={styles.container}>
          {header}
          <main className={styles.main}>{children}</main>
          {footer}
        </div>
      </body>
    </html>
  );
}
