import { Task } from "@/types/AddTaskTypes";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";



const SingleTodo = ({todo} : {todo: Task}) => {
  return (
    <div className="bg-gray-300 text-black p-4 rounded-md shadow-md border border-gray-300">
      <div className="flex justify-between items-center">

        <p>{todo.title}</p>
        <div className="flex gap-4 text-lg">
          <MdModeEdit className="text-green-400"/>
          <FaTrashAlt className="text-red-700" />
        </div>
      </div>

    </div>
  );
};

export default SingleTodo;
