import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateTask from "./UpdateTask"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskList = ({ task, handleDelete, isReload, setIsReload }) => {


    const handleComplete = data => {
        const title = data.title;
        const textData = data.textData;

        console.log({ title, textData });

        fetch(" https://fathomless-lake-37978.herokuapp.com/complete", {
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

        fetch(` https://fathomless-lake-37978.herokuapp.com/task/${data._id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
            });

    };

    return (
        <div>
            <div className='grid grid-cols-2 border p-5 shadow rounded-lg m-2'>
                <div className='flex w-full'>
                    <div className='mr-3'>
                        <input onClick={() => handleComplete(task)} type="radio" name="radio-1" className="radio" />
                    </div>
                    <div>
                        <p className='mr-2'><span className='font-bold'>{task?.title}-</span> {task?.textData}</p>
                    </div>

                </div>
                <div className='text-end'>
                    <div className='flex justify-end'>
                        <button onClick={() => handleDelete(task._id)}><FontAwesomeIcon className='text-right mr-3 text-xl' icon={faTrash}></FontAwesomeIcon></button>
                        <UpdateTask setIsReload={setIsReload} isReload={isReload} id={task?._id} />
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}


export default TaskList;