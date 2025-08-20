import React, { useState } from 'react'

function To_Do_list() {

    const [task, setTask] = useState(["eat", "sleep", "code"]);
    const [newTask, setNewtask] = useState("");

    function handleInputChange(e) {

        setNewtask(e.target.value);

    }
    function addText() {

        if (newTask.trim() === "") {
            alert("Please enter a task");
            return;
        }

        else {
            setTask(t => [...t, newTask]);
            setNewtask("");
        }

    }
    function deleteText(index) {

        // Remove the task at the given index from the task array
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);

    }
    function moveTaskUp(index) {

        if (index > 0) {
            // Check if the index is greater than 0 to avoid out of bounds
            const updatedTasks = [...task];
            // Swap the current task with the one above it
            [updatedTasks[index], updatedTasks[index - 1]]
                = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }

    }
    function moveTaskdown(index) {
        // Check if the index is less than the last index to avoid out of bounds
        // and if the task is not already at the bottom
          if (index < task.length - 1) {
            const updatedTasks = [...task];
            // Swap the current task with the one above it
            [updatedTasks[index], updatedTasks[index + 1]]
                = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }



    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>


            <div>

                <input type="text" placeholder='Enter Your Text..' value={newTask} onChange={handleInputChange} />

                <button className='Add-btn' onClick={addText}>ADD Task</button>

            </div>
            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>

                        <button className='delet-btn' onClick={() => deleteText(index)}>Delet</button>

                        <button className='up-btn' onClick={() => moveTaskUp(index)}>👆</button>

                        <button className='down-btn' onClick={() => moveTaskdown(index)}>👇</button>

                    </li>


                )}

            </ol>


        </div>

    )
}
export default To_Do_list