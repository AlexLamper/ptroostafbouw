import React from 'react';
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

const OverOns = () => {

  return (
    <section className="container mx-auto pb-20 bg-white">
      <div className="container mx-auto text-center">
        <p className="lg:text-2xl text-lg text-[#7690B8] mt-6">
          Welkom
        </p>
        <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%] mx-auto">Kort over ons</h2>
        <p className='max-w-[50%] max-sm:max-w-[90%] mx-auto text-lg' id='projecten'>Na 20 jaar werkervaring zijn we in 2012 als P. Troost afbouwbedrijf begonnen. We zijn gevestigd in Sommelsdijk, en werken in de regio zuid Holland. Ons werk, is het tegelen en stukadooren van woningen en badkamers in nieuwbouw/ verbouw en renovatie. We werken voor particulieren en aannemers. Vakkennis en kwaliteit worden door ons geleverd.</p>
      </div>
    </section>
  );
};

export default OverOns;