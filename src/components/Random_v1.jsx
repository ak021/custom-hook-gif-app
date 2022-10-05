import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
const API_KEY = process.env.REACT_APP_API_KEY;

function Random_v1() {
  const [gif, setGif] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchGif = async () => {
    setIsLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    console.log(data);
    const imgSrc = data.data.images.downsized_medium.url;
    console.log({ imgSrc });
    setGif(imgSrc);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleNewFetch = () => fetchGif();

  return (
    <div className="flex-1 flex items-center	justify-between border border border-base-content card bg-base-300 rounded-box p-4">
      <h1 className="text-sm font-bold">Random gif</h1>
      <div className="flex-1 border w-full flex items-center justify-center mt-4">
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
        class="btn btn-outline btn-primary btn-sm mt-4"
        onClick={handleNewFetch}
      >
        New gif
      </button>
    </div>
  );
}

export default Random_v1;
