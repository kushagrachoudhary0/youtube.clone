import React, { Component } from 'react';
interface ChipProps {
  label: string;
}

export default class Chip extends Component<ChipProps> {
  render() {
    const { label } = this.props;
    return (
      <div className="border w-fit whitespace-nowrap rounded-3xl border-gray-400 p-2 hover:bg-gray-300 cursor-pointer">
        {label}
      </div>
    );
  }
}
