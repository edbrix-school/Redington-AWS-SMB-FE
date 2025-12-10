"use client";
import TryOut from "./tryout";
import Solutions from "./solutions";
import GroupSolution from "./group-solution";


const MySolutions = () => {

  return (
    <>
      <div className="relative bg-InterfaceSurfacepage bg-[linear-gradient(140deg,#9747ff36_0.01%,#ffc20000_40.72%)] ">
        <TryOut />
        <Solutions />
        <GroupSolution />
      </div>
    </>
  );
};

export default MySolutions;