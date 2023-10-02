import React from "react";
import Image from "next/image";
import Button from "../button/button";
import styles from "./Home.module.css";
import { useTheme } from "next-themes";
// data
import { content } from "@/app/data";
import Link from "next/link";

const { teamMembers } = content;

const TeamMembers = teamMembers;

export default function MeetTheTeam() {
  const { theme } = useTheme();
  return (
    <div className="bg-transparent">
      <div className="w-[100%] md:flex md:flex-col md:items-center md:justify-center">
        <p className="text-center sectionHeadingText">
          <span className="text-gradient-blue-cyan">Meet </span> The Team
        </p>
      </div>
      <div className="w-[100%] headingGapTop xl:flex">
        <div
          className={`w-full max-w-[1024px] mx-auto py-6 px-3 md:px-10 border-0 sm:border border-[var(--cyan)] rounded-[35px] bg-transparent md:bg-[#efefef1a] ${styles.team_wrap}`}
        >
          <div className="flex items-center justify-center">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {TeamMembers.slice(0, 6).map((item, index) => (
                <div
                  className="p-3 mx-3 transition duration-500 bg-white shadow-lg hover:-translate-y-1 hover:scale-110 mb-7 rounded-xl custom-hover group"
                  // className={`${styles.card} ${
                  //   selectedMember === item ? styles.selectedCard : item
                  // }`}
                  key={index}
                  // onClick={() => handleMemberClick(item)}
                >
                  <div className="flex items-center justify-center">
                    <div
                      className="w-[97%] h-[174px] rounded-xl"
                      style={{
                        backgroundImage: `url(${item.Image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div className="flex items-start justify-between mt-4 team_member_info">
                    <div className="flex flex-col justify-start ml-4">
                      <div>
                        <p
                          className={`text-black font-bold text-lg group-hover:text-black dark:group-hover:text-white`}
                        >
                          {item.Name}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-blue text-sm group-hover:text-black dark:group-hover:text-white`}
                        >
                          {item.Designation}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 mr-7">
                      <a href={item.linkedinUrl} target="__blank">
                        <Image
                          src={"https://images.infinitydigitalassets.io/assets/icons/meet-team-linkedin.svg"}
                          width={24}
                          height={24}
                          alt={item.Name}
                          className="hover:fill-white"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="all_members_btn max-w-[200px] mx-auto">
            <Link href="/company#meet-the-team">
              <Button
                label={"Show All"}
                variant={theme === "dark" ? "solid" : "lightSolid"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
