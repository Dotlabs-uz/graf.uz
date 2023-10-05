import { useState, useEffect } from "react";
interface RangeProps {}

const Range: React.FC<RangeProps> = () => {
   const max = 10;
   const [value, setValue] = useState(0);

   // console.log(value);

   return (
      <div className="w-full mb-5">
         <input
            className="w-full"
            type="range"
            min={1}
            max={10}
            step={1}
            defaultValue={1}
            onChange={(e: any) => setValue(e)}
         />
      </div>
   );
};

export default Range;
