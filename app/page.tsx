import Hero from "@/components/Hero/Hero";
import HeroBackground from "@/components/Hero/HeroBackground";
import OverOns from "@/components/OverOns/OverOns";
import Projecten from "@/components/Projecten/Projecten";
import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";

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

const Home: React.FC = () => (
  <div>
    <HeroBackground />
    <Hero />
    <OverOns />
    <div className='border max-w-[70%] mx-auto border-zinc-300'></div>
    <Projecten />
    <div className='border max-w-[70%] mx-auto border-zinc-300'></div>
    <Contact />
  </div>
);

export default Home;
