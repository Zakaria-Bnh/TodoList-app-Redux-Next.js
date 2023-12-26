'use client'
import { Task } from "@/types/AddTaskTypes";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTask } from "@/store/slices/AddTaskSlice";
import { useState } from "react";


 
const SingleTodo = ({todo} : {todo: Task}) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [eidtedText, setEditedText] = useState(todo.title)

  const handleDeleteTask = () => {
    dispatch(deleteTask(todo))
    console.log('deleted', todo);
  }


  return (
    <div className="bg-gray-300 text-black p-4 rounded-md shadow-md border border-gray-300">
      <div className="flex justify-between items-center">

        <p>{todo.title}</p>
        <div className="flex gap-4 text-lg">
          <MdModeEdit className="text-green-400"/>
          <FaTrashAlt onClick={handleDeleteTask} className="text-red-700 hover:text-red-800 cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

export default SingleTodo;
