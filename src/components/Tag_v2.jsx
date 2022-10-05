import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import useGif from "../hooks/useGif";

function Tag_v2() {
  const [tag, setTag] = useState("cat");
  const { gif, isLoading, fetchGif } = useGif();

  useEffect(() => {
    fetchGif(tag);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-between drop-shadow-[0_5px_5px_rgba(256,256,256,0.15)] card bg-base-300 rounded-box p-4">
      <h1 className="text-sm font-bold">Random {tag} gif</h1>
      <div className="flex-1 flex-col md:flex-row border w-full flex items-center justify-center mt-4 rounded-box">
        {isLoading ? (
          <Loader />
        ) : (
          <img
            src={gif}
            alt="some random gif in the internet"
            className="object-contain max-h-80 w-full"
          />
        )}
      </div>
      <div className="flex mt-4 items-center">
        <input
          value={tag}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          onChange={(e) => setTag(e.target.value)}
        />

        <button
          className="btn btn-outline btn-primary btn-sm ml-4"
          onClick={() => fetchGif(tag)}
        >
          Search gif
        </button>
      </div>
    </div>
  );
}

export default Tag_v2;
