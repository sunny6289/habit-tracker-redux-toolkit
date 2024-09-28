import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import InputBox from './InputBox';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addHabit } from '../store/slices/habit/habitSlice';

const CreateNewHabitForm = () => {
    const [WrongSubmission, setWrongSubmission] = useState(false);
    const dispatch = useDispatch();
    const [numOfDays, setNumOfDays] = useState('');
    const [newHabit, setNewHabit] = useState('');
    const changeNumofDays = (e)=>{
        if(Number(e.target.value) && Number(e.target.value) > 0 ){
            setNumOfDays(Number(e.target.value))
        }
        if(e.target.value===''){
            setNumOfDays('')
        }
    }

    const CreateNewHabit = ()=>{
        if(newHabit !== '' && numOfDays !== ''){
            const habit = {
                id : uuidv4(),
                habitName: newHabit,
                status: false, // Showing today's status
                targetDays: Number(numOfDays),
                completedDays: 0
            }
            setWrongSubmission(false)
            setNewHabit('')
            setNumOfDays('')
            dispatch(addHabit(habit))
        }else{
            setWrongSubmission(true)
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <InputBox numOfDays={numOfDays} setNumOfDays={changeNumofDays} newHabit={newHabit} setNewHabit={setNewHabit}/>
            {
                WrongSubmission ? <p className='text-red-500 font-mono'>All fields are required</p>:null
            }
            <Button onClickHandler={CreateNewHabit}/>
        </div>
    );
}

export default CreateNewHabitForm;
