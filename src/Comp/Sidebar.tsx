import React, { Component } from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore, MdSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { AiTwotonePlaySquare } from "react-icons/ai";
import { Link } from 'react-router-dom';


export default class Sidebar extends Component {
    render() {
        



        return (
            <div className=' flex '>
                <div className='w-[240px] border-r-[1px]'>
                    <ul className='p-3'>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            <IoHome className="w-6 h-6" />
                            <Link  to="/">Home</Link> 
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            <MdOutlineExplore className="w-6 h-6" />
                            <Link  to="/Explore">Explore</Link>
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            <SiYoutubeshorts className="w-6 h-6" />
                            <Link  to="/Shorts">Shorts</Link>
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 hover:bg-gray-100 cursor-pointer"'>
                            <MdSubscriptions className="w-6 h-6" />
                            Subscription
                        </li>
                    </ul>
                    <hr />
                    <ul className='p-3'>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            <MdOutlineVideoLibrary className="w-6 h-6" />
                            Library
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 hover:bg-gray-100 cursor-pointer"'>
                            <GoHistory className="w-6 h-6" />
                            History
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            <AiTwotonePlaySquare className="w-6 h-6" />
                            Your Videos
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            <MdOutlineWatchLater className="w-6 h-6" />
                            Watch later
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            <MdPlaylistPlay className="w-6 h-6" />
                            Pop
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal hover:bg-gray-100 cursor-pointer"'>
                            Share more
                        </li>
                    </ul>
                    <hr />
                    
                </div>
                {/* <div className='w-[240px] border-r-[1px]'>
                    <ul className='p-3'>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <IoHome className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdOutlineExplore className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <SiYoutubeshorts className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5'>
                            <MdSubscriptions className="w-6 h-6" />
                        </li>
                    </ul>
                    <hr />
                    <ul className='p-3'>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdOutlineVideoLibrary className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5'>
                            <GoHistory className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <AiTwotonePlaySquare className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdOutlineWatchLater className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdPlaylistPlay className="w-6 h-6" />
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <FaRegShareSquare />
                        </li>
                    </ul>
                    <hr />
                    
                </div> */}
                    <hr className='flex flex-col ' />
                <div >
                </div>
                <hr />
            </div>
        );
    }
}
