import React from 'react';


const InputBox = ({numOfDays, setNumOfDays, newHabit, setNewHabit}) => {
    
    return (
        <>
            <input type="text" placeholder='Enter new habit' className='border-2 border-blue-600 py-1 px-2 outline-none' value={newHabit} onChange={(e)=> setNewHabit(e.target.value)} />
            <input type="text" placeholder='Enter number of days' className='border-2 border-blue-600 py-1 px-2 outline-none' value={numOfDays} onChange={(e)=> setNumOfDays(e)}/>
        </>
    );
}

export default InputBox;
