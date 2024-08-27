import React, { Component } from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore, MdSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { AiTwotonePlaySquare } from "react-icons/ai";
import Chip from './Chip.tsx';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        const labels: string[] = [
            "All", "Gaming", "FC Barcelona", "Apple", "Sports leagues", "User interface design",
            "Gaming", "FC Barcelona", "Apple", "Sports leagues", "User interface design",
            "Music", "Mixes", "Live", "EFootball", "Editing", "Game shows", "Shorts", "Live", "Code with Harry", "Course", "Project", "Live", "Code with Harry", "Course", "Project"
        ];



        return (
            <div className=' flex  border-t-[1px] '>
                <div className='w-[240px] border-r-[1px]'>
                    <ul className='p-3'>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <IoHome className="w-6 h-6" />
                            <Link  to="/Home">Home</Link> 
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdOutlineExplore className="w-6 h-6" />
                            <Link  to="/Explore">Explore</Link>
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <SiYoutubeshorts className="w-6 h-6" />
                            <Link  to="/Shorts">Shorts</Link>
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5'>
                            <MdSubscriptions className="w-6 h-6" />
                            Subscription
                        </li>
                    </ul>
                    <hr />
                    <ul className='p-3'>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdOutlineVideoLibrary className="w-6 h-6" />
                            Library
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5'>
                            <GoHistory className="w-6 h-6" />
                            History
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <AiTwotonePlaySquare className="w-6 h-6" />
                            Your Videos
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdOutlineWatchLater className="w-6 h-6" />
                            Watch later
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            <MdPlaylistPlay className="w-6 h-6" />
                            Pop
                        </li>
                        <li className='flex justify-start h-[40px] px-3 items-center gap-5 font-normal'>
                            Share more
                        </li>
                    </ul>
                    <hr />
                </div>
                    <hr className='flex flex-col ' />
                <div className='flex p-3 h-fit gap-3 w-auto overflow-x-scroll scroll-container border-b-[1px] ' >
                    {labels.map((label, index) => (
                        <Chip key={index} label={label} />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}
