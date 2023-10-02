import React from "react";
import styles from "../vimeob/vimeob.module.css";
// import vimeo from "../../../../public/assets/icons/vimeo.svg";
import Image from "next/image";
const Vimeob = ({ label, variant }) => {
  const btnVariantClass = getVariantClass(variant);
  // console.log("🚀 ~ file: button.js:6 ~ Button ~ btnVariantClass:", btnVariantClass)
  return (
    <button className={`${styles.vimeob} flex justify-center items-center gap-1 md:gap-5  ${btnVariantClass}`}> <Image src={"https://images.infinitydigitalassets.io/assets/icons/vimeo.svg"} width={40} height={40} alt="Video Icon" /> {label}</button>
  );
};

export default Vimeob;

const getVariantClass = (variant) => {
  switch (variant) {
    case "solid":
      return styles.solid;
    case "outline":
      return styles.outline;
    case "darkOutline":
      return styles.darkOutline;
    default:
      return styles.default;
  }
};
