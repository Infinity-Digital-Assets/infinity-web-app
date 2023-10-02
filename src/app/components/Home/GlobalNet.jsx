import React, { useState, useRef, useEffect } from "react";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalNetWealth() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const card1Ref = useRef();
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleVideoLoaded = (e) => {
        // console.log("🚀 ~ file: HowItWorks.jsx:23 ~ handleVideoLoaded ~ e:", e);
        setVideoLoaded(true);
      };
      video.addEventListener("loaded", handleVideoLoaded);
      return () => {
        video.removeEventListener("loaded", handleVideoLoaded);
      };
    }
  });

  useEffect(() => {
    gsap.fromTo(card1Ref.current, {
      autoAlpha:0,
      y:'-40%'
    }, {
      duration: 1, 
      y:0,
      autoAlpha:1,
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top bottom-=10%",
        toggleActions: "play none none reverse",
        // markers:true,
      },
    })
    
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
      autoAlpha:0,
      x:'-40%'
    }, {
      duration: 1, 
      x:0,
      autoAlpha:1,
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=10%",
        toggleActions: "play none none reverse",
        // markers:true,
      },
    })
  });

  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };


  return (
    <section ref={videoRef} className="relative h-screen">
      <div>
        <video
          className="absolute z-10 w-[100%] h-[100%] object-cover"
          src={"https://images.infinitydigitalassets.io/assets/videos/global-net-worth.mp4"}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: videoLoaded ? "none" : "block" }}
        />
      </div>
      <div className="relative z-20 pt-20 pb-12 h-[100%] flex items-center justify-center">
        <div className="md:w-[50%] mx-auto global_net_card_top px-3 md:px-0">
          <div ref={card1Ref}
            className={`${styles.global_net_card} border border-purple rounded-xl py-10 px-5 lg:px-10 md:mb-3 mb-5`}
          >
            <h3 className="text-white text-[24px] lg:text-[32px] font-extrabold">
              68% Global net wealth is stored in real estate
            </h3>
          </div>
          <div className="flex flex-wrap justify-between global_net_cards">
            <div ref={addToRefs}
              className={`${styles.global_net_card} w-[100%] md:w-[48%] border border-[#FF00D6] rounded-xl py-10 px-5 lg:px-10 md:mb-3 mb-5`}
            >
              <h3 className="text-white   text-[20px] lg:text-[28px] font-extrabold capitalize">
                US$ 7,063 Billion
              </h3>
              <p className="text-lg text-white">
                The global real estate market in 2022
              </p>
            </div>
            <div ref={addToRefs}
              className={`${styles.global_net_card} w-[100%] md:w-[48%] border border-c11 rounded-xl py-10 px-5 lg:px-10 md:mb-3 mb-5`}
            >
              <h3 className="text-white   text-[20px] lg:text-[28px] font-extrabold">
                $178 Trillion
              </h3>
              <p className="text-lg text-white">Value of residential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
