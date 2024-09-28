import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    totalHabit: 0,
    lastUpdatedDay: Date().substring(4,15)
}


const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        addHabit: (state, action)=>{
            state.habits = [...state.habits, action.payload]
            state.totalHabit = state.habits.length
        },
        doneStatusHabit: (state, action)=>{
            state.habits = state.habits.map((habit)=> habit.id === action.payload ? {...habit, status: true, completedDays: habit.completedDays + 1}:habit)
        },
        pendingStatusHabit: (state, action)=>{
            state.habits = state.habits.map((habit)=> habit.id === action.payload ? {...habit, status: false, completedDays: habit.completedDays - 1}:habit)
        },
        updateStatusHabit: (state, action)=> {
            state.lastUpdatedDay = action.payload
            state.habits = state.habits.map((habit)=> {
                if(habit.completedDays === habit.targetDays) return habit
                return{...habit, status: false}
        })
        },
        deleteHabit: (state, action)=> {
            state.habits = state.habits.filter((habit)=> habit.id !== action.payload)
        }
    }
})

export default habitSlice.reducer;
export const {addHabit, doneStatusHabit, pendingStatusHabit, updateStatusHabit, deleteHabit} = habitSlice.actions;


/*
    toggleStatusHabit: (state, action)=> {
            state.habits = state.habits.map((habit)=>{
                if(habit.id===action.payload){
                    const habitStatus = habit.status
                    const completedDay = habit.completedDays
                    if(!habitStatus){
                        return {...habit, status: !habitStatus, completedDays: completedDay+1}
                    }else return {...habit, status: !habitStatus, completedDays: completedDay-1}
                } return habit
            })
        },
*/