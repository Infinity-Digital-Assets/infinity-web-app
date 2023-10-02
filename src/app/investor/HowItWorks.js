import React from "react";
import Image from "next/image";
// import works1 from "../../../public/assets/images/works1.webp";
import styles from "./page.module.css";
const HowItWorks = ({ work }) => {
  return (
    <div
      className={`w-[100%] max-h-100vh overflow-scroll hide-scrollbar ${styles.scrollableContent}`}
    >
      <div className="h-screen w-[100%] bg-black	  items-center   mx-auto justify-center bg-cover bg-center">
      
        <div className="container text-center w-[80%] mx-auto justify-center   ">
          <div className=" w-[100%] investorSubHeading   lg:justify-start my-24">
            <p className="mainSubHeadingText">How It Works</p>
          </div>
          {work?.map((data, index) => {
            return (
              <div
                className={`mt-8 flex flex-col md:flex-row justify-between gap-9 md:gap-0 items-center w-100% `}
                key={index}
              >
                {/* section left side  */}

                <div className={`  relative w-[100%] md:w-[55%] lg:w-[35%]  ${styles.numCard} `}>
                  <div className="container text-start my-0 md:my-[6] ">
                    <p className={`  ${styles.numText}`}>{data.num}</p>
                    <p className={`  ${styles.browseText} top-20 md:top-30 absolute`}>{data.heading}</p>
                    <p className={` ${styles.mainText}`}>{data.txt}</p>
                  </div>
                </div>
                <div>
                  <Image
                    alt="how it works"
                    height={412}
                    width={412}
                    src={"https://images.infinitydigitalassets.io/assets/images/works1.webp"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
