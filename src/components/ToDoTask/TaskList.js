import React from 'react';
import UpdateTask from './UpdateTask';


const customStyles = {
    position: "absolute",
    top: "-40px",
    left: "43%",
    height: "80px",
    width: "80px",
};

const TaskList = ({ note, handleDelete, isReload, setIsReload }) => {


    // return (
    //     <div className="col mt-5" style={{ position: "relative" }}>
    //         <div className="rounded h-100 color-060930 note-card">
    //             <div
    //                 className=" bg-warning  rounded-circle mx-auto mt-2"
    //                 style={customStyles}
    //             >
    //                 <p className="text-center p-2  fs-2 fw-bold text-dark">
    //                     {" "}
    //                     {note.title.substring(0, 1)}
    //                 </p>
    //             </div>
    //             <div className="card-body mt-5">
    //                 <h5 className="card-title">Author : {note.userName}</h5>
    //                 <p className="card-text">{note.textData}</p>
    //             </div>
    //             <div className="card-footer d-flex justify-content-center">
    //                 <div>
    //                     <button
    //                         className="color-801336 btn btn-sm mx-2 "
    //                         onClick={() => handleDelete(note._id)}
    //                     >
    //                         delete
    //                     </button>
    //                 </div>
    //                 {/* <button>update</button> */}
    //                 <UpdateTask setIsReload={setIsReload} isReload={isReload} id={note._id} />
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default TaskList;