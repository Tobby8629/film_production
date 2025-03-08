// import Image from "next/image";
import Footages from "./components/Homepage/Footages";
import Header from "./components/Homepage/Header";
import Reviews from "./components/Homepage/Reviews";

export default function Home() {
  return (
    <main>
      <Header />
      <Reviews />
     <Footages />
    </main>
  );
}


