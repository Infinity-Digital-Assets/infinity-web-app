"use-client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/app/data";

const {
  home: { howItWorks },
} = content;

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  // const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const headSectionRef = useRef(null);
  // const imageSectionRef = useRef(null);
  // const cardSectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    //GSAP
    gsap.from(headSectionRef.current, {
      autoAlpha:0,
      y: '-40%',
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headSectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers:true,
      },
    });

    // gsap.fromTo(imageSectionRef.current, {
    //   duration: 0.25, 
    //   autoAlpha:0,
    //   scrollTrigger:{
    //     trigger:cardSectionRef.current,
    //     start:'top top',
    //     toggleActions:'play none none reverse',
    //     markers:true,
    //   }
    //   }, {autoAlpha:1})

    setVideoLoaded(true);
    
    // Check if Intersection Observer is supported by the browser
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;

        // If the section is in the viewport
        if (entry.isIntersecting) {
          // Scroll the section
          // entry.target.scrollTo({
          //   top: entry.target.scrollHeight,
          //   behavior: "smooth",
          // });
        } else {
          // Reset the section scroll position
          // entry.target.scrollTo({
          //   top: 0,
          //   behavior: "smooth",
          // });
        }
      });

      // Observe the section element
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      // Clean up the observer when the component is unmounted
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <section
      // ref={videoRef}
      className="relative md:h-[120vh] max-w-[1600px] mx-auto bg-cover bg-center bg-no-repeat overflow-hidden text-black dark:text-white"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/how-it-works-mobile-bg-min.webp')`,
      }}
    >
      {videoLoaded && (
        <video
          className="absolute z-10 object-cover w-full h-full "
          src={"https://images.infinitydigitalassets.io/assets/videos/how-it-works.mp4"}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // style={{ display: videoLoaded ? "none" : "block" }}
        />
      )}
      <div className="relative z-20 pt-20 pb-12">
        <div ref={headSectionRef} className="hiw-heading max-w-[800px] mx-auto mb-10">
          <h1 className="capitalize text-center text-[28px] sm:text-[46px] text-white font-semibold md:font-extrabold leading-none mb-3">
            How It works
          </h1>
        </div>
        <div
        
          className={`no-scrollbar ml-0 sm:ml-20 lg:ml-28 md:max-h-[90vh] md:overflow-y-scroll overflow-x-hidden`}
        >
          {howItWorks.map((hiw, idx) => (
            <div
              key={idx + hiw.title}
              className="flex flex-col items-center justify-between px-3 my-16 sm:flex-row sm:px-0"
            >
              <div
              //  ref={cardSectionRef} 
               className="w-[100%] sm:w-[55%] mb-5 sm:mb-0">
                <div className="max-w-[100%] sm:max-w-[70%] md:max-w-[60%]">
                  <div
                    className={`${styles.hiw_card} border-[#22DDD2] rounded-md p-4 sm:py-10 sm:px-6`}
                  >
                    <div className="relative mb-3">
                      <span className="text-7xl text-[#000025] font-extrabold font-bebas">
                        0{idx + 1}
                      </span>
                      <h3 className="absolute bottom-0 left-0 mb-0 text-[24px] sm:text-[32px] font-bold md:font-extrabold capitalize text-gradient-blue-cyan">
                        {hiw.title}
                      </h3>
                    </div>
                    <p className="text-white"
                    dangerouslySetInnerHTML={{
                      __html:hiw.description
                    }}
                    />
                  </div>
                </div>
              </div>
              <div
              //  ref={imageSectionRef} 
               className="sticky pb-10 top-0 w-[100%] sm:w-[45%] flex justify-center p-0 sm:pr-10">
                <Image
                  src="https://images.infinitydigitalassets.io/assets/images/how-it-works-browse-min.webp"
                  width={400}
                  height={517}
                  alt="Next Generation Investments For Everyone"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
