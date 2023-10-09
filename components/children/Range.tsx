import { type } from "os";
import React, { useState } from "react";

const genSlideStyle = (value: any) => {
   return {
      point: {
         left: `calc(${value * 10}% - ${10 + 3 * value}px)`,
      },
      range: {
         width: `${value * 10}%`,
      },
   };
};

interface Range {
   active: any;
   setActive: Function;
}

const Range: React.FC<Range> = ({ active, setActive }) => {
   const handleChange = (e: any) => {
      setActive(+e.target.value);
   };

   const slideStyle = genSlideStyle(active);

   return (
      <div className="range-warapper">
         <div className="range">
            <span className="bullet" />
            <span className="bullet-1" />
            <span className="bullet-2" />
            <span className="bullet-3" />
            <span className="bullet-4" />
            <span className="bullet-5" />
            <span className="bullet-6" />
            <span className="bullet-7" />
            <span className="bullet-8" />
            <span className="range-value relative" style={slideStyle.range}>
               {/* <span className="circle" style={slideStyle.point} /> */}
               <span className="absolute -top-2 -right-6 w-14 h-16 rounded-[10px] cursor-grab bg-white" />
            </span>
            <input
               className="range-slide"
               name="range"
               type="range"
               min="1"
               max="10"
               defaultValue={active}
               value={active}
               step="1"
               onChange={handleChange}
            />
         </div>
      </div>
   );
};

export default Range;
