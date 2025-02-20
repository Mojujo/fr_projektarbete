import styles from "./TaskList.module.css"
import { useState } from "react";
import { type Task } from "../types/Task";
import { CheckCircle, Circle, Trash } from "lucide-react"

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<string>("");

    const addTask = (): void => {
        if (task.trim() === "") return;
        setTasks([...tasks, { text: task, completed: false }]);
        setTask("");
    }

    const toggleTask = (index: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((t, i) =>
                i === index ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <>
            <h1 className={styles.taskTitle}>Task List</h1>
            <div className={styles.taskInput}>
                <input className="" type="text"
                    placeholder="Add a task. . ."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="" onClick={addTask}>Add</button>
            </div>
            <ul className={styles.taskContainer}>
                {tasks.map((t, i) => (
                    <li key={i} className={styles.taskList}>
                        <div className={styles.taskMain}>
                            <div className={styles.taskCheckmark} onClick={() => toggleTask(i)}>
                                {t.completed ? <CheckCircle className={styles.taskCompleted} /> : <Circle />}
                            </div>
                            <span className={`${t.completed ? styles.lineThrough : ""}`}>
                                {t.text}
                            </span>
                        </div>
                        <button onClick={() => removeTask(i)} className={styles.taskButton}>
                            <Trash />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}