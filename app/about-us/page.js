// "use client";

// import GroupSolution from "@/components/about-us/group-solution";
// import Help from "@/components/about-us/help";
// import Launchpad from "@/components/about-us/launchpad";



// const AboutUs = () => {

//   return (
//     <>
//       <div className="relative bg-[linear-gradient(180deg,#F4FEFD_5.38%,#FDFCF6_62.88%,#FFF_96.7%)]">
//         <Launchpad />
//         <GroupSolution />
//         <Help />
//       </div>
//     </>
//   );
// };

// export default AboutUs;

"use client";
import GroupSolution from "@/components/about-us/group-solution";
import Help from "@/components/about-us/help";
import Launchpad from "@/components/about-us/launchpad";
 
 
 
const AboutUs = () => {
 
  return (
    <>
      <div className="relative bg-[#FFF]  mx-[20px] xl:mx-[10px] 2xl:mx-[10px] 3xl:mx-[10px]">
        <Launchpad />
        <GroupSolution />
        <Help />
      </div>
    </>
  );
};
 
export default AboutUs;