'use client'
import { selectAllTasks } from "@/store/slices/AddTaskSlice";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";



const Todolist = () => {
  const todos = useSelector(selectAllTasks)
  
  return <div className="flex flex-col gap-4">
    {todos.map((todo, index) => (
      <SingleTodo key={index} todo={todo} />
    ))}
  </div>;
};

export default Todolist;
