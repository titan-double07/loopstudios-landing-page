"use client";
import { homeImages } from "@/data";
import {
  AnimatePresence,
  stagger,
  useAnimate,
  useInView,
  motion,
} from "framer-motion";
import { use, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function Section2() {
  const card = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(card);
  const minDesktop = useMediaQuery({ minWidth: 1024 });

  const animation = {
    x: [100, 0],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
    },
  };

  return (
    <section
      className={`section2 mt-16 flex w-full flex-col gap-7 font-josefin tracking-widest lg:mt-32  `}>
      <div className=" justify-between lg:flex lg:py-8 ">
        <h1 className=" text-center text-3xl  uppercase lg:text-left lg:text-5xl ">
          our creations
        </h1>
        <button className=" hidden w-1/6  border border-black px-5 py-2 font-extrabold uppercase hover:bg-black hover:text-white lg:block">
          see all
        </button>
      </div>

      <ul
        scope={card}
        style={{ overflowX: "hidden" }}
        className=" py-10 grid h-full w-full grid-cols-1 gap-y-5 lg:grid-cols-4 lg:gap-8">
        {homeImages.map((image, i) => {
          return (
            <motion.li
              key={i}
              className={`relative mx-auto lg:w-full h-32 w-3/4 bg-cover bg-center text-2xl uppercase text-white lg:h-[450px] `}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.884), rgba(0, 0, 0, 0)), url(/images/mobile/${image.text}.jpg)`,
              }}
              initial={{ x: 0 }}
              whileHover={{
                y: -30,
                textShadow: "0px 0px 8px rgb(255,255,255), 0px 0px 10px rgb(255,255,255)"
              }}
              whileInView={animation}
              // viewport={{ root: card }}
            >
              <p className="pl-5 pr-40 pt-16 leading-none lg:hidden ">
                {image.title}
              </p>
              <div
                className="absolute inset-0 hidden bg-cover bg-no-repeat lg:block"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.884), rgba(0, 0, 0, 0)),url(/images/desktop/${image.text}.jpg)`,
                }}>
                <p className=" hidden pl-5 pr-16 pt-[12em] text-3xl leading-none lg:block">
                  {image.title}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>

      <button className=" mx-auto my-8 w-1/2 border border-black px-5 py-2 font-extrabold uppercase hover:bg-black hover:text-white  lg:hidden">
        see all
      </button>
    </section>
  );
}
