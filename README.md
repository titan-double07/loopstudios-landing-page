<!-- KEY NOTES ABOUT THE WEBSITE
"use client";
import logo from "public/images/logo.svg";
import Image from "next/image";
import HamBtn from "./HamBtn";
import HamMenu from "./HamMenu";
import { josefinSans } from "public/fonts/fonts";
import { useAppSelector } from "@/redux/hooks";
import { navLinks } from "@/data";
import Link from "next/link";
import { useAnimate,usePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { isHamOpen } = useAppSelector((store) => store.app);
  const [scope, animate] = useAnimate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
const [textData, setTextData] = useState([
  {
    text: "immersive experience that delivers",
    animation: { scale: [0, 1], },
  },
  {
    text: "with creative solutions",
    animation: { x: [-50, 0],},
  },
  {
    text: "simple yet innovative designs",
    animation: { y: [-50, 0], },
  },
]);
  useEffect(() => {
    // animate(".header-text", { scale: [0, 1] }, { duration: 1, delay: 0.5 });
    animate(".logo", { x: [300, 0] }, { duration: 0.5 });
    animate(".navLinks", { x: [-300, 0] }, { duration: 0.5 });
  }, []);

  useEffect(() => {
    textData.forEach((data, index) => {
      if (index === currentTextIndex) {
        animate(`.text-${index + 1}`, data.animation, {
          duration:data.duration,
        });
      }
    });
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentTextIndex, textData]);

  return (
    <header
      ref={scope}
      className={`${
        josefinSans.className
      } h-screen w-full bg-cover bg-center bg-no-repeat pt-8 text-white ${
        isHamOpen ? "bg-black" : "header-image"
      }`}>
      <div className="wrapper">
        <nav className="flex items-center justify-between">
          <Image
            src={logo}
            alt="loop-studis-logo"
            priority={true}
            className="logo z-10 w-40 cursor-pointer md:w-60"
          />
          <ul className="navLinks hidden items-center justify-center gap-8 lg:flex">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="text-xl font-bold capitalize transition-all duration-200 hover:border-b-4 hover:border-white">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <HamBtn />
        </nav>
        {isHamOpen && <HamMenu />}
        <div className="header-text mt-40  p-5 text-4xl uppercase tracking-widest transition-all  md:text-5xl lg:mt-32 lg:w-3/5 xl:text-7xl">
          {textData.map((data, index) => (
            <p
              className={`text-${index + 1} border-2 p-5 md:p-10`}
              key={index}
              style={{
                display: index === currentTextIndex ? "block" : "none",
              }}>
              {data.text}
            </p>
          ))}
        </div>
      </div>
    </header>
  );
}

+ -->