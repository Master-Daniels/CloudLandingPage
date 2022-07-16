import React from "react";

const About = () => {
  return (
    <div className="w-full my-[12rem] px-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center  ">
          <h2 className="text-4xl font-bold">
            Trusted by Developers Around The World
          </h2>
          <p className="text-lg py-12 text-gray-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            inventore exercitationem, veniam fugiat optio ipsam ab cupiditate ex
            eligendi aut dolores placeat. Doloribus expedita deserunt quam aut
            dolore rem ab?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-3 px-2 text-center mx-auto md:w-1/1 ">
          <div className="border py-12 rounded-xl shadow-xl ">
            <p className="text-indigo-600 text-4xl font-bold">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-12 rounded-xl shadow-xl ">
            <p className="text-indigo-600 text-4xl font-bold">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-12 rounded-xl shadow-xl ">
            <p className="text-indigo-600 text-4xl font-bold">100k</p>
            <p className="text-gray-400 mt-2">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
