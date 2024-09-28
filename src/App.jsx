import React from 'react';
import CreateNewHabitForm from './Components/CreateNewHabitForm';
import ListContainer from './Components/ListContainer';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatusHabit } from './store/slices/habit/habitSlice';

const App = () => {
  const lastUpdatedDay = useSelector((state)=> state.habit.lastUpdatedDay);
  const dispatch = useDispatch();
  if(lastUpdatedDay !== Date().substring(4,15)){
    dispatch(updateStatusHabit(Date().substring(4,15)))
  }
  return (
    <div className='flex flex-col gap-3 pt-[100px] m-auto w-[70%]'>
      <div className='w-full text-center'>

      <h1 className='font-bold text-blue-600 font-sans text-4xl'>Habit Tracker</h1>
      </div>
      <CreateNewHabitForm/>
      <ListContainer/>
    </div>
  );
}

export default App;
