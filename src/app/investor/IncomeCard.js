import React, {useEffect, useRef} from "react";
import styles from "./page.module.css";
import { useTheme } from "next-themes";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IncomeCard = () => {
  const {theme} = useTheme();

  const headSectionRef = useRef();
  const revealRef = useRef([]);
  revealRef.current = [];
  const cardData = [
    {
      heading: "How to earn money with infinity",
      txt1: `The tokenized asset is then split into smaller shares (a process
            we call fractionalization) that can be acquired for an
            affordable price. With the help of a Infinty-handled asset
            manager, the asset is also rented out and yield starts to be
            collected before the asset is publicly offered.{" "}`,
      txt2: `As everything is ready for the final step, we take the asset,
            split into individual shares worth $100 to the Infiniy, making
            it available to users.‍ After we finalize our check-ups with
            independent third-party quality assessors, of the asset.`,
    },
    {
      heading: "frontend profit auto invest",
      txt1: `Nothing simpler! All you need to do for your first investment
        with INFIN™ is to install the app and have a valid credit card.
        We will take care of everything else for you. Just sign up, top
        up your account with the sum you plan on investing and buy a
        share (or more) of the asset you’re interested in. You will see
        all our available assets in the app.`,
      txt2: ``,
    },
  ];

  useEffect(() => {
    // GSAP animation for the heading
    gsap.from(headSectionRef.current, {
      autoAlpha:0,
      y: '-40%',
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headSectionRef.current,
        start: "top bottom-=10%",
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
  }, [])

  const addToRefs = (el) =>{
    if(el && !revealRef.current.includes(el)){
      revealRef.current.push(el);
    }
  };

  return (
    <>
      {/* Generate Passive Income  */}
      <div className=" flex-col w-[100%] h-[auto] flex items-center    mx-auto justify-center bg-cover bg-center overflow-x-hidden">
        <div className="flex flex-col container  w-[100%] md:w-[83%] mx-auto items-center  justify-center my-4 md:my-16">
          <div ref={headSectionRef} className="flex flex-col items-center text-center lg:gap-3 md:text-start">
            <h2 className={`  ${styles.income} ${theme === "light" ? "text-blue" : "text-gradient-blue-cyan"}`}>Generate Passive Income</h2>
            <h2 className={`${styles.incomeSubHeading}`}>
              {" "}
              With Our Innovative Solutions
            </h2>
          </div>
          {/* card  */}
          <div className="container flex flex-col md:gap-3 md:flex-row">
            {cardData.map((data, index) => {
              return (
                <div
                ref={addToRefs}
                  key={index}
                  className={`flex flex-col w-[85%] md:w-[50%] p-[1rem] custom-hover  text-start md:p-[2rem] self-center   md:self-stretch  my-5 lg:my-10 gap-4 ${styles.cardMain}  `}
                >
                  <h3 className={`${styles.cardHeading} ${theme === "light" ? "text-blue" : "text-gradient-blue-cyan"}`}>{data.heading}</h3>
                  <p className={`${styles.cardTxt}`}>{data.txt1}</p>
                  <p className={`${styles.cardTxt}`}>{data.txt2}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default IncomeCard;
