import React from "react";
import Image from "next/image";
import Button from "../components/button/button";
import styles from "./page.module.css"; // Import your CSS module if needed
import Link from "next/link";
// import Modal from "../components/Modal/Modal";

export const ComingSoon = () => {
  return (
    <section
      className="flex items-center justify-center h-screen mx-auto bg-center bg-cover bg-[#0b0b0b]"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg-min.webp')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative lg:mt-16">
        <Image
          src={
            "https://images.infinitydigitalassets.io/assets/images/coming-soon-bg.webp"
          }
          width={800}
          height={480}
          alt="Coming Soon Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
          <div>
            <h1 className="text-xl font-extrabold lg:text-4xl">Coming Soon</h1>
          </div>
          <div className="w-[50%] lg:w-[45%] text-center">
            <p className="text-xs lg:text-lg">
              We are preparing something amazing, Stay Tuned!
            </p>
          </div>
          <div className="w-[46%] lg:w-[30%] mt-2">
            <Link href="/">
              <Button label={"Go Back Home"} variant={"outline"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
