import { useState, useEffect } from 'react';
import Link from 'next/link';
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

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }): JSX.Element => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 768 && isOpen) {
        toggle(); // Close the sidebar when resizing to a bigger screen
      }
    };

    // Check if window is defined before using it
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      // Remove the event listener when the component is unmounted
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isOpen, toggle]);

  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-50"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li className="py-4">
            <Link href="/" onClick={toggle}>
              <p>Home</p>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/#over-ons" onClick={toggle}>
              <p>Over Ons</p>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/projecten" onClick={toggle}>
              <p>Projecten</p>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/#contact" onClick={toggle}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;