"use client";
import Announcements from "@/components/announcements/announcements";
import Launchpad from "@/components/launchpad/launchpad";
import Top from "../layout/top";


const Landing = () => {

  return (
    <>
      <div className="bg-[linear-gradient(180deg,#F4FEFD_5.38%,#FDFCF6_62.88%,#FFF_96.7%)]">
        <Top/>
        <Launchpad />
        <Announcements />

      </div>
    </>
  );
};

export default Landing;
