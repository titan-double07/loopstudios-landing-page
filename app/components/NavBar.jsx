"use client";
import logo from "public/images/logo.svg";
import Image from "next/image";
import HamBtn from "./HamBtn";
import HamMenu from "./HamMenu";
import { useAppSelector } from "@/redux/hooks";
import { navLinks } from "@/data";
import Link from "next/link";
import { useAnimate, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useRandomImages from "@/utils/useRandomImages";
import Loading from "@/loading";

export default function NavBar() {
  const { data = [], error, isLoading } = useRandomImages("virtual reality", 3);
  // const [splashLoader, setSplashLoader] = useState(true);
  const { isHamOpen, splashLoader } = useAppSelector((store) => store.app);
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
      text: "simple, yet innovative designs",
      animation: {
        display: ["none", "block"],
        opacity: [0, 1],
        y: [-100, 0],
        transition: { duration: 2, delay: 1 },
      },
    },
  ]);
  useEffect(() => {
    if (!scope.current) return;
    animate(".logo", { x: [300, 0] }, { duration: 0.5 });
    animate(".navLinks", { x: [-300, 0] }, { duration: 0.5 });
  }, [isHamOpen, scope]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentTextIndex, textData]);

  useEffect(() => {
    console.log(isLoading, splashLoader);
  }, [isLoading, splashLoader]);

  return (
    <AnimatePresence mode="wait">
      {splashLoader || isLoading ? (
        <Loading key={1} />
      ) : (
          <motion.header key={2}
            ref={scope}
            className={`relative h-screen w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat pt-8 font-josefin text-white `}
            style={
              !isHamOpen
                ? {
                  backgroundImage: `url(${data[currentTextIndex]?.urls.regular})`,

                  transition: "background-image 0.7s ease-in-out 0.5s ",
                }
                : { backgroundColor: "black" }
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <div className="wrapper ">
            <nav className=" z-10 flex items-center justify-between">
              <Link
                href="/"
                className="logo z-10 w-40 cursor-pointer mix-blend-difference md:w-60">
                <Image src={logo} alt="loop-studis-logo" priority={true} />
              </Link>
              <ul className="navLinks hidden items-center justify-center gap-8 lg:flex">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    className="text-xl font-bold capitalize mix-blend-difference transition-all duration-200 hover:border-b-4 hover:border-white"
                    whileHover={{
                      rotate: 10,
                    }}>
                    <Link href={link.href}>{link.name}</Link>
                  </motion.li>
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
                        className={`text-${
                          index + 1
                        } border-4 bg-gray-900 bg-opacity-50 p-5 font-semibold mix-blend-difference md:p-10`}
                        layout
                        initial="hidden"
                        animate={
                          index === currentTextIndex ? "visible" : "hidden"
                        }
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
        </motion.header>
      )}
    </AnimatePresence>
  );
}
