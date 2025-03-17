// import Image from "next/image";
import Footages from "./components/Homepage/Footages";
import Hero from "./components/Homepage/Hero";
import Reviews from "./components/Homepage/Reviews";
import Services from "./components/Homepage/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services/>
      <Reviews />
      <Footages />
    </main>
  );
}


