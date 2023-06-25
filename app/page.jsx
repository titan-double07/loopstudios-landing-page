'use client'
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { useAppSelector } from "@/redux/hooks";

export default async function Home() {
  const { splashLoader } = useAppSelector((store) => store.app);

  
  return (!splashLoader)? <main className="wrapper flex flex-col py-24  ">
      <Section1 />
      <Section2 />
       </main>
       :<main></main>
  
}
