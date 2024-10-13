import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function Taskboard() {

    const initialTask = {
        "id":crypto.randomUUID(),
        "title":"Efficient Web API Connectivity in Python",
        "description":"Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
        "tags":["web","python","api"],
        "isFavourite":false
    }

    const [tasks , setTasks] = useState([initialTask]);
    

    return(
        <section className="mb-20" id="tasks">
		
		<div className="container">
			
            {/* search box */}
                <SearchBox/>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                {/* task action */}
				<TaskAction/>
                {/* task list */}
				<TaskList tasks={tasks}/>
			</div>
		</div>
	</section>
    )
};
