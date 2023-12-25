
import AddTask from "@/Components/AddTask";
import Todolist from "@/Components/Todolist";

export default function Home() {
  return (
    <div className="bg-black min-h-screen max-w-[85%] sm:max-w-2xl md:max-w-3xl  mx-auto text-white">
      <div className="pt-2 mb-8">
        <h1 className="text-lg sm:text-2xl md:text-3xl text-center mt-4 sm:mt-8">
          TO Do List - Next.js & Redux
        </h1>
      </div>
      <div className="mx-auto px-4 sm:px-0 sm:max-w-[80%]">
        <AddTask />
        <Todolist />
      </div>
    </div>
  );
}
