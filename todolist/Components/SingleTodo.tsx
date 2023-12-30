"use client";
import { Task } from "@/types/AddTaskTypes";
import { MdModeEdit, MdSignalWifiStatusbarNull } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteTask } from "@/store/slices/AddTaskSlice";
import { useRef, useState } from "react";

const SingleTodo = ({ todo }: { todo: Task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [eidtedText, setEditedText] = useState(todo.title);
  const taskInput = useRef(null)

  const handleDeleteTask = () => {
    dispatch(deleteTask(todo));
    console.log("deleted", todo);
  };
  const handleEditTask = () => {
    setIsEditing(!isEditing)   
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.key === 'Enter' && setIsEditing(false)
    setEditedText(e.target.value)
    
  };
 
  return (
    <div className="bg-gray-300 text-black p-4 rounded-md shadow-md border border-gray-300">
      <div className="flex justify-between items-center">
        {isEditing ? <input type="text" value={eidtedText} ref={taskInput} onKeyDown={e => handleInputChange(e)} onChange={e => handleInputChange(e)} /> : <p>{eidtedText}</p>}
        <div className="flex gap-4 text-lg">
          <div onClick={handleEditTask}>
           { 
           isEditing ? 
          <FaCheck className="text-green-400" /> :
          <MdModeEdit className="text-green-400" /> 
           }
          </div>
          
          <FaTrashAlt
            onClick={handleDeleteTask}
            className="text-red-700 hover:text-red-800 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
  
};

export default SingleTodo;
