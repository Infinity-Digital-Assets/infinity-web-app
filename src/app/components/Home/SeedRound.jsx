import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import { useTheme } from "next-themes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// data
import { content } from "@/app/data";

gsap.registerPlugin(ScrollTrigger);

const {
  home: { seedRoundCards },
} = content;

export default function SeedRound() {
  const headSectionRef = useRef();
  const revealRef = useRef([]);
  revealRef.current = [];

  const { theme } = useTheme();

  useEffect(() => {
    // GSAP animation for the heading
    gsap.from(headSectionRef.current, {
      autoAlpha:0,
      y: '-40%',
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headSectionRef.current,
        start: "top bottom-=30%",
        toggleActions: "play none none reverse",
        // markers:true
      },
    });
    
    // GSAP animation for individual cards
    revealRef.current.forEach((el, index) => {
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
            start: "top center+=20%",
            toggleActions: "play none none reverse",
            // markers:true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) =>{
    if(el && !revealRef.current.includes(el)){
      revealRef.current.push(el);
    }
  };
  
  return (
    <section className="py-20 overflow-x-hidden sm:py-30">
      <div className="px-5 home-seed-round">
        <div
          ref={headSectionRef}
          className="hsr-heading max-w-[800px] mx-auto mb-10"
        >
          <h1 className="capitalize text-center text-[28px] sm:text-[46px] font-semibold sm:font-extrabold leading-none mb-3">
            Our <span className="text-gradient-purple">seed round</span>
          </h1>
          <p className="text-center">
            Infinity is raising capital for building the best investment
            opportunities we find and tokenize them using blockchain technology,
            fractionalize them into multiple asset shares and then offer them up
            to our user pool to invest in.
          </p>
        </div>
        <div className="hsr-cards flex flex-col sm:flex-row justify-center max-w-[100%] sm:max-w-[95%] mx-auto gap-5 flex-wrap ">
          {seedRoundCards.map((card, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className={`${styles.seed_card} border-[#22DDD2] rounded-xl w-[100%] sm:w-[48%] custom-hover p-4 sm:p-10`}
            >
              <h1
                className={`text-[20px] md:text-[24px] lg:text-[30px] font-extrabold capitalize mb-3 ${
                  theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
                }`}
              >
                {card.title}
              </h1>
              <p className="text-base font-light">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
