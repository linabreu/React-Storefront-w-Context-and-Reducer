import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const Rating = ({ rating, onClick, style, fontSize }) => {
  return (
    <>
    {[...Array(5)].map((_, i) => (
        <span
            key = {i}
            onClick = {()=> onClick(i+1)}
            style ={style}
            >
            {rating > i ? (<FaStar fontSize= {fontSize} className="branded"/>):(<FaRegStar fontSize={fontSize}/>)}
        </span>))}
</>
)}
export default Rating