import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function Taskboard() {
  const initialTask = {
    id: crypto.randomUUID(),
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
    tags: ["web", "python", "api"],
    isFavourite: true,
    priority: "High",
  };

  const [tasks, setTasks] = useState([initialTask]);
  const [show, setShow] = useState(false);

  // edited data state container
  const [taskToUpdate, setTasksToUpdate] = useState(null);

  const handleAdd = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }

    setShow(false);
  };

  // handle edit data
  const handleEdit = (task) => {
    setTasksToUpdate(task);
    setShow(true);
  };

  // handle close button
  const handleClose = () => {
    setTasksToUpdate(null);
    setShow(false);
  };
  // handle delete task
  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };
//   handle delete all
const handleDeleteAll = () =>{
    tasks.length = 0;
    setTasks([...tasks])
};

const handlePriority = (task) =>{
    const taskIndex = tasks.findIndex((i)=>i.id===task.id);
    
   const newTask = [...tasks];
   newTask[taskIndex].isFavourite = !newTask[taskIndex].isFavourite;

   setTasks(newTask)
   
};

// handle search

const handleSearchText = (searchText) =>{
   
    const searchResult = tasks.filter(task=>task.title.toLocaleLowerCase().includes(searchText));
    console.log([...searchResult])
    setTasks(
        [...searchResult]
    )
    
}

  return (
    <section className="mb-20" id="tasks">
      {show && (
        <AddTask
          handleClose={handleClose}
          taskToUpdate={taskToUpdate}
          saveTask={handleAdd}
        />
      )}

      <div className="container">
        {/* search box */}
        <SearchBox handleSearchText={handleSearchText} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* task action */}
          <TaskAction deleteAll={handleDeleteAll} onAdd={() => setShow(true)} />
          {/* task list */}
          <TaskList
            handleDeleteTask={handleDeleteTask}
            handleEdit={handleEdit}
            tasks={tasks}
            handlePriority={handlePriority}
          />
        </div>
      </div>
    </section>
  );
}
