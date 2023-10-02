"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import RainbowKitConnectButton from "../RainbowKitConnectButton/RainbowKitConnectButton";
import { useAccount } from "wagmi";
import { useTheme } from "next-themes";

const ConnectModal = ({ closeModal }) => {
  const modalRef = useRef(null);
  const account = useAccount();
  const { theme } = useTheme();

  const handleCloseModal = () => {
    closeModal();
    // console.log('triggered');
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // console.log('triggered parent');
      closeModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 bottom-0 left-0 right-0 z-50 min-h-screen p-4"
    >
      <div
        className="relative flex justify-center items-center h-[100%]"
        ref={modalRef}
      >
        <div className="relative w-[100%] md:w-[60%] lg:w-[45%] xl:w-[35%] h-max bg-white rounded-3xl shadow dark:bg-[#1c1c1c]">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={handleCloseModal}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="flex flex-col items-center p-6 py-10 text-center">
            <div className="pb-5">
              <Image
                src={
                  theme === "dark"
                    ? "https://images.infinitydigitalassets.io/assets/images/connectPopupLogoDark.webp"
                    : "https://images.infinitydigitalassets.io/assets/images/connectPopupLogoLight.webp"
                }
                width={220}
                height={101}
                alt="Logo"
              />
            </div>
            <div className="pb-5 flex md:w-[85%] py-2 w-[100%] items-center mt-2">
              <span className="w-[100%] h-[1px] opacity-30 bg-[#000] dark:bg-white"></span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center gap-3">
                <div>
                  <h3 className="text-xl font-extrabold lg:text-2xl text-gradient-blue-cyan">
                    {account.isConnected
                      ? "Connection Successful " + " "
                      : "Connect Your Wallet "}
                  </h3>
                </div>
                <div>
                  {account.isConnected ? (
                    <Image
                      src="https://images.infinitydigitalassets.io/assets/icons/congratsLogo.svg"
                      alt="Success"
                      width={30}
                      height={30}
                    />
                  ) : (
                    <Image
                      src="https://images.infinitydigitalassets.io/assets/icons/walletLogo.svg"
                      alt="Connect"
                      width={30}
                      height={30}
                    />
                  )}
                </div>
              </div>
              <p className="text-sm lg:text-md">
                {account.isConnected
                  ? "Congratulations! You Are Connected To The Wallet "
                  : "Please login by connecting your wallet"}
              </p>
            </div>
            <div className="w-[100%] md:w-[70%] flex flex-col gap-3">
              <div>
                <RainbowKitConnectButton />
              </div>
              <div>
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="text-sm lg:text-base border px-20 py-5 rounded-lg bg-transparent border-black text-black hover:bg-black hover:text-white dark:bg-transparent dark:text-white dark:hover:text-black dark:hover:bg-white dark:border-white w-[100%]"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
