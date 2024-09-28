import React, { useState } from "react";

const ProgressBar = ({completed}) => {

    return (
        <div className='w-full h-[5px] bg-slate-300 rounded overflow-hidden'>
            <div style={{ width: `${completed}%` }} className={`h-full ${completed === 100 ? 'bg-green-500': 'bg-blue-500'} hover:h-[8px] `}></div>
        </div>
    );
}

export default ProgressBar;
