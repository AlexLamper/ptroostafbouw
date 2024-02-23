import Link from 'next/link';
import Logo from './Logo';
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

const Navbar = ({ toggle }: { toggle: () => void }) => (
  <div className="w-full h-20 sticky top-0 bg-[#0000002a] z-50">
    <div className="container mx-auto px-4 h-full">
      <div className="flex justify-between items-center h-full">
        <Logo />
        <button
          type="button"
          className="inline-flex items-center md:hidden"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
            />
          </svg>
        </button>
        <ul className="hidden md:flex gap-x-12 text-black text-lg font-medium">
          <li>
            <Link href="#over-ons">
              <p className="hover:underline underline-offset-4">Over Ons</p>
            </Link>
          </li>
          <li>
            <Link href="#projecten">
              <p className="hover:underline underline-offset-4">Projecten</p>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <p className="hover:underline underline-offset-4">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
