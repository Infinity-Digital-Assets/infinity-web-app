"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "../components/button/button";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Roadmap from "../components/roadmap/roadmap";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import Image from "next/image";
import styles from "./page.module.css";
// import video3 from "/public/assets/videos/companybg3section.webm";
// import video1 from "/public/assets/videos/companybg1section.webm";
// import MeetOurTeamLap from "../../../public/assets/images/meetTeam1.webp";
import Link from "next/link";
import Modal from "../components/Modal/Modal";
// data
import { content } from "@/app/data";
import { useTheme } from "next-themes";

const { teamMembers } = content;

const TeamMembers = teamMembers;

//GSAP plugin Register
gsap.registerPlugin(ScrollTrigger);

const Company = () => {
  const { theme } = useTheme();
  //Modal is for the coming soon feature
  const [modal, setModal] = useState(false);

  //selectedMember is for assigning the current member to display data
  const [selectedMember, setSelectedMember] = useState(TeamMembers[0]);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const containerRef = useRef();
  const childContainerRef = useRef();
  //videoRef is for easy loading of video
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  //Ref Declaration
  const heroSectionRef = useRef(null);
  const textContainerRef = useRef(null);
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

    const textLines = textContainerRef.current.querySelectorAll(".line span");
    gsap.from(textLines, {
      duration: 1,
      autoAlpha: 0,
      y: -200,
      ease: "power2.out",
      skewY: 10 ,
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

    const video = videoRef.current;
    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };
    video.addEventListener("loaded", handleVideoLoaded);
    return () => {
      video.removeEventListener("loaded", handleVideoLoaded);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    //Parent div of all div's
    <div
      className={`w-[100%] text-black dark:text-white max-w-[1600px] mx-auto`}
    >
      {/*First Section - START*/}
      {/*Parent Div of this section */}
      <div ref={heroSectionRef}>
        <div
          ref={videoRef}
          className="relative min-h-screen py-10 md:py-20 lg:py-30 xl:py-30"
        >
          {/*Video*/}
          <video
            className="absolute inset-0 object-cover w-full h-full"
            src={
              "https://images.infinitydigitalassets.io/assets/videos/companybg1section.webm"
            }
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ display: videoLoaded ? "none" : "block" }}
          />
          {/*Box on the div*/}
          <div className="w-[100%] mt-40 xl:mt-28 sectionGaptop lg:w-[50%] md:flex md:flex-col justify-center items-center lg:justify-start lg:items-start borderDecoration px-8 py-16 lg:ml-14 xl:ml-16">
            {/*Div for heading*/}
            <div className="mb-5 text-gradient-purple text-[30px] md:text-[36px] lg:text-[46px] font-extrabold capitalize leading-tight">
              <h1 className="text-center lg:text-left">
                Empowering Investors, Redefining Possibilities
              </h1>
            </div>
            {/*Div for subheading*/}
            <div className="mb-10 lg:mb-6">
              <h4 className="text-lg font-bold text-center text-white capitalize lg:text-left md:text-lg lg:text-xl xl:text-2xl">
                Discover the company behind the Infinity Financial Network
              </h4>
            </div>
            {/*Button div*/}
            <div className="w-full xl:[90%] flex flex-col justify-center items-center lg:justify-start lg:items-start">
              {modal && <Modal closeModal={() => setModal(false)} />}
              <div
                className="w-[80%] md:w-[40%] lg:w-[50%]"
                onClick={() => setModal(true)}
              >
                <Button label="Discover Whitepaper" variant={"outline"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*First Section - END*/}

      {/*Second Section - START*/}
      {/*Parent Div of this section */}
      <div className="py-20 md:py-20 lg:py-30 xl:py-30">
        {" "}
        {/*This div is for spacing within sections*/}
        <div className="w-[100%] flex flex-col items-center justify-center">
          {/*Div for heading*/}
          <div ref={addToRefs}>
            <h2 className="sectionHeadingText">
              Who{" "}
              <span
                className={`${
                  theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
                }`}
              >
                We Are
              </span>
            </h2>
          </div>
          {/*Div for Image*/}
          <div
            ref={containerRef}
            className="relative w-[90%] md:w-[100%] headingGapTop flex items-center justify-center"
          >
            <div
              ref={childContainerRef}
              className="relative overflow-hidden reveal w-100 h-100"
            >
              <Image
                src={
                  "https://images.infinitydigitalassets.io/assets/images/meetTheTeam.webp"
                }
                width={690}
                height={440}
                alt="Team Image"
                className="object-cover w-full h-full origin-left transform rounded-xl"
              />
            </div>
          </div>
          {/*Div for content*/}
          <div ref={textContainerRef} className="w-[87%] lg:w-[65%] xl:w-[58%] quarterGapTop text-center mt-14">
            <p className="xSmallSubHeadingText line">
              <span>
                Infinity Digital Assets is a dynamic company driven by our
                team&rsquo;s shared commitment to redefine the{" "}
              </span>
              <span>
                world of asset investment. As a forward-thinking organization at
                the forefront of technological{" "}
              </span>
              <span>
                advancements, we are dedicated to empowering both individuals
                and institutions, enabling them to{" "}
              </span>
              <span>
                unlock new opportunities and embrace a transformative approach
                to finance.
              </span>
              <br></br>
              <br></br>
              <span>
                Integrity, innovation, and compliance are the pillars that
                underpin our operations at Infinity Digital{" "}
              </span>
              <span>
                Assets. We uphold rigorous regulatory standards, ensuring our
                platform provides a secure and legally{" "}
              </span>
              <span>
                compliant environment for investors. Our team of experts merges
                profound industry knowledge with{" "}
              </span>
              <span>
                technical expertise, continuously pushing the boundaries of
                asset investment. By embracing cutting-
              </span>
              <span>
                edge technologies like blockchain and smart contracts, we
                deliver transparency, immutability, and
              </span>
              <span>
                efficiency throughout the investment process.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/*Second Section - END*/}

      {/*Third Section - START*/}
      {/*Parent Div of this section */}
      <div
        ref={videoRef}
        className={`relative min-h-screen flex ${styles.backgroundColourMissionSection}`}
      >
        {/*Video DIV*/}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src={
            "https://images.infinitydigitalassets.io/assets/videos/companybg3section.webm"
          }
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: videoLoaded ? "none" : "block" }}
        />
        {/*Div for bg blur*/}
        <div
          className={`w-[100%] lg:w-[50%] ${styles.backgroundBlur} self-stretch px-10 lg:ml-20`}
        >
          {/*Div for scrollable content section*/}
          <div
            className={`${styles.scrollableContent} py-20 md:py-40 lg:py-0 xl:py-60 flex flex-col items-center justify-center xl:flex-none`}
          >
            {/*Our VISION content*/}
            <div className="mt-[40%] md:mt-[5%] lg:mt-0 lg:pt-0 xl:pt-60">
              <div className="lg:mt-[0%] xl:mt-[50%]">
                <h2 className="text-2xl font-extrabold text-center text-white md:text-3xl lg:text-4xl xl:text-5xl xl:text-left">
                  Our <span className="text-gradient-blue-cyan">Vision</span>
                </h2>
              </div>
              <div className="subHeadingGapTop">
                <p className="text-center text-white xl:text-left">
                  The company infinity is a revolutionary platform that combines
                  institutional quality real world asset investments with
                  blockchain technology to create a new digital asset class that
                  is backed by tangible assets.
                  <br></br>
                  <br></br>
                  At our core, we aspire to become a leading marketplace for
                  asset-backed tokens, renowned for providing investors with
                  access to premium institutional real world assets.
                  <br></br>
                  <br></br>
                  Our vision encompasses a decentralized and legally compliant
                  investment framework, bolstered by state-of-the-art blockchain
                  technology.
                </p>
              </div>
            </div>
            {/*DIV for our MISSION content*/}
            <div className="mt-20 md:mt-20 lg:mt-48 xl:mt-[50%]">
              <div className="">
                <h2 className="text-2xl font-extrabold text-center text-white md:text-3xl lg:text-4xl xl:text-5xl xl:text-left">
                  Our <span className="text-gradient-blue-cyan">Mission</span>
                </h2>
              </div>
              <div className="mb-20 md:mb-0 subHeadingGapTop">
                <p className="text-center text-white xl:text-left">
                  The company infinity is a revolutionary platform that combines
                  institutional quality real world asset investments with
                  blockchain technology to create a new digital asset class that
                  is backed by tangible assets.
                  <br></br>
                  <br></br>
                  At our core, we aspire to become a leading marketplace for
                  asset-backed tokens, renowned for providing investors with
                  access to premium institutional real world assets.,555555
                  <br></br>
                  <br></br>
                  Our vision encompasses a decentralized and legally compliant
                  investment framework, bolstered by state-of-the-art blockchain
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Third Section - END*/}

      {/*Meet The Team Section - START*/}
      <div id="meet-the-team" className="bg-transparent sectionGapTop">
        <div
          ref={addToRefs}
          className="w-[100%] md:flex md:flex-col md:items-center md:justify-center "
        >
          <h2 className="text-center sectionHeadingText ">
            <span
              className={`${
                theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
              }`}
            >
              Meet{" "}
            </span>{" "}
            The Team
          </h2>
        </div>
        <div className="w-[100%] headingGapTop xl:flex">
          <div className={`w-full xl:w-[48%] ${styles.scrollingContent}`}>
            <div className="flex items-center justify-center px-[5%]">
              <div className="grid grid-flow-row grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
                {TeamMembers.map((item, index) => (
                  <div
                    className={`${
                      styles.card
                    } hover:scale-105 transition duration-500 ${
                      selectedMember === item ? styles.selectedCard : item
                    }`}
                    key={index}
                    onClick={() => handleMemberClick(item)}
                  >
                    <div className="flex items-center justify-center p-2">
                      <div
                        className="w-[278px] h-[174px] rounded-xl"
                        style={{
                          backgroundImage: `url(${item.Image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col justify-start my-2 ml-5">
                      <div>
                        <p className={`${styles.cardNameText}`}>{item.Name}</p>
                      </div>
                      <div>
                        <p className={`${styles.cardDesgText}`}>
                          {item.Designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden xl:block md:w-[50%] xl:w-[52%] ml-5 mt-2">
            {selectedMember !== null && (
              <div
                className={`${styles.viewCardDetails} dark:bg-formColor bg-lightFormColor`}
              >
                <div>
                  <div className="flex mt-10">
                    <div className="mx-5">
                      <div
                        className="w-[245px] h-[185px] rounded-xl"
                        style={{
                          backgroundImage: `url(${selectedMember.Image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    <div className="ml-1">
                      <div>
                        <p className={`${styles.viewCardName}`}>
                          {selectedMember.Name}
                        </p>
                      </div>
                      <div>
                        <p className={`${styles.viewCardDesg}`}>
                          {selectedMember.Designation}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`mt-2 text-md ${styles.viewCardExp} text-black dark:text-white`}
                        >
                          Experience
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-sm ${styles.viewCardExpShow} text-black dark:text-white`}
                        >
                          {selectedMember.Experience}
                        </p>
                      </div>
                      <div className="flex mt-4">
                        <div className="flex items-center justify-center">
                          <Link
                            href={selectedMember.linkedinUrl}
                            passHref
                            target="_blank"
                          >
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="duration-300 ease-in-out rounded hover:bg-blue-600 hover:scale-110"
                            >
                              <rect
                                x="0.5"
                                y="1.19037"
                                width="29"
                                height="27.8387"
                                rx="3.5"
                                stroke="currentColor"
                              />
                              <path
                                d="M6.81885 8.93125C6.81885 8.44235 7.00313 8.03901 7.37167 7.72124C7.74022 7.40345 8.21934 7.24457 8.80902 7.24457C9.38818 7.24457 9.85675 7.401 10.2148 7.71391C10.5833 8.03658 10.7676 8.45702 10.7676 8.97525C10.7676 9.44459 10.5886 9.8357 10.2306 10.1486C9.86203 10.4713 9.37764 10.6326 8.77743 10.6326H8.76163C8.18248 10.6326 7.7139 10.4713 7.35588 10.1486C6.99785 9.82593 6.81885 9.42014 6.81885 8.93125ZM7.02418 21.7647V11.9673H10.5307V21.7647H7.02418ZM12.4735 21.7647H15.98V16.294C15.98 15.9518 16.0221 15.6878 16.1063 15.502C16.2537 15.1695 16.4775 14.8884 16.7776 14.6587C17.0777 14.4289 17.4542 14.314 17.907 14.314C19.0863 14.314 19.676 15.0522 19.676 16.5287V21.7647H23.1825V16.1473C23.1825 14.7002 22.8139 13.6026 22.0768 12.8546C21.3397 12.1066 20.3657 11.7326 19.1548 11.7326C17.7964 11.7326 16.7381 12.2753 15.98 13.3606V13.39H15.9642L15.98 13.3606V11.9673H12.4735C12.4945 12.2802 12.5051 13.2531 12.5051 14.886C12.5051 16.5189 12.4945 18.8118 12.4735 21.7647Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Link>
                        </div>
                        <div className="flex items-center justify-center ml-5">
                          <p>Linkedin</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-5 mt-12">
                    <div>
                      <p className={`${styles.viewCardIntroText}`}>
                        Introduction:
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className={`${styles.viewCardIntroDetails}`}>
                        {selectedMember.Intro}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*Meet The Team Section - END*/}

      {/*Fifth Section - ROADMAP component*/}
      <div className="sectionGapTop">
        <Roadmap />
      </div>

      {/*Sixth Section - SOCIAL COMMUNITY component*/}
      <div className="sectionGapTop">
        <SocialCommunity />
      </div>
    </div>
  );
};

export default Company;
