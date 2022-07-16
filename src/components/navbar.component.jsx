import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [hidden, setHiden] = React.useState(true);
  return (
    <div className="sticky top-0 w-full h-[40px] md:h-[60px] z-10 bg-zinc-200 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl text-slate-800 font-bold mr-4 sm:text-3xl">
            BRAND.
          </h1>
        </div>
        <div className="max-w-[70%]">
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex mr-4 space-x-6 ">
          <button className="px-2 py-1.5 text-indigo-500 text-sm bg-transparent hover:bg-indigo-400 hover:text-white ">
            Sign In
          </button>
          <button className="px-2 text-sm text-center">Sign Up</button>
        </div>
        <div
          className="md:hidden cursor-pointer p-1 hover:bg-indigo-200 mr-2"
          onClick={() => setHiden(!hidden)}
        >
          {hidden ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul
        className={hidden ? "hidden" : "absolute bg-zinc-200 w-full px-[10px]"}
      >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">PlatForms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col items-center m-[1rem]">
          <button className="bg-transparent text-indigo-600 py-1 px-4 mb-4">
            Sign In
          </button>
          <button className="px-4 py-1">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
