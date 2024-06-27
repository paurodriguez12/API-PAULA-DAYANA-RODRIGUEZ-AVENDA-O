import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard";

export function TasksList(){
    const [tasks, setTasks] = useState([]); // renamed `task` to `tasks` to avoid confusion

    useEffect(()=>{
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data);
        }
        loadTasks();
    },[])

    return (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "2rem"
      }}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} style={{
            margin: "1rem",
            flexBasis: "30%" // adjust the width of each card
          }}/>
        ))}
      </div>
    )
  }