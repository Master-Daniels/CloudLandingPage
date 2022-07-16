import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:gap-0 md:grid-cols-6 border-b-2 border-gray-600 py-4">
        <div className="">
          <h6 className="font-bold uppercase pt-2 ">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2 ">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2 ">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blogs</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Partners</li>
            <li className="py-1">Press</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2 ">Legal</h6>
          <ul>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Claims</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2">
          <div className="pt-8 md:pt-2 ">
            <p className="font-bold uppercase">Subscribe to our Newsletter</p>
            <p className="py-4">
              The latest news , articles, and ressources to your inbox weekly.
            </p>
            <form className="flex flex-col place-content-center place-items-center md:flex-row">
              <input
                type="email"
                name=""
                id=""
                className="w-[80%] p-2 rounded-md mb-4"
              />
              <button className="p-1 m-2 mb-6">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] items-center px-2 py-4 m-auto sm:flex text-center text-gray-500 md:justify-between">
        <p>2022 Workflow, LLC. All right reserved.</p>
        <div className=" flex justify-between gap-x-6  sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
          <FaTwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
