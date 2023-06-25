"use client";
import { AnimatePresence, motion } from "framer-motion";
import logo from "public/images/logo.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setSplashLoader } from "./redux/features/appSlice";
import { useDispatch } from "react-redux";

export default function Loading() {
 const dispatch = useAppDispatch()
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      borderRadius: "100%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      borderRadius: "0%",
      transition: { duration: 1, when: "beforeChildren", ease: "easeInOut" },
    },
    exit: {
      opacity:[1,0.5,0],
      transition: {duration:1, ease: "easeInOut", when: "afterChildren" },
    },
  };

  const logoVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 3,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100vw",
      transition: {duration:1, ease: "easeInOut" },
    },
  };
  const textVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      opacity: [0, 1],
      y: 0,
      transition: { delay: 1, duration: 3, ease: "easeInOut" },
    },
    exit: {
      x: "100vw",
      transition: {duration:1, ease: "easeInOut" },
    },
  };
  const blackScreenVariants = {
    // hidden: {display:"block", y: 0 },
    visible: {
      y: [0, -100],
      transition: { delay: 1, duration: 3, ease: "easeInOut" },
    },
  };

  const handleAnimationComplete = () => {
    // Perform your function here
    dispatch(setSplashLoader())
    console.log("Animation complete!");
  };

  return (
      <motion.div
        className="relative flex h-screen w-full flex-col items-center justify-center bg-black overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onAnimationComplete={handleAnimationComplete}>
        <motion.div className=" z-20 w-full pb-5 " variants={logoVariants}>
          <Image
            src={logo}
            alt="loop-studis-logo"
            priority={true}
            className="mx-auto lg:w-80 "
          />
        </motion.div>
        <motion.div
          variants={blackScreenVariants}
          className="black-screen absolute top-[40%] z-10 h-20 w-full bg-black "></motion.div>
        <motion.h1
          variants={textVariants}
          className="z-0 -translate-y-32 text-center font-josefin text-4xl lg:text-6xl lg:px-80 uppercase text-white">
          get lost in the experience
        </motion.h1>
      </motion.div>
  );
}
