import React, { Component, createRef } from "react";
import Sidebar from "../Comp/Sidebar.tsx";
import { FaThumbsUp, FaThumbsDown, FaShare, FaRegBookmark, FaRegClosedCaptioning } from "react-icons/fa";
import { MdInsertComment } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { FiAlignLeft } from "react-icons/fi";
import { IoRemoveCircleOutline, IoFlagOutline } from "react-icons/io5";
import { BiMessageError } from "react-icons/bi";

class Shorts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        "https://videos.pexels.com/video-files/5512609/5512609-hd_1080_1920_25fps.mp4",
        "https://videos.pexels.com/video-files/5896379/5896379-uhd_1440_2560_24fps.mp4",
        "https://videos.pexels.com/video-files/7438477/7438477-uhd_1440_2496_30fps.mp4",
        "https://videos.pexels.com/video-files/5828563/5828563-uhd_1440_2732_30fps.mp4",
        "https://videos.pexels.com/video-files/6853337/6853337-uhd_1440_2732_25fps.mp4",
        "https://videos.pexels.com/video-files/8508072/8508072-sd_360_640_25fps.mp4",
        "https://videos.pexels.com/video-files/26727948/11994074_360_640_60fps.mp4",
        "https://videos.pexels.com/video-files/6421077/6421077-sd_506_960_30fps.mp4",
        "https://videos.pexels.com/video-files/27127565/12080408_360_640_30fps.mp4",
        "https://videos.pexels.com/video-files/27349981/12121050_360_640_60fps.mp4",
        "https://videos.pexels.com/video-files/20684425/20684425-sd_360_640_30fps.mp4",
        "https://videos.pexels.com/video-files/20547380/20547380-sd_360_640_29fps.mp4",
        "https://videos.pexels.com/video-files/17459950/17459950-sd_360_640_30fps.mp4",
        "https://videos.pexels.com/video-files/18947594/18947594-sd_360_640_30fps.mp4",
        "https://videos.pexels.com/video-files/12617592/12617592-sd_360_640_30fps.mp4",
        "https://videos.pexels.com/video-files/27424776/12140149_360_640_30fps.mp4",
        "https://videos.pexels.com/video-files/27259643/12104960_360_640_30fps.mp4",
        "https://videos.pexels.com/video-files/26975053/12040595_360_640_60fps.mp4",
        "https://videos.pexels.com/video-files/26626391/11978854_360_640_60fps.mp4",
      ],
      likeActive: Array(21).fill(false),
      dislikeActive: Array(21).fill(false),
      menuActive: Array(21).fill(false),
      currentSection: 0,
    };
    this.containerRef = createRef();
  }

  handleLikeClick = (index) => {
    const newLikeState = [...this.state.likeActive];
    newLikeState[index] = !newLikeState[index];
    this.setState({ likeActive: newLikeState });

    if (this.state.dislikeActive[index]) {
      const newDislikeState = [...this.state.dislikeActive];
      newDislikeState[index] = false;
      this.setState({ dislikeActive: newDislikeState });
    }
  };

  handleDislikeClick = (index) => {
    const newDislikeState = [...this.state.dislikeActive];
    newDislikeState[index] = !newDislikeState[index];
    this.setState({ dislikeActive: newDislikeState });

    if (this.state.likeActive[index]) {
      const newLikeState = [...this.state.likeActive];
      newLikeState[index] = false;
      this.setState({ likeActive: newLikeState });
    }
  };

  handleMenuClick = (index) => {
    const newMenuState = [...this.state.menuActive];
    newMenuState[index] = !newMenuState[index];
    this.setState({ menuActive: newMenuState });
  };

  handleScroll = () => {
    const container = this.containerRef.current;
    if (container) {
      const sections = container.children;
      let newSection = this.state.currentSection;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          newSection = i;
          break;
        }
      }

      this.setState({ currentSection: newSection });
    }
  };

  render() {
    const { videos, likeActive, dislikeActive, menuActive } = this.state;

    return (
      <div className="flex h-[92vh] w-full overflow-hidden">
        <Sidebar />
        <div className="max-h-[100vh] w-[1680px] flex justify-center items-center overflow-y-auto scroll-smooth scroll-container">
          <div
            className="w-[580px] h-[875px] rounded-3xl scroll-smooth"
            ref={this.containerRef}
            onScroll={this.handleScroll}
            style={{
              height: '100vh',
              overflowY: 'scroll',
              scrollSnapType: 'y mandatory',
            }}
          >
            {videos.map((video, index) => (
              <div className="relative flex" style={{ scrollSnapAlign: "start" }} key={index}>
                <video
                  src={video}
                  autoPlay
                  controls
                  muted
                  className="w-[470px] h-[875px] rounded-3xl border"
                />
                <span className="absolute bottom-4 text-white p-3 w-[23vw]">
                  World's best waterfall paper. Niagara jalprapat waterfall ll the best waterfall ever in the world
                </span>
                <span className="absolute bottom-16 text-white p-3">
                  @Natural <button className="text-black rounded-full bg-white w-24">Subscribe</button>
                </span>
                <div className="p-5 mt-[500px] grid gap-5">
                  <FaThumbsUp
                    onClick={() => this.handleLikeClick(index)}
                    className={`w-[50px] h-[50px] ${
                      likeActive[index] ? "bg-blue-500" : "bg-gray-300"
                    } rounded-full text-white p-3 cursor-pointer`}
                  />
                  <FaThumbsDown
                    onClick={() => this.handleDislikeClick(index)}
                    className={`w-[50px] h-[50px] ${
                      dislikeActive[index] ? "bg-blue-500" : "bg-gray-300"
                    } rounded-full text-white p-3 cursor-pointer`}
                  />
                  <MdInsertComment className="w-[50px] h-[50px] bg-gray-300 rounded-full text-white p-3" />
                  <FaShare className="w-[50px] h-[50px] bg-gray-300 rounded-full text-white p-3" />
                  <PiDotsThreeVerticalBold
                    onClick={() => this.handleMenuClick(index)}
                    className="w-[50px] h-[50px] bg-gray-300 rounded-full text-white p-3 cursor-pointer"
                  />
                </div>
                {menuActive[index] && (
                  <div className="absolute bottom-16 right-0 w-[280px] h-[200px] bg-white border border-gray-300 rounded-lg shadow-lg p-5">
                    <div className="flex gap-3 items-center">
                      <FiAlignLeft className="w-[24px] h-[24px]" />
                      <h4>Description</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                      <FaRegBookmark className="w-[24px] h-[24px]" />
                      <h4>Save to playlist</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                      <FaRegClosedCaptioning className="w-[24px] h-[24px]" />
                      <h4>Captions</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                      <IoRemoveCircleOutline className="w-[24px] h-[24px]" />
                      <h4>Don't recommend this channel</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                      <IoFlagOutline className="w-[24px] h-[24px]" />
                      <h4>Report</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                      <BiMessageError className="w-[24px] h-[24px]" />
                      <h4>Send feedback</h4>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shorts;
