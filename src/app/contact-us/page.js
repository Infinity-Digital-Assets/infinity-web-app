"use client";
import React, { useEffect, useRef } from "react";
import styles from "../login/page.module.css";
import Image from "next/image";
import Button from "../components/button/button";
// import phone from "../../../public/assets/images/phone.webp";
// import email from "../../../public/assets/images/email.webp";
// import form from "../../../public/assets/images/form.webp";
// import talk from "../../../public/assets/images/talk.webp";
// import twitter1 from "../../../public/assets/icons/twitter1.svg";
// import tiktok from "../../../public/assets/icons/tiktok.svg";
// import linkedin from "../../../public/assets/icons/linkedin.svg";
// import insta1 from "../../../public/assets/icons/insta1.svg";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import Link from "next/link";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP plugin Register
gsap.registerPlugin(ScrollTrigger);

const Getintouch = () => {
  const [modal, setModal] = useState(false);

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
    <div className=" w-[100%] mx-auto max-w-[1600px] headingGapTop mt-5 items-center justify-center self-center text-black dark:text-white ">
      <div
        ref={heroSectionRef}
        className="flex flex-col items-center justify-center pt-5 md:border-b pb-14 md:border-b-c1 dark:md:border-b-c7"
      >
        <div className="flex flex-col w-[90%] mb-[3%] headingGapTop gap-3 text-center">
          <span className="gradientText">Get In Touch</span>
          <span className="text-center subHeadingText">
            Let&apos;s get you connected to our team
          </span>
        </div>
        <div className="grid grid-flow-row grid-cols-1 p-3 lg:grid-cols-2 md:grid-cols-1 gap-3 w-[90%] lg:w-[70%] md:w-[55%]">
          <div className="flex items-center justify-center gap-3 p-8 mb-6 duration-500 border border-solid rounded-xl custom-hover hover:scale-105 border-c9">
            <div className=" w-[40%] border-r border-r-c9 ">
              <Image
                width={85}
                height={100}
                src={
                  "https://images.infinitydigitalassets.io/assets/images/phone.webp"
                }
                alt="logo"
              />
            </div>
            <div className="flex flex-col w-[80%] justify-center items-center text-center  ">
              <p className="flex text-sm md:font-bold md:text-xl text-c1 dark:text-c7">
                Contact us through call
              </p>
              <p className="text-xs text-c1 dark:text-c7">
                {`Call us: 0200-123 456
                (9:00 am till 09:00 pm only)`}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-8 mb-6 duration-500 border border-solid rounded-xl custom-hover hover:scale-105 border-c9">
            <div className="w-[40%] border-r border-r-c9 p-2">
              <Image
                width={85}
                height={100}
                src={
                  "https://images.infinitydigitalassets.io/assets/images/email.webp"
                }
                alt="logo"
              />
            </div>
            <div className="w-[80%] flex justify-center items-center flex-col text-center ">
              <p className="flex md:font-bold md:text-xl text-c1 dark:text-c7">
                Contact Via Email
              </p>
              <p className="text-xs text-c1 dark:text-c7">
                You can email us at any time, and we will respond you within
                24-48 hours
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-5 mb-6 duration-500 border border-solid rounded-xl border-c9 hover:scale-105 custom-hover">
            <div className=" w-[40%] border-r border-r-c9 p-2">
              <Image
                width={85}
                height={100}
                src={
                  "https://images.infinitydigitalassets.io/assets/images/form.webp"
                }
                alt="logo"
              />
            </div>
            <div className="w-[80%] flex justify-center items-center flex-col text-center ">
              <p className="flex md:font-bold md:text-xl text-c1 dark:text-c7">
                Reach us by filling form
              </p>
              <p className="text-xs text-c1 dark:text-c7">
                Fill the form below send it to us. we&apos;ll reach you within
                48 hours.{" "}
              </p>
            </div>
          </div>
          <div className="flex w-[100%] items-center justify-center border-solid gap-3 border border-c9  rounded-xl hover:scale-105 duration-500  p-5 mb-6 custom-hover">
            <div className="w-[40%] items-center justify-center flex border-r border-r-c9 ">
              <Image
                width={85}
                height={100}
                src={
                  "https://images.infinitydigitalassets.io/assets/images/talk.webp"
                }
                alt="logo"
              />
            </div>
            <div className="w-[80%] flex justify-center items-center flex-col text-center ">
              <p className="flex md:font-bold md:text-xl text-c1 dark:text-c7">
                Connect with us
              </p>
              <p className="text-xs text-center text-c1 dark:text-c7">
                Follow us for the latest updates.
              </p>
              <div className="flex gap-1 md:gap-5">
                <Link
                  href="https://www.tiktok.com/@infinitydigitalassets"
                  target="_blank"
                >
                  <div className="p-2 my-5 duration-500 rounded-md cursor-pointer hover:scale-105 bg-slate-400 dark:bg-transparent hover:bg-white hover:border hover:border-c1 dark:hover:border-c9">
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5797 0.599976C10.5797 0.841997 10.6545 4.29751 14.4363 4.51264V7.20177C14.1511 7.20177 11.9494 7.06729 10.575 5.89304V11.092C10.6077 13.445 9.24276 15.7487 6.68571 16.2148C5.87472 16.3636 5.03922 16.336 4.24081 16.1341C-1.99987 14.3414 0.0756797 5.47177 6.33974 6.42193V9.2858C3.75464 8.91828 2.88519 10.9845 3.57237 12.4635C4.19877 13.8081 6.7792 14.0993 7.67674 12.2035C7.78502 11.7873 7.83685 11.3595 7.83098 10.9307V0.622352L10.5797 0.599976Z"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/infinitydigitalassets/"
                  target="_blank"
                >
                  <div className="p-2 my-5 duration-500 rounded-md cursor-pointer hover:scale-105 bg-slate-400 dark:bg-transparent hover:bg-white hover:border hover:border-c1 dark:hover:border-c9">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.0457 4.26165C14.0457 3.73956 13.6196 3.318 13.0958 3.318C12.572 3.318 12.1455 3.73956 12.1455 4.26165C12.1455 4.78181 12.572 5.20337 13.0958 5.20337C13.6196 5.20337 14.0457 4.78181 14.0457 4.26165Z" />
                      <path d="M15.3114 11.6281C15.2762 12.3939 15.1472 12.8101 15.0401 13.0864C14.8963 13.4529 14.7247 13.7149 14.4463 13.9897C14.1711 14.2646 13.9073 14.4346 13.5382 14.5759C13.2599 14.6838 12.8393 14.8123 12.0681 14.8488C11.2342 14.8852 10.9872 14.893 8.87275 14.893C6.76028 14.893 6.51125 14.8852 5.67744 14.8488C4.9062 14.8123 4.48754 14.6838 4.20919 14.5759C3.83822 14.4346 3.57633 14.2646 3.29956 13.9897C3.02083 13.7149 2.84923 13.4529 2.70733 13.0864C2.6002 12.8101 2.46927 12.3939 2.43602 11.6281C2.39539 10.8001 2.38794 10.5509 2.38794 8.45551C2.38794 6.35587 2.39539 6.10858 2.43602 5.2806C2.46927 4.51475 2.6002 4.09902 2.70733 3.82029C2.84923 3.45425 3.02083 3.19377 3.29956 2.91894C3.57633 2.64452 3.83822 2.47409 4.20919 2.33126C4.48754 2.22296 4.9062 2.09641 5.67744 2.05993C6.51125 2.02342 6.76028 2.01411 8.87275 2.01411C10.9872 2.01411 11.2342 2.02342 12.0681 2.05993C12.8393 2.09641 13.2599 2.22296 13.5382 2.33126C13.9073 2.47409 14.1711 2.64452 14.4463 2.91894C14.7247 3.19377 14.8963 3.45425 15.0401 3.82029C15.1472 4.09902 15.2762 4.51475 15.3114 5.2806C15.3501 6.10858 15.3595 6.35587 15.3595 8.45551C15.3595 10.5509 15.3501 10.8001 15.3114 11.6281ZM16.7355 5.21618C16.6968 4.37926 16.5639 3.80748 16.3665 3.30947C16.1656 2.7928 15.8962 2.35493 15.4553 1.91707C15.0163 1.48116 14.5753 1.2137 14.055 1.01186C13.5516 0.817759 12.9777 0.684216 12.1345 0.647738C11.2913 0.607358 11.022 0.599992 8.87275 0.599992C6.72548 0.599992 6.4542 0.607358 5.61101 0.647738C4.76975 0.684216 4.19629 0.817759 3.69046 1.01186C3.17212 1.2137 2.73117 1.48116 2.29219 1.91707C1.85124 2.35493 1.5819 2.7928 1.37901 3.30947C1.18355 3.80748 1.05065 4.37926 1.00998 5.21618C0.973249 6.05347 0.963867 6.32131 0.963867 8.45551C0.963867 10.5878 0.973249 10.8552 1.00998 11.6925C1.05065 12.5279 1.18355 13.0992 1.37901 13.5996C1.5819 14.1143 1.85124 14.5541 2.29219 14.9901C2.73117 15.426 3.17212 15.6954 3.69046 15.8968C4.19629 16.0909 4.76975 16.2229 5.61101 16.2613C6.4542 16.2998 6.72548 16.3091 8.87275 16.3091C11.022 16.3091 11.2913 16.2998 12.1345 16.2613C12.9777 16.2229 13.5516 16.0909 14.055 15.8968C14.5753 15.6954 15.0163 15.426 15.4553 14.9901C15.8962 14.5541 16.1656 14.1143 16.3665 13.5996C16.5639 13.0992 16.6968 12.5279 16.7355 11.6925C16.7742 10.8552 16.7836 10.5878 16.7836 8.45551C16.7836 6.32131 16.7742 6.05347 16.7355 5.21618Z" />
                      <path d="M8.87189 11.0714C7.41653 11.0714 6.2356 9.9006 6.2356 8.45543C6.2356 7.00792 7.41653 5.83565 8.87189 5.83565C10.3277 5.83565 11.5101 7.00792 11.5101 8.45543C11.5101 9.9006 10.3277 11.0714 8.87189 11.0714ZM8.87189 4.41958C6.62846 4.41958 4.81152 6.22769 4.81152 8.45543C4.81152 10.6812 6.62846 12.4874 8.87189 12.4874C11.1153 12.4874 12.9342 10.6812 12.9342 8.45543C12.9342 6.22769 11.1153 4.41958 8.87189 4.41958Z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/infinityassets1"
                  target="_blank"
                >
                  <div className="p-2 my-5 duration-500 rounded-md cursor-pointer hover:scale-105 bg-slate-400 dark:bg-transparent hover:bg-white hover:border hover:border-c1 dark:hover:border-c9">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="17"
                      aria-label="Twitter"
                      role="img"
                      fill="currentColor"
                      class="r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                    >
                      <g>
                        <path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"></path>
                      </g>
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/infinitydigitalassets/"
                  target="_blank"
                >
                  <div className="p-2 my-5 duration-500 rounded-md cursor-pointer hover:scale-105 bg-slate-400 dark:bg-transparent hover:bg-white hover:border hover:border-c1 dark:hover:border-c9">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.818359 2.42477C0.818359 1.89583 1.01001 1.45947 1.3933 1.11568C1.77659 0.771871 2.27488 0.599976 2.88814 0.599976C3.49046 0.599976 3.97778 0.769221 4.35013 1.10774C4.73342 1.45684 4.92507 1.9117 4.92507 2.47237C4.92507 2.98014 4.73891 3.40327 4.36656 3.74179C3.98327 4.09088 3.47951 4.26543 2.85529 4.26543H2.83886C2.23654 4.26543 1.74922 4.09088 1.37687 3.74179C1.00452 3.3927 0.818359 2.95369 0.818359 2.42477ZM1.03191 16.3091V5.7094H4.67867V16.3091H1.03191ZM6.69917 16.3091H10.3459V10.3904C10.3459 10.0201 10.3897 9.73451 10.4773 9.53353C10.6307 9.17385 10.8634 8.86972 11.1755 8.62113C11.4876 8.37253 11.8791 8.24824 12.35 8.24824C13.5765 8.24824 14.1898 9.04691 14.1898 10.6443V16.3091H17.8366V10.2317C17.8366 8.66609 17.4533 7.47865 16.6867 6.6694C15.9201 5.86014 14.9071 5.45551 13.6477 5.45551C12.235 5.45551 11.1344 6.04262 10.3459 7.21684V7.24857H10.3295L10.3459 7.21684V5.7094H6.69917C6.72107 6.0479 6.73202 7.10046 6.73202 8.86708C6.73202 10.6337 6.72107 13.1143 6.69917 16.3091Z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-5 ml-5 pb-14 ">
        <div className="grid items-center justify-center grid-flow-row md:grid-cols-2">
          <div className="justify-center mx-10 items-s text-start ">
            <div ref={addToRefs} className="flex justify-center gap-2 ">
              <p className="mainSubHeadingText">
                <span className="gradientText ">Fill the form</span> { " " }To Reach At
                The Right Place
              </p>
            </div>
            <div ref={addToRefs} className="">
              <p className="text-xl text-c1 dark:text-c7">
                Have something in mind to talk with us? We will be happy to hear
                that.
              </p>
            </div>
          </div>
          <div className="my-[8%] w-[90%] md:w-[80%] ml-4 md:ml-6 flex justify-center items-center heroRightSection">
            {modal && <Modal closeModal={() => setModal(false)} />}
            <form
              className="flex flex-col items-center justify-center w-full gap-3 md:mt-5"
              onSubmit={(e) => {
                e.preventDefault();

                setModal(true);
              }}
            >
              <div className="grid w-full grid-flow-row gap-3 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-black dark:placeholder-textColor h-14"
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-black dark:placeholder-textColor h-14"
                  autoComplete="off"
                ></input>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-black dark:placeholder-textColor h-14"
                autoComplete="off"
              ></input>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-black rounded-md dark:border-white text-c1 dark:text-c2 placeholder:text-black dark:placeholder-textColor h-14"
                autoComplete="off"
              ></input>
              <textarea
                type="text"
                placeholder="Message"
                className="w-full h-[210px] text-start p-5 font-medium placeholder-opacity-75 bg-transparent border border-black dark:border-white rounded-md text-c1 dark:text-c2 placeholder:text-black dark:placeholder-textColor"
                autoComplete="off"
              ></textarea>

              <button className="w-full my-4 text-white bg-black rounded-md outline-none h-14 dark:bg-white dark:text-black">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
