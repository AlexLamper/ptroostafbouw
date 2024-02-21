import React from 'react';
import Image from 'next/image';
import ButtonNoBorder from '../Button/ButtonNoBorder';
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

const Projecten = () => {
  const projects = [
    {
      image: '/images/projecten/havenhoofd/Original/1.jpg',
    },
    {
      image: '/images/projecten/wandstenen/Original/3.jpg',
    },
    {
      image: '/images/projecten/tegelwerk/Original/4.jpg',
    },
    {
      image: '/images/projecten/tegelwerk/Original/9.jpg',
    },
  ];

  return (
    <section className="container mx-auto pt-20 pb-20 bg-white" id='projecten'>
      <div className="text-center mb-8">
        <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[90%] mx-auto">Onze projecten</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[70%] max-sm:max-w-[90%] mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <div className="bg-white flex flex-col">
              <div className="mb-2">
                <Image
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  width={500}
                  height={300}
                  style={{ width: '500px', height: '300px' }}
                  className="brightness-75 hover:brightness-100 hover:cursor-pointer transition-all duration-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='lg:mt-12 mt-6 text-center max-w-[30%] max-sm:max-w-[70%] mx-auto'>
        <ButtonNoBorder href="/projecten" text="Bekijk Al Onze Projecten" />
      </div>
    </section>
  );
};

export default Projecten;
