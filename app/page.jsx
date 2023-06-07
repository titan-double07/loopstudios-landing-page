"use client";

// import axios from "axios";
// import getPhotos from "./lib/getPhotos";
// import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  // const photos = await getPhotos('offices',2);
  const { isHamOpen } = useAppSelector((store) => store.app);
  // console.log(isHamOpen);
  return (
    <div className="">
      {/* {photos.map((photo) => {

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
      })} */}
    </div>
  );
}
