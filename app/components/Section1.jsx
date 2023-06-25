"use client";
import Image from "next/image";
import sectionImage from "public/images/mobile/image-interactive.jpg";
import { useAnimate, useInView,AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useRandomImages from "@/utils/useRandomImages";
import { useMediaQuery } from "react-responsive";

export default function Section1() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    root: "500px 0px",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
   const {
     data = [],
     error,
     isLoading,
   } = useRandomImages("virtual reality conference", 2);

  const [textData, setTextData] = useState([
    {
      heading: "The leader in interactive VR",
      content: `Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.`,
    },
    {
      heading: "pushing boundaries",
      content: `We are a team of VR enthusiasts who are passionate about creating immersive experiences that push the boundaries of technology. Our goal is to help businesses connect with their audiences in new and exciting ways.`,
    },
  ]);

  const minDesktop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {

    if (isInView) {
      if (minDesktop) {
       animate(
         ".section1-images",
         { x: [-500, 100], opacity: [0, 1] },
         { duration: 2 }
       );
       animate(
         ".section1-text",
         { x: [500, -100], opacity: [0, 1] },
         { duration: 2 }
       );
      } else {
        
        animate(
          ".section1-images",
          { x: [-500,0], opacity: [0, 1] },
          { duration: 2 }
        );
        animate(
          ".section1-text",
          { x: [500,0], opacity: [0, 1] },
          { duration: 2 }
        );
     }

      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
      }, 10000);//15s
      return () => {
        clearTimeout(timer);
      
      };
    }
  }, [isInView, currentIndex,data]);


  return (
    
    <section
      ref={scope}
      className="section1 flex w-full flex-col gap-10 overflow-hidden text-center lg:relative">
      <div className="section1-images relative h-96 lg:w-2/4 opacity-0">
        <Image
          src={!isLoading ? data[currentIndex]?.urls.regular : sectionImage}
          alt={!isLoading?data[currentIndex]?.alt_description:'image'}
          fill
            className="w-full  object-cover object-center transition-all "
        />
      </div>
      <div className="section1-text bg-white p-3 lg:w-2/4 opacity-0">
        {textData.map((text, index) => (
          <div
            key={index}
            className={`text-left ${
              index === currentIndex ? "block" : "hidden"
            }`}>
            <h1 className="font-josefin text-4xl uppercase xl:text-5xl">
              {text.heading}
            </h1>
            <p className="text-gray-500  ">{text.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
