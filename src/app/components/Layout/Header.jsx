"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import ThemeSwitch from "../ThemeSwitch";
import MobileNav from "./MobileNav";
import styles from "./Header.module.css";
import { useTheme } from "next-themes";
import ConnectModal from "../ConnectModal/ConnectModal.js";
import { useAccount } from "wagmi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/userSlice";

export const mainLinksLaptop = [
  {
    text: "Home",
    href: "/",
    children: [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "Learn",
        href: "/learn",
      },
    ],
  },
  {
    text: "Seed Round",
    href: "/seed-round",
  },
  // {
  //   text: "ICO",
  //   href: "/ico-token",
  // },
  {
    text: "Company",
    href: "/company",
  },
  {
    text: "Investor",
    href: "/investor",
  },
  {
    text: "Marketplace",
    href: "/marketplace",
  },
  {
    text: "Partners",
    href: "/partners",
  },
];

export const mainLinksMobile = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Company",
    href: "/company",
  },
  {
    text: "Seed Round",
    href: "/seed-round",
  },
  // {
  //   text: "ICO",
  //   href: "/ico-token",
  // },
  {
    text: "Investor",
    href: "/investor",
  },
  {
    text: "Marketplace",
    href: "/marketplace",
  },
  {
    text: "Partners",
    href: "/partners",
  },
  {
    text: "Learn",
    href: "/learn",
  },
];

const Header = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    // localStorage.removeItem("user");
    dispatch(logout());
    router.push("/login");
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [navbarClass, setNavbarClass] = useState("");
  const [connectModal, setConnectModal] = useState(false);
  const account = useAccount();
  // console.log(account)

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const show = prevScrollPos > currentScrollPos || currentScrollPos < 200; // Change the scroll threshold as per your requirements
      setPrevScrollPos(currentScrollPos);
      setShowNavbar(show);
    };

    const updateNavbarClass = () => {
      const updatedClass =
        theme === "light" ? styles.app_navbar : styles.app_Darknavbar;
      setNavbarClass(updatedClass);
    };
    updateNavbarClass();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme, prevScrollPos, pathname]);

  return (
    <header
      className={`app-header z-50 fixed top-[20px] transform ${
        showNavbar ? "translate-y-0" : "-translate-y-[100px]"
      } transition duration-500 w-[100%] px-5 sm:px-16`}
    >
      <nav
        className={`${navbarClass} max-w-[1600px] mx-auto flex justify-between items-center shadow-xl`}
      >
        <div className="flex items-center nav-left nav-main-links">
          <div className="mr-3 bg-white wrap-logo">
            <Logo />
          </div>
          <div className="self-stretch hidden lg:flex main-links">
            {mainLinksLaptop.map((link, idx) =>
              link.children && link.children.length > 0 ? (
                <div
                  className={`font-lato ${styles.nav_link} ${
                    pathname === link.href ? styles.active : ""
                  } mx-5 ${styles.nav_dropdown}`}
                  key={link.href + idx}
                >
                  <button className=" focus:text-[#22DDD2]">{link.text}</button>
                  <div className={`${styles.dropdown_menu}`}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href + idx}
                        className={` ${styles.nav_link} ${
                          pathname.startsWith(child.href) ? "active " : ""
                        } text-black font-lato`}
                        href={child.href}
                      >
                        {child.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href + idx}
                  className={`mx-5 ${styles.nav_link} ${
                    pathname === link.href ? styles.active : ""
                  } font-lato`}
                  href={link.href}
                >
                  {link.text}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex items-center self-stretch nav-right">
          <ThemeSwitch styles={styles} />
          <div
            className={`${styles.nav_right_btns} hidden lg:flex self-stretch`}
          >
            <Link
              className={`p-5 font-lato border border-white transition duration-500 hover:text-black hover:bg-white ${
                styles.nav_link
              } ${pathname.includes("/my-infin") ? "active" : ""} text-white`}
              href="/my-infin"
            >
              My INFIN
            </Link>
            <button
              onClick={() => setConnectModal(true)}
              className={`font-lato connect border border-white transition duration-500 hover:text-black hover:bg-white ${styles.nav_link} p-5 text-white`}
            >
              {account?.isConnected
                ? `${account.address.slice(0, 4)}...${account?.address.slice(
                    -2
                  )}`
                : "CONNECT"}
            </button>
            {user ? (
              <button onClick={handleLogout}>
                {/* Show LOGOUT when user exists */}
                <span
                  className={`font-lato p-5 border border-white text-white transition duration-500 hover:text-black hover:bg-white ${styles.nav_link}`}
                >
                  LOGOUT
                </span>
              </button>
            ) : (
              <button>
                <Link
                  className={`font-lato p-5 border border-white text-white transition duration-500 hover:text-black hover:bg-white ${
                    styles.nav_link
                  } ${pathname.includes("/") ? "active" : ""}`}
                  href="/login"
                >
                  LOGIN
                </Link>
              </button>
            )}
          </div>
          <MobileNav />
        </div>
      </nav>
      {connectModal && (
        <ConnectModal closeModal={() => setConnectModal(false)} />
      )}
    </header>
  );
};

export default Header;
