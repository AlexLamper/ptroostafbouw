import React from 'react';

interface ButtonProps {
  href: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-gradient-to-r w-[80%] max-sm:w-[90%] font-medium from-blueButtonStart border text-center shadow-xl border-black to-blueButtonEnd text-black py-3 px-8 rounded-xl text-xl max-sm:text-base transition duration-300 inline-block hover:bg-gradient-to-r hover:from-blueButtonHoverStart hover:to-blueButtonHoverEnd hover:shadow-lg"
      style={{ background: "linear-gradient(90deg, #c0cfeb, #D5E1F7)" }}
    >
      {text}
    </a>
  );
};

export default Button;
