"use client"

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";
// data
import { content } from "@/app/data";
import Modal from "../Modal/Modal";

const { footerColumns, footerSocialLinks } = content;

export default function Footer() {
  const [modal, setModal] = useState(false);
  return (
    <footer
      className="bgColourPages bg-cover bg-center bg-no-repeat mx-auto max-w-[1600px]"
      style={{
        backgroundImage: "url('https://images.infinitydigitalassets.io/assets/images/footer-bg-min.webp')",
      }}
    >
      <div className="footer_wrap max-w-[1136px] mx-auto pt-20">
        <div className="mb-10 footer_cols">
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="mx-5 mb-5 logo_col sm-mb-0s">
              <div className="inline-block mb-3 bg-white rounded-md wrap-logo">
                <Logo />
              </div>
              <h3 className="capitalize text-gradient-purple text-[18px] font-black mb-3">
                Infinity Digital Assets LLC
              </h3>
              <p className="text-white text-[14px]">
                DIFC Trade Centre - Dubai - United Arab Emirates
              </p>
            </div>
            {footerColumns.map((column, idx) => (
              <div key={idx} className="mx-5 mb-5 links_col sm-mb-0s">
                <h3 className="capitalize text-gradient-purple text-[18px] font-extrabold mb-3">
                  {column.label}
                </h3>
                {column.links.map((link, index) =>
                  link.column ? (
                    <div key={index}>
                      <h3 className="capitalize text-gradient-purple text-[18px] font-extrabold mb-3">
                        {link.label}
                      </h3>
                      <div className="block mb-3">
                        <Link
                          className="text-[14px] text-white"
                          href={link.column?.href}
                        >
                          {link.column?.label}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="block mb-3">
                      <Link
                        className="text-[14px] text-white"
                        href={link?.href}
                      >
                        {link.label}
                      </Link>
                    </div>
                  )
                )}
              </div>
            ))}
            <div className="mx-5 mb-5 logo_col sm-mb-0s">
              <h3 className="capitalize text-white text-[20px] font-bold mb-3">
                Join our comminity
              </h3>
              <div className="mb-3 newsletter_form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="relative flex flex-row field_group">
                  {modal && <Modal closeModal={() => setModal(false)} />}
                    <input
                      className="p-3 w-[100%] text-[14px] bg-transparent text-white rounded-md border border-cyan focus:outline-none focus:border-[var(--purple)]"
                      type="email"
                      required
                      placeholder="Email Address"
                    />
                    <button onClick={() => setModal(true)} className="absolute right-0 top-0 py-3 px-5 h-[100%] text-[14px] bg-white text-black rounded-md border border-transparent hover:border-[var(--gradient-blue-cyan)]">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <p className="mb-3 text-white">Our Social handles</p>
              <div className="flex">
                {footerSocialLinks.map((footerLink, idx) => (
                  <div key={idx} className="mr-3">
                    <a
                      href={footerLink.href}
                      className={`${styles.social_icon_wrap} flex items-center justify-center h-[40px] w-[40px] transition-all hover:ring-1 hover:ring-[var(--light-theme-blue)] hover:border-[var(--light-theme-blue)]`}
                      target="__blank"
                    >
                      <Image
                        src={footerLink.icon}
                        width={20}
                        height={20}
                        alt={footerLink.iconAlt}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_divider} />
        <div className="foote_copyright py-3 text-center text-[12px]">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Infinity Digital Assets LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
