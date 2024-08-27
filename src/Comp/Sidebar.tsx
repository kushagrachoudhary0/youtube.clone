import React, { Component } from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { AiTwotonePlaySquare } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";




export default class Sidebar extends Component {
  render() {
    return (
      <div className='w-[240px] '>
        <ul className='p-3'>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
            <IoHome className="w-6 h-6" />
             Home
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
            <MdOutlineExplore className="w-6 h-6" />
             Explore
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
            <SiYoutubeshorts className="w-6 h-6" />
             Shorts
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
        <MdSubscriptions className="w-6 h-6" />
             Subscription
            </li>
        </ul>
        <hr />
        <ul className='p-3'>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
            <MdOutlineVideoLibrary className="w-6 h-6" />
             Library
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 '>
            <GoHistory className="w-6 h-6" />
            History
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
            <AiTwotonePlaySquare className="w-6 h-6" />
             Your Videos
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
            <MdOutlineWatchLater className="w-6 h-6"  />
             Watch later    
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'>
            <MdPlaylistPlay  className="w-6 h-6" />
             Pop
            </li>
            <li className='flex justify-start h-[40px] px-3  items-center gap-5 font-normal'> 
                Share more
            </li>
        </ul>
        <hr />
  
      </div>
    )
  }
}
