import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="h-[60px] w-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center"
    >
      <Image
        src="/static/infinity-logo.png"
        width={50}
        height={40}
        alt="infinity-assets"
      />
    </Link>
  );
}
