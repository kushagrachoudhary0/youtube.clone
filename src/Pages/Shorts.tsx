import React, { useState } from "react";
import Sidebar from "../Comp/Sidebar.tsx";
import { FaThumbsUp, FaThumbsDown, FaShare } from "react-icons/fa";
import { MdInsertComment } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const Shorts = () => {
  const [likeActive, setLikeActive] = useState([false, false, false, false, false]);
  const [dislikeActive, setDislikeActive] = useState([false, false, false, false, false]);

  const handleLikeClick = (index) => {
    const newLikeState = [...likeActive];
    newLikeState[index] = !newLikeState[index];
    setLikeActive(newLikeState);

    if (dislikeActive[index]) {
      const newDislikeState = [...dislikeActive];
      newDislikeState[index] = false;
      setDislikeActive(newDislikeState);
    }
  };

  const handleDislikeClick = (index) => {
    const newDislikeState = [...dislikeActive];
    newDislikeState[index] = !newDislikeState[index];
    setDislikeActive(newDislikeState);

    if (likeActive[index]) {
      const newLikeState = [...likeActive];
      newLikeState[index] = false;
      setLikeActive(newLikeState);
    }
  };

  const videos = [
    "https://videos.pexels.com/video-files/3629511/3629511-hd_720_900_24fps.mp4",
    "https://videos.pexels.com/video-files/5896379/5896379-uhd_1440_2560_24fps.mp4",
    "https://videos.pexels.com/video-files/7438477/7438477-uhd_1440_2496_30fps.mp4",
    "https://videos.pexels.com/video-files/5828563/5828563-uhd_1440_2732_30fps.mp4",
    "https://videos.pexels.com/video-files/6853337/6853337-uhd_1440_2732_25fps.mp4",
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div className="max-h-[100vh] w-[1680px] flex justify-center items-center overflow-y-auto scroll-smooth">
          <div className="w-[500px] h-[875px] rounded-3xl scroll-auto">
            {videos.map((video, index) => (
              <div className="flex" key={index}>
                <video
                  src={video}
                  autoPlay
                  controls
                  muted
                  className="w-[470px] h-[875px] rounded-3xl border"
                />
                <div className="p-5 mt-[500px] grid gap-5">
                  <FaThumbsUp
                    onClick={() => handleLikeClick(index)}
                    className={`w-[50px] h-[50px] ${
                      likeActive[index] ? "bg-blue-500" : "bg-gray-300"
                    } rounded-full text-white p-3 cursor-pointer`}
                  />
                  <FaThumbsDown
                    onClick={() => handleDislikeClick(index)}
                    className={`w-[50px] h-[50px] ${
                      dislikeActive[index] ? "bg-blue-500" : "bg-gray-300"
                    } rounded-full text-white p-3 cursor-pointer`}
                  />
                  <MdInsertComment className="w-[50px] h-[50px] bg-gray-300 rounded-full text-white p-3" />
                  <FaShare className="w-[50px] h-[50px] bg-gray-300 rounded-full text-white p-3" />
                  <PiDotsThreeVerticalBold className="w-[50px] h-[50px] bg-gray-300 rounded-full text-white p-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorts;
