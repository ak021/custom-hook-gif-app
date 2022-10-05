import React, { useEffect } from "react";
import Loader from "./Loader";
import useGif from "../hooks/useGif";

function Random_v2() {
  const { gif, fetchGif, isLoading } = useGif();

  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <div className="flex-1 flex items-center justify-between card bg-base-300 rounded-box p-4 drop-shadow-[0_5px_5px_rgba(256,256,256,0.15)]">
      <h1 className="text-sm font-bold">Random gif</h1>
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
      <button
        className="btn btn-outline btn-primary btn-sm mt-4"
        onClick={() => fetchGif()}
      >
        New gif
      </button>
    </div>
  );
}

export default Random_v2;
