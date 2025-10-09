import React from "react";

const User = () => {
  return (
    <div className="mx-auto text-[#FFFFFF] bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-center py-[80px]">
      <h1 className="font-bold text-[48px]  pb-[40px] ">
        Trusted by Millions, Built for You
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          {" "}
          <p className="text-[16px]">Total Downloads</p>
          <h1 className="font-extrabold text-[64px] py-4">29.6M</h1>
          <p className="text-[16px]">21% more than last month</p>
        </div>
        <div>
          {" "}
          <p className="text-[16px]">Total Reviews</p>
          <h1 className="font-extrabold text-[64px] py-4">906K</h1>
          <p className="text-[16px]">46% more than last month</p>
        </div>
        <div>
          {" "}
          <p className="text-[16px]">Active Apps</p>
          <h1 className="font-extrabold text-[64px] py-4">132+</h1>
          <p className="text-[16px]">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default User;
