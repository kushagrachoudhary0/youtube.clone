import React, { Component } from 'react'
import Chip from './Chip.tsx'

export default class NavSlide extends Component {
  render() {
    const labels: string[] = [
      "All", "Gaming", "FC Barcelona", "Apple", "Sports leagues", "User interface design",
      "Gaming", "FC Barcelona", "Apple", "Sports leagues", "User interface design",
      "Music", "Mixes", "Live", "EFootball", "Editing", "Game shows", "Shorts", "Live", "Code with Harry", "Course", "Project", "Live", "Code with Harry", "Course", "Project"
    ];
    return (
      <div className='flex p-3 h-fit gap-3 w-auto overflow-x-scroll scroll-container  ' > 
      {labels.map((label, index) => (
        <Chip key={index} label={label} />
      ))}
      </div>
    )
  }
}
