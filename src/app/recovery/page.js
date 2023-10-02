"use client"

import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../login/page.module.css";
import Modal from "../components/Modal/Modal";
const Recovery = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="py-40 mx-auto max-w-[1600px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white shadow-2xl dark:bg-c6 rounded-md relative w-[90%] md:w-[50%] lg:w-[40%] xl:w-[40%] ">
        <div className="w-[90%] ml-10 justify-center items-center">
          <div className="flex flex-row gap-5 mt-[36px] justify-start ">
            <div className="flex flex-col items-center justify-center rounded-md bg-white w-[42px] h-[42px]">
              <div className="p-1">
                <Image src={"https://images.infinitydigitalassets.io/assets/images/logo2.webp"} width={50} height={50} alt="Infinity" />
              </div>
            </div>
            <div className={`flex mb-8 font-semibold ${styles.logo}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="109"
                height="48"
                viewBox="0 0 109 48"
                fill="none"
              >
                <g clip-path="url(#clip0_1465_766)">
                  <path
                    d="M6.09105 23.9149H0.00390625V1.66504H6.09105V23.9149Z"
                    fill="url(#paint0_linear_1465_766)"
                  />
                  <path
                    d="M15.1061 23.914H9.06995V7.22563H14.8082V10.3991H14.9807C15.7176 8.29122 17.6774 7.00781 20.1506 7.00781C23.7214 7.00781 26.03 9.63692 26.03 13.2655V23.914H19.9821V14.5295C19.9821 12.8766 19.0963 11.877 17.5755 11.877C16.0547 11.877 15.1336 12.8766 15.1218 14.5295L15.1061 23.914Z"
                    fill="url(#paint1_linear_1465_766)"
                  />
                  <path
                    d="M39.0784 11.5622H36.0133V23.9142H29.9653V11.5739H27.8213V7.22584H29.9653V6.74748C29.9653 2.6172 32.3171 0.618164 36.0133 0.618164C37.3112 0.6388 38.6032 0.799188 39.8662 1.09652L38.9921 5.40175C38.4914 5.26465 37.9751 5.19153 37.4557 5.18403C36.319 5.18403 36.0133 5.70512 36.0133 6.48684V7.22584H39.0784V11.5622Z"
                    fill="url(#paint2_linear_1465_766)"
                  />
                  <path
                    d="M41.4027 7.21433H47.4467V23.9144H41.4027V7.21433ZM41.4458 2.7379C41.3969 2.14355 41.5299 1.54841 41.8273 1.03022C42.1247 0.512033 42.5728 0.094883 43.1129 -0.166625C43.653 -0.428133 44.2601 -0.521891 44.8547 -0.435619C45.4494 -0.349347 46.0041 -0.0870423 46.4461 0.316956C46.8882 0.720954 47.1971 1.24786 47.3326 1.82885C47.468 2.40983 47.4237 3.01788 47.2053 3.57346C46.987 4.12904 46.6048 4.6063 46.1087 4.94293C45.6126 5.27956 45.0257 5.4599 44.4247 5.46031C43.6671 5.48673 42.9294 5.21575 42.3718 4.70612C41.8142 4.1965 41.4815 3.48931 41.4458 2.7379Z"
                    fill="url(#paint3_linear_1465_766)"
                  />
                  <path
                    d="M56.5598 23.914H50.5118V7.22563H56.2619V10.3991H56.4343C57.1673 8.29122 59.1271 7.00781 61.6043 7.00781C65.1751 7.00781 67.4837 9.63692 67.4837 13.2655V23.914H61.4397V14.5295C61.4397 12.8766 60.5538 11.877 59.033 11.877C57.5122 11.877 56.5912 12.8766 56.5794 14.5295L56.5598 23.914Z"
                    fill="url(#paint4_linear_1465_766)"
                  />
                  <path
                    d="M70.4469 7.21433H76.4949V23.9144H70.4469V7.21433ZM70.4901 2.7379C70.4412 2.14355 70.5741 1.54841 70.8715 1.03022C71.1689 0.512033 71.617 0.094883 72.1571 -0.166625C72.6972 -0.428133 73.3043 -0.521891 73.899 -0.435619C74.4937 -0.349347 75.0483 -0.0870423 75.4903 0.316956C75.9324 0.720954 76.2413 1.24786 76.3768 1.82885C76.5122 2.40983 76.4678 3.01788 76.2495 3.57346C76.0311 4.12904 75.649 4.6063 75.1529 4.94293C74.6568 5.27956 74.0699 5.4599 73.4689 5.46031C72.7113 5.48673 71.9737 5.21575 71.416 4.70612C70.8584 4.1965 70.5257 3.48931 70.4901 2.7379Z"
                    fill="url(#paint5_linear_1465_766)"
                  />
                  <path
                    d="M89.5784 11.5629H86.6897V18.5361C86.6897 19.2323 87.0385 19.5824 87.8264 19.5824C88.2229 19.5602 88.6166 19.5015 89.0022 19.4073L89.8802 23.6232C88.9262 23.9128 87.9405 24.0878 86.9445 24.1443C82.7701 24.3738 80.5908 22.5887 80.6378 19.0884V11.5512H78.4899V7.20315H80.6378V3.20508H86.6818V7.20315H89.5784V11.5629Z"
                    fill="url(#paint6_linear_1465_766)"
                  />
                  <path
                    d="M92.0909 29.5774L93.4039 25.3188C94.8934 25.84 96.0653 25.8711 96.469 24.9299L96.6023 24.6265L90.6876 7.19531H96.9982L99.7105 18.7578H99.8869L102.631 7.19531H108.984L102.85 25.276C101.921 28.0373 99.9379 30.1452 95.7086 30.1452C94.4782 30.1719 93.2529 29.9796 92.0909 29.5774Z"
                    fill="url(#paint7_linear_1465_766)"
                  />
                  <path
                    d="M0.0627441 44.3246V31.9531H4.08425C7.70988 31.9531 9.85388 34.2867 9.85388 38.1136C9.85388 41.9405 7.70985 44.3362 3.91176 44.3362L0.0627441 44.3246ZM3.81378 42.9945C6.90634 42.9945 8.39581 41.1355 8.39581 38.1136C8.39581 35.0917 6.90636 33.2833 3.98626 33.2833H1.5757V43.0062L3.81378 42.9945Z"
                    fill="url(#paint8_linear_1465_766)"
                  />
                  <path
                    d="M11.9037 32.5324C11.8936 32.3298 11.9448 32.1288 12.0509 31.9554C12.1569 31.7819 12.3129 31.644 12.4987 31.5594C12.6845 31.4747 12.8916 31.4473 13.0932 31.4805C13.2949 31.5138 13.482 31.6063 13.6302 31.746C13.7784 31.8858 13.881 32.0664 13.9248 32.2645C13.9686 32.4627 13.9515 32.6693 13.8758 32.8577C13.8001 33.0461 13.6692 33.2078 13.5 33.3217C13.3309 33.4357 13.1312 33.4967 12.9267 33.4969C12.6626 33.5022 12.407 33.4038 12.2155 33.2233C12.024 33.0427 11.9119 32.7944 11.9037 32.5324ZM12.1977 35.0449H13.6323V44.3244H12.1977V35.0449Z"
                    fill="url(#paint9_linear_1465_766)"
                  />
                  <path
                    d="M16.2153 46.1366L17.3599 45.3588C17.6349 45.8122 18.0298 46.1824 18.5017 46.4292C18.9736 46.676 19.5044 46.79 20.0369 46.7589C21.5499 46.7589 22.6435 46.0588 22.6435 44.5149V42.6287H22.522C22.2708 43.128 21.8761 43.5422 21.3877 43.8191C20.8994 44.0959 20.3394 44.2231 19.7783 44.1843C17.5127 44.1843 15.8116 42.5391 15.8116 39.6417C15.8116 36.7443 17.4422 34.9281 19.8057 34.9281C20.3703 34.8974 20.9315 35.0322 21.4194 35.3158C21.9073 35.5993 22.3002 36.019 22.5494 36.5226H22.6984V35.0486H24.0859V44.5926C24.0859 46.9883 22.2829 48.0034 20.0409 48.0034C17.9517 47.9995 16.7993 47.1089 16.2153 46.1366ZM22.667 39.6146C22.667 37.6078 21.742 36.2038 19.9899 36.2038C18.1634 36.2038 17.2462 37.7283 17.2462 39.6146C17.2462 41.5008 18.1712 42.897 19.9899 42.897C21.7184 42.897 22.667 41.668 22.667 39.6146Z"
                    fill="url(#paint10_linear_1465_766)"
                  />
                  <path
                    d="M26.4219 32.5324C26.4117 32.3298 26.463 32.1288 26.569 31.9554C26.675 31.7819 26.831 31.644 27.0168 31.5594C27.2027 31.4747 27.4098 31.4473 27.6114 31.4805C27.8131 31.5138 28.0001 31.6063 28.1483 31.746C28.2965 31.8858 28.3992 32.0664 28.443 32.2645C28.4867 32.4627 28.4697 32.6693 28.394 32.8577C28.3183 33.0461 28.1874 33.2078 28.0182 33.3217C27.8491 33.4357 27.6494 33.4967 27.4449 33.4969C27.1808 33.5022 26.9252 33.4038 26.7337 33.2233C26.5422 33.0427 26.4301 32.7944 26.4219 32.5324ZM26.7159 35.0449H28.1505V44.3244H26.7159V35.0449Z"
                    fill="url(#paint11_linear_1465_766)"
                  />
                  <path
                    d="M34.8491 36.2545H32.8541V41.6682C32.8541 42.8738 33.4616 43.0683 34.0966 43.0683C34.3092 43.0695 34.5212 43.0447 34.7277 42.9944L35.0216 44.2779C34.6765 44.3964 34.3128 44.453 33.9476 44.4451C32.7325 44.4451 31.4156 43.6672 31.4156 42.0532V36.2545H30.0006V35.045H31.4117V32.8242H32.8502V35.045H34.8452L34.8491 36.2545Z"
                    fill="url(#paint12_linear_1465_766)"
                  />
                  <path
                    d="M36.5815 41.6919C36.5815 39.5646 38.4747 39.1834 40.2072 38.9695C41.9396 38.7556 42.6216 38.8101 42.6216 38.1217V38.075C42.6216 36.8849 41.967 36.1888 40.6618 36.1888C40.1615 36.157 39.663 36.2735 39.2296 36.5235C38.7962 36.7735 38.4475 37.1456 38.2278 37.5927L36.8637 37.1066C37.5928 35.4148 39.2155 34.9326 40.6148 34.9326C41.7907 34.9326 44.0719 35.271 44.0719 38.2189V44.3327H42.6373V43.0765H42.5432C42.2493 43.6793 41.3987 44.5505 39.7682 44.5505C37.9926 44.5272 36.5815 43.5043 36.5815 41.6919ZM42.6216 40.9647V39.6618C42.3747 39.9496 40.7441 40.1208 40.1366 40.1947C39.0156 40.3386 38.0161 40.6769 38.0161 41.7503C38.0161 42.7421 38.847 43.2515 39.9759 43.2515C41.6927 43.2632 42.6216 42.1276 42.6216 40.9647Z"
                    fill="url(#paint13_linear_1465_766)"
                  />
                  <path
                    d="M48.1248 44.3246H46.6902V31.9531H48.1248V44.3246Z"
                    fill="url(#paint14_linear_1465_766)"
                  />
                  <path
                    d="M54.694 44.3246L59.276 31.9531H60.8438L65.4219 44.3246H63.8541L62.5959 40.8243H57.5553L56.301 44.3246H54.694ZM62.0981 39.4904L60.103 33.9094H60.005L58.006 39.4904H62.0981Z"
                    fill="url(#paint15_linear_1465_766)"
                  />
                  <path
                    d="M72.5085 37.4877C72.3709 37.0728 72.0966 36.7161 71.7297 36.4748C71.3628 36.2335 70.9247 36.1218 70.4861 36.1576C69.3415 36.1576 68.491 36.7371 68.491 37.5344C68.491 38.2461 68.9888 38.6156 70.098 38.8878L71.4855 39.2262C73.1553 39.6152 73.9706 40.4474 73.9706 41.7386C73.9706 43.341 72.4929 44.5193 70.3175 44.5193C68.4047 44.5193 67.0956 43.6793 66.7625 42.1003L68.1265 41.7619C68.3812 42.7614 69.1181 43.2631 70.294 43.2631C71.6306 43.2631 72.485 42.6098 72.485 41.8125C72.485 41.1708 72.0421 40.7235 71.0975 40.5057L69.5297 40.144C67.8129 39.7551 67.0447 38.8878 67.0447 37.6083C67.0447 36.0526 68.5067 34.9248 70.4782 34.9248C72.3322 34.9248 73.3434 35.8076 73.7942 37.1221L72.5085 37.4877Z"
                    fill="url(#paint16_linear_1465_766)"
                  />
                  <path
                    d="M81.4727 37.4877C81.3352 37.0735 81.0615 36.7172 80.6954 36.476C80.3293 36.2348 79.8921 36.1227 79.4541 36.1576C78.3096 36.1576 77.4551 36.7371 77.4551 37.5344C77.4551 38.2461 77.9529 38.6156 79.0621 38.8878L80.4496 39.2262C82.1194 39.6152 82.9347 40.4474 82.9347 41.7386C82.9347 43.341 81.457 44.5193 79.2816 44.5193C77.3689 44.5193 76.0597 43.6793 75.7266 42.1003L77.0906 41.7619C77.3453 42.7614 78.0822 43.2631 79.2581 43.2631C80.5986 43.2631 81.4492 42.6098 81.4492 41.8125C81.4492 41.1708 81.0062 40.7235 80.0616 40.5057L78.4938 40.144C76.777 39.7551 76.0127 38.8878 76.0127 37.6083C76.0127 36.0526 77.4708 34.9248 79.4463 34.9248C81.2963 34.9248 82.3075 35.8076 82.7583 37.1221L81.4727 37.4877Z"
                    fill="url(#paint17_linear_1465_766)"
                  />
                  <path
                    d="M84.6671 39.759C84.6671 36.9082 86.3486 34.9248 88.8807 34.9248C90.8405 34.9248 92.8983 36.111 92.8983 39.5645V40.1674H86.1095C86.1762 42.1547 87.3403 43.2398 89.0257 43.2398C90.1506 43.2398 90.9855 42.7536 91.3775 41.7891L92.7689 42.178C92.3299 43.5781 90.9424 44.5115 89.0414 44.5115C86.3212 44.5271 84.6671 42.6098 84.6671 39.759ZM91.4363 38.9346C91.4363 37.3789 90.4368 36.2121 88.8807 36.2121C87.2344 36.2121 86.2075 37.4995 86.1095 38.9346H91.4363Z"
                    fill="url(#paint18_linear_1465_766)"
                  />
                  <path
                    d="M99.1578 36.2545H97.1628V41.6682C97.1628 42.8738 97.7703 43.0683 98.4053 43.0683C98.6179 43.0698 98.8299 43.045 99.0364 42.9944L99.3303 44.2779C98.9865 44.3961 98.6241 44.4527 98.2603 44.4451C97.0413 44.4451 95.7243 43.6672 95.7243 42.0532V36.2545H94.3132V35.045H95.7243V32.8242H97.1628V35.045H99.1578V36.2545Z"
                    fill="url(#paint19_linear_1465_766)"
                  />
                  <path
                    d="M106.491 37.4877C106.354 37.0728 106.08 36.7161 105.713 36.4748C105.346 36.2335 104.908 36.1218 104.469 36.1576C103.324 36.1576 102.474 36.7371 102.474 37.5344C102.474 38.2461 102.972 38.6156 104.081 38.8878L105.468 39.2262C107.138 39.6152 107.954 40.4474 107.954 41.7386C107.954 43.341 106.472 44.5193 104.3 44.5193C102.388 44.5193 101.079 43.6793 100.745 42.1003L102.109 41.7619C102.364 42.7614 103.101 43.2631 104.277 43.2631C105.614 43.2631 106.468 42.6098 106.468 41.8125C106.468 41.1708 106.025 40.7235 105.08 40.5057L103.513 40.144C101.796 39.7551 101.028 38.8878 101.028 37.6083C101.028 36.0526 102.49 34.9248 104.461 34.9248C106.315 34.9248 107.322 35.8076 107.773 37.1221L106.491 37.4877Z"
                    fill="url(#paint20_linear_1465_766)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1465_766"
                    x1="-9.97148"
                    y1="8.08993"
                    x2="106.146"
                    y2="50.5686"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1465_766"
                    x1="-9.42271"
                    y1="6.58779"
                    x2="106.695"
                    y2="49.0664"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1465_766"
                    x1="-6.16955"
                    y1="-2.30259"
                    x2="109.948"
                    y2="40.1763"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1465_766"
                    x1="-5.03285"
                    y1="-5.4177"
                    x2="111.089"
                    y2="37.061"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1465_766"
                    x1="-4.59772"
                    y1="-6.60035"
                    x2="111.52"
                    y2="35.8744"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_1465_766"
                    x1="-1.65037"
                    y1="-14.6583"
                    x2="114.467"
                    y2="27.8165"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_1465_766"
                    x1="-0.646902"
                    y1="-17.4075"
                    x2="115.474"
                    y2="25.0711"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_1465_766"
                    x1="-0.439129"
                    y1="-17.9714"
                    x2="115.678"
                    y2="24.5072"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_1465_766"
                    x1="-18.2104"
                    y1="30.6075"
                    x2="97.9108"
                    y2="73.0819"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_1465_766"
                    x1="-16.9877"
                    y1="27.2704"
                    x2="99.13"
                    y2="69.7453"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_1465_766"
                    x1="-17.109"
                    y1="27.6049"
                    x2="99.0081"
                    y2="70.0795"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_1465_766"
                    x1="-15.2985"
                    y1="22.6501"
                    x2="100.819"
                    y2="65.1251"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_1465_766"
                    x1="-14.8241"
                    y1="21.355"
                    x2="101.294"
                    y2="63.8338"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear_1465_766"
                    x1="-14.3535"
                    y1="20.0644"
                    x2="101.768"
                    y2="62.5389"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_1465_766"
                    x1="-13.0058"
                    y1="16.3809"
                    x2="103.112"
                    y2="58.8601"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear_1465_766"
                    x1="-11.798"
                    y1="13.0829"
                    x2="104.319"
                    y2="55.5614"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint16_linear_1465_766"
                    x1="-10.8456"
                    y1="10.4815"
                    x2="105.272"
                    y2="52.9563"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint17_linear_1465_766"
                    x1="-9.80297"
                    y1="7.62688"
                    x2="106.314"
                    y2="50.1056"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint18_linear_1465_766"
                    x1="-8.68586"
                    y1="4.57393"
                    x2="107.431"
                    y2="47.0526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint19_linear_1465_766"
                    x1="-7.33791"
                    y1="0.890199"
                    x2="108.78"
                    y2="43.3689"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint20_linear_1465_766"
                    x1="-6.8907"
                    y1="-0.334201"
                    x2="109.227"
                    y2="42.1445"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E73EA" />
                    <stop offset="1" stop-color="#AD00FF" />
                  </linearGradient>
                  <clipPath id="clip0_1465_766">
                    <rect width="109" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mr-5 bg-transparent rounded-md">
            <Image width={120} height={120} src={"https://images.infinitydigitalassets.io/assets/images/recoverylogo.webp"} alt="logo" />
          </div>
          <div className="flex mt-8 mb-[10px] mainSubHeadingText">
            <h2>Recovery email sent successfully</h2>
          </div>
          <div className=" md:w-[65%] w-[90%] mt-[1px]">
            <span className="text-xs text-black dark:text-white ">
              You can easily reset your password by following the instructions
              given in the email.
            </span>
          </div>

          <div className="flex mt-7">
            <span className="w-[95%] md:w-[90%] h-[1px] bg-c1 dark:bg-c2"></span>
          </div>
          <div className=" flex md:w-[90%] w-[95%] justify-between mt-5">
          {modal && <Modal closeModal={() => setModal(false)} />}
            <span className="flex gap-2 text-xs text-c1 dark:text-c2">
              {" "}
              Didn&apos;t received any email ?
              <Link onClick={() => setModal(true)} className="cursor-pointer text-c8" href="#">
                Resend
              </Link>
            </span>

            <span className="flex text-xs text-c1 dark:text-c2">00:49</span>
          </div>
          <div className="flex  mt-[80px]">
            <span className="w-[95%] md:w-[90%] h-[1px] bg-c1 dark:bg-c2"></span>
          </div>
          <div className="text-c1 dark:text-c2 w-[80%] text-xs my-3 text-center">
            <span>
              © 2023 Infinity Digital Assets LLC. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
