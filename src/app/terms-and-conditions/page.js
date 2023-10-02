"use client"

import React, {useEffect, useRef} from "react";
import styles from "./page.module.css";
import Link from "next/link";

//GSAP
import { gsap } from "gsap";

const TermsNconditions = () => {
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
    <section ref={heroSectionRef}
      className="mx-auto max-w-[1600px] py-20 bg-no-repeat bg-cover bgColourPages quarterGapTop"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg-min.webp')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="headingText ">INFIN Assets</div>
        <div className="subHeadingText subHeadingGapTop">
          Terms & Conditions
        </div>
        <div className="mt-0 md:mt-16 dark:md:bg-formColor md:bg-white rounded-3xl w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] flex flex-col justify-center items-center shadow-lg">
          <div className="w-[88%] my-12 [&>div>p]:text-left md:[&>div>p]:text-justify [&>div>h4]:text-center">
            <div className="">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                1- Scope
              </h4>
              <p className={`${styles.contentText} text-[#515151] dark:text-[#fff] text-sm md:text-base`}>
                These terms and conditions (&quot;Terms&quot;) apply to the access to, and
                use of the website (&quot;Website&quot;) and platform (&quot;Platform&quot;) and all
                related services (together the &quot;Services&quot;), available on
                {" "}<Link className="text-[#22DDD2]" href="http://www.infinitydigitalassets.io/">http://www.infinitydigitalassets.io/</Link> (&quot;Website&quot;), offered by Infinity Investment
                , DIFC Trade Centre - Dubai - United Arab Emirates (&quot;Company&quot;). By
                accessing or using the Services, you (&quot;Customer&quot;) agree to these
                Terms. If the Customer does not agree to these Terms, the
                Customer may not use or access theServices. Unless explicitly
                stated otherwise, any reference to services is for informational
                purposes only and doesnot constitute an offer to buy or sell any
                services. The Services are provided exclusively to persons who
                are at least 18 years of age and who meet therequirements to
                qualify as qualified investors in the sense of art. 10 para. 3
                of the Swiss CollectiveInvestment Scheme Act, as further laid
                out in Annex 1 (&quot;Qualified Investor&quot;). The Customer represents
                and warrants that he/she/it is not a person or entity restricted
                from using theServices under the laws of Switzerland, their
                place of residence, or any other potentially applicable
                jurisdiction.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                2- Services
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Services include the provision of the Website and the
                Platform and all of its content and, at the request of the
                Customer and the subsequent acceptance of the Company in its
                sole discretion, theprovision of certain investment
                opportunities as further laid out on the Platform or otherwise
                conveyed directly or indirectly by the Company. The Customer may
                not access the Platform unless they have registered and passed
                all onboarding and KYC requirements as determined in the sole
                discretion of the Company.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                In addition to these Terms, the provision of some of the
                Services may be subject to further agreementsas concluded
                between the Customer and the Company. In case of a conflict, the
                provisions of such other agreements shall supersede.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                3- Registration, Onboarding & Know-Your-Customer duties
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
               ‍The Customer must undergo an onboarding process and register
                an account to access and use thePlatform and/or other parts of
                the Services.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                As part of the onboarding process, the Customer must undergo and
                pass a number of Know-Your-Customer and Anti-Money Laundering
                checks as determined in the sole discretion of the Company.
                Inparticular, the Company is free to (i) ask the Customer to
                provide identification or other information, (ii) undertake
                checks designed to help verify the Customer&apos;s identity or
                background as well as the sourceof funds and (iii) screen the
                Customer against third-party databases or other sources and
                request reports from service providers. The Company is free to
                determine in its sole discretion whether or not a Customer meets
                the required onboarding criteria.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer must provide accurate, current, and complete
                information during registration and keep their account
                information up-to-date. The Company may at any time request
                additional information from the Customer and, if not provided to
                the full satisfaction of the Company as determined in its sole
                discretion, suspend the Services with immediate effect. Accounts
                registered by bots or automated methods are not authorized and
                will be terminated.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer is responsible for maintaining the confidentiality
                and security of their account credentials and may not disclose
                their credentials to any third party. The Customer is
                responsible and liable for activities conducted through their
                account and must immediately notify the Company if there is any
                suspicion that their credentials have been lost or stolen, or
                that their account is otherwise compromised.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                4- Fees
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                Some parts of the Services may, now or in the future, be subject
                to a fee asdetermined by the Company. If applicable, the
                provision of the respective Services is subject to the full
                payment of the indicated fees. The Company may, with prior
                electronic notification to Customers, change its fees from time
                to timeand in its sole discretion.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                In case the Customer does not pay the applicable fee, the
                Company reserves the right to limit orsuspend access to the
                Services. In case of a suspension, the Customer remains liable
                for all chargesand fees incurred before or during the suspension
                period.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                Any right of the Customer to set off, retain, deduct,
                counterclaim and/or withhold any payments due tothe Company
                under these Terms is hereby expressly waived and excluded.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                5- Rights & Obligations of the Company
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
               The Company: <br />- makes the Services available to the
                Customer and uses reasonable care and skill in theperformance of
                the Services; and <br />- is permitted and possibly required by
                law to suspend access to the Services or the Customer&apos;s
                account based upon reasonable determination of the occurrence or
                potential for occurrence ofillegal or wrongful activity,
                fraudulent use or attempted fraudulent activity or violation of
                anyprovision of these Terms. In case of a suspension, the
                Customer remains liable for all chargesand fees incurred before
                or during the suspension period.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Company may amend these Terms from time to time at its sole
                discretion by publishing an updated version of these Terms on
                the Website. Where possible and reasonable, the Company will
                electronically notify the Customer of any material changes to
                these Terms. The Customer should check these Terms regularly and
                only use the Services upon acceptance of the changes to these
                Terms. The Customer&apos;scontinued use of the Services
                following any amendments indicates acceptance of the changes to
                these Terms.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Company constantly develops and improves its Services and
                may modify or either temporarily or permanently stop providing
                the offered Services or any part of it at its sole discretion.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                6- Rights & Obligations of the Customer
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer agrees to use the Services in compliance with these
                Terms and all legal and moralobligations applicable in the
                territory where they are located.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer is obliged to cooperate in the performance of these
                Terms to the extent necessary free of charge. The Customer is
                obliged to provide the Company with all necessary information,
                documents, materials, access, software and data, as well as
                competent staff, and anything else reasonably required for the
                provision of Services. Furthermore, the Customer is obliged to
                inform the Company immediately if errors or faults occur and to
                support the Company in the analysis and, if necessary, in the
                rectificationof errors and faults to the extent required.{" "}
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                If the provision of Services under these Terms is delayed due to
                the Customer&apos;s failure to comply withhis duty to cooperate
                or due to other circumstances for which the Customer is
                responsible, the Customer shall bear the disadvantages and
                additional costs incurred.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer must immediately inform the Company of all
                circumstances known to them that might endanger or may be
                relevant to the providing the Services and all misuses or
                suspicions of misuse ofthe Services.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer may not: - circumvent or attempt to circumvent any
                security protection of the Services; - use the Services in
                unlawful or fraudulent ways or for any unlawful or fraudulent
                purpose oreffect; - access the Services via any automated system
                or take any action that may impose anunreasonable load on the
                Company&apos;s infrastructure; - bypass the measures that the
                Company may use to prevent or restrict access to or use of
                theServices.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer agrees it will not, unless with the Company&apos;s
                prior written permission: - try to decompile or reverse engineer
                the Services or any part of it, or derive the source code; -
                copy, modify, distribute, reproduce, translate, disassemble or
                use in any other way any information, text, graphics, images or
                software obtained from the Services, or any other part ofthe
                Services; - create derivative works based on the whole or any
                part of the Services or any content available on the Services.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer may not sell, sublicense, allow access or make the
                Services or any part of it otherwiseavailable to third-parties.
                The Customer agrees not to use or exploit the Services, any part
                of it or any content contained there inany data mining or any
                other similar activity.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                7- Intellectual Property
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
               Each of the Customer and the Company retains all rights,
                titles, and interests to its own intellectual property,
                including all copyrights, inventions, trademarks, designs,
                domain names, know-how, tradesecrets, data and other intangible
                property rights (&quot;Intellectual Property Rights&quot;). All
                Intellectual Property Rights in the Services or any part of it
                remain vested in the Company.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                8- Confidentiality & Privacy
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Company treats the confidential information of the Customer
                with adequate confidentiality standards and processes the
                Customer&apos;s personal information only as needed.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Company collects and processes personal data as described in
                its Privacy Policy available atWebsite. The Company protects the
                collected personal data by means of appropriate technical
                andorganizational measures and in accordance with the data
                protection legislation applicable in Switzerland.{" "}
              </p>
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer authorizes the Company to use, process, and store
                relevant data for the performance ofthese Terms and to use
                anonymized data to improve its Services or for analysis
                purposes.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                9- Liability & Indemnity
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
               To the maximum extent permitted under applicable law, the
                liability of the Company under or related to these Terms and the
                Services shall be limited to wilful misconduct, gross negligence
                and personal injury. Any further liability of the Company under
                any title (including but not limited to direct, indirect,
                special, incidental, consequential or other damages of any kind
                including, but not limited to, loss of capital, income or
                profits, loss of data or loss of goodwill) is explicitly
                excluded.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Company will not be held liable for inaccuracy or
                incompleteness of the Services, or the incompatibility of the
                Services with any specific objectives of the Customer. Neither
                party shall be liablefor any failure to perform its obligations
                under these Terms (other than payment obligations) caused
                bycircumstances beyond the parties&apos; reasonable control (force
                majeure).
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer agrees to indemnify, and hold the Company harmless
                from and against any loss, damage, liability, claim, or demand,
                including reasonable attorneys&apos; fees and expenses, made by
                anythird party due to or arising out of: (i) breach of these
                Terms or any legal regulation by the Customer, their employees
                or other persons acting on behalf of the Customer; (ii) any
                breach of the Customer&apos;s representations and warranties set
                forth in these Terms and/or any other agreements concluded with
                the Company in relation to the Services; (iii) the
                Customer&apos;s violation of the rights of a third party.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                10- Warranties & Representations
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
               The Customer acknowledges that the Services are provided
                &quot;as is&quot; and &quot;as available&quot;, and the Company
                makes no warranties or representations of any kind related to
                the Services or the information and materials contained thereon.
                The Company makes the Services available to the Customer and
                uses reasonable care and skill in the performance of the
                Services.
              </p>
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Company does not guarantee that the Services are error-free
                and will function without any interruption or disruption. The
                Company may at its own discretion carry out maintenance or
                improvements to the Services and its infrastructure, and the
                Customer acknowledges that this may result in temporary delays
                and interruptions from time to time. Where reasonably possible,
                the Company will inform the Customer about potential
                interruptions in advance. Any further warranty is excluded.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                The Customer furthermore represents and warrants that he/she/it:
                - satisfies all legal and regulatory requirements to enter into
                these Terms; <br />- has provided accurate, complete and
                up-to-date information; <br />- fulfils the requirements of a
                Qualified Investor; <br />- is the sole beneficial owner of any
                funds credited or to be credited to the Company; <br />- itself,
                nor any affiliates nor any person acting on its behalf (1) has
                offered or sold, or will offer or sell, indirectly or directly,
                any tokens or other instruments in connection with the Services
                toany US citizen (whether or not he/she/it lives in the United
                States of America), to any US person pursuant the Section
                902(k)(1) of the Securities Act of 1933 (i.e., any natural
                person resident in the United States of America, any partnership
                or corporation organized or incorporated under the laws of the
                United States of America, any estate of which any executor or
                administrator is a US person, any trust of which any trustee is
                a US person, any agency or branch of a foreign entity located in
                the United States of America, any non-discretionary account or
                similar account (other than an estate or trust) held by a dealer
                or other fiduciary for the benefit or account of a US person,
                any discretionary account or similar account (other than an
                estate or trust) held bya dealer or other fiduciary organized,
                incorporated, or (if an individual) resident in the United
                States of America, any partnership or corporation if organized
                or incorporated under the laws of any foreign jurisdiction and
                formed by a US person principally for the purpose of investing
                in securities not registered under the Act, unless it is
                organized or incorporated, and owned, by accredited investors
                (as defined in Rule 501(a) of the Securities Act) who are not
                natural persons, estates or trusts nor to any persons acting on
                a non-discretionary basis for US personor US citizen, in each
                case in a manner that would require any such tokens or other
                instruments in connection with the Services to be registered
                under the Securities Act, (2) has engaged orwill engage in any
                directed selling efforts (as that term is defined in Regulation
                S) with respect to any tokens or other instruments in connection
                with the Services, or (3) has engaged or will engage in any form
                of general solicitation or general advertising (as that term is
                used in Rule 502(c) under the Securities Act) in connection with
                any offer or sale of any tokens or other instruments in
                connection with the Services or in any manner involving a public
                offering in the United States of America; <br />- is not subject
                and is not a resident of the United States of America or a
                jurisdiction that is subject to economic sanctions or trade
                embargoes imposed by (1) Switzerland, (2) the United Nations
                Security Council, (3) the European Union or any member state of
                the European Union, (4) U.S. authorities, in particular OFAC and
                the U.S. Department of State, or (5) the country of residence of
                the Customer; or other economic sanctions or trade embargos
                issued by any other authority having jurisdiction over the
                Customer or his/her/its assets;
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                11- Disclaimer & Risks
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>
                 ‍Any information contained on the website or the platform is
                  Intended merely to provide an overview of the services and is
                  For qualified investors only. The contents are not to be
                  Construed as business, investment, legal, tax, or any other
                  sort Of advice. The website and the platform does not purport
                  to Contain all information the customer may potentially
                  require to Enter into terms and conditions page 7 of 10 any
                  transactions in Connection with the services. Customers should
                  alwaysconduct Their own research and consult their own
                  professional advisors.
                </strong>
              </p>
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                All information provided as part of the Services is intended to
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
                developments.{" "}
              </p>
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>
                  Investments in digital assets and associated projects involve
                  a High degree of risk, including the potential risk of
                  expiring Worthless. Customers acknowledge that there is no
                  representation Or warranty (express or implied) of any
                  particular feature of Any projects, products, instruments or
                  other assets. To the Maximum extent permitted under applicable
                  law, the company is Not liable for any direct, indirect,
                  special, incidental, Consequential, or other damages of any
                  kind (including, but not Limited to, loss of capital, income,
                  or profits) arising out of Or in any way related to any
                  information presented as part of The services.
                </strong>
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                Furthermore, the Customer acknowledges in particular that there
                are a number of additional risks to blockchain technology and
                associated projects, including, but not limited to, (i) loss of
                access to private keys or credentials, (ii) security risks,
                (iii) risks in connection with new technologies, (iv) market
                risks, (v) legal and regulatory risks, and (vi) risks of
                governmental and other authority actions.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                12- Miscellaneous
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
               <strong>Entire Agreement:</strong> These Terms and any
                potential additional agreements as referenced in section 2
                constitute the entire agreement between the Company and the
                Customer relating to the subject matter of these Terms.
              </p>{" "}
              <br></br>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>Links:</strong> The Services may contain third-party
                content or links to third-party websites. The Company does not
                assume any responsibility for and does not make any warranties
                or representations as to any third party content or websites,
                including but not limited to their accuracy, subject matter,
                quality, or timeliness.
              </p>{" "}
              <br></br>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>No partnership:</strong> The obligations of the parties
                hereunder are contractual in nature and the parties agree that
                they do not form, and these Terms shall not be deemed to
                constitute, a simple partnership (einfache Gesellschaft; société
                simple) pursuant to art. 530 et seq. of the Swiss Code of
                Obligations.
              </p>{" "}
              <br></br>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>Amendments:</strong> All amendments and supplements to
                these Terms must be made in writing (incl. e-signature
                solutions).
              </p>{" "}
              <br></br>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>Notices:</strong> Notices hereunder shall be given in
                writing to the last communicated or available address. &apos;In
                writing&apos; shall, unless indicated otherwise, include e-mail.
              </p>{" "}
              <br></br>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>No assignment:</strong> The Customer may not assign any
                of its rights, obligations, or claims under these Terms without
                the previous consent of the Company.
              </p>{" "}
              <br></br>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>Severability:</strong>
                If any provision of these Terms (in whole or part) is held to be
                illegal, invalid or otherwise unenforceable, the other
                provisions will remain mutatis mutandis in full force and
                effect.{" "}
              </p>
              <br></br>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>Governing Law & Jurisdiction:</strong> These Terms are
                governed by substantive Swiss law (excl. CISG) and subject to
                the exclusive jurisdiction of the ordinary courts at the seat of
                the Company.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                Annex 1: Qualified Investor declaration (art. 10 para. 3 CISA)
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
               The Customer represents and warrants that:<br></br> a) It
                qualifies as a qualified investor within the meaning of art. 10
                para. 3 of the Swiss Federal Collective Investment Schemes Act
                (CISA) and art. 4 para. 3 of the Swiss Federal Act on Financial
                Services (FINSA), namely either <br></br>(i) a financial
                intermediary as defined in the Swiss Banking Act (BA), the Swiss
                Financial Institutions Act (FinIA) and the CISA; <br></br>(ii)
                an insurance company as defined in the Insurance Supervision Act
                (ISA); <br></br>(iii) a foreign client subject to prudential
                supervision as the person listed under (i) or (ii) above;{" "}
                <br></br>(iv) a central bank; <br></br>(v) a public entity with
                professional treasury operations; <br></br>(vi) a company with
                professional treasury operations; <br></br>(vii) a large company
                (exceeding two of the following parameters: balance sheet total
                of CHF 20 million; turnover of CHF 40 million; equity of CHF 2
                million); or <br></br>(viii) a private investment structure with
                professional treasury operations created for high-networth
                individuals. or <br></br>b) He/she qualifies as a qualified
                investor within the meaning of art. 10 para. 3 CISA and art. 5
                para. 1 and 2 FINSA, by being either <br></br>(i) a
                high-net-worth individual; or
                <br></br>(ii) a private investment structure created for a
                high-net-worth individual.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>Professional treasury operations:</strong> A company, or
                a private investment structure created for high-net-worth
                individuals is deemed to have professional treasury operations
                if, within or outside the company or the private investment
                structure, it entrusts, on a permanent basis, the management of
                its funds to a professionally qualified person with experience
                in the financial sector (art. 3 para. 8 of the Swiss Financial
                Services Ordinance).
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                <strong>High-net worth:</strong> A high net worth individual is
                a person who <br />
                (i) on the basis of training, education and professional
                experience or on the basis of comparable experience in the
                financial sector, possesses the necessary knowledge to
                understand the risks associated with the investments and has at
                his/her disposal assetsof at least CHF 500,000; or <br />
                (ii) has at his/her disposal assets of at least CHF 2 million.
              </p>{" "}
              <br />
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                Eligible assets are financial investments held directly or
                indirectly by the individual, specifically (a) sight or time
                deposits with banks and securities firms; (b) certificated and
                uncertificated securities, including collective investment
                schemes and structured products; (c) derivatives; (d) precious
                metals; (e) life insurance policies with a surrender value; (f)
                restitution claims from other assets held in trust specifiedin
                this paragraph. Direct investments in real estate and claims
                from social insurance schemes as well as occupational pension
                assets do not qualify as eligible financial investments (art. 5
                para. 1 an 2 of the Financial Services Ordinance).
              </p>
            </div>
          </div>
        </div>

        <div className="contentGapTop"></div>
      </div>
    </section>
  );
};

export default TermsNconditions;
