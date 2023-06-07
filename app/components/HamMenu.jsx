"use client";
import { navLinks } from "@/data";
import Link from "next/link";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
// import { motion, AnimatePresence } from "framer-motion";

export default function HamMenus() {
  const { isHamOpen } = useAppSelector((store) => store.app);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isHamOpen) {
      animate(
        "li",
        { opacity: [0, 1], x: [100, 0] },
        { delay: stagger(0.2), duration: 1 }
      );
    }
  }, [isHamOpen, animate, scope]);
  return (
    <ul
      className={`flex flex-col gap-4 uppercase text-xl pt-32 h-screen overflow-x-hidden w-full z-10 transition-all`}
      ref={scope}>
      {navLinks.map((link, i) => {
        return (
          <li key={i} className={` cursor-pointer  `}>
            <Link
              href={link.href}
              className="hover:border-b-4 hover:border-white transition-all duration-200">
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
