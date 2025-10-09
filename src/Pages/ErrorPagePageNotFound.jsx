import React from "react";
import PageNotFoundIMg from "../assets/pageNotFound.png";
import { useNavigate } from "react-router";
const ErrorPagePageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto">
      <img className="max-w-[800px] mx-auto" src={PageNotFoundIMg} alt="" />
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-5xl font-bold text-[#001931]">
          Oops, page not found!
        </h1>
        <p className="text-[#627382] text-xl py-4">
          The page you are looking for is not available.{" "}
        </p>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="text-white px-10 py-[14px] rounded-sm bg-gradient-to-br from-[#632EE3] to-[#9F62F2] max-w-[145px] mx-auto flex"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPagePageNotFound;
