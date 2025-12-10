"use client";
import Launchpad from "./launchpad";
import Announcements from "./announcements";
import HotSolutions from "./hot-solutions";
import GroupSolution from "./group-solution";


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
