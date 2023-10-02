"use client";

import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import CountdownTimer from "../components/countdown/countdownTimer";
import Button from "../components/button/button";
// import vectorImage from "/public/assets/images/my-infin-hero-image.webp";
// import ellipse from "/public/assets/images/ellipse.webp";
import Image from "next/image";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import Roadmap from "../components/roadmap/roadmap";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
const NEXT_10_DAYS = new Date("11/11/2023").getTime() + 1000 * 3600 * 24 * 10;

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP plugin Register
gsap.registerPlugin(ScrollTrigger);

const MyInfin = () => {
  const [modal, setModal] = useState(false);

  const tokenJourneyArray = [
    {
      title: "Design of WebApp, DAPP & Token",
      subtitle: "1st May -  5th June 2023",
    },
    {
      title: "Build of WebApp, DAPP & Token",
      subtitle: "21 June - 25 June 2023",
    },
    {
      title: "INFIN in apple Store & token launch pre-sale",
      subtitle: "25th June  30th June 2023",
    },
    {
      title: "ICO & Seed Round $1.3 Million Funding",
      subtitle: "28th October 2023",
    },
    {
      title: "Public token offering",
      subtitle: "11th November 2023",
    },
  ];
  //Ref Declaration
  const heroSectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    //GSAP
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: "none",
    });

    const textLines = textContainerRef.current.querySelectorAll(".line span");
    gsap.from(textLines, {
      duration: 1,
      autoAlpha: 0,
      y: -200,
      ease: "power2.out",
      skewY: 10,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: textContainerRef.current,
        toggleActions: "play none none reverse",
        start: "top bottom-=30%", // Adjust the start position as needed
        // markers:true,
      },
    });
  }, []);

  return (
    <section
      className="w-[100%] bg-no-repeat bg-cover text-black dark:text-white"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg-min.webp')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div ref={heroSectionRef} className=" py-28 bg-[#0b0b0b]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[90%] lg:w-[90%]">
            <div className="lg:flex contentGapTopandLeft">
              <div className="lg:flex lg:flex-col  lg:w-[100%] lg:justify-start lg:items-start lg:pl-4 lg:mt-2 xl:pl-0">
                <div className="contentGapTop">
                  <div className="flex justify-center lg:justify-start ">
                    <h1 className="text-gradient-blue-cyan text-[30px] md:text-[34px] lg:text-[50px] font-extrabold">
                      My INFIN
                    </h1>
                  </div>
                  <div className="flex items-center justify-center text-textColor lg:justify-start">
                    <h4 className="text-[24px] md:text-[28px] lg:text-[46px] font-semibold text-white">
                      Investments For Everyone
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start text-textColor halfContentGapTop">
                  <div className="mb-5 lg:mb-0 lg:justify-start lg:mt-2">
                    <CountdownTimer targetDate={NEXT_10_DAYS} />
                  </div>
                  <div className="w-[90%] my-4 md:w-[50%] lg:w-[85%] lg:mt-8">
                    {modal && <Modal closeModal={() => setModal(false)} />}
                    <div onClick={() => setModal(true)}>
                      <Button
                        label="Token Pre-Sale Launch Waiting List"
                        variant={"outline"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center lg:w-[75%] ">
                <Image
                  src={
                    "https://images.infinitydigitalassets.io/assets/images/my-infin-hero-image.webp"
                  }
                  width={750}
                  height={900}
                  alt="Vector Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-5 lg:flex-row lg:items-start lg:w-[100%] lg:pl-4 py-10 md:ml-10  lg:ml-20">
        <div className="lg:w-[35%] xl:w-[35%] mt-0 lg:mt-48">
          <div className="flex items-center justify-center lg:justify-start lg:items-start">
            <h2 className="text-[24px] lg:text-[36px] font-extrabold">
              Infinity Digital Assets
            </h2>
          </div>
          <div className="flex items-center justify-center mt-1 lg:justify-start">
            <h2 className="text-[24px] lg:text-[36px] font-extrabold text-gradient-purple">
              Token Journey
            </h2>
          </div>
        </div>

        <div className="hidden lg:w-[5%] xl:w-[10%] lg:flex lg:items-center justify-center lg:justify-start xl:justify-center">
          <span className="border-2 h-[480px] border-[#D1D1D1] dark:border-seperatorLine "></span>
        </div>

        <div ref={textContainerRef} className="w-[90%] lg:w-[60%] xl:w-[45%] lg:items-center">
          {tokenJourneyArray.map((item, index) => (
            <div
              className={`flex flex-row items-center justify-start gap-5 mt-10 lg:mt-0 lg:gap-14 lg:mb-10 ${
                index !== 0 ? "subHeadingGapTop" : ""
              }`}
              key={index}
            >
              <div className="flex items-start ">
                <Image
                  src={
                    "https://images.infinitydigitalassets.io/assets/images/ellipse.webp"
                  }
                  width={index === 0 ? 18 : 20}
                  height={5}
                  alt="Ellipse"
                />
              </div>
              <div className="flex flex-col line">
                <p className={styles.mainText}><span>{item.title}</span></p>
                <p className={`${styles.subText} mt-1`}><span>{item.subtitle}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10">
        <Roadmap />
      </div>

      <div className="w-[100%]">
        <SocialCommunity />
      </div>
    </section>
  );
};

export default MyInfin;
