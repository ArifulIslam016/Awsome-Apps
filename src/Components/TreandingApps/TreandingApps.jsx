import React, { useEffect, useState } from "react";
import useApps from "../../CustomHooks/CustomHook";
import App from "../../App";

const TreandingApps = () => {
     const { Apps } = useApps();
    //   console.log(Apps);
  const [TrendingApps, setTreandingApps] = useState([]);
 
useEffect(()=>{
     
      const topDownload = [...Apps].sort((a, b) => a.downloads - b.downloads)
      console.log(topDownload)
      const top8 = topDownload.slice(0, 8);
      console.log(top8)
      setTreandingApps(top8);
},[Apps])
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-5xl font-bold text-[#001931]">Trending Apps</h1>
        <p className="text-[#627382] text-xl py-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <h1>{TrendingApps.length}</h1>
    </div>
  );
};

export default TreandingApps;
