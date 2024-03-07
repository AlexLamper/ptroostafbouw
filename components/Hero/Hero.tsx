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
};

const Hero = () => (
  <section className={`hero relative min-h-screen overflow-hidden flex justify-center items-center`} id='hero'>
    <div className="lg:max-w-[60%] flex justify-center items-center h-min mt-[-10rem] text-center">
      <div>
        <h2 className="text-4xl lg:text-5xl max-sm:text-2xl text-white">afbouwbedrijf</h2>
        <h1 className="text-9xl lg:text-[110px] max-sm:text-7xl mb-12 leading-none font-medium text-white">
          P. Troost
        </h1>
        <Button href={'/projecten'} text={'Bekijk Onze Projecten'} />
      </div>
    </div>
    <div id='over-ons'></div>
  </section>
);

export default Hero;
