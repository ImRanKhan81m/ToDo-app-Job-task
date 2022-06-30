import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateTask from "./UpdateTask"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, [isReload]);

    const handleDelete = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/task/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
                toast.error("This task has been deleted!")
            });
    };


    const handleComplete = data => {
        const title = data.title;
        const textData = data.textData;

        console.log({ title, textData });

        fetch("http://localhost:5000/complete", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },

            body: JSON.stringify({ title, textData }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
                toast.success("Task successfully completed.")
            });

        fetch(`http://localhost:5000/task/${data._id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
            });

    };

    return (
        <div className='mid-content'>
            <h1 className='font-bold text-5xl text-center py-5'>My To-Do List</h1>
            {tasks.map((task) => (
                <div className='grid grid-cols-2 border p-5 shadow rounded-lg m-2'>
                    <div className='flex w-full'>
                        <div className='mr-3'>
                            <input onClick={() => handleComplete(task)} type="radio" name="radio-1" className="radio" />
                        </div>
                        <div className=' flex'>
                            <p className='mr-2 font-bold'>{task?.title}-</p>
                            <p>{task?.textData}</p>
                        </div>

                    </div>
                    <div className='text-end'>
                        <div className='flex justify-end'>
                            <button onClick={() => handleDelete(task._id)}><FontAwesomeIcon className='text-right mr-3 text-xl' icon={faTrash}></FontAwesomeIcon></button>
                            {/* <button><FontAwesomeIcon className='text-right text-xl ml-2' icon={faEdit}></FontAwesomeIcon></button> */}
                            <UpdateTask setIsReload={setIsReload} isReload={isReload} id={task?._id} />
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            ))}

        </div>
    );
};

export default TodoList;