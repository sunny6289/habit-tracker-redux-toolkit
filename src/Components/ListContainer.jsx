import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const ListContainer = () => {
    const habitList = useSelector((state)=> state.habit.habits)
    return (
        <div className='w-full flex flex-col gap-3'>
           {
                habitList && habitList.length ? habitList.map((habit)=><ListItem key={habit.id} habit={habit}/>): <p className='text-center mt-5 text-zinc-500 font-semibold text-2xl'>No habits :( </p>
           }
        </div>
    );
}

export default ListContainer;
