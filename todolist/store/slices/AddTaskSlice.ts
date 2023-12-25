import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { initialStateType, Task } from '@/types/AddTaskTypes'
import { RootState } from '../store'


const initialState: initialStateType = {
    Tasks : []
}

const TasksSlice = createSlice({
    name: 'AddTaskReducer',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.Tasks.push({title: action.payload.title, isComplete: false}) 
            console.log('tasks', state.Tasks);
            
        }
        
    }
})

export const {addTask} = TasksSlice.actions
export const selectAllTasks = (state: RootState) => state.AddTaskReducer.Tasks
export default TasksSlice.reducer