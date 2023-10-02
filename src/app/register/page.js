"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

// import signUpImg from "/public/assets/images/signup.webp";
// import infinLogo from "../../../public/assets/images/logo1.webp";

import styles from "/src/app/register/page.module.css";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/userSlice";

const Register = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [deviceId] = useState("web");
  
  const { loading, error } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const router = useRouter();
  const handleRegisterEvent = (e) => {
    e.preventDefault();
    let userRegisterCredentials = {
      first_name,
      last_name,
      email,
      password,
      deviceId,
    };
    dispatch(registerUser(userRegisterCredentials)).then((result) => {
      if (result.payload) {
        // setEmail('');
        // setPassword('');
        sessionStorage.setItem("email", email);
        toast.success(result.payload);
        router.push("/confirmation");
      } else {
        toast.error(error);
      }
    }); //registerUser is a payload here.
  };
  return (
    <section className="flex items-center justify-center max-w-[1600px] mx-auto">
      <div className="flex items-center justify-center w-screen pt-40 pb-20">
        <div className="bg-white dark:bg-formColor p-3 rounded-3xl w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%] flex flex-col justify-center items-center border border-[#D1D1D1] dark:border-none">
          <div
            className="w-full bg-center bg-cover bg-no-repeat rounded-xl h-[175px]"
            style={{
              backgroundImage: `url("https://images.infinitydigitalassets.io/assets/images/signup.webp")`,
            }}
            alt="Background Image Of the Sign Up Form"
          >
            <div className="flex mt-[30px] ml-[20px] md:ml-[40px]">
              <div className=" bg-infinBgColor rounded-md w-[46px] h-[46px] flex justify-center items-center">
                <Image
                  src={
                    "https://images.infinitydigitalassets.io/assets/images/logo1.webp"
                  }
                  width={35.65}
                  height={35.65}
                  alt="Infinity Logo"
                />
              </div>
              <div className="flex flex-col">
                <div className="w-[50%] ml-3 md:ml-6 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="43"
                    viewBox="0 0 96 43"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1465_116)">
                      <path
                        d="M5.36457 21.4234H0.00341797V1.49121H5.36457V21.4234Z"
                        fill="white"
                      />
                      <path
                        d="M13.3046 21.4233H7.98828V6.47332H13.0422V9.31627H13.1941C13.8431 7.42792 15.5691 6.2782 17.7474 6.2782C20.8923 6.2782 22.9256 8.63344 22.9256 11.884V21.4233H17.599V13.0164C17.599 11.5356 16.8188 10.6402 15.4794 10.6402C14.14 10.6402 13.3287 11.5356 13.3184 13.0164L13.3046 21.4233Z"
                        fill="white"
                      />
                      <path
                        d="M34.4177 10.358H31.7181V21.4233H26.3915V10.3685H24.5032V6.47333H26.3915V6.0448C26.3915 2.34475 28.4628 0.553955 31.7181 0.553955C32.8613 0.572442 33.9991 0.716122 35.1116 0.982485L34.3417 4.83925C33.9007 4.71643 33.446 4.65093 32.9885 4.64421C31.9874 4.64421 31.7181 5.11102 31.7181 5.81131V6.47333H34.4177V10.358Z"
                        fill="white"
                      />
                      <path
                        d="M36.4648 6.46291H41.788V21.4234H36.4648V6.46291ZM36.5028 2.45278C36.4597 1.92034 36.5769 1.3872 36.8388 0.922988C37.1007 0.458777 37.4954 0.0850807 37.9711 -0.149187C38.4468 -0.383455 38.9814 -0.467446 39.5052 -0.390161C40.0289 -0.312875 40.5174 -0.077894 40.9068 0.284021C41.2961 0.645936 41.5682 1.11796 41.6875 1.63842C41.8068 2.15889 41.7677 2.7036 41.5754 3.20131C41.3831 3.69902 41.0465 4.12656 40.6096 4.42812C40.1727 4.72969 39.6558 4.89124 39.1265 4.89161C38.4592 4.91528 37.8095 4.67252 37.3184 4.21598C36.8272 3.75944 36.5342 3.12592 36.5028 2.45278Z"
                        fill="white"
                      />
                      <path
                        d="M49.8142 21.4233H44.4875V6.47332H49.5518V9.31627H49.7037C50.3492 7.42792 52.0753 6.2782 54.2571 6.2782C57.4019 6.2782 59.4352 8.63344 59.4352 11.884V21.4233H54.1121V13.0164C54.1121 11.5356 53.3319 10.6402 51.9925 10.6402C50.653 10.6402 49.8418 11.5356 49.8315 13.0164L49.8142 21.4233Z"
                        fill="white"
                      />
                      <path
                        d="M62.0449 6.46291H67.3716V21.4234H62.0449V6.46291ZM62.0829 2.45278C62.0399 1.92034 62.1569 1.3872 62.4189 0.922988C62.6808 0.458777 63.0754 0.0850807 63.5511 -0.149187C64.0268 -0.383455 64.5615 -0.467446 65.0853 -0.390161C65.609 -0.312875 66.0975 -0.077894 66.4868 0.284021C66.8762 0.645936 67.1483 1.11796 67.2676 1.63842C67.3869 2.15889 67.3478 2.7036 67.1555 3.20131C66.9632 3.69902 66.6266 4.12656 66.1897 4.42812C65.7527 4.72969 65.2359 4.89124 64.7065 4.89161C64.0392 4.91528 63.3896 4.67252 62.8985 4.21598C62.4073 3.75944 62.1143 3.12592 62.0829 2.45278Z"
                        fill="white"
                      />
                      <path
                        d="M78.8947 10.358H76.3505V16.6049C76.3505 17.2285 76.6578 17.5422 77.3516 17.5422C77.7009 17.5223 78.0476 17.4697 78.3873 17.3853L79.1605 21.1621C78.3203 21.4215 77.4522 21.5783 76.5749 21.6289C72.8984 21.8345 70.979 20.2353 71.0204 17.0997V10.3476H69.1287V6.45245H71.0204V2.87085H76.3436V6.45245H78.8947V10.358Z"
                        fill="white"
                      />
                      <path
                        d="M81.1075 26.4961L82.2639 22.6811C83.5757 23.1479 84.6079 23.1758 84.9635 22.3327L85.0809 22.0609L79.8716 6.44543H85.4295L87.8184 16.8035H87.9737L90.3902 6.44543H95.9861L90.5835 22.6427C89.7654 25.1164 88.0186 27.0047 84.2938 27.0047C83.2101 27.0286 82.131 26.8563 81.1075 26.4961Z"
                        fill="white"
                      />
                      <path
                        d="M0.0551758 39.7076V28.6249H3.59705C6.79027 28.6249 8.67856 30.7153 8.67856 34.1436C8.67856 37.5719 6.79024 39.7181 3.44514 39.7181L0.0551758 39.7076ZM3.35884 38.5161C6.08256 38.5161 7.39439 36.8507 7.39439 34.1436C7.39439 31.4365 6.08258 29.8165 3.51075 29.8165H1.38769V38.5266L3.35884 38.5161Z"
                        fill="white"
                      />
                      <path
                        d="M10.484 29.1439C10.4751 28.9624 10.5202 28.7824 10.6136 28.627C10.707 28.4717 10.8444 28.3481 11.008 28.2722C11.1716 28.1964 11.354 28.1718 11.5317 28.2016C11.7093 28.2314 11.874 28.3143 12.0046 28.4395C12.1351 28.5647 12.2255 28.7265 12.264 28.904C12.3026 29.0815 12.2876 29.2665 12.2209 29.4353C12.1542 29.6042 12.0389 29.749 11.8899 29.851C11.741 29.9531 11.5651 30.0077 11.385 30.008C11.1524 30.0127 10.9273 29.9246 10.7586 29.7628C10.5899 29.6011 10.4913 29.3787 10.484 29.1439ZM10.7429 31.3947H12.0064V39.7076H10.7429V31.3947Z"
                        fill="white"
                      />
                      <path
                        d="M14.2813 41.3312L15.2894 40.6343C15.5316 41.0406 15.8794 41.3722 16.295 41.5933C16.7106 41.8144 17.1782 41.9165 17.6471 41.8886C18.9797 41.8886 19.9428 41.2615 19.9428 39.8783V38.1886H19.8358C19.6146 38.6359 19.2669 39.007 18.8368 39.255C18.4067 39.5031 17.9135 39.617 17.4193 39.5822C15.424 39.5822 13.9258 38.1084 13.9258 35.5128C13.9258 32.9172 15.3618 31.2902 17.4435 31.2902C17.9407 31.2627 18.435 31.3835 18.8647 31.6375C19.2944 31.8915 19.6405 32.2675 19.86 32.7186H19.9911V31.3982H21.2132V39.948C21.2132 42.0942 19.6252 43.0035 17.6506 43.0035C15.8106 43 14.7957 42.2022 14.2813 41.3312ZM19.9635 35.4885C19.9635 33.6907 19.1488 32.433 17.6057 32.433C15.997 32.433 15.1892 33.7987 15.1892 35.4885C15.1892 37.1783 16.0039 38.429 17.6057 38.429C19.1281 38.429 19.9635 37.3281 19.9635 35.4885Z"
                        fill="white"
                      />
                      <path
                        d="M23.2707 29.1439C23.2617 28.9624 23.3068 28.7824 23.4002 28.627C23.4936 28.4717 23.631 28.3481 23.7946 28.2722C23.9583 28.1964 24.1407 28.1718 24.3183 28.2016C24.4959 28.2314 24.6606 28.3143 24.7912 28.4395C24.9217 28.5647 25.0121 28.7265 25.0506 28.904C25.0892 29.0815 25.0742 29.2665 25.0075 29.4353C24.9408 29.6042 24.8256 29.749 24.6766 29.851C24.5276 29.9531 24.3517 30.0077 24.1716 30.008C23.939 30.0127 23.7139 29.9246 23.5452 29.7628C23.3765 29.6011 23.2779 29.3787 23.2707 29.1439ZM23.5296 31.3947H24.793V39.7076H23.5296V31.3947Z"
                        fill="white"
                      />
                      <path
                        d="M30.6929 32.4782H28.9358V37.328C28.9358 38.408 29.4708 38.5823 30.0301 38.5823C30.2173 38.5834 30.404 38.5612 30.5859 38.5161L30.8448 39.6658C30.5408 39.772 30.2205 39.8227 29.8989 39.8156C28.8287 39.8156 27.6688 39.1188 27.6688 37.6729V32.4782H26.4226V31.3947H27.6654V29.4053H28.9323V31.3947H30.6894L30.6929 32.4782Z"
                        fill="white"
                      />
                      <path
                        d="M32.2188 37.3489C32.2188 35.4432 33.8861 35.1017 35.412 34.9101C36.9378 34.7185 37.5384 34.7673 37.5384 34.1506V34.1087C37.5384 33.0426 36.9619 32.419 35.8124 32.419C35.3718 32.3905 34.9327 32.4949 34.551 32.7189C34.1693 32.9428 33.8621 33.2762 33.6686 33.6767L32.4673 33.2412C33.1094 31.7257 34.5385 31.2937 35.771 31.2937C36.8066 31.2937 38.8157 31.5968 38.8157 34.2377V39.7146H37.5523V38.5893H37.4694C37.2105 39.1293 36.4614 39.9097 35.0253 39.9097C33.4615 39.8888 32.2188 38.9725 32.2188 37.3489ZM37.5384 36.6974V35.5303C37.321 35.7881 35.8849 35.9414 35.3498 36.0076C34.3625 36.1365 33.4822 36.4396 33.4822 37.4012C33.4822 38.2897 34.214 38.746 35.2083 38.746C36.7203 38.7565 37.5384 37.7392 37.5384 36.6974Z"
                        fill="white"
                      />
                      <path
                        d="M42.3851 39.7076H41.1216V28.6249H42.3851V39.7076Z"
                        fill="white"
                      />
                      <path
                        d="M48.1709 39.7076L52.2064 28.6249H53.5873L57.6193 39.7076H56.2385L55.1304 36.572H50.691L49.5863 39.7076H48.1709ZM54.692 35.377L52.9348 30.3774H52.8485L51.0879 35.377H54.692Z"
                        fill="white"
                      />
                      <path
                        d="M63.8608 33.5827C63.7396 33.211 63.498 32.8914 63.1749 32.6753C62.8517 32.4591 62.4659 32.359 62.0796 32.3912C61.0715 32.3912 60.3224 32.9103 60.3224 33.6245C60.3224 34.2621 60.7609 34.5931 61.7378 34.837L62.9598 35.1401C64.4304 35.4885 65.1485 36.2341 65.1485 37.3908C65.1485 38.8262 63.847 39.8818 61.9311 39.8818C60.2465 39.8818 59.0935 39.1293 58.8 37.7148L60.0014 37.4116C60.2258 38.307 60.8748 38.7565 61.9104 38.7565C63.0876 38.7565 63.8401 38.1712 63.8401 37.457C63.8401 36.8821 63.45 36.4814 62.6181 36.2863L61.2372 35.9623C59.7252 35.6139 59.0486 34.8369 59.0486 33.6907C59.0486 32.2971 60.3362 31.2867 62.0727 31.2867C63.7055 31.2867 64.5961 32.0776 64.9931 33.2552L63.8608 33.5827Z"
                        fill="white"
                      />
                      <path
                        d="M71.7558 33.5827C71.6348 33.2116 71.3937 32.8925 71.0713 32.6764C70.7489 32.4603 70.3638 32.3598 69.978 32.3912C68.97 32.3912 68.2174 32.9103 68.2174 33.6245C68.2174 34.2621 68.6559 34.5931 69.6328 34.837L70.8548 35.1401C72.3255 35.4885 73.0435 36.2341 73.0435 37.3908C73.0435 38.8262 71.742 39.8818 69.8261 39.8818C68.1415 39.8818 66.9885 39.1293 66.6951 37.7148L67.8964 37.4116C68.1208 38.307 68.7698 38.7565 69.8054 38.7565C70.9861 38.7565 71.7352 38.1712 71.7352 37.457C71.7352 36.8821 71.3451 36.4814 70.5131 36.2863L69.1322 35.9623C67.6202 35.6139 66.9471 34.8369 66.9471 33.6907C66.9471 32.2971 68.2313 31.2867 69.9711 31.2867C71.6005 31.2867 72.4912 32.0776 72.8882 33.2552L71.7558 33.5827Z"
                        fill="white"
                      />
                      <path
                        d="M74.5693 35.6174C74.5693 33.0636 76.0503 31.2867 78.2804 31.2867C80.0064 31.2867 81.8188 32.3494 81.8188 35.4432V35.9832H75.8397C75.8984 37.7636 76.9237 38.7356 78.4081 38.7356C79.3988 38.7356 80.1342 38.3001 80.4794 37.436L81.7049 37.7844C81.3182 39.0387 80.0962 39.8749 78.4219 39.8749C76.0261 39.8888 74.5693 38.1712 74.5693 35.6174ZM80.5312 34.8788C80.5312 33.4852 79.6509 32.44 78.2804 32.44C76.8305 32.44 75.926 33.5932 75.8397 34.8788H80.5312Z"
                        fill="white"
                      />
                      <path
                        d="M87.3318 32.4782H85.5746V37.328C85.5746 38.408 86.1097 38.5823 86.669 38.5823C86.8562 38.5836 87.0429 38.5614 87.2248 38.5161L87.4837 39.6658C87.1808 39.7718 86.8617 39.8225 86.5412 39.8156C85.4676 39.8156 84.3077 39.1188 84.3077 37.6729V32.4782H83.0649V31.3947H84.3077V29.4053H85.5746V31.3947H87.3318V32.4782Z"
                        fill="white"
                      />
                      <path
                        d="M93.7906 33.5827C93.6694 33.211 93.4277 32.8914 93.1046 32.6753C92.7815 32.4591 92.3956 32.359 92.0093 32.3912C91.0012 32.3912 90.2521 32.9103 90.2521 33.6245C90.2521 34.2621 90.6905 34.5931 91.6675 34.837L92.8896 35.1401C94.3602 35.4885 95.0782 36.2341 95.0782 37.3908C95.0782 38.8262 93.7733 39.8818 91.8608 39.8818C90.1762 39.8818 89.0232 39.1293 88.7297 37.7148L89.9311 37.4116C90.1555 38.307 90.8045 38.7565 91.8401 38.7565C93.0173 38.7565 93.7698 38.1712 93.7698 37.457C93.7698 36.8821 93.3798 36.4814 92.5478 36.2863L91.167 35.9623C89.6549 35.6139 88.9783 34.8369 88.9783 33.6907C88.9783 32.2971 90.2659 31.2867 92.0023 31.2867C93.6352 31.2867 94.5224 32.0776 94.9194 33.2552L93.7906 33.5827Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1465_116">
                        <rect width="96" height="43" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className={`${styles.signUpTextForm} relative mt-8 w-[150px] h-[38px] right-12`}
                >
                  <h2 className="font-extrabold text-[24px] lg:text-[32px]">
                    Signup
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[85%] flex flex-col justify-center items-start ">
            <form
              className={`flex flex-col items-center w-full gap-4 mt-5 ${styles.placeHTextColor}`}
              onSubmit={handleRegisterEvent}
            >
              <div className="flex flex-col w-full gap-2 md:flex md:flex-row">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                  className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md md:w-1/2 text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                  autoComplete="off"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md md:w-1/2 text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                  autoComplete="off"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm Password"
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                autoComplete="off"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <div className="w-full m-1 text-left text-c3">
                <input type="checkbox" className="rounded-full" />
                <span
                  className={`cursor-pointer ${styles.rememberMe} font-medium`}
                >
                  {" "}
                  Remember Me
                </span>
              </div>
              <button
                type="submit"
                className={`w-full h-14 text-white dark:text-black rounded-md outline-none font-bold bg-black dark:bg-white ${styles.signUpButton}`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              {error && (
                <div className="w-[100%] bg-red-500 text-white text-xs p-2 flex justify-center rounded-md">
                  {error}
                </div>
              )}
            </form>

            <div className="mt-2">
              <span
                className={` ${styles.belowSubHeading} font-normal text-xs dark:text-dullText text-[#545454]`}
              >
                By continuing, you agree to This Company’s{" "}
                <a
                  className={`${styles.textUnderline}`}
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a className={`${styles.textUnderline}`} href="/privacy-policy">
                  Privacy Policy.
                </a>
              </span>
            </div>
            <hr class="my-4 border-gray-300 w-[100%]" />

            <div className="w-[100%] flex items-center pb-5 justify-center gap-1 text-sm  dark:text-textColor text-[#545454]">
              <span>Already have an account?</span>
              <Link
                href="/login"
                className="font-semibold cursor-pointer text-text-white underline-offset-2 text-LoginTextColor"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
