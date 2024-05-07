// import React from 'react';
import {Shimmer} from 'react-shimmer';

const ShimmerUI = () => {
  return (
    <div className="m-4 h-[22rem]  w-60 border rounded-lg cursor-pointer hover:bg-gray-100 overflow-hidden">
    <Shimmer width={300} height={500}></Shimmer>
   </div>
  );
}

export default ShimmerUI;