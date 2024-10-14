import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function Taskboard() {

    const initialTask = {
        "id":crypto.randomUUID(),
        "title":"Efficient Web API Connectivity in Python",
        "description":"Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
        "tags":["web","python","api"],
        "isFavourite":true,
        "priority":"High"
    }

    const [tasks , setTasks] = useState([initialTask]);
    const [show , setShow] = useState(false);

    // edited data state container
    const [taskToUpdate , setTasksToUpdate] = useState(false);


    const handleAdd = (newTask) =>{
        setTasks([
            ...tasks,
            newTask
            
        ]);

        setShow(false)
    };

    // handle edit data
    const handleEdit = (task) =>{
        setTasksToUpdate(task);
        setShow(true);
        
    }

    
    
    return(
        <section className="mb-20" id="tasks">
            {
                show && <AddTask taskToUpdate={taskToUpdate} saveTask={handleAdd}/>
            }
		
		<div className="container">
			
            {/* search box */}
                <SearchBox/>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                {/* task action */}
				<TaskAction onAdd={()=>setShow(true)}/>
                {/* task list */}
				<TaskList handleEdit={handleEdit} tasks={tasks}/>
			</div>
		</div>
	</section>
    )
};
