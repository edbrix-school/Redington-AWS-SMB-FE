"use client";
import Top from "../layout/top";
import Launchpad from "./launchpad";
import Announcements from "./announcements";
import HotSolutions from "./hot-solutions";
import GroupSolution from "./group-solution";
import Footer from "../layout/footer";


const Landing = () => {

  return (
    <>
      <div className="bg-[linear-gradient(180deg,#F4FEFD_5.38%,#FDFCF6_62.88%,#FFF_96.7%)]">
        {/* <Top/> */}
        <Launchpad />
        <Announcements />
        <HotSolutions />
        <GroupSolution />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Landing;
