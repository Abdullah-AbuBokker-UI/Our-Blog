import Image from "next/image";
import Navbar from "./components/header/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" mt-16 h-screen flex justify-center items-center text-4xl font-bold">
        Our Blog
      </div>
    </>
  );
}
