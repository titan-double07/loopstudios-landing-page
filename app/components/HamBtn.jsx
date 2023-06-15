"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleHamMenu } from "@/redux/features/appSlice";
library.add(faBars, faXmark);

export default function HamBtn() {
  const {isHamOpen}= useAppSelector(store=>store.app)
 const dispatch = useAppDispatch()

  // useEffect(() => {
  //   console.log(isHamOpen)
  // },[isHamOpen])
  return (
    <div className="z-10 hover:scale-110 active:scale-90 transition-all lg:hidden">
      <button onClick={() => dispatch(toggleHamMenu())}>
        <FontAwesomeIcon
          className="text-2xl md:text-4xl "
          icon={!isHamOpen ? faBars : faXmark}
        />
      </button>
    </div>
  );
}

