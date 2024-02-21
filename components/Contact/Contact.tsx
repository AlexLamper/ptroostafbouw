import React from 'react'
import Image from 'next/image'
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

const Contact = () => {
  return (
    <section className="bg-white max-w-[70%] max-sm:max-w-[85%] pt-20 mb-20 mx-auto" id='contact'>
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-6/12">
                <div>
                    <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%]">Contactgegevens</h2>
                </div>
                <div className="flex items-center mb-8">
                  <div className="mr-4">
                    <Image src="/images/icons/adres.png" alt="Icon 1" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-lg leading-7 text-black">Koninginnelaan 3, Sommelsdijk</p>
                  </div>
                </div>

                <div className="flex items-center mb-8">
                  <div className="mr-4">
                    <Image src="/images/icons/mail.png" alt="Icon 2" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-lg leading-7 text-black">ptroostafbouwbedrijf@kliksafe.nl</p>
                  </div>
                </div>

                <div className="flex items-center mb-8">
                  <div className="mr-4">
                    <Image src="/images/icons/phone.png" alt="Icon 2" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-lg leading-7 text-black">06 23180192</p>
                  </div>
                </div>
                <div className='pt-6'>
                    <p className="text-lg leading-7 text-black mb-8">
                    Zoekt u een professioneel afbouwbedrijf dat kwaliteit levert? U kunt ons mailen via het bovenstaande mailadres.
                    </p>
                </div>
            </div>
            <div className="lg:w-6/12 flex lg:justify-end max-lg:pt-4">
              <Image 
                className="mb-4 brightness-90 rounded-xl hover:brightness-95 transition-all duration-300 cursor-pointer"
                src="/images/maps/maps.png" width={0} 
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '65%', height: '80%', borderRadius: '10px'}}
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact;