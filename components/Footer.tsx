import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

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

const Footer = () => {
  return (
    <footer className="bg-[#141414] py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 max-md:mb-8 flex justify-center md:justify-start">
          <div className="mx-auto md:mx-0">
            <Image
              src="/images/logo/ptroost-logo2.png"
              alt="Image Alt Text"
              width={200}
              height={200}
            />
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 max-md:mb-8 flex justify-center">
          <div className="flex justify-center md:justify-between">
            <a href="#over-ons" className="text-gray-200 hover:text-white mx-4">Over Ons</a>
            <a href="/projecten" className="text-gray-200 hover:text-white mx-4">Projecten</a>
            <a href="#contact" className="text-gray-200 hover:text-white mx-4">Contact</a>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <p className="text-base text-gray-400">
            Website door <a href="https://www.lucerny.nl" className="text-[#d5e1f7] font-bold tracking-wide">©Lucerny</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
