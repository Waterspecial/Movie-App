import React from "react";
import SavedShows from "../components/SavedShows";

const Profile = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/6330f8e3-d2af-43a2-9ea5-43b6e67a58e6/NG-en-20221214-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Profile;
