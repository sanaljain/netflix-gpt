import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 w-1/3 text-sm">{overview}</p>
      <div>
        <button
          className="px-8 py-2 mr-4 font-medium text-black bg-red-50 rounded-md"
          type="button"
        >
          Play
        </button>
        <button
          className="px-8 py-2 font-medium text-white bg-gray-500 opacity-40 rounded-md"
          type="button"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
