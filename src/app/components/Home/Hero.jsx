import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import CountdownTimer from "@/app/components/countdown/countdownTimer";
import Button from "@/app/components/button/button";
import Modal from "../Modal/Modal";

const NEXT_10_DAYS = new Date("11/11/2023").getTime() + 1000 * 3600 * 24 * 10;

export default function Hero() {
  const heroSectionRef = useRef(null);
  const [modal, setModal] = useState(false);
    //videoRef is for easy loading of video
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
  
    useEffect(() => {
      //GSAP
      gsap.from(heroSectionRef.current, {
        duration: 3,
        autoAlpha:0,
        ease:'none',
      })

      const video = videoRef.current
      const handleVideoLoaded = () => {
        setVideoLoaded(true);
      };
      video.addEventListener("loadeddata", handleVideoLoaded);
      return () => {
        video.removeEventListener("loadeddata", handleVideoLoaded);
      };
  
    }, []);

  
  return (
    <section
      ref={heroSectionRef}
      className="bg-center bg-no-repeat bg-cover bgColourPages"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/home-hero-background.webp')`,
      }}
    >
      <div className="pb-12">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-40 lg:pt-52 w-[100%] lg:w-[50%] ml-0 sm:ml-10 lg:ml-28">
            <div className="mb-10 hero-headings">
              <h1 className="text-gradient-blue-cyan text-[30px] md:text-[34px] lg:text-[50px] font-extrabold">
                Next Generation
              </h1>
              <h1 className="text-[24px] md:text-[28px] lg:text-[46px] font-semibold text-white">
                Investments For Everyone
              </h1>
            </div>
            <div className="text-textColor">
              <CountdownTimer targetDate={NEXT_10_DAYS} />
            </div>
            <div className="w-[71%] my-10 md:w-[50%] lg:w-[73%] xl:w-[55%] lg:my-8">
              {modal && <Modal closeModal={() => setModal(false)} />}
              <div onClick={() => setModal(true)}>
                <Button
                  label="Token Pre-Sale Launch Waiting List"
                  variant={"outline"}
                />
              </div>
            </div>
          </div>
          <div ref={videoRef} className="w-[100%] lg:w-[50%] flex justify-end">
            <video
              src={"https://images.infinitydigitalassets.io/assets/videos/home-hero-animate.webm"}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="max-h-screen w-[100%] md:w-[90%] object-cover"
            />
            {/* <Image
              src={"/assets/images/next-gen-min.webp"}
              width={400}
              height={517}
              alt="Next Generation Investments For Everyone"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
