"use client";
import React from "react";
import Button from "../components/button/button";
import Roadmap from "../components/roadmap/roadmap";
import Image from "next/image";
import Modal from "../components/Modal/Modal";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

//GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP Plugin Register
gsap.registerPlugin(ScrollTrigger);

const Seedround = () => {
  const { theme } = useTheme();
  const [modal, setModal] = useState(false);
  const gData = [
    {
      heading1: "Design of WebApp, DAPP & Token",
      timeframe1: "1st May -  5th June 2023",
    },
    {
      heading1: "Build of WebApp, DAPP & Token",
      timeframe1: "21 June - 25 June 2023",
    },
    {
      heading1: "INFIN in apple Store & token launch pre-sale",
      timeframe1: "25th June  30th June 2023",
    },
    {
      heading1: "ICO & Seed Round $1.3 Million Funding",
      timeframe1: "1st September 2023",
    },
    {
      heading1: "Public token offering",
      timeframe1: "Oct 2023",
    },
  ];
  const bData = ["White Paper", "Pitch Desk"];
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const heroSectionRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const headingSectionRef = useRef();
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    //GSAP
    //1st Section FADE IN
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: "none",
    });

    //3rd Section Animations
    gsap.from(headingRef.current, {
      duration: 1,
      autoAlpha:0,
      x:"-100%",
      scrollTrigger:{
        trigger:headingRef.current,
        toggleActions:"play none none reverse"
      }
       })
    
      gsap.from(subHeadingRef.current, {
      duration: 1,
      autoAlpha:0,
      delay:1,
      x:"-100%",
      scrollTrigger:{
        trigger:subHeadingRef.current,
        toggleActions:"play none none reverse"
      }
       })

    //4th Section Animations
    // GSAP animation for the section heading
    gsap.from(headingSectionRef.current, {
      autoAlpha:0,
      y: '-40%',
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingSectionRef.current,
        start: "top bottom-=10%",
        toggleActions: "play none none reverse",
        // markers:true
      },
    });

    //Animation for CARDS
    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: index % 2 === 0 ? "-100%" : "100%",
          // markers:true
        },
        {
          duration: 1,
          x: 0,
          autoAlpha: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center+=10%",
            toggleActions: "play none none reverse",
            // markers:true,
          },
        }
      );
    });
       

    const video = videoRef.current;
    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };
    video.addEventListener("loaded", handleVideoLoaded);
    return () => {
      video.removeEventListener("loaded", handleVideoLoaded);
    };
  }, []);

  const addToRefs = (el) =>{
    if(el && !cardsRef.current.includes(el)){
      cardsRef.current.push(el);
    }
  };

  return (
    <div className=" w-[100%] mx-auto max-w-[1600px] flex flex-col justify-center items-center overflow-hidden">
      <div ref={heroSectionRef}>
        <div
          ref={videoRef}
          className="relative flex flex-col items-center justify-center w-screen min-h-screen "
        >
          <video
            className="absolute inset-0 object-cover w-full h-full "
            src={
              "https://images.infinitydigitalassets.io/assets/videos/seed-round-webm.webm"
            }
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ display: videoLoaded ? "none" : "block" }}
          />

          <div className="max-w-[1600px] mx-auto relative inset-0 mt-20 xl:mt-32 w-[80%] lg:w-[70%] gap-3 flex flex-col items-center justify-center ">
            <h1 className="text-center headingGapTop text-gradient-blue-cyan text-[32px] md:text-[36px] lg:text-[50px] font-extrabold capitalize leading-tight">
              Introducing a revolutionary opportunity in the realm of finance
            </h1>
            <h2 className="flex items-center text-center text-c2 ssubHeadingText">
              Decentralized Real World Assets (RWA){" "}
            </h2>
            <p className="text-white text-md text-center mb-8 w-[100%] lg:w-[80%]">
              Our platform enables investment in a diverse range of tangible
              assets including Real Estate, Gold, precious metals, Arts,
              Copyrights, and Defi Assets. Embrace the New Future of finance
              with our groundbreaking financial network.{" "}
            </p>
            <div className=" grid mb-20 mx-auto w-[100%] md:w-[56%] grid-flow-row lg:grid-cols-2 grid-cols-1 gap-3">
              {modal === true && <Modal closeModal={() => setModal(false)} />}
              {bData.map((item, index) => {
                return (
                  <div key={index} onClick={() => setModal(true)}>
                    <Button label={item} variant={index === 0 ? "solid" : "outline"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Roadmap />
      </div>
      <div className="w-[100%] bg-[#0b0b0b]">
        <div className=" flex flex-col justify-center items-center lg:flex-row  headingGapTop lg:flex lg:w-[100%]  lg:mx-10">
          <div className=" w-[80%] lg:w-[50%] flex flex-col justify-left mt-14 lg:mt-0 md:mx-10">
            <div ref={headingRef} className="flex flex-col md:gap-2 ">
              <h2 className="mb-5 text-3xl font-extrabold md:text-5xl text-c7">
                <span className="changeBigGradientText ">1.3 Million </span>
                Target For Seed Round
              </h2>
            </div>
            <div ref={subHeadingRef} className=" justify-left">
              <p className="text-base md:text-xl text-c2">
                Calling to all investors, dont miss out on your chance to be
                part of the future of “new finance” How to register your
                interest now
              </p>
            </div>
          </div>
          <div className="flex lg:w-[80%]">
            <Image
              width={900}
              height={544}
              src={
                "https://images.infinitydigitalassets.io/assets/images/milltarget.webp"
              }
              alt="1.3 million Aud"
            />
          </div>
        </div>
      </div>
      <div className=" headingGapTop flex flex-col w-[100%] justify-center items-center">
        <div ref={headingSectionRef} className="w-[80%] items-center text-center">
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold">
            INFIN{" "}
            <span
              className={`text-center headingGapTop ${
                theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
              }`}
            >
              Token Journey
            </span>
          </h2>
        </div>
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-3 md:grid-cols-2 mt-10 w-[85%] py-5 lg:py-10">
          {gData.map((item, index) => (
            <div
            ref={addToRefs}
              key={index}
              className="  items-start border-solid border rounded-xl bg-transparent custom-hover border-c10 md:border-c9 p-8  w-[100%]"
            >
              <div className="flex justify-start mb-2 vsmallSubHeadingText">
                {item.heading1}
              </div>
              <div className="text-sm text-c1 dark:text-white">
                {item.timeframe1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seedround;
