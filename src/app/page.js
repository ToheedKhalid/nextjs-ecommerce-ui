import Image from "next/image";
import Bannersection from "./components/home-components/Bannersection.jsx";
import LatestProduct from "./components/home-components/LatestProduct.jsx";
export default function Home() {
  return (
    <>
      <Bannersection/>
      <LatestProduct/>
    </>
  );
}
