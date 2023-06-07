"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleHamMenu } from "@/redux/features/appSlice";


export default function HamMenu() {
  const {isHamOpen}= useAppSelector(store=>store.app)
 const dispatch = useAppDispatch()

  // useEffect(() => {
  //   console.log(isHamOpen)
  // },[isHamOpen])
  return (
    <div className="z-10 hover:scale-110 transition-transform lg:hidden">
      <button onClick={()=>dispatch(toggleHamMenu())}>
      <FontAwesomeIcon
        className="text-2xl md:text-4xl "
        icon={!isHamOpen ? faBars : faXmark}
      />
      </button>
     
    </div>
  );
}

