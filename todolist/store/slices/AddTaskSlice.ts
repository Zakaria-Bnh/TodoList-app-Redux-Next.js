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
                    
        },
        deleteTask: (state, action: PayloadAction<Task>) => {
             state.Tasks =  state.Tasks.filter(task => ( task.title !== action.payload.title)) 
        }
        
    }
})

export const {addTask, deleteTask} = TasksSlice.actions
export const selectAllTasks = (state: RootState) => state.AddTaskReducer.Tasks
export default TasksSlice.reducer