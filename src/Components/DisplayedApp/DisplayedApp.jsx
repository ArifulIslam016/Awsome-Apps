import React from "react";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";


const DisplayedApp = ({ treandingApp }) => {
  // console.log(treandingApp);
  return (
    <div className="p-4 space-y-4 bg-[#FFFFFF] rounded-lg">
      <img
        className="h-[316px] w-[316px] rounded-lg"
        src={treandingApp.image}
        alt=""
      />
      <h1 className="text-xl font-bold">{treandingApp.title}</h1>
      <div className="flex justify-between w-full">
        {" "}
        <h4 className="text-[#00D390] bg-[#F1F5E8] rounded-sm flex justify-center items-center w-[69px]">
          {" "}
          <FaArrowDown className="mr-2"></FaArrowDown>
          {treandingApp.downloads / 1000}K
        </h4>
        <h4 className="text-[#FF8811] bg-[#FFF0E1] rounded-sm flex  p-1 items-center">
          {" "}
          <FaStar className="mr-1"></FaStar>
          {treandingApp.ratingAvg}K
        </h4>
      </div>
   
    </div>
  );
};
export default DisplayedApp;
/**
 * {image: 'https://cdn-icons-png.flaticon.com/512/888/888848.png', title: 'BookNest Reader', companyName: 'ReadersWorld', id: 11, description: 'E-book reader with library sync and offline mode.', …}
companyName
: 
"ReadersWorld"
description
: 
"E-book reader with library sync and offline mode."
downloads
: 
70000
id
: 
11
image
: 
"https://cdn-icons-png.flaticon.com/512/888/888848.png"
ratingAvg
: 
4.2
ratings
: 
(5) [{…}, {…}, {…}, {…}, {…}]
reviews
: 
890
size
: 
55
title
: 
"BookNest Reader"
[[Prototype]]
: 
Object
 */
