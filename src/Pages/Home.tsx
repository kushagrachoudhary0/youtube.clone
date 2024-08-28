import React, { Component } from 'react';
import Sidebar from '../Comp/Sidebar.tsx';
import Chip from '../Comp/Chip.tsx';
import Data from '../Comp/Data.tsx';
// import '../Comp/Api.js'

export default class Home extends Component {
  render() {
    const labels: string[] = [
      "All", "Gaming", "FC Barcelona", "Apple", "Sports leagues", "User interface design",
      "Gaming", "FC Barcelona", "Apple", "Sports leagues", "User interface design",
      "Music", "Mixes", "Live", "EFootball", "Editing", "Game shows", "Shorts", "Live", "Code with Harry", "Course", "Project", "Live", "Code with Harry", "Course", "Project"
    ];

    return (
      <div className='flex h-full border-t-[1px] border-b-[2px]'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <div className='flex p-3 gap-3 overflow-x-auto  overflow-y-hidden border-b-[1px] w-[87vw] scroll-container'>
            {labels.map((label, index) => (
              <Chip key={index} label={label} />
            ))}
          </div>
            <div className=' overflow-y-auto h-[85vh] overflow-x-auto p-3 w-full'>
             <Data/>
            </div>
        </div>
      </div>
    );
  }
}
