"use client";

import React from "react";
import Hero from "./components/Home/Hero";
import SeedRound from "./components/Home/SeedRound";
import HowItWorks from "./components/Home/HowItWorks";
import Roadmap from "./components/roadmap/roadmap";
import GlobalNetWealth from "./components/Home/GlobalNet";
import SocialCommunity from "./components/socialCommunity/socialCommunity";
import MeetTheTeam from "./components/Home/MeetTheTeam";

export default function Index() {
  return (
    <div className="page-index home max-w-[1600px] mx-auto">
      <Hero />
      <SeedRound />
      <HowItWorks />
      <Roadmap />
      <GlobalNetWealth />
      <div className="relative pt-10">
        <SocialCommunity />
      </div>
      <div className="relative py-20">
        <MeetTheTeam />
      </div>
    </div>
  );
}
