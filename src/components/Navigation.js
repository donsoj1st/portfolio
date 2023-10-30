import { Montserrat, Open_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const opensan = Open_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function Header() {
  let [display, setDisplay] = useState(true);
  return (
    <>
      <div
        className={`drop-shadow-xl p-5 flex flex-col  md:flex-row md:pt-14 md:pb-14 md:px-24 sticky top-0 z-10 md:w-full  md:h-10 bg-[#0C2340] md:justify-between md:items-center text-[#CFD9ED] ${opensan.className}`}
      >
        <Image
          className="md:relative md:dark:drop-shadow-[0_0_0.3rem_#ffffff70] md:dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={37}
          priority
        />
        <ul
          onClick={() => {
            setDisplay(!display);
          }}
          className={`${
            display ? "hidden" : "block"
          } absolute bg-[#0C2340]  left-0 p-5 h-[100vh] w-full pt-16 z-[-10] md:h-0 md:pt-0 md:top-0 md:static md:flex md:w-auto md:flex-row md:space-x-6 md:p-4 transition-all duration-500 ease-in`}
        >
          <li className="hover:drop-shadow-xl hover:text-[#ffffff]">
            <Link href="/home">Home</Link>
          </li>
          <li>ade</li>
          <li>kunle</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <div
          onClick={() => {
            setDisplay(!display);
          }}
          className="z-[5] absolute top-5 right-5 md:hidden cursor-pointer"
        >
          {display ? <IoIosMenu /> : <RxCross2 />}
        </div>
      </div>
    </>
  );
}
