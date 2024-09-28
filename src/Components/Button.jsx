import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Button = ({onClickHandler, status, deleteBtn}) => {
    return deleteBtn && status===undefined ? 
        ( <button className='outline-none border-2 border-red-600 text-red-600 flex items-center gap-2 bg-white font-semibold text-lg p-1 active:bg-red-600 active:text-white' onClick={onClickHandler}>
        <RiDeleteBinLine/>
        <span>Delete</span>
        </button>) : status === undefined && deleteBtn===undefined ? (
            <button className='outline-none bg-blue-600 text-white font-semibold text-xl p-1 rounded-md active:bg-blue-700' onClick={onClickHandler}>Add New Habit</button>
        ): !status && deleteBtn===undefined ? (
            <button className='outline-none border-2 border-yellow-300 text-yellow-300 flex items-center gap-2 bg-white font-semibold text-lg p-1' onClick={onClickHandler}>
        <IoIosCheckmarkCircleOutline/>
        <span>Mark as completed</span>
        </button>
        ) :  (
            <button className='outline-none border-2 border-green-500 text-green-500 flex items-center gap-2 bg-white font-semibold text-lg p-1' onClick={onClickHandler}>
        <IoIosCheckmarkCircle/>
        <span>Completed</span>
        </button>
        )

    // return (
    //     <>
    //         <button className='bg-blue-700 text-white font-semibold text-xl p-1 rounded-md'>button</button>
    //     </>
    // );
}

export default Button;
