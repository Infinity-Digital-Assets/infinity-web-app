"use client";

import React, { useState } from "react";
import Button from "../components/button/button";
import Link from "next/link";
import TokenomicsChart from "../components/tokenomicsChart/TokenomicsChart";
import Image from "next/image";
import styles from "./page.module.css";
import Roadmap from "../components/roadmap/roadmap";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import { useTheme } from "next-themes";

const IcoToken = () => {
  const [dataFromTokenomicsChart, setDataFromTokenomicsChart] = useState();
  const [inputValue, setInputValue] = useState("");
  const [valueInDollar, setValueInDollar] = useState(10.462);
  const [resultValue, setResultValue] = useState();

  const tokenomicsChartData = [
    {
      heading: "LIQUIDITY",
      totalSupply: "12",
      initialUnlock: "12",
      lockUp: "0",
      mesting: "3",
    },
    {
      heading: "PRE-SEED SALE ($0.0175)",
      totalSupply: "4",
      initialUnlock: "0",
      lockUp: "6",
      mesting: "8",
    },
    {
      heading: "SEED SALE ($0.0175)",
      totalSupply: "8",
      initialUnlock: "0",
      lockUp: "6",
      mesting: "8",
    },
    {
      heading: "PRIVATE SALE ($0.024)",
      totalSupply: "9",
      initialUnlock: "0",
      lockUp: "2",
      mesting: "6",
    },
    {
      heading: "IDO ($0.03)",
      totalSupply: "7",
      initialUnlock: "30",
      lockUp: "0",
      mesting: "3",
    },
  ];
  const { theme } = useTheme();

  const receiveDataFromTokenomicsChart = (data) => {
    setDataFromTokenomicsChart(data);
  };

  console.log("data from child is", dataFromTokenomicsChart);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log("Input value:", event.target.value);

  return (
    <div
      className="w-[100%] max-w-[1600px] bg-cover mx-auto text-black dark:text-white"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/disclaimer-bg-min.webp')`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Token Sale Section */}
      <div
        className=" md:flex w-[100%] flex flex-col mx-auto bg-cover py-[12rem] md:py-[15rem] lg:py-[15rem] xl:py-[20rem]  justify-center items-center"
        style={{
          backgroundImage: `url("https://images.infinitydigitalassets.io/assets/images/icoTokenBg.webp")`,
        }}
      >
        <div className="flex flex-col justify-center items-center gap-[1.5rem] md:gap[1rem]">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3 className="text-gradient-blue-cyan text-[24px] font-extrabold">
                Join The Token Sale
              </h3>
            </div>
            <div>
              <h1 className="text-[32px] text-white md:text-[40px] xl:text-[52px] font-extrabold px-[10px]">
                ICO-Initial Coin Offering
              </h1>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row xl:flex-row w-[85%] md:w-[100%] xl:w-[100%] gap-[1rem] md:gap-[1.5rem] justify-center">
            {/* Button 1 */}
            <div className="w-[100%] md:w-[60%] xl:w-[50%]">
              <Button label="Tokenomics" variant={"outline"} />
            </div>
            {/* Button 2 */}
            <div className="w-[100%] md:w-[60%] xl:w-[50%]">
              <Link href="/contact-us">
                <Button label="Buy Infin Token" variant={"solid"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Token Sale Section End*/}

      {/* INFIN Token Sale Section */}
      <div className="md:flex w-[100%] flex flex-col  py-20 md:py-15 lg:py-15 xl:py-15 justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[100%] gap-[1rem]">
          {/* Heading */}
          <div>
            <h2
              className={`text-[32px] md:text-[36px] font-extrabold
              ${theme === "light" ? "text-blue" : "text-gradient-blue-cyan"}`}
            >
              INFIN Token Sale
            </h2>
          </div>
          {/* Tokenomics Card */}
          <div
            className={`w-[90%] lg:w-[80%] flex flex-col rounded-[33px] justify-center items-center text-center ${
              theme === "light"
                ? styles.cardBackgroundLight
                : styles.cardBackground
            }`}
          >
            {/* Heading */}
            <div>
              <h3 className="text-[24px] md:text-[28px] font-extrabold pt-[25px] pb-[1rem] ">
                Tokenomics
              </h3>
            </div>
            {/* HR */}
            <hr className="w-[79%] h-[1px] border-white" />
            <div className="w-[80%] flex flex-col lg:flex-row justify-between items-center pt-[2rem] pb-11 gap-[1.3rem]">
              {/* Left Side Apex Chart */}
              <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[100%] xl:w-[50%]">
                <TokenomicsChart
                  sendDataToParent={receiveDataFromTokenomicsChart}
                />
              </div>
              {/* Right Side Card */}
              <div
                className={`w-[100%] md:w-[80%] lg:minw-[40%] lg:max-w-[40%] flex flex-col rounded-[33px] items-center mr-[0rem] xl:mr-[1rem] ${
                  theme === "light"
                    ? styles.smallCardbgLight
                    : styles.smallCardbg
                }`}
              >
                <div>
                  <h3 className="text-[21px] md:text-[24px] font-extrabold py-[10px] pt-[15px] text-white">
                    {dataFromTokenomicsChart === 0
                      ? "Liquidty"
                      : dataFromTokenomicsChart === 1
                      ? "Pre-seed sale"
                      : dataFromTokenomicsChart === 2
                      ? "Seed sale"
                      : dataFromTokenomicsChart === 3
                      ? "Private sale"
                      : dataFromTokenomicsChart == 4
                      ? "IDO"
                      : "Liquidty"}
                  </h3>
                </div>
                <hr className="w-[90%] md:w-[80%] h-[1px]" />
                <div className="w-[90%] md:w-[80%] flex flex-col gap-[0.5rem] pt-[20px] pb-[40px] text-white">
                  <div className="flex flex-row justify-between font-normal md:font-bold">
                    <h4 className="text-black dark:text-[#78AAFF]">
                      % Of Total Supply:
                    </h4>
                    <h4>
                      {dataFromTokenomicsChart === 0
                        ? "12%"
                        : dataFromTokenomicsChart === 1
                        ? "4%"
                        : dataFromTokenomicsChart === 2
                        ? "8%"
                        : dataFromTokenomicsChart === 3
                        ? "9%"
                        : dataFromTokenomicsChart == 4
                        ? "7%"
                        : "12%"}
                    </h4>
                  </div>
                  <div className="flex flex-row justify-between font-normal md:font-bold">
                    <h4 className="text-black dark:text-[#78AAFF]">
                      Initial Unlock
                    </h4>
                    <h4>
                      {dataFromTokenomicsChart === 0
                        ? "25%"
                        : dataFromTokenomicsChart === 1
                        ? "0%"
                        : dataFromTokenomicsChart === 2
                        ? "0%"
                        : dataFromTokenomicsChart === 3
                        ? "0%"
                        : dataFromTokenomicsChart == 4
                        ? "30%"
                        : "25%"}
                    </h4>
                  </div>
                  <div className="flex flex-row justify-between font-normal md:font-bold">
                    <h4 className="text-black dark:text-[#78AAFF]">Lock Up</h4>
                    <h4>
                      {dataFromTokenomicsChart === 0
                        ? "On demand"
                        : dataFromTokenomicsChart === 1
                        ? "6 months"
                        : dataFromTokenomicsChart === 2
                        ? "6 months"
                        : dataFromTokenomicsChart === 3
                        ? "2 months"
                        : dataFromTokenomicsChart == 4
                        ? "0 months"
                        : "On demand"}
                    </h4>
                  </div>
                  <div className="flex flex-row justify-between font-normal md:font-bold">
                    <h4 className="text-black dark:text-[#78AAFF]">Vesting</h4>
                    <h4>
                      {dataFromTokenomicsChart === 0
                        ? "Flexible"
                        : dataFromTokenomicsChart === 1
                        ? "8 months"
                        : dataFromTokenomicsChart === 2
                        ? "8 months"
                        : dataFromTokenomicsChart === 3
                        ? "6 months"
                        : dataFromTokenomicsChart == 4
                        ? "3 months"
                        : "Flexible"}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tokenomics Card End */}
        </div>
      </div>
      {/* INFIN Token Sale Section End */}

      {/* RoadMap */}
      <div className="sectionGapTop">
        <Roadmap />
      </div>
      {/* RoadMap End */}

      {/* Token Sale */}
      <div className="md:flex w-[100%] flex flex-col mx-auto bg-cover  justify-center items-center py-20 md:py-15 lg:py-15 xl:py-15 ">
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[90%] md:w-[65%] lg:w-[80%] border-2 border-[#22DDD2] rounded-[33px] py-[30px] flex flex-col-reverse lg:flex-row justify-around items-center gap-[1.5rem]">
            {/* Child 1 */}
            <div className="w-[91%] md:w-[85%] lg:w-[45%] xl:w-[41%] bg-[#E3FEFD] dark:bg-transparent dark:lg:bg-[#0a0c0f] flex flex-col gap-[1rem] rounded-[30px] p-[10px] sm:p-[30px] xl:p-[40px]">
              <div>
                <h2 className="text-[24px] font-extrabold text-gradient-blue-cyan leading-[35px]">
                  Token Sale:
                </h2>
                <h2 className="text-[15px] md:text-[18px] font-extrabold">
                  Duration: 8 Aug - 16 Aug
                </h2>
              </div>
              <div className="w-[100%]">
                <div className="flex justify-between ">
                  <p className="text-[14px] sm:text-[16px] font-extrabold leading-[35px]">
                    Ticker:
                  </p>
                  <p className="text-[14px] sm:text-[16px] dark:text-[#22DDD2] leading-[35px]">
                    INFIN
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[14px] sm:text-[16px] font-extrabold leading-[35px]">
                    Token type:
                  </p>
                  <p className="text-[14px] sm:text-[16px] dark:text-[#22DDD2] leading-[35px]">
                    BEP-20
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[14px] sm:text-[16px] font-extrabold leading-[35px]">
                    ICO Token Price: 1 VIA =
                  </p>
                  <p className="text-[14px] sm:text-[16px] dark:text-[#22DDD2] leading-[35px]">
                    0.08 USD
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[14px] sm:text-[16px] font-extrabold leading-[35px]">
                    Fundraising Goal:
                  </p>
                  <p className="text-[14px] sm:text-[16px] dark:text-[#22DDD2] leading-[35px]">
                    $30,000
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[14px] sm:text-[16px] font-extrabold leading-[35px]">
                    Total Tokens:
                  </p>
                  <p className="text-[14px] sm:text-[16px] dark:text-[#22DDD2] leading-[35px]">
                    100,000,000
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[14px] sm:text-[16px] font-extrabold leading-[35px]">
                    Available for Token Sale:
                  </p>
                  <p className="text-[14px] sm:text-[16px] dark:text-[#22DDD2] leading-[35px]">
                    26,5%
                  </p>
                </div>
              </div>
            </div>
            {/* Child 2 */}
            <div className={styles.dropshadow}>
              <Image
                src="https://images.infinitydigitalassets.io/assets/images/infinCoin.webp"
                width={"300"}
                height={"319"}
                alt="Infinity"
                z-10
              />
            </div>
          </div>
        </div>
      </div>
      {/* Token Sale End */}

      {/* Token Price */}
      <div className="md:flex w-[100%] flex flex-col mx-auto bg-cover justify-center items-center align-center py-10 md:py-15 lg:py-15 xl:py-15">
        <div className="flex flex-col justify-center items-center align-center w-[90%] sm:w-[90%] md:w-[80%] gap-[2.5rem]">
          {/* Heading */}
          <div className="text-[36px] font-extrabold leading-10">
            <h2
              className={` text-[29px] sm:text-[32px] md:text-[36px] font-extrabold ${
                theme === "light"
                  ? "text-gradient-purple"
                  : "text-gradient-blue-cyan"
              }`}
            >
              Infinity Digital Assets
            </h2>
            <h2 className="text-[28px] md:text-[36px]">
              ICO- INFIN Token Sale
            </h2>
          </div>
          {/* 2 Cards Start*/}
          <div className="w-[100%] flex flex-col lg:flex-row gap-[1rem] md:gap-[1rem] justify-center items-center">
            {/* Card 1 */}
            <div className="w-[100%] md:w-[80%] lg:w-[50%] xl:w-[40%] flex flex-col px-[20px] py-[40px] gap-[1.3rem] border-2 border-[#AD00FF] rounded-[33px]">
              <div className={styles.tokenselect}>
                <h3 className=" text-[20px] md:text-[28px] font-bold">
                  Token Price
                </h3>
                <p
                  className="text-[16px] md:text-[20px] font-medium"
                  ref={(element) => {
                    if (element) {
                      console.log("Token Price:", valueInDollar);
                    }
                  }}
                >
                  $ {valueInDollar}
                </p>
                {/* {console.log('Token Price:', 10.462)} */}
              </div>
              <div className={styles.tokenselect}>
                <h3 className="text-[20px] md:text-[28px] font-bold">
                  Discount
                </h3>
                <p className="text-[16px] md:text-[20px] font-medium">% 60.0</p>
              </div>
              <div className={styles.tokenselect}>
                <h3 className="text-[20px] md:text-[28px] font-bold">
                  Minimum Investment
                </h3>
                <p className="text-[16px] md:text-[20px] font-medium">$ 5000</p>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="w-[100%] md:w-[80%] lg:w-[50%] xl:w-[40%] flex flex-col px-[20px] py-[40px] gap-[0.5rem] shadow-lg dark:border-2 border-[#2E73EA] dark:bg-[#0B111C] rounded-[33px] justify-between relative"
              style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <div>
                <h2
                  className={`font-extrabold text-[black] dark:text-gradient-blue-cyan text-[20px] sm:text-[18px] md:text-[20px pb-[7px]
                ${
                  theme === "light" ? "text-black" : "text-gradient-blue-cyan"
                }`}
                >
                  Buy INFIN Token
                </h2>
              </div>
              <div
                className={`${
                  theme === "light" ? styles.tokenpayLight : styles.tokenpay
                }`}
              >
                <div className="w-[70%]">
                  <h3 className="dark:text-[#566381] text-[12px] sm:text-[14px] font-bold">
                    You Pay
                  </h3>
                  <h3 className="text-[#2E73EA] dark:text-white text-[24px] sm:text-[28px] font-extrabold">
                    <input
                      className="placeholder-blue-500 bg-transparent outline-none w-[100%] focus:border-none dark:placeholder-white"
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="0"
                    />
                  </h3>
                  <p className="dark:text-[#566381] text-[12px] sm:text-[14px] font-bold">
                    $ 219.87
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex gap-[0.5rem] items-center">
                    <div>
                      <Image
                        src="https://images.infinitydigitalassets.io/assets/images/polygonImage.webp"
                        height={24}
                        width={24}
                        alt="Matic Token Icon"
                        className="w-[100%]"
                      />
                    </div>
                    <div>
                      <h3 className="text-[18px] sm:text-[20px] text-[#2E73EA] dark:text-white font-extrabold">
                        MATIC
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="dark:text-[#566381] text-[12px] sm:text-[14px] font-bold">
                      Balance: 0
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  theme === "light" ? styles.tokenpayLight : styles.tokenpay
                }`}
              >
                <div className="w-[70%]">
                  <h3 className="dark:text-[#566381] text-[12px] sm:text-[14px] font-bold">
                    You Receive
                  </h3>
                  <h2 className="text-[#2E73EA] max-w-[100%] dark:text-white text-[24px] sm:text-[28px] font-extrabold overflow-x-auto no-scrollbar">
                    {inputValue * valueInDollar}
                  </h2>

                  <p className="dark:text-[#566381] text-[12px] sm:text-[14px] font-bold">
                    -
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex gap-[0.5rem] items-center">
                    <div>
                      <Image
                        src="https://images.infinitydigitalassets.io/assets/images/infinImage.webp"
                        height={24}
                        width={24}
                        alt="INFIN Token Icon"
                      />
                    </div>
                    <div>
                      <h3 className="text-[18px] sm:text-[20px] text-[#2E73EA] dark:text-white font-extrabold">
                        INFIN
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="dark:text-[#566381] text-[12px] sm:text-[14px] font-bold">
                      Balance: 0
                    </h4>
                  </div>
                </div>
              </div>
              <Link href="#">
                <div className="flex justify-center items-center border-2 border-[#2E73EA] hover:bg-[#2E73EA] rounded-[16px] py-[12px] hover:text-white">
                  <button className="dark:text-white text-[16px] font-bold">
                    Buy INFIN Now
                  </button>
                </div>
              </Link>
              {/* Arrow Button */}
              <div className="absolute left-[46%] top-[43%]">
                <button
                  type="button"
                  class="text-white bg-[#101A2A] font-medium rounded-[15px] border-[4px] border-[#0B111C] text-sm p-2.5 text-center inline-flex items-center mr-2 bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* 2 Cards End*/}
        </div>
      </div>
      {/* Token Price End */}

      {/* Social */}
      <div className="w-[100%]">
        <SocialCommunity />
      </div>
      {/* Social End */}
    </div>
  );
};

export default IcoToken;
