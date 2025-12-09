"use client";
import Launchpad from "./launchpad";
import Help from "./help";
import GroupSolution from "./group-solution";


const Landing = () => {

  return (
    <>
      <div className="relative bg-[linear-gradient(180deg,#F4FEFD_5.38%,#FDFCF6_62.88%,#FFF_96.7%)]">
        <Launchpad />
        <GroupSolution />
        <Help />
      </div>
    </>
  );
};

export default Landing;