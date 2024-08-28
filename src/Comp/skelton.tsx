import React, { Component } from 'react';

export default class Skeleton extends Component {
  render() {
    return (
      
        <ul className="flex gap-2 flex-wrap">
          {[...Array(20)].map((_, index) => (
            <li key={index} className="w-[400px] h-auto border rounded-[20px] bg-gray-200 animate-pulse">
              <div className="w-[400px] h-[25vh] border rounded-t-xl bg-gray-300"></div>
              <div className="flex justify-start items-center gap-5 p-3">
                <div className="w-[40px] h-[40px] border rounded-[50%] bg-gray-300"></div>
                <div>
                  <h2 className="font-semibold bg-gray-300 h-4 w-3/4 mb-2"></h2>
                  <div className="flex gap-16">
                    <p className="text-gray-400 bg-gray-300 h-3 w-1/4"></p>
                    <p className="text-gray-400 bg-gray-300 h-3 w-1/4"></p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
     
    );
  }
}
