"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "../components/button/button";
import Vimeob from "../components/vimeob/vimeob";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import Image from "next/image";
import { useTheme } from "next-themes";
// import learnimg from "../../../public/assets/images/learnimg.webp";
// import video from "/public/assets/images/video.webp";
import Link from "next/link";
import styles from "./page.module.css";

import Modal from "../components/Modal/Modal";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Registering GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Learn = () => {
  const [modalb, setModalb] = useState(false);
  const [modalv, setModalv] = useState(false);
  const { theme } = useTheme();

  const heroSectionRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    //GSAP
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: "none",
    });

    // GSAP animation for the heading
    revealRefs.current.forEach((el, index) => {
      gsap.from(el, {
        autoAlpha: 0,
        y: "-40%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=10%",
          toggleActions: "play none none reverse",
          // markers:true
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="w-[100%] max-w-[1600px] mx-auto">
      {/*First Section*/}
      <div
        ref={heroSectionRef}
        className="max-h-screen md:flex w-[100%] flex flex-col mx-auto bg-cover bg-[#0b0b0b] py-40"
        style={{
          backgroundImage: `url("https://images.infinitydigitalassets.io/assets/images/learnimg.webp")`,
        }}
      >
        <div className="w-[100%] mt-10 sectionGaptop lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-center md:items-center lg:w-[55%] xl:w-[48%] lg:border lg:rounded-xl border-cyan  px-8 py-14 lg:ml-16 xl:ml-40">
          <div className={`mb-5 ${styles.sec1HeadingText}`}>
            <h1 className="text-center lg:text-left">
              Everything You Need To Learn About
            </h1>
          </div>
          <div className={`mb-10 ${styles.sec1smallSubHeadingText}`}>
            <h2 className="text-center lg:text-left">
              Learn How Infinity Digitial Assets LLC Works
            </h2>
          </div>
          <div className="w-[100%] md:w-[60%] xl:w-[50%] ">
            {modalb && <Modal closeModal={() => setModalb(false)} />}
            <div onClick={() => setModalb(true)}>
              <Button label="A to Z Process" variant={"outline"} />
            </div>
          </div>
        </div>
      </div>
      {/* {second Section} */}
      <div className="w-[100%] flex flex-col items-center justify-center">
        <div ref={addToRefs} onClick={() => setModalv(true)}>
          <Image
            src={
              "https://images.infinitydigitalassets.io/assets/images/video.webp"
            }
            width={768}
            height={421}
            alt="Video"
          />
        </div>
        <div ref={addToRefs} className=" w-[70%] md:w-[40%] lg:w-[30%] xl:w-[20%] border-r-[40%]  ">
          {modalv && <Modal closeModal={() => setModalv(false)} />}
          <div onClick={() => setModalv(true)} className="flex justify-center ">
            <Vimeob
              label={"Our Vimeo Channel"}
              variant={theme === "light" ? "darkOutline" : "outline"}
            />
          </div>
        </div>
      </div>

      {/* {Third section} */}
      <div className="flex flex-col items-center justify-center gap-2 pt-5 pb-14 headingGapTop ">
        <div className="grid items-center w-[100%] lg:w-[90%] justify-center grid-flow-row md:grid-cols-2">
          <div className=" w-[90%] mx-6 lg:mx-10 md:border-r md:border-2x">
            <div ref={addToRefs} className="flex justify-start mb-5">
              <h2 className="mainSubHeadingText">
                <span
                  className={`${
                    theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
                  }`}
                >
                  Frequently{" "}
                </span>{" "}
                Asked Questions
              </h2>
            </div>
            <div ref={addToRefs} className="">
              <p className="text-sm text-black lg:text-lg dark:text-white">
                We know you got questions in your mind, and we have their
                answers too
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center">
            <div
              class="flex flex-col w-[80%] mt-7 md:mt-0 gap-6 ml-7 md:ml-0 divide-y  divide-gray-700"
              bis_skin_checked="1"
            >
              <details>
                <summary class="hover:scale-105 duration-500 text-base py-2 text-black dark:text-white outline-none cursor-pointer focus:underline focus:text-c9 dark:focus:text-c9 hover:text-cyan-500 dark:hover:text-cyan-500">
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy
                </summary>
                <div
                  class="px-4 pb-4 pt-2 text-black dark:text-white"
                  bis_skin_checked="1"
                >
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details>
                <summary class="hover:scale-105 duration-500 text-base py-2 text-black dark:text-white outline-none cursor-pointer focus:underline focus:text-c9 dark:focus:text-c9 hover:text-cyan-500 dark:hover:text-cyan-500">
                  Which payment methods can I use to purchase a Teams plan?
                </summary>
                <div
                  class="px-4 pb-4 pt-2 text-black dark:text-white"
                  bis_skin_checked="1"
                >
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    aspernatur quae, eos explicabo odit minima libero veniam
                    similique quibusdam doloribus facilis ipsa accusantium vel
                    maiores corrupti! Libero voluptate a doloribus?
                  </p>
                </div>
              </details>
              <details>
                <summary class="hover:scale-105 duration-500 text-base py-2 text-black dark:text-white outline-none cursor-pointer focus:underline focus:text-c9 dark:focus:text-c9 hover:text-cyan-500 dark:hover:text-cyan-500">
                  Why do I need a plan if Businessname is free?
                </summary>
                <div
                  class="px-4 pb-4 pt-2 space-y-2 text-black dark:text-white"
                  bis_skin_checked="1"
                >
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    voluptates aspernatur dolores in consequatur doloremque
                    inventore reprehenderit, consequuntur perspiciatis
                    architecto.
                  </p>
                  <p>
                    Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                    veritatis velit quasi cupiditate unde eaque! Iure,
                    voluptatibus autem eaque unde possimus quae.
                  </p>
                </div>
              </details>
              <details>
                <summary class="hover:scale-105 duration-500 text-base py-2 text-black dark:text-white outline-none cursor-pointer focus:underline focus:text-c9 dark:focus:text-c9 hover:text-cyan-500 dark:hover:text-cyan-500">
                  What do I get with a Pro license?
                </summary>
                <div
                  class="px-4 pb-4 pt-2 text-black dark:text-white"
                  bis_skin_checked="1"
                >
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details>
                <summary class="hover:scale-105 duration-500 text-base py-2 text-black dark:text-white outline-none cursor-pointer focus:underline focus:text-c9 dark:focus:text-c9 hover:text-cyan-500 dark:hover:text-cyan-500">
                  Should I purchase a subscription or pay as I go?
                </summary>
                <div
                  class="px-4 pb-4 pt-2 text-black dark:text-white"
                  bis_skin_checked="1"
                >
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="w-[80%] text-lg text-center headingGapTop">
          <p className="text-black dark:text-white">
            Didn’t find your correspondent answer?{" "}
            <Link href="/contact-us" className="text-blue hover:underline">
              Contact us
            </Link>{" "}
            and discuss your issue
          </p>
        </div>
      </div>
      {/* {Fourth Section} */}
      <div className="mb-5">
        <SocialCommunity />
      </div>
    </div>
  );
};

export default Learn;
