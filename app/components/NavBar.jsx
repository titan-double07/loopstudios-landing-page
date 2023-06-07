"use client";
import logo from "public/images/logo.svg";
import Image from "next/image";
import HamBtn from "./HamBtn";
import HamMenu from "./HamMenu";
import { josefinSans } from "@/fonts/fonts";
import { useAppSelector } from "@/redux/hooks";
import { navLinks } from "@/data";
import Link from "next/link";
export default function NavBar() {
  const { isHamOpen } = useAppSelector((store) => store.app);
  return (
    <header
      className={`px-6 pt-8 text-white w-full h-full  ${
        isHamOpen ? "bg-black " : "header-image "
      }  ${josefinSans.className} `}>
      <div className="wrapper">
      <nav className="flex items-center justify-between   ">
        <Image
          src={logo}
          alt="loop-studis-logo"
          priority={true}
          className="w-40 cursor-pointer z-10 md:w-60"
        />
        <ul className="navLinks hidden lg:flex gap-8 items-center justify-center">
          {navLinks.map((link, i) => {
            return (
              <li
                key={i}
                className="capitalize font-bold text-xl hover:border-b-4 hover:border-white transition-all duration-200">
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <HamBtn />
      </nav>
      {isHamOpen && <HamMenu />}
      <div className="border-2 text-4xl uppercase p-5 mt-40 tracking-widest lg:w-3/5 md:text-7xl lg:mt-32 md:p-10 transition-all duration-500">
        <p className="">immersive expirience that deliver</p>
      </div>

      </div>
    </header>
  );
}
