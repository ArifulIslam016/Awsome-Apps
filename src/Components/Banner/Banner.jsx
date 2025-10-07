import React from 'react';
import appStoreLogo from '../../assets/AppStore.png'
import playStoreLogo from '../../assets/playStore.png'
const Banner = () => {
    return (
      <div className="">
        <h1 className="text-[72px] font-bold text-center pt-[80px] px-3 md:px-12 lg:px-[421px]">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center text-xl text-[#627382] pt-4 px-3 md:px-8 lg:px-[230px]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="max-w-[440px] gap-4 flex mx-auto pt-10 pb-10">
          {" "}
          <a
            href="https://play.google.com/store/games?hl=en"
            className="flex items-center btn"
          >
            {" "}
            <img src={playStoreLogo} alt="playStoreLogo" />
            Play Store
          </a>
          <a
            href="https://www.apple.com/app-store/"
            className="flex items-center btn"
          >
            {" "}
            <img src={appStoreLogo} alt="appStoreLogo" />
            App Store
          </a>
        </div>
      </div>
    );
};

export default Banner;