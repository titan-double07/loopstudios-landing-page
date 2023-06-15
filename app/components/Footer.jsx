import { navLinks } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import { faFaceKiss } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col  items-center justify-center  bg-black py-16 lg:px-20 text-center text-white lg:flex-row lg:justify-between">
      
      <div className="lg:flex lg:flex-col">
        <Image
          src={logo}
          alt="loop-studis-logo"
          priority={true}
          className=" logo z-10 w-40 cursor-pointer md:w-60"
        />
        <ul className="flex flex-col gap-7 py-8 capitalize lg:flex-row">
          {navLinks.map((link, i) => {
            return (
              <li key={i} className="hover:underline">
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="lg:flex lg:flex-col">
        <div className="social flex items-center justify-center gap-5 py-5 text-2xl lg:justify-end">
          <Link href="linkedin.com/in/chisom-okereke-39324323a">
            <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110" />
          </Link>
          <Link href={"chisomwebdev@outlook.com"}>
            <FontAwesomeIcon icon={faEnvelope} className="hover:scale-110" />
          </Link>
          <FontAwesomeIcon icon={faTwitter} className="hover:scale-110" />
          <FontAwesomeIcon icon={faInstagram} className="hover:scale-110" />
        </div>

        <small>
          &copy; {new Date().getFullYear()} Loopstudios.by{" "}
          <a
            href="http://chisomwebdev.vercel.app"
            className="text-lime-500 underline ">
            chisomwebdev
          </a>
          , using Next.js
        </small>
      </div>
    </footer>
  );
}
