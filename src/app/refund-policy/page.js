"use client";

import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";

//GSAP
import { gsap } from "gsap";

const RefundPolicy = () => {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    //GSAP
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="py-20 bg-no-repeat bg-cover bgColourPages quarterGapTop max-w-[1600px] mx-auto"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg-min.webp')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="headingText ">INFIN Assets</div>
        <div className="mainSubHeadingText subHeadingGapTop">Refund Policy</div>
        <div className="mt-0 md:mt-14 dark:md:bg-formColor md:bg-white rounded-3xl w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] flex flex-col justify-center items-center shadow-lg">
          <div className="w-[88%] my-10 lg:p-8 [&>div>p]:text-left md:[&>div>p]:text-justify [&>div>h4]:text-center">
          <div className="">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                Refund Policy for Property Crowdfunding Investment:
              </h4>
              <p
                className={`${styles.contentText} text-[#515151] dark:text-[#fff] text-sm md:text-base`}
              >
                <br />
                <br />
                1. All investments made will receive a full refund if the soft
                cap is not reached by the specified deadline of 31st August
                2023.
                <br />
                <br />
                2. A guarantee of 100% refund of the original amount invested
                will be provided in such a scenario.
                <br />
                <br />
                3. In the event of a material adverse change, such as legal
                disputes or significant property damage that negatively impacts
                the investment&apos;s returns, investors may request a refund
                within 15 working days.
                <br />
                <br />
                4. Refund requests must be made through official communication
                channels such as email at{" "}
                <Link
                  className="text-[#22DDD2]"
                  href="mailto:info@infinitydigitalassets.io"
                >
                  info@infinitydigitalassets.io
                </Link>
                <br />
                <br />
                5. The processing time for refund requests may take up to 5
                working days.
                <br />
                <br />
                6. No refund requests will be processed after the refund request
                period has elapsed.
                <br />
                <br />
                We believe that the above policy provides our investors with
                clarity, transparency, and peace of mind. However, we
                acknowledge that the policy may need to be reviewed and enhanced
                as required to ensure our investors&apos; interests are
                protected at all times. We promise to communicate any changes to
                the policy in a timely and transparent manner to keep our
                investors informed every step of the way.
              </p>
            </div>
          </div>
        </div>

        <div className="contentGapTop"></div>
      </div>
    </section>
  );
};

export default RefundPolicy;
