"use client";
//IMPORTS
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Inter, Bebas_Neue, Lato } from "next/font/google";
import { usePathname } from "next/navigation";
import Aos from "aos";
import ToastWrapper from "@/ToasWrapper";
import "./styles/globals.css";
import "aos/dist/aos.css";
// -------------------------------------------------
//Rainbow Kit Imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Image from "next/image";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ComingSoon from "./coming-soon/page";

const CustomAvatar = ({ address, ensImage, size }) => {
  // const color = generateColorFromAddress(address);
  return (
    <div>
      <Image
        src="https://images.infinitydigitalassets.io/assets/images/connectPopupLogoDark.webp"
        alt="logo"
        width={1000}
        height={1000}
      />
    </div>
  );
};

const allowedLinks = ["/", "/seed-round"];

const { chains, publicClient } = configureChains(
  [mainnet, polygon, sepolia],
  [
    alchemyProvider({ apiKey: "nkC6NPSTnUnZ33vTfEuLQw9yUDrJh-Jf" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "web3app_using_rainbowkit",
  projectId: "4bc9b634d82ae5283750f69f0623db5f",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const pathname = usePathname();
  const isAllowed = allowedLinks.includes(pathname)

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </head>
      <body className={`${inter.className} ${bebas.variable} ${lato.variable}`}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider
            coolMode
            avatar={CustomAvatar}
            modalSize="compact"
            theme={darkTheme()}
            chains={chains}
          >
            <ThemeProvider attribute="class" defaultTheme="dark">
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <ToastWrapper />
                  <Header />
                  <main className="main">
                    {isAllowed ? children : <ComingSoon />}
                  </main>
                  <Footer />
                </PersistGate>
              </Provider>
            </ThemeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
