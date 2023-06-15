"use client";
import logo from "public/images/logo.svg";
import Image from "next/image";
import HamBtn from "./HamBtn";
import HamMenu from "./HamMenu";
import { josefinSans } from "public/fonts/fonts";
import { useAppSelector } from "@/redux/hooks";
import { navLinks } from "@/data";
import Link from "next/link";
import {
  useAnimate,
  usePresence,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { isHamOpen } = useAppSelector((store) => store.app);
  const [scope, animate] = useAnimate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textData, setTextData] = useState([
    {
      text: "immersive experience that delivers",
      animation: {
        display: ["none", "block"],
        scale: [0, 1],
        transition: { duration: 2, delay: 1 },
      },
    },
    {
      text: "with creative solutions",
      animation: {
        display: ["none", "block"],
        opacity: [0, 1],
        x: [100, 0],
        transition: { duration: 2, delay: 1 },
      },
    },
    {
      text: "simple yet innovative designs",
      animation: {
        display: ["none", "block"],
        opacity: [0, 1],
        y: [-100, 0],
        transition: { duration: 2, delay: 1 },
      },
    },
  ]);
  useEffect(() => {
    animate(".logo", { x: [300, 0] }, { duration: 0.5 });
    animate(".navLinks", { x: [-300, 0] }, { duration: 0.5 });
    // headerImages.map((img, i) => {
    //  const backgroundStyle = {
    //     backgroundImage: `url(${img})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   };
    //   animate(scope, backgroundStyle, { duration: 0.5 });
    //  });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 5000);
    // setBackground(headerImages[currentTextIndex])

    return () => {
      clearInterval(timer);
    };
  }, [currentTextIndex, textData]);
  // const [background, setBackground] = useState(
  //   headerImages[currentTextIndex]?.urls.regular
  // );
  // useEffect(() => {
  //   console.log(background);
  // }, [background]);

  // const photos = await getPhotos('vr',2);

  {
    /* {photos.map((photo) => {
 
        // console.log(photo.urls.regular)
        return (
          <Image
          key={photo.id}
          className=' w-auto h-auto'
          
          src={photo.urls.regular}
          width={500}
          height={500}
          alt="Picture of the author"
          />
          );
        })} */
  }

  return (
    <header
      ref={scope}
      className={`${
        josefinSans.className
      } h-screen w-full overflow-hidden  bg-cover bg-center  bg-no-repeat pt-8 text-white ${
        isHamOpen ? "bg-black " : "bg-red-500"
      }`}>
      <div className="wrapper ">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="loop-studis-logo"
              priority={true}
              className="logo z-10 w-40 cursor-pointer md:w-60"
            />
          </Link>
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
        <div className="header-text mt-40 p-5 text-4xl uppercase tracking-widest transition-all md:text-5xl lg:mt-32 lg:w-3/5 xl:text-7xl ">
          <AnimatePresence>
            {textData.map(
              (data, index) =>
                index === currentTextIndex && (
                  <motion.p
                    key={index}
                    className={`text-${index + 1} border-2 p-5 md:p-10`}
                    layout
                    initial="hidden"
                    animate={index === currentTextIndex ? "visible" : "hidden"}
                    exit="exit"
                    variants={{
                      hidden: { display: "none" },
                      visible: { ...data.animation },
                      exit: {
                        scale: [1, 0],
                        opacity: [1, 0],
                        display: ["block", "none"],
                        transition: { duration: 0.5 },
                      },
                    }}
                    // transition={{ duration: 1 }}
                  >
                    {data.text}
                  </motion.p>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
