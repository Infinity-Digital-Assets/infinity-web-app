"use client";

import React, { useEffect, useRef } from "react";
import styles from "../login/page.module.css";
import { useTheme } from "next-themes";

// import infinassets from "https://images.infinitydigitalassets.io/assets/images/infinassets.webp";

import Image from "next/image";
import Button from "../components/button/button";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import SocialCommunity from "../components/socialCommunity/socialCommunity";

//GSAP
import { gsap } from "gsap";

const Infinassets = () => {
  const [modal, setModal] = useState(false);
  const { theme } = useTheme();
  const heroSectionRef = useRef(null);
  const containerRef = useRef(null);
  const childContainerRef = useRef(null);

  useEffect(() => {
    //GSAP
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: "none",
    });

    let revealContainers = document.querySelectorAll(".reveal");
    const container = containerRef.current;

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none reverse",
          start: "top bottom",
          // markers:true,
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        x: "-100%",
        ease: "Power2.out",
      });
      tl.from(image, 1.5, {
        autoAlpha: 0,
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "Power2.out",
      });
    });
  }, []);

  return (
    <div
      ref={heroSectionRef}
      className=" w-full mx-auto max-w-[1600px] items-center headingGapTop justify-center self-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: ` url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg.webp')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col my-5 text-center ">
          <h1 className="headingGapTop text-gradient-blue-cyan capitalize text-[24px] md:text-[32px] lg:text-[42px] font-extrabold">
            INFIN Assets
          </h1>
          <h2 className="flex justify-center text-center mainSubHeadingText text-c1 dark:text-c7">
            Press Center
          </h2>
        </div>
        <div ref={containerRef} className=" relative w-[80%] mt-5 md:w-fit items-center justify-center self-center">
          <div ref={childContainerRef} className="relative overflow-hidden reveal w-100 h-100">
            <Image
              width={620}
              height={358}
              src={
                "https://images.infinitydigitalassets.io/assets/images/infinassets.webp"
              }
              alt="logo"
            />
          </div>
        </div>
        <div className=" w-[90%] md:w-[80%] lg:w-[60%] xl:w-[49%] my-14 text-center text-c1 dark:text-c7 text-sm">
          <p>
            Welcome to the Press Centre page for Infinity digital assets. We are
            a leading provider of decentralized finance solutions, using
            blockchain technology to enable our users to securely and easily
            invest in a variety of assets. If you are a member of the press or
            media and would like to learn more about our company and our
            products, please contact our press/media relations team at
            info@infinityassets.io<br></br> We look forward to working with you!
          </p>
        </div>
        <div className="md:w-80 ">
          {modal && <Modal closeModal={() => setModal(false)} />}
          <div onClick={() => setModal(true)}>
            <Button
              label="Download Media Kit"
              variant={theme === "light" ? "lightSolid" : "solid"}
            />
          </div>
        </div>
        <div className="w-[80%]">
          <SocialCommunity />
        </div>
      </div>
    </div>
  );
};

export default Infinassets;
