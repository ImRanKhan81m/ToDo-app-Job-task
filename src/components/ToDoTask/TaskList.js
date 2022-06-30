import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateTask from "./UpdateTask"
import React from 'react';

const TaskList = ({ task, handleDelete, isReload, setIsReload }) => {

    return (
        <div>

            <div className='grid grid-cols-2 border p-5 shadow rounded-lg m-2'>
                <div className='flex w-full'>
                    <div className='mr-3'>
                        <input type="radio" name="radio-1" className="radio" />
                    </div>
                    <div className=' flex'>
                        <p className='mr-2 font-bold'>{task?.title}-</p>
                        <p>{task?.textData}</p>
                    </div>

                </div>
                <div className='text-end'>
                    <div className='flex justify-end'>
                        <button onClick={() => handleDelete(task._id)}><FontAwesomeIcon className='text-right mr-3 text-xl' icon={faTrash}></FontAwesomeIcon></button>
                        <UpdateTask setIsReload={setIsReload} isReload={isReload} id={task?._id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskList;