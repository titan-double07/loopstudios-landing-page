import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export default async function Home() {
  return (
    <main className="wrapper flex flex-col py-24  ">
      <Section1 />
      <Section2 />
    </main>
  );
}
