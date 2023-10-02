import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/button/button";

const Custom404 = () => {
  return (
    <div className="bg-[#0b0b0b] flex items-center justify-center h-screen bg-no-repeat bg-cover" style={{
      backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg-min.webp')`,
      backgroundAttachment: "fixed",
    }}>
      <div className="flex flex-col items-center justify-center mt-20 text-white ">
        <div className="">
          <p className="text-3xl font-extrabold">Page Not Found</p>
        </div>
        <div className="pt-10 w-[90%]">
          <Image
            src={"https://images.infinitydigitalassets.io/assets/images/404.webp"}
            width={466}
            height={171}
            alt="404 Page Not Found"
            
          />
        </div>
        <div className="py-8">
          <p className="text-lg font-medium">
            The page you are looking was not found
          </p>
        </div>
        <div className="w-[80%] lg:w-[45%]">
          <Link href="/">
            <Button label={"Go Back Home"} variant={"outline"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
