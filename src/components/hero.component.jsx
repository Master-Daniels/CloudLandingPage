import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import cyber from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div className="max-w-[100vw] pb-8 bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto my-10 px-5 md:px-10">
        <div className="flex flex-col flex-wrap gap-3 items-center md:items-start w-full px-2 justify-center ">
          <p className="text-2xl md:text-2xl">
            Unique Sequencing and Production
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">Cloud Management</h1>
          <p className=" text-xl md:text-2xl">This is our tech Brand</p>
          <div className="flex justify-center">
            <button className="py-2 md:px-2 px-2 ">Get Started</button>
          </div>
        </div>
        <div className="flex justify-center ">
          <img
            className="w-[70%] md:w-full mt-10 md:mt-0"
            src={cyber}
            alt="/"
            srcSet=""
          />
        </div>
      </div>
      <div className="container max-w-[100vw] text-center m-auto shadow-lg flex flex-col items-center justify-center bg-zinc-200 rounded-lg -mb-[10rem] md:-mb-[7rem] py-5 px-5 w-2/4 h-[50%] ">
        <p className="mb-4 text-xl font-bold">Data Services</p>
        <div className="flex gap-7 flex-wrap">
          <p className="flex justify-center items-center text-xs ">
            <CloudUploadIcon className="h-6 text-indigo-600 " /> App Security
          </p>
          <p className="flex justify-center items-center text-xs ">
            <DatabaseIcon className="h-6 text-indigo-600 " /> Dashboard Design
          </p>
          <p className="flex justify-center items-center text-xs ">
            <ServerIcon className="h-6 text-indigo-600 " /> Cloud Data
          </p>
          <p className="flex justify-center items-center text-xs ">
            <PaperAirplaneIcon className="h-6 text-indigo-600 " /> API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
