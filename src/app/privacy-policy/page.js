"use client"

import React, {useEffect, useRef} from "react";
import styles from "./page.module.css";
import Link from "next/link";

//GSAP
import { gsap } from "gsap";

const PrivacyPolicy = () => {

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
        <div className="headingText">INFIN Assets</div>
        <div className="mainSubHeadingText subHeadingGapTop">
          Privacy Policy
        </div>
        <div className="mt-0 md:mt-14 dark:md:bg-formColor md:bg-white rounded-3xl w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] flex flex-col justify-center items-center shadow-lg">
          <div className="w-[88%] my-10 lg:p-8 [&>div>p]:text-left md:[&>div>p]:text-justify [&>div>h4]:text-center">
            <div className="">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                About us
              </h4>
              <p
                className={`${styles.contentText} text-[#515151] dark:text-[#fff] text-sm md:text-base`}
              >
                This privacy policy (&quot;Privacy Policy&quot;) explains how we
                process and protect your personal data whenyou use this Website
                or our services provided via{" "}
                <Link
                  className="text-[#22DDD2]"
                  href="http://www.infinitydigitalassets.io/"
                >
                  http://www.infinitydigitalassets.io/
                </Link>{" "}
                (together, the &quot;Website&quot;). The Website is operated by
                INFIN Assets Investment , DIFC Trade Centre - Dubai - United
                Arab Emirates (the&quot;COMPANY&quot;, &quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;). The Company is the
                controller for the data processing described below. Unless
                otherwise defined in this Privacy Policy or our General Terms &
                Conditions, the definitions usedin this Privacy Policy have the
                same meaning as in the Swiss Federal Act on Data Protection.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                1 Personal data we collect
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                We may collect or receive personal information for a number of
                purposes connected with our businessoperations when you use our
                website or our services. This may include the following:
                <div className="text-left">
                  <br />● Contact details.
                  <br />● Login details.
                  <br />● Investment details.
                  <br />● Device details.
                  <br />● Due Diligence (“DD”) and Know Your Customer (“KYC”)
                  details.
                </div>
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                2 How we collect personal data
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍We collect information about our users when they use our
                Website or our services, including takingcertain actions within
                it.
              </p>
              <h6 className={`${styles.heading6Text} text-md md:text-xl mt-5`}>
                Directly
              </h6>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ● When users access, use, or otherwise interact with our
                Website.
                <br />● When users correspond with us by electronic means.
                <br />● When users submit their data to us.
                <br />● When user registers as a user of our Services with the
                intention of becoming an Investor or Sponsor.
              </p>
              <h6 className={`${styles.heading6Text} text-md md:text-xl mt-5`}>
                Indirectly
              </h6>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍● From public sources, such as public directories.
                <br />● From third parties, such as social media plugins and
                third-party cookies.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                3 Legal basis and purposes
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                Our legal basis for collecting and using the personal data
                described in this Privacy Policy depends onthe personal data we
                collect and the specific purposes for which we collect it.
              </p>
              <h6 className={`${styles.heading6Text} text-md md:text-xl mt-3`}>
                Contract:
              </h6>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                To perform our contractual obligations or take steps linked to a
                contract with you. In particular:
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ● To provide our services.
                <br />● To recruit you.
              </p>
              <h6 className={`${styles.heading6Text} text-md md:text-xl mt-3`}>
                Consent:
              </h6>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                We may rely on your freely given consent at the time you
                provided your personal data.
              </p>
              <h6 className={`${styles.heading6Text} text-lg md:text-2xl mt-3`}>
                Legitimate interests:
              </h6>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                We may rely on legitimate interests based on our assessment that
                the processingis fair and reasonable and does not override your
                interests or fundamental rights and freedoms. Inparticular:
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ● To maintain and improve our Website and services.
                <br />● To develop new services.
              </p>
              <h6 className={`${styles.heading6Text} text-md md:text-xl mt-3`}>
                Necessity for compliance with legal obligations:
              </h6>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                To meet regulatory and public interest obligations.In
                particular:
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ● To comply with applicable regulations and legislation, namely
                regarding DD and KYCprocesses.
                <br />● For the legal enforcement of claims and rights.
                <br />● For security and fraud prevention.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                4 Data retention
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍We retain personal data for so long as it is needed for the
                purposes for which it was collected or in linewith legal and
                regulatory requirements or contractual arrangements. In
                particular:
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍● Active accounts – In order to provide, improve, and
                administer our Services, we may retain allpersonal information
                collected about you so long as you are a User with an active
                account.
                <br />● Ownership records – In order to create reliable property
                and investment records, we willsecurely store information about
                properties and investments, including DD information
                andsuccessive title ownership, indefinitely. This may include
                certain details considered as yourpersonal information.
                <br />● Record retention policies and regulations – We comply
                with tax, accounting and other legalrecord retention
                requirements. For risk management reasons, we may adopt policies
                to retainrecords for a longer time period than the legal
                minimum.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                5 Service providers
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍‍The Company may engage third party companies (&quot;Service
                Providers&quot;) to facilitate the operation ofour Website,
                assist in analyzing the usage of the Website, or perform Website
                and service-relatedservices, such as payment and the provision
                of IT infrastructure services. These third parties haveaccess to
                the user’s personal data only to the extent necessary to perform
                these tasks on behalf of the Company.
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍‍Type(s) of service providers who might access your personal
                data:
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍● Accounting firms
                <br />● Consultants
                <br />● Lawyers
                <br />● Appraisers
                <br />● Public authorities
                <br />● Affiliates. We may share your information with our
                affiliates, such as our shareholders,subsidiaries, joint venture
                partners, and companies that we control or that are under
                commoncontrol with us.
                <br />● Other group entities
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                6 Data transfers
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍The Company and/or the Service Providers may transfer your
                personal data to and process it in thefollowing countries:
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍● Switzerland
                <br />● EU/EEA
                <br />● USA
              </p>
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍We may use service providers who are partly located in
                so-called third countries (outside Switzerland)or process
                personal data there, i.e. countries whose level of data
                protection does not correspond to thatof Switzerland.
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍We safeguard your personal data per our contractual obligations
                and applicable data protectionlegislation when transferring data
                abroad.Such safeguards may include:
              </p>
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍● the transfer to countries that have been deemed to provide an
                adequate level of protectionaccording to lists of countries
                published by the Federal Data Protection and Information
                Commissioner;
                <br />● applying standard data protection model clauses, binding
                corporate rules or other standardcontractual obligations that
                provide appropriate data protection.
              </p>
              <br />
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍If a third country transfer takes place and there is no
                adequacy decision or appropriate safeguards, it ispossible and
                there is a risk that authorities in the third country (e.g.
                intelligence services) can gainaccess to the transferred data
                and that the enforceability of your data subject&apos;s rights
                cannot beguaranteed.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                7 Cookie usage
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍‍Our website uses cookies and similar technologies
                (collectively “tools”) provided either by us or by thirdparties.
                A cookie is a small text file that is stored on your device by
                the browser. Comparable technologies are in particular web
                storage (local / session storage), fingerprints, tags or pixels.
                Mostbrowsers are set by default to accept cookies and similar
                technologies. However, you can usually adjustyour browser
                settings so that cookies or similar technologies are rejected.
                If you refuse cookies orsimilar technologies, you may not be
                able to use all of our services without problems.
                <br />
                <br />
                In order to improve our website, we use tools to collect
                statistics and analyse general usage behaviour based on access
                data. We also use analytics services to evaluate the use of our
                various marketingchannels.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                7.1 Google Analytics 4
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍‍Our website uses the web analytics service Google Analytics 4,
                which is provided by Google IrelandLimited, Gordon House, Barrow
                Street, Dublin 4, Ireland (“Google”). If you have not consented
                to theuse of the analytics tools, your data will not be
                collected as part of Google Analytics 4.
                <br />
                <br />
                Google Analytics 4 uses JavaScript and pixels to read
                information on your terminal device and cookiesto store
                information on your terminal device. This is used to analyse
                your usage behaviour and toimprove our website. The access data
                is compiled by Google on our behalf into pseudonymous
                usageprofiles and transferred to a Google server in the USA. We
                will process the information obtained in orderto evaluate your
                use of the website and to compile reports on website activities.
                <br />
                <br />
                The data collected as part of the usage analysis of Google
                Analytics 4 is enriched with data from theGoogle Search Console
                and linked to data from Google Ads, in particular to measure the
                success ofour advertising campaigns (so-called conversions).
                <br />
                <br />
                The following data may be processed by Google Analytics 4: IP
                address; user ID and device ID; referrerURL (previously visited
                page); pages viewed (date, time, URL, title, length of stay);
                downloaded files;clicked links to other websites; achievement of
                certain goals (conversions); technical information(operating
                system; browser type, version and language; device type, brand,
                model and resolution);approximate location (country, region and
                city, if applicable, based on anonymised IP address).
                <br />
                <br />
                Cookies used:
              </p>
              <div className="mt-5 overflow-auto">
                <table className="[&>tr>th]:min-w-[200px] [&>tr>td]:min-w-[200px]">
                  <tr>
                    <th>Cookie Name</th>
                    <th>Expiration Time</th>
                    <th>Purpose</th>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>1 year, 1 month and 4 days</td>
                    <td>
                      Used to store and count pageviews, and track unique
                      visitors
                    </td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>1 day</td>
                    <td>
                      Stores information about how visitors use the website and
                      creates an analytics report of the website’s performance
                    </td>
                  </tr>
                  <tr>
                    <td>gat_UA-*</td>
                    <td>1 minute</td>
                    <td>
                      Used for behavioral tracking and managing the rate of
                      requests to the server
                    </td>
                  </tr>
                  <tr>
                    <td>_dc_gtm_UA-*</td>
                    <td>1 minute</td>
                    <td>
                      Keeps track of how many times a user visits the website,
                      how the user came to the website, and the country where
                      the user is located
                    </td>
                  </tr>
                  <tr>
                    <td>_gcl_au</td>
                    <td>3 months</td>
                    <td>
                      Used to store and track conversions that occur via Google
                      Ads
                    </td>
                  </tr>
                  <tr>
                    <td>gac*</td>
                    <td>90 days</td>
                    <td>
                      Stores campaign information for the user, such as the
                      source and medium of the user’s visit
                    </td>
                  </tr>
                  <tr>
                    <td>ga*</td>
                    <td>2 years</td>
                    <td>
                      Used to distinguish users and to throttle request rate
                    </td>
                  </tr>
                  <tr>
                    <td>_gcl_aw</td>
                    <td>90 days</td>
                    <td>Used to track conversions from Google Ads</td>
                  </tr>
                  <tr>
                    <td>_gcl_dc</td>
                    <td>90 days</td>
                    <td>Used to track conversions from Google Ads</td>
                  </tr>
                  <tr>
                    <td>_hjIncludedInSample</td>
                    <td>Session</td>
                    <td>
                      Determines if the user’s navigation should be registered
                      in a certain statistical placeholder
                    </td>
                  </tr>
                  <tr>
                    <td>_hjAbsoluteSessionInProgress</td>
                    <td>30 minutes</td>
                    <td>
                      Used to detect if the user is actively engaged with the
                      website
                    </td>
                  </tr>
                  <tr>
                    <td>_hjid</td>
                    <td>1 year</td>
                    <td>
                      Sets a unique ID for the session. This allows the website
                      to obtain data on visitor behaviour for statistical
                      purposes
                    </td>
                  </tr>
                  <tr>
                    <td>_hjFirstSeen</td>
                    <td>Session</td>
                    <td>
                      This cookie is used to determine if the visitor has
                      visited the website before, or if it is a new visitor
                    </td>
                  </tr>
                  <tr>
                    <td>_hjTLDTest</td>
                    <td>Session</td>
                    <td>
                      Used to determine the most generic cookie path to use, in
                      order to avoid conflicts when multiple subdomains are in
                      use
                    </td>
                  </tr>
                  <tr>
                    <td>_hjIncludedInPageviewSample</td>
                    <td>2 minutes</td>
                    <td>
                      Determines if the user’s navigation should be registered
                      in a certain statistical placeholder
                    </td>
                  </tr>
                </table>
              </div>
              <p className={`${styles.contentText} text-sm md:text-base mt-4`}>
                ‍‍All of these cookies are used by Google Analytics to collect
                analytical data and information about userbehavior on the
                website. They are stored in the user&apos;s browser for the
                duration of time specified above.The cookies may be deleted
                earlier if the user clears their browser cache or manually
                removes them intheir browser settings.
                <br />
                <br />
                To know more about Google&apos;s cookie usage, consult its
                privacy policy here.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                7.2 Meta Pixel
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍Our website uses Meta Pixel, a service provided by Meta
                Platforms Ireland Limited, 4 Grand CanalSquare, Grand Canal
                Harbour, Dublin 2, Ireland. Meta Pixel is a tool that allows us
                to measure theeffectiveness of our advertising by understanding
                the actions people take on our website. It helps usimplement
                JavaScript code on our website to track and dynamically provide
                content to site visitors, bysetting tracking cookies in order to
                help us understand how our website is used, as well as
                advertisingcookies in order for us to reach customers in the
                future through Facebook ads. Site visitors are matchedto their
                respective Facebook accounts and identified through cookies set
                on their devices. The MetaPixel tracks URLs and domains visited,
                as well as the devices used by site visitors.
                <br />
                <br />
                Tool used:
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍● _fbp (3 months): used to display advertisements when either
                on Facebook or on a digitalplatform powered by Facebook
                advertising, after visiting the websiteTo know more about
                Meta&apos;s cookie usage, consult its privacy policy here.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                7.3 Yandex Metrica
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                Our website uses Yandex Metrica, a service provided by Yandex
                LLC, a Russian company located at16 Lva Tolstogo St., Moscow,
                119021, Russia. Yandex Metrica is a tool that allows us to
                measure thetraffic to our website, thus enabling us to monitor
                where traffic comes from, as well as to provide usinformation on
                our audience, namely their location, device, browser, trends and
                patterns, pageviewsand sessions. It also allows us to measure
                any interactions users have with our website, in order totrack
                conversion funnels.
                <br />
                <br />
                The Yandex.Metrika counter script uses several cookies to
                collect and store information about websitevisitors. The
                specific cookies used by this script are:
              </p>
              <div className="mt-5 overflow-auto">
                <table className="[&>tr>th]:min-w-[100px] [&>tr>td]:min-w-[100px]">
                  <tr>
                    <th>Cookie Name</th>
                    <th>Description</th>
                    <th>Expiration</th>
                  </tr>
                  <tr>
                    <td>_ym_uid</td>
                    <td>Used to identify unique visitors</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>_ym_d</td>
                    <td>
                      Used to determine the user&apos;s first visit to the
                      website
                    </td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>_ym_isad</td>
                    <td>
                      Used to determine whether the user has ad blockers enabled
                    </td>
                    <td>1 day</td>
                  </tr>
                  <tr>
                    <td>_ym_visorc_XXXXXX</td>
                    <td>
                      Used to record mouse and keyboard interactions on the
                      website for the purpose of website optimization
                    </td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>_ym_metrika_enabled</td>
                    <td>
                      Used to indicate whether the Yandex Metrica script is
                      enabled on the website
                    </td>
                    <td>1 day</td>
                  </tr>
                </table>
              </div>
              <p className={`${styles.contentText} text-sm md:text-base mt-5`}>
                All of these cookies are used to collect information for
                analytical and statistical purposes, such asmeasuring website
                traffic and user behavior. They are stored in the user&apos;s
                browser for varying durationsas indicated above, and can be
                manually deleted by the user or cleared when the browser cache
                iscleared.
                <br />
                <br />● To know more about Yandex Metrica&apos;s cookie usage,
                consult its privacy policy here.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                8 Data disclosure
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍‍We may disclose your personal data in the good faith belief
                that such action is necessary: ● To comply with a legal
                obligation (i.e., if required by law or in response to valid
                requests bypublic authorities, such as a court or government
                agency);
                <br />● To protect the security of the Website and defend our
                rights or property;
                <br />● To prevent or investigate possible wrongdoing in
                connection with us;
                <br />● To defend ourselves against legal liability.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                9 Data security
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍We take reasonable technical and organisational security
                measures that we deem appropriate to protectyour stored data
                against manipulation, loss, or unauthorised third-party access.
                Our security measuresare continually adapted to technological
                developments.
                <br />
                <br />
                We also take internal data privacy very seriously. Our employees
                and the Service Providers that weretain are required to maintain
                secrecy and comply with applicable data protection legislation.
                Inaddition, they are granted access to personal data only
                insofar as this is necessary for them to carryout their
                respective tasks or mandate.
                <br />
                <br />
                The security of your personal data is important to us but
                remember that no method of transmission overthe Internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptablemeans to protect your personal data, we
                cannot guarantee its absolute security. We recommend
                usingantivirus software, a firewall, and other similar software
                to safeguard your system.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                10 Your rights
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍You have the below data protection rights. To exercise these
                rights, you may contact the above addressor send an e-mail to:{" "}
                <Link
                  className="text-[#22DDD2]"
                  href="mailto:info@infinitydigitalassets.io"
                >
                  info@infinitydigitalassets.io
                </Link>{" "}
                . Please note that we may ask you to verify your identity
                beforeresponding to such requests.
              </p>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍<br />● Right of access: You have a right to request a copy of
                your personal data, which we will provideto you in an electronic
                form.
                <br />● Right to amendment: You have the right to ask us to
                correct our records if you believe theycontain incorrect or
                incomplete information about you.
                <br />
                <br />
                Right to withdraw consent: If you have provided your consent to
                the processing of your personaldata, you have the right to
                withdraw your consent with effect for the future. This includes
                caseswhere you wish to opt-out from marketing communications.
                Once we have received notificationthat you have withdrawn your
                consent, we will no longer process your information for
                thepurpose(s) to which you initially consented unless there is
                another legal basis for processing.To stop receiving emails from
                us, please click on the &apos;unsubscribe&apos; link in the
                email you receivedor contact us at{" "}
                <Link
                  className="text-[#22DDD2]"
                  href="mailto:info@infinitydigitalassets.io"
                >
                  info@infinitydigitalassets.io
                </Link>
                <br />
                <br />● Right to erasure: You have the right to request that we
                delete your personal data when it is nolonger necessary for the
                purposes for which it was collected or when it was
                unlawfullyprocessed.
                <br />● Right to restriction of processing: You have the right
                to request the restriction of ourprocessing of your personal
                data where you believe it to be inaccurate, our processing is
                unlawful, or where we no longer need to process it for the
                initial purpose, but where we are notable to delete it due to a
                legal obligation or because you do not want us to delete it.
                <br />● Right to portability: You have the right to request that
                we transmit your personal data toanother data controller in a
                standard format such as Excel, where this is data which you
                haveprovided to us and where we are processing it on the legal
                basis of your consent or to performour contractual obligations.
                <br />● Right to object to processing: Where the legal basis for
                our processing of your personaldata is our legitimate interest,
                you have the right to object to such processing ongrounds
                relating to your particular situation. We will abide by your
                request unless wehave a compelling legal basis for the
                processing which overrides your interests or if weneed to
                continue to process the personal data for the exercise or
                defence of a legal claim.
                <br />● Right to lodge a complaint with a supervisory authority:
                You have the right of appeal to adata protection supervisory
                authority if you believe that the processing of your personal
                dataviolates data protection law. The competent data protection
                authority in Switzerland is theFederal Data Protection and
                Information Commissioner
                (www.edoeb.admin.ch/edoeb/en/home.html).
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                11 Links to third-party apps and sites
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍Our website may contain links to websites or apps that are not
                operated by us. When you click on athird party link, you will be
                directed to that third party&apos;s website or app. We have no
                control over, andassume no responsibility for, the content,
                privacy policies, or practices of any third party websites or
                services.
                <br />
                <br />
                We maintain online presences on social networks to, among other
                things, communicate with customersand prospective customers and
                to provide information about our products and services. If you
                have anaccount on the same network, it is possible that your
                information and media made available there maybe seen by us, for
                example, when we access your profile. In addition, the social
                network may allow usto contact you. The content communication
                via the social network and the processing of the contentdata is
                thereby subject to the responsibility of the social network. As
                soon as we transfer personal datainto our own system, we are
                responsible for this independently. This is then done in order
                to carry outpre-contractual measures and to fulfil a contract.
                For the legal basis of the data processing carried outby the
                social networks under their own responsibility, please refer to
                their data protection declarations.
                <br />
                Below is a list of social networks on which we operate an online
                presence: ‍
                <br />
                <br />● Facebook:{" "}
                <Link className="text-[#22DDD2]" href="https://www.facebook.com/infinitydigitalassets">
                  Privacy Policy
                </Link>
                <br />● Instagram:{" "}
                <Link className="text-[#22DDD2]" href="https://www.instagram.com/infinitydigitalassets/">
                  Privacy Policy
                </Link>
                <br />● LinkedIn:{" "}
                <Link className="text-[#22DDD2]" href="https://www.linkedin.com/company/infinitydigitalassets/">
                  Privacy Policy
                </Link>
                <br />● Twitter:{" "}
                <Link className="text-[#22DDD2]" href="https://twitter.com/infinityassets1">
                  Privacy Policy
                </Link>
                <br />● Tiktok:{" "}
                <Link className="text-[#22DDD2]" href="https://www.tiktok.com/@infinitydigitalassets">
                  Privacy Policy
                </Link>
                <br />● Youtube:{" "}
                <Link className="text-[#22DDD2]" href="https://www.youtube.com/@infinitydigitalassets">
                  Privacy Policy
                </Link>
                <br />● Pinterest:{" "}
                <Link className="text-[#22DDD2]" href="https://www.pinterest.com/infinitydigitalassets/">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                12 Changes to this privacy policy
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍We may update our Privacy Policy from time to time. We,
                therefore, encourage you to review thisPrivacy Policy
                periodically for any changes.
                <br />
                <br />
                Changes to this Privacy Policy are effective when they are
                posted on this page.
              </p>
            </div>
            <div className="mt-5 ">
              <h4 className={`${styles.heading3Text} text-lg md:text-2xl`}>
                13 Contact us
              </h4>
              <p className={`${styles.contentText} text-sm md:text-base`}>
                ‍‍If you have any questions about this Privacy Policy, do not
                hesitate to get in touch with us at:
                <br />
                <br />
                Contact Details:{" "}
                <Link
                  className="text-[#22DDD2]"
                  href="mailto:info@infinitydigitalassets.io"
                >
                  info@infinitydigitalassets.io
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="contentGapTop"></div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
