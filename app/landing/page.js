"use client";
import Announcements from "@/components/landing/announcements";
import GroupSolution from "@/components/landing/group-solution";
import HotSolutions from "@/components/landing/hot-solutions";
import Launchpad from "@/components/landing/launchpad";

const Landing = () => {

  return (
    <>
      <div className="bg-[linear-gradient(180deg,#F4FEFD_5.38%,#FDFCF6_62.88%,#FFF_96.7%)]">
        <Launchpad />
        <Announcements />
        <HotSolutions />
        <GroupSolution />
      </div>
    </>
  );
};

export default Landing;
