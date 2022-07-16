import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className="w-full text-white">
      <div className="w-full h-[550px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="container max-w-[1240px] mx-auto py-12 ">
        <div className="text-center py-4  text-slate-300 px-10 ">
          <h2 className="uppercase text-xl ">Pricing</h2>
          <h3 className="font-bold text-white text-3xl py-6">
            The Right For Your Research
          </h3>
          <p className=" text-md ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            delectus aspernatur tempore suscipit distinctio culpa sit esse
            incidunt id totam?
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 relative mx-10 ">
        <div className="bg-white text-slate-900 m-10 py-8 px-4 rounded-xl shadow-2xl">
          <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
            Standard
          </span>
          <div>
            <p className="text-4xl text-slate-500 font-bold py-4 flex">
              $49
              <span className="text-sm text-slate-500 flex flex-col justify-end">
                /mon
              </span>
            </p>
          </div>
          <p className="py-6 text-slate-500 relative ">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <div>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <button className="p-2 text-xs">Get Started</button>
          </div>
        </div>
        <div className="bg-white text-slate-900 m-10 py-8 px-4 rounded-xl shadow-2xl">
          <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
            Premium
          </span>
          <div>
            <p className="text-4xl text-slate-500 font-bold py-4 flex">
              $99
              <span className="text-sm text-slate-500 flex flex-col justify-end">
                /mon
              </span>
            </p>
          </div>
          <p className="py-6 text-slate-500 relative ">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <div>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-sm">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <button className="p-2 text-xs">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
