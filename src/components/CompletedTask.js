import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completeTasks, setCompleteTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/complete-task")
            .then((res) => res.json())
            .then((data) => setCompleteTasks(data));
    }, [isReload]);


    return (
        <div className='mid-content'>
            Total Complete: {completeTasks.length}
        </div>
    );
};

export default CompletedTask;