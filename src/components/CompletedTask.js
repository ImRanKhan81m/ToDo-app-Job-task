import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompletedTask = () => {
    const [completeTasks, setCompleteTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch(" https://fathomless-lake-37978.herokuapp.com/complete-task")
            .then((res) => res.json())
            .then((data) => setCompleteTasks(data));
    }, [isReload]);


    const handleDelete = (data) => {
        const title = data.title;
        const textData = data.textData;

        console.log({ title, textData });

        fetch(" https://fathomless-lake-37978.herokuapp.com/task", {
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
            });


        fetch(` https://fathomless-lake-37978.herokuapp.com/complete/${data._id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
                toast.success("This task is back on the To-Do list!")
            });
    };


    return (
        <div className='mid-content'>
            <h1 className='font-bold text-4xl text-center py-5'>Completed Tasks</h1>
            <div className='lg:w-9/12 mx-auto '>
                {completeTasks.map((task, index) => (
                    <div className='grid grid-cols-2 border p-5 shadow rounded-lg m-2 '>
                        <div className='flex w-full'>
                            <div className='mr-3'>
                                <p>{++index}. </p>
                            </div>
                            <div className=' flex'>
                                <p className='mr-2 font-bold'>{task?.title}-</p>
                                <p>{task?.textData}</p>
                            </div>

                        </div>
                        <div className='text-end'>
                            <div className='flex justify-end'>
                                <button className='btn btn-success btn-sm' onClick={() => handleDelete(task)}>Repeat</button>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompletedTask;