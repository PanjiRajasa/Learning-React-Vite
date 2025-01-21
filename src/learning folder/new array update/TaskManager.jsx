import { useState } from "react";

export default function TaskManager() {
    const [task,setTask] = useState([
        {id: 1, name: "Learn React"},
        {id: 2, name: "Practice it in a simple problem"},
        {id: 3, name: "Build a project"},
    ]);

    const [newName, setNewName] = useState('');
    const [taskIdUpdate, setTaskIdUpdate] = useState('');

    const updateTask = (id, newName) => {
        setTask(task.map(task => {
            return task.id === id ? {...task, name: newName} : task
        }))
    }

    return (
        <div>
            <br/>
            <br/>
            <h1>Task Manager</h1>
            <ul>
                {task.map(task => {
                    return <li key={task.id}>{task.id}: {task.name}</li>
                })}
            </ul>

            <h2>Update Task</h2>
            <input
                type="number"
                placeholder="Task ID"
                value={taskIdUpdate}
                onChange={(e) => setTaskIdUpdate(Number(e.target.value))}
            />
            <input
                type="text"
                placeholder="New Task Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />

            <button
                onClick={() => {
                    if(taskIdUpdate && newName) {
                        updateTask(taskIdUpdate, newName);
                        setTaskIdUpdate('');
                        setNewName('');
                    }
                }}
            >
                Update Task
            </button>
        </div>
    )
}