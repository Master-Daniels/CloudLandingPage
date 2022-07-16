import React from "react";
import supportImg from "../assets/support.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

const Support = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full h-[780px] bg-gray-900/90 absolute">
        <img
          src={supportImg}
          alt="Support Img"
          srcSet=""
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] text-white mx-auto relative px-10">
        <div className="px-4 py-12">
          <h2 className="text-2xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding The Right Team
          </h3>
          <p className="py-4 text-xl text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            consequuntur provident eum aspernatur perferendis laborum.
            Reprehenderit, facilis. Fuga, corrupti atque. Natus, explicabo.
            Vitae cumque placeat eos repudiandae aut distinctio ipsum?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-10 gap-y-16 px-10 pt-12 sm:pt-20 text-black mt-[10%] ">
          <div className="bg-slate-200 rounded-2xl shadow-xl ">
            <div className="p-8">
              <PhoneIcon className="w-12 p-4 bg-indigo-600 text-white rounded-lg mt-[-3.5rem]" />
              <h3 className="font-bold text-2xl my-4">Sales</h3>
              <p className="text-gray-600 text-md my-4 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto commodi beatae animi illum quas inventore tempore cum
                facilis assumenda voluptas!
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-3 mt-[3.5rem] rounded-lg ">
              <p className="flex items-center text-indigo-400">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2 " />
              </p>
            </div>
          </div>
          <div className="bg-slate-200 rounded-xl shadow-xl ">
            <div className="p-8">
              <SupportIcon className="w-12 p-4 bg-indigo-600 text-white rounded-lg mt-[-3.5rem]" />
              <h3 className="font-bold text-2xl my-4">Technical Support</h3>
              <p className="text-gray-600 text-md my-4 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto commodi beatae animi illum quas inventore tempore cum
                facilis assumenda voluptas!
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-3 mt-[3.5rem] rounded-lg ">
              <p className="flex items-center text-indigo-400">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2 " />
              </p>
            </div>
          </div>
          <div className="bg-slate-200 rounded-xl shadow-xl ">
            <div className="p-8">
              <ChipIcon className="w-12 p-4 bg-indigo-600 text-white rounded-lg mt-[-3.5rem]" />
              <h3 className="font-bold text-2xl my-4">Media Inquiries</h3>
              <p className="text-gray-600 text-md my-4 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto commodi beatae animi illum quas inventore tempore cum
                facilis assumenda voluptas!
              </p>
            </div>
            <div className=" bg-slate-100 pl-8 py-3 mt-[3.5rem] rounded-lg ">
              <p className="flex items-center text-indigo-400">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2 " />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
