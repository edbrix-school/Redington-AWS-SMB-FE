"use client";
import Top from "../layout/top";
import Launchpad from "@/components/launchpad/launchpad";
import Announcements from "@/components/announcements/announcements";
// import HotSolutions from "@/components/hot-solutions/hot-solutions";


const Landing = () => {

  return (
    <>
      <div className="bg-[linear-gradient(180deg,#F4FEFD_5.38%,#FDFCF6_62.88%,#FFF_96.7%)]">
        <Top/>
        <Launchpad />
        <Announcements />
        {/* <HotSolutions /> */}
      </div>
    </>
  );
};

export default Landing;
