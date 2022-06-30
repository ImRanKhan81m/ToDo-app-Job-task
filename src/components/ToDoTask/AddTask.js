import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import InputForm from './InputForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const [tasks, setTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch(" https://fathomless-lake-37978.herokuapp.com/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, [isReload]);


    const handleDelete = (id) => {
        console.log(id);

        fetch(` https://fathomless-lake-37978.herokuapp.com/task/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
                toast.error("This task has been deleted!")
            });
    };


    const handlePost = (data) => {
        const title = data.title;
        const textData = data.description;

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
                document.getElementById("myForm").reset();
            });

    };

    return (
        <div className='mid-content'>
            <div className='lg:w-9/12 mx-auto '>
                <InputForm handlePost={handlePost} />
                <div>
                    {tasks.map((task) => (
                        <TaskList
                            key={task._id}
                            task={task}
                            handleDelete={handleDelete}
                            setIsReload={setIsReload}
                            isReload={isReload}
                        />
                    ))}
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default AddTask;