import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import InputForm from './InputForm';

const AddTask = () => {
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
            });
    };


    const handlePost = (data) => {
        const title = data.title;
        const textData = data.description;

        console.log({ title, textData });

        fetch("http://localhost:5000/task", {
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
        document.getElementById("myForm").reset();
    };

    return (
        <div className="App">
            <InputForm handlePost={handlePost} />
            Length: {tasks?.length}
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                {tasks.map((task) => (
                    <TaskList
                        task={task}
                        handleDelete={handleDelete}
                        setIsReload={setIsReload}
                        isReload={isReload}
                    />
                ))}
            </div>
        </div>
    );
}

export default AddTask;