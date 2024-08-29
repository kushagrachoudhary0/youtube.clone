import React, { Component } from "react";
import Sidebar from "../Comp/Sidebar.tsx";
const imgloacl = require("../image/Frame 35.png")


export default class Explore extends Component {
  render() {
    return (
      <div className="flex ">
        <Sidebar />
        <div>
          <div className="max-h-[1680px]  ">
            <div className="w-[1680px] justify-center items-center ">
              <h1 className="text-5xl ml-5	">Trending</h1>
              <br />
              <div className="w-[300px] flex justify-around items-center ml-3">
                <button className="">Now</button> <button>Music</button>
                <button>Gaming</button> <button>Moives</button>
              </div>
              <br />
              <hr />
            </div>
            <div>
               <img src={imgloacl} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// useCallBack 
// useMemo
// React.memo

{/* <HigherOrderCOmponent></HigherOrderCOmponent>
<HigherOfFunction></HigherOfFunction> */}