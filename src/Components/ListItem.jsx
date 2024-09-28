import React, { useEffect, useState } from 'react';
import Button from './Button';
import ProgressBar from './ProgressBar';
import { useDispatch } from 'react-redux';
import { deleteHabit, doneStatusHabit, pendingStatusHabit } from '../store/slices/habit/habitSlice';

const ListItem = ({habit}) => {
    const dispatch = useDispatch();
    const [IsMobile, setIsMobile] = useState(false);
    const [completedPercentage, setCompletedPercentage] = useState(0);
    useEffect(()=>{
        if(window.innerWidth< 500){
            setIsMobile(true)
        }
    },[])
    useEffect(()=>{
        setCompletedPercentage((100/habit.targetDays)*habit.completedDays)
    },[habit.completedDays])
    const removeHabit = ()=>{
        dispatch(deleteHabit(habit.id))
    }
    const toggleStatus = ()=>{
        dispatch(habit.status ? pendingStatusHabit(habit.id): doneStatusHabit(habit.id))
    }
    return (
        <div className='p-3 border-2 border-blue-500 flex flex-col gap-3'>
            <div className={`w-full flex ${IsMobile?'flex-col': 'justify-between'}`}>
                <div>
                <h2 className='font-semibold text-xl'>{habit.habitName}</h2>
                <p className='text-md text-slate-400 font-semibold'>Completed: {habit.completedDays}/{habit.targetDays}</p>
                </div>
                <div className='flex gap-2'>
                    <Button onClickHandler={toggleStatus} status={habit.status}/>
                    <Button onClickHandler={removeHabit} deleteBtn={true}/>
                </div>
            </div>
            <ProgressBar completed={completedPercentage}/>
        </div>
    );
}

export default ListItem;
