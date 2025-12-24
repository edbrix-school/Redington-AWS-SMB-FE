"use client";
import Announcements from "@/components/landing/announcements";
import GroupSolution from "@/components/landing/group-solution";
import HotSolutions from "@/components/landing/hot-solutions";
import Launchpad from "@/components/landing/launchpad";

const Landing = () => {

  return (
    <>
      <div className="min-h-screen bg-[linear-gradient(180deg,#F4FEFD_5.38%,#FDFCF6_62.88%,#FFF_96.7%)] font-sans flex flex-col overflow-x-hidden">
        <main className="flex-grow relative z-20 pb-10"> {/* Negative margin to overlap Hero */}
          <Launchpad />
          <Announcements />
          <HotSolutions />
          <GroupSolution />
        </main>
      </div>
    </>
  );
};

export default Landing;
