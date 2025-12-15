"use client";
import TopBar from '../layout/top';
import { NavBar } from '../layout/NavBar';
import TryOut from '@/components/my-solutions/tryout';
import Solutions from '@/components/my-solutions/solutions';
import GroupSolution from '@/components/my-solutions/group-solution';


const MySolutions = () => {

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <TopBar />
      <div className=" ">
        <NavBar />
        <TryOut />
        <Solutions />
        <GroupSolution />
      </div>
    </div>
  );
};

export default MySolutions;