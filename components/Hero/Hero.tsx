import React from 'react';
import Button from '../Button/Button';
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

const Hero = () => (
  <section className={`hero relative min-h-screen overflow-hidden flex justify-center items-center`} id='hero'>
    <div className="lg:max-w-[60%] flex justify-center items-center h-min mt-[-10rem] text-center">
      <div>
        <h2 className="text-4xl lg:text-5xl max-sm:text-2xl">afbouwbedrijf</h2>
        <h1 className="text-9xl lg:text-[110px] max-sm:text-7xl mb-12 leading-none font-medium">
          P. Troost
        </h1>
        <Button href={'/projecten'} text={'Bekijk Onze Projecten'} />
      </div>
    </div>
    <div id='over-ons'></div>
  </section>
);

export default Hero;
