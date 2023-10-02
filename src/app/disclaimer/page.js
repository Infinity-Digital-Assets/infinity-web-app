"use client"

import React, {useEffect, useRef} from "react";
import styles from "./page.module.css";

//GSAP
import { gsap } from "gsap";

const Disclaimer = () => {

  const heroSectionRef = useRef(null);

  useEffect(() => {
        //GSAP
        gsap.from(heroSectionRef.current, {
          duration: 3,
          autoAlpha: 0,
          ease: "none",
        });
  },[])
  
  return (
    <section ref={heroSectionRef} className="mx-auto max-w-[1600px] py-20 bg-no-repeat bg-cover bgColourPages quarterGapTop" style={{
      backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg-min.webp')`, 
      backgroundAttachment:"fixed",
    }}>
      <div className="flex flex-col items-center justify-center">
        <div className="headingText ">INFIN Assets</div>
        <div className="mainSubHeadingText subHeadingGapTop">Disclaimer</div>
        <div className="mt-0 md:mt-14 dark:md:bg-formColor md:bg-white rounded-3xl w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] flex flex-col justify-center items-center shadow-lg">
          <div className="w-[88%] my-10 lg:p-8 [&>div>p]:text-left md:[&>div>p]:text-justify [&>div>h4]:text-center">
            <div
              className={`${styles.contentText} text-[#515151] dark:text-[#fff] text-left md:text-justify capitalize`}
            >
              <p className="mb-3">
                any information contained on the website or the platform is
                intended merely to provide an overview of the services and is
                for qualified investors in the sense of art. 10 para. 3 of the
                swiss collective investment schemes act only. the contents are
                not to be construed as business, investment, legal, tax, or any
                other sort of advice. the website and the platform does not
                purport to contain all information the customer may potentially
                require to enter into any transactions in connection with the
                services. customers should always conduct their own research and
                consult their own professional advisors.
              </p>
              <p className="mb-3">
                All information provided as part of the services is intended to
                serve as a general overview for qualified investors without
                regard to any individual investment objectives, financial
                situation, or means and without regard to the appropriateness or
                suitability for any specific customer. Customers acknowledge
                that neither such information nor the fact that the information
                has been made available to them constitutes any solicitation,
                recommendation, or offer to invest in any projects, any
                products, or any securities, financial products and instruments
                or any other assets. Some information may refer to past or
                simulated past performance as well as forecasts. Both past
                performance and forward-looking statements are not reliable
                indicators of future developments. Any information is subject to
                change and may not be updated or adapted to future events or
                developments.
              </p>
              <p className="mb-3">
                investments in digital assets and associated projects involve a
                high degree of risk, including the potential risk of expiring
                worthless. customers acknowledge that there is no representation
                or warranty (express or implied) of any particular feature of
                any projects, products, instruments or other assets. to the
                maximum extent permitted under applicable law, the company is
                not liable for any direct, indirect, special, incidental,
                consequential, or other damages of any kind (including, but not
                limited to, loss of capital, income, or profits) arising out of
                or in any way related to any information presented as part of
                the services.
              </p>
              <p className="mb-3">
                Customers acknowledge that there area number of risks to
                blockchain technology and associated projects, including, but
                not limited to, (i) loss of access to private keys or
                credentials, (ii) security risks, (iii) risks in connection with
                new technologies, (iv) market risks, (v) legal and regulatory
                risks, and (vi) risks of governmental and other authority
                actions.
              </p>
              <p className="mb-3">
                By accessing or using the website, the platform or any other
                connected services, customers represent and warrant that they
                are not a resident or subject to the laws of the United States
                of America or any jurisdiction deemed as high risk by the
                company or which is subject to economic sanction or trade
                embargoes imposed by (1) Switzerland, (2) the United Nations
                Security Council, (3) the European Union or any member state of
                the European Union, (4) U.S. authorities, in particular OFAC and
                the U.S. Department of State, or (5) the country of residence of
                the customer; or other economic sanctions or trade embargos
                issued by any other authority having jurisdiction over the
                customer or his/her/its assets. Any potential token sale will
                not be registered under the US Securities Act of 1933, as
                amended or under any securities laws of any state or other
                jurisdiction of the United States and may not be offered, sold,
                taken up, exercised, resold, renounced, transferred or
                delivered, directly or indirectly, within the United States.
              </p>
              <p className="mb-3">
                Any potential token sale has not been approved or disapproved by
                the US Securities and Exchange Commission, any state&apos;s
                securities commission in the United States or any US regulatory
                authority, nor have any of the foregoing authorities passed upon
                or endorsed the merits of the offering of any tokens or the
                accuracy or adequacy of this announcement. Any representation to
                the contrary is a criminal offence in the United States.
              </p>
            </div>
          </div>
        </div>

        <div className="contentGapTop"></div>
      </div>
    </section>
  );
};

export default Disclaimer;
