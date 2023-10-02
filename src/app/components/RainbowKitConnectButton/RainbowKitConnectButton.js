/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const RainbowKitConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            className="w-[100%] mt-10"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="border text-sm lg:text-base px-10 py-5 rounded-lg hover:text-black border-black bg-black text-white font-semibold dark:hover:text- dark:text-black dark:bg-white dark:hover:bg-transparent dark:hover:text-white hover:bg-transparent dark:border-white w-[100%]"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    style={{ display: "flex", alignItems: "center", justifyContent:"center" }}
                    type="button"
                    className="text-sm lg:text-base border py-4 rounded-lg bg-transparent border-black text-black hover:bg-black hover:text-white dark:bg-transparent dark:text-white dark:hover:text-black dark:hover:bg-white dark:border-white w-[50%]"
                  >
                    {account.displayName}
                  </button>
                  <button onClick={openAccountModal} type="button" className="text-sm lg:text-base border py-4 rounded-lg bg-transparent border-black text-black hover:bg-black hover:text-white dark:bg-transparent dark:text-white dark:hover:text-black dark:hover:bg-white dark:border-white w-[50%]">
                    Disconnect
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default RainbowKitConnectButton;
