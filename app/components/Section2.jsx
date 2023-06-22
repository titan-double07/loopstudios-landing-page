"use client";
import { homeImages } from "@/data";
import {
  AnimatePresence,
  stagger,
  useAnimate,
  useInView,
  motion,
  //   animate
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Section2() {
  const card = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope,{ once: true});

  useEffect(() => {
    if (isInView) {
      animate(".card", {display:['none','block'] , x: [500, 0], opacity: [0, 1]}, { duration:2, delay:stagger(1) });
    }
  }, [isInView]);

  return (
    <section
      className={`section2 mt-16 flex w-full flex-col gap-7 font-josefin tracking-widest lg:mt-32  `}>
      <div className=" justify-between lg:flex lg:py-8">
        <h1 className="m-5 text-center text-3xl  uppercase lg:text-left lg:text-5xl ">
          our creations
        </h1>
        <button className="m-5 hidden w-1/6  border border-black px-5 py-2 font-extrabold uppercase hover:bg-black hover:text-white lg:block">
          see all
        </button>
      </div>

      <div
        ref={scope}
        className="grid-container grid-col-1 grid gap-7 lg:grid-cols-4 overflow-hidden">
        <AnimatePresence>
          {homeImages.map((image, i) => {
            return (
              <motion.div
                key={i}
                ref={card}
                className={`card card-${
                  i + 1
                } relative h-32 w-full bg-cover bg-center text-white opacity-0 shadow-lg hover:-translate-y-3 hover:shadow-lg hover:shadow-gray-900 lg:h-[450px] lg:w-full`}
                style={{
                  backgroundImage: `url(/images/mobile/${image.text}.jpg)`,
                }}
                    layout
                >
                <p className="relative top-6 z-10 w-1/2 p-3 text-2xl uppercase  lg:top-[80%] lg:mx-auto lg:p-0 lg:tracking-normal">
                  {image.title}
                </p>
                <div
                  className="absolute inset-0 hidden bg-cover bg-no-repeat lg:block"
                  style={{
                    backgroundImage: `url(/images/desktop/${image.text}.jpg)`,
                  }}></div>
                <div className="absolute inset-0  bg-gradient-to-r from-black/70 to-transparent  lg:bg-gradient-to-t lg:via-transparent "></div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button className="mx-auto mt-5 w-1/2 border border-black px-5 py-2 font-extrabold uppercase hover:bg-black hover:text-white lg:pointer-events-none lg:opacity-0">
        see all
      </button>
    </section>
  );
}
