"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton] = useState(false);

  return (
    <>
        <Link href="/" style={{ display: showButton ? "none" : "flex", alignItems: "center" }}>
            <Image 
                src={"/images/logo/ptroost-logo.png"} 
                alt={""}
                width={200}
                height={200}
            />
        </Link>
        <div
            style={{
            display: showButton ? "block" : "none",
            }}
        >
        </div>
    </>
  );
};

export default Logo;