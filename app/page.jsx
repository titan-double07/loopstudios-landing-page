// import axios from "axios";
// import getPhotos from "./lib/getPhotos";
import Image from "next/image";
import sectionImage from "public/images/mobile/image-interactive.jpg";
import sectionImageLg from "public/images/desktop/image-interactive.jpg";
import { josefinSans } from "public/fonts/fonts";
import { homeImages } from "@/data";
export default async function Home() {
  return (
    <div className="wrapper flex flex-col py-24  ">
      <section className="section1 flex flex-col w-full  text-center lg:relative ">
        <Image
          src={sectionImage}
          alt="image-interactive"
          className="lg:hidden"
        />
        <Image
          src={sectionImageLg}
          alt="image-interactive"
          className="lg:ml-15 hidden w-2/3 lg:block "
        />
        <div className="section1-text bg-white p-3  ">
          <h1
            className={`bg-white pb-5 pt-7 text-4xl uppercase  xl:text-5xl ${josefinSans.className}`}>
            The leader in interactive VR
          </h1>
          <p className="text-gray-500  ">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>

      <section
        className={`section2 flex flex-col w-full gap-7 tracking-widest lg:mt-32 ${josefinSans.className}  `}>
        <div className=" justify-between lg:flex lg:py-8">
          <h1 className="m-5 text-center text-3xl  uppercase lg:text-left lg:text-5xl ">
            our creations
          </h1>
          <button className="m-5 hidden w-1/6  border border-black px-5 py-2 font-extrabold uppercase hover:bg-black hover:text-white lg:block">
            see all
          </button>
        </div>

        <div className="grid-container grid-col-1 grid gap-7 lg:grid-cols-4 ">
          {homeImages.map((image, i) => {
            return (
              <div
                key={i}
                className={`card relative h-32 w-full bg-cover bg-center text-white shadow-lg hover:-translate-y-3 hover:shadow-lg hover:shadow-gray-900 lg:h-[450px] lg:w-full`}
                style={{
                  backgroundImage: `url(/images/mobile/${image.text}.jpg)`,
                }}>
                <p className="relative top-6 z-10 w-1/2 p-3 text-2xl uppercase lg:top-[80%] lg:mx-auto lg:p-0 lg:tracking-normal">
                  {image.title}
                </p>
                <div
                  className="absolute inset-0 hidden bg-no-repeat bg-cover lg:block"
                  style={{
                    backgroundImage: `url(/images/desktop/${image.text}.jpg)`,
                  }}></div>
                <div className="absolute inset-0  bg-gradient-to-r from-black/70 to-transparent  lg:bg-gradient-to-t lg:via-transparent "></div>
              </div>
            );
          })}
        </div>

        <button className="mx-auto mt-5 w-1/2 border border-black px-5 py-2 font-extrabold uppercase hover:bg-black hover:text-white lg:pointer-events-none lg:opacity-0">
          see all
        </button>
      </section>
    </div>
  );
}
