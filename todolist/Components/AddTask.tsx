"use client"

import { addTask } from "@/store/slices/AddTaskSlice";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask({title: value, isComplete: false}))
    setValue('')
    console.log('from handle submit', value);
  };

  const handleAddTask = () => {
    console.log('this is from button', value);
  }


  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col sm:flex-row gap-4 mb-12 mx-auto"
    >
      <input
        type="text"
        className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 shadow-sm"
        placeholder="Add new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue whitespace-nowrap"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
