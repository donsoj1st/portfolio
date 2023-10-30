import Image from "next/image";

/******************
 * this Function will display card
 * the prototype for this display is the one on
 * filmxy.vip @Adesoji
 */
export default function Card() {
  return (
    <>
      <div className=" grid grid-cols-1 grid-flow-rows md:grid-cols-4 lg:grid-cols-6 gap-3  ">
        <div className="px-[auto]">
          <Image
            src="/All-Fun-and-Games-2023-Cover.jpg"
            width={250}
            height={350}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="">
          <Image
            src="/All-Fun-and-Games-2023-Cover.jpg"
            width={250}
            height={350}
          />
        </div>
        <div className="">
          <Image
            src="/All-Fun-and-Games-2023-Cover.jpg"
            width={250}
            height={350}
          />
        </div>
        <div className="">
          <Image
            src="/All-Fun-and-Games-2023-Cover.jpg"
            width={250}
            height={350}
          />
        </div>
        <div className="">
          <Image
            src="/All-Fun-and-Games-2023-Cover.jpg"
            width={250}
            height={350}
          />
        </div>
        <div className="">
          <Image
            src="/All-Fun-and-Games-2023-Cover.jpg"
            width={250}
            height={350}
          />
        </div>
      </div>
    </>
  );
}
